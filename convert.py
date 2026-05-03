#!/usr/bin/env python3
"""
Convert code.mu.off content to acteck.off format.
Extracts lesson content from code.mu.off pages and wraps it in acteck.off's template.
Properly fixes all internal links.
"""

import os
import re
import shutil
from pathlib import Path

# Paths
CODE_MU = Path("/Users/admin/Desktop/homework/code.mu.off")
ACTECK = Path("/Users/admin/Desktop/homework/acteck.off")

# Sections to process (acteck.off sections -> code.mu.off sections)
SECTIONS = {
    "ru/markup": "ru/markup",
    "ru/javascript": "ru/javascript",
    "ru/typescript": "ru/javascript/typescript",
    "ru/vue": "ru/javascript/framework/vue",
    "ru/react": "ru/javascript/framework/react",
    "ru/next": "ru/javascript/framework/next",
    "ru/nodejs": "ru/javascript/nodejs",
    "ru/git": "ru/git",
    "ru/webpack": "ru/tool/webpack",
    "ru/terminal": "ru/tool/terminal",
    "ru/internet": "ru/internet",
    "ru/deploy": "ru/deploy",
    "ru/theory": "ru/theory",
}

def get_up_links(depth):
    """Generate '../' * depth for relative paths."""
    return '../' * depth

def fix_links_in_content(content, target_path):
    """
    Fix internal links in content.
    In code.mu.off, links look like: href="../../../ru/section/path/file.html"
    In acteck.off, they should be: href="section/path/file/index.html" (relative)
    """
    def fix_href(match):
        href = match.group(1)
        
        # Skip external links and anchors
        if href.startswith('http') or href.startswith('#') or href.startswith('mailto') or href.startswith('javascript'):
            return match.group(0)
        
        # Handle code.mu.off relative links that go up to /ru/...
        # Pattern: ../../../ru/section/path/file.html
        ru_match = re.match(r'^(\.\./)+ru/(.+)$', href)
        if ru_match:
            # Get the path after ru/
            ru_path = ru_match.group(2)
            
            # Convert file.html to file/index.html
            if ru_path.endswith('.html'):
                base = ru_path[:-5]
                new_path = f"{base}/index.html"
            else:
                new_path = ru_path
            
            # Calculate relative path from target file to new path
            target_dir = os.path.dirname(target_path)
            
            # Build absolute paths for relpath calculation
            # target_dir is like "ru/javascript/book/prime"
            # new_path is like "javascript/book/prime/basis/intro/index.html"
            # We need relative path from target_dir to "ru/" + new_path
            
            # Get the absolute path of the target directory
            target_abs = str(ACTECK / target_dir)
            # Get the absolute path of the link target
            link_abs = str(ACTECK / "ru" / new_path)
            
            # Calculate relative path
            try:
                rel = os.path.relpath(link_abs, target_abs)
            except ValueError:
                # Fallback for cross-platform issues
                rel = new_path
            
            return f'href="{rel}"'
        
        # Handle direct relative links (same directory) - keep as-is
        return match.group(0)
    
    content = re.sub(r'href="([^"]+)"', fix_href, content)
    return content

def extract_content_from_code_mu(filepath):
    """Extract h1 and content from a code.mu.off HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract h1 from <div data-w="nict/hett">
    h1_match = re.search(r'<div\s+data-w="nict/hett"[^>]*>\s*<h1>(.*?)</h1>\s*</div>', content, re.DOTALL)
    h1 = h1_match.group(1).strip() if h1_match else ""
    
    # Extract content from <div data-p="cont/pane"> or <div data-w="menu/pane">
    # First try cont/pane (lesson content)
    cont_match = re.search(r'<div\s+data-p="cont/pane"[^>]*>(.*?)</div>\s*</main>', content, re.DOTALL)
    if cont_match:
        body_content = cont_match.group(1).strip()
    else:
        # Try menu/pane (book index with menu)
        menu_match = re.search(r'<div\s+data-w="menu/pane"[^>]*>(.*?)</div>\s*</main>', content, re.DOTALL)
        if menu_match:
            body_content = menu_match.group(1).strip()
        else:
            body_content = ""
    
    return h1, body_content

def get_section_info(rel_path):
    """Determine section name and path from a relative path."""
    parts = Path(rel_path).parts
    
    if 'markup' in parts:
        return "Вёрстка", "markup/index.html"
    elif 'javascript' in parts and 'typescript' not in parts and 'framework' not in parts and 'nodejs' not in parts:
        return "JavaScript", "javascript/index.html"
    elif 'typescript' in parts:
        return "TypeScript", "typescript/index.html"
    elif 'vue' in parts:
        return "Vue", "vue/index.html"
    elif 'react' in parts:
        return "React", "react/index.html"
    elif 'next' in parts:
        return "Next.js", "next/index.html"
    elif 'nodejs' in parts:
        return "Node.js", "nodejs/index.html"
    elif 'git' in parts:
        return "Git", "git/index.html"
    elif 'webpack' in parts:
        return "Webpack", "webpack/index.html"
    elif 'terminal' in parts:
        return "Terminal", "terminal/index.html"
    elif 'internet' in parts:
        return "Интернет", "internet/index.html"
    elif 'deploy' in parts:
        return "Деплой", "deploy/index.html"
    elif 'theory' in parts:
        return "Теория", "theory/glossary/index.html"
    else:
        return parts[1] if len(parts) > 1 else "", f"{parts[1]}/index.html" if len(parts) > 1 else ""

def convert_file(code_mu_path, acteck_target_path, lang_prefix="ru"):
    """Convert a single file from code.mu.off format to acteck.off format."""
    
    # Extract content
    h1, body_content = extract_content_from_code_mu(code_mu_path)
    
    if not body_content:
        print(f"  WARNING: No content found in {code_mu_path}")
        return False
    
    # Get relative paths
    rel_path = os.path.relpath(code_mu_path, str(CODE_MU))
    target_rel = os.path.relpath(acteck_target_path, str(ACTECK))
    
    # Get section info
    section_name, section_path = get_section_info(rel_path)
    
    # Calculate depth for relative paths
    depth = len(Path(target_rel).parts) - 1
    
    # Assets are at project root level, so we need depth to reach root
    up_level = max(0, depth)

    
    # Build relative paths
    assets_path = get_up_links(up_level) + "assets/"
    # home_path should point to the language-specific index.html (e.g., ru/index.html)
    home_path = get_up_links(up_level) + lang_prefix + "/index.html"
    # section_rel should point to the language-specific section (e.g., ru/javascript/index.html)
    section_rel = get_up_links(up_level) + lang_prefix + "/" + section_path
    
    # Fix links in the body content
    body_content = fix_links_in_content(body_content, target_rel)
    
    # Build breadcrumbs HTML
    breadcrumbs_html = f"""
    <div class="breadcrumbs">
      <a href="{home_path}">Главная</a>
      <span class="separator">/</span>
      <a href="{section_rel}">{section_name}</a>
    </div>"""
    
    # Build the complete HTML
    html = f"""<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{h1} — acteck.off</title>
  <meta name="description" content="{h1} — учебные материалы по программированию.">
  <link rel="stylesheet" href="{assets_path}css/style.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>">
</head>
<body>
  <header class="header">
    <div class="header-inner">
      <a href="{home_path}" class="logo">
        <div class="logo-icon">A</div>
        <div>
          <div class="logo-text"><span>acteck</span>.off</div>
          <div class="logo-slogan">обучение программированию</div>
        </div>
      </a>
      <div class="header-actions">
        <div class="lang-switch">
          <a href="{home_path}" class="lang-btn active">RU</a>
          <a href="{get_up_links(up_level + 1)}en/index.html" class="lang-btn">EN</a>
        </div>
      </div>
    </div>
  </header>

  <section class="page-content">
    <a href="{section_rel}" class="back-link">← Назад</a>
    {breadcrumbs_html}

    <h1>{h1}</h1>
    {body_content}
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <p>© <span class="copyright-year">2025</span> — <span class="copyright-year">2026</span> acteck.off</p>
      <p>Автор: <a href="https://t.me/Acteck37" target="_blank">Евгений Ацтек</a></p>
    </div>
  </footer>

  <script src="{assets_path}js/main.js"></script>
</body>
</html>"""
    
    # Write the file
    os.makedirs(os.path.dirname(acteck_target_path), exist_ok=True)
    with open(acteck_target_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"  Converted: {code_mu_path} -> {acteck_target_path}")
    return True

def collect_html_files(base_dir):
    """Collect all HTML files recursively from a directory."""
    html_files = []
    for root, dirs, files in os.walk(base_dir):
        for f in files:
            if f.endswith('.html'):
                html_files.append(os.path.join(root, f))
    return sorted(html_files)

def process_section(code_mu_section, acteck_section):
    """Process all HTML files in a section."""
    code_mu_dir = CODE_MU / code_mu_section
    acteck_dir = ACTECK / acteck_section
    
    if not code_mu_dir.exists():
        print(f"Source directory does not exist: {code_mu_dir}")
        return
    
    print(f"\nProcessing section: {code_mu_section} -> {acteck_section}")
    
    # Extract language prefix from acteck_section (e.g., "ru/javascript" -> "ru")
    lang_prefix = acteck_section.split("/")[0]
    
    html_files = collect_html_files(str(code_mu_dir))
    converted = 0
    skipped = 0
    
    for filepath in html_files:
        # Get relative path from code.mu section
        rel_path = os.path.relpath(filepath, str(code_mu_dir))
        
        # Determine target path in acteck.off
        if rel_path.endswith('.html'):
            # Convert file.html to file/index.html
            base = rel_path[:-5]
            target_rel = f"{base}/index.html"
        else:
            target_rel = rel_path
        
        target_path = acteck_dir / target_rel
        
        try:
            if convert_file(filepath, str(target_path), lang_prefix):
                converted += 1
            else:
                skipped += 1
        except Exception as e:
            print(f"  ERROR converting {filepath}: {e}")
            skipped += 1
    
    print(f"  Section done: {converted} converted, {skipped} skipped")

def main():
    print("=" * 60)
    print("Converting code.mu.off content to acteck.off format")
    print("=" * 60)
    
    # Process each section
    for acteck_section, code_mu_section in SECTIONS.items():
        process_section(code_mu_section, acteck_section)
    
    print("\n" + "=" * 60)
    print("Conversion complete!")
    print("=" * 60)

if __name__ == "__main__":
    main()
