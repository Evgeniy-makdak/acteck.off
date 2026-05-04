#!/usr/bin/env python3
"""
Convert stager pages from code.mu.off to acteck.off format.
Creates stager index pages and individual lesson pages for JavaScript.
"""

import os
import re
from pathlib import Path

# Paths
CODE_MU = Path("/Users/admin/Desktop/homework/code.mu.off")
ACTECK = Path("/Users/admin/Desktop/homework/acteck.off")

# Languages config: (lang_dir, title_name, description)
LANGUAGES = [
    ("javascript", "JavaScript", "Задачник JavaScript для тренировки с возрастающим уровнем сложности."),
]

# Template for stager index page
STAGER_TEMPLATE = """<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Задачник {title} по уровням — acteck.off</title>
  <meta name="description" content="{description}">
  <link rel="stylesheet" href="../../../../assets/css/style.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>">
</head>
<body>
  <header class="header">
    <div class="header-inner">
      <a href="../../../../ru/index.html" class="logo">
        <div class="logo-icon">A</div>
        <div>
          <div class="logo-text"><span>acteck</span>.off</div>
          <div class="logo-slogan">обучение программированию</div>
        </div>
      </a>
      <div class="header-actions">
        <div class="lang-switch">
          <a href="../../../../ru/index.html" class="lang-btn active">RU</a>
          <a href="../../../../../en/index.html" class="lang-btn">EN</a>
        </div>
      </div>
    </div>
  </header>

  <section class="page-content">
    <a href="../../../../ru/{lang_dir}/index.html" class="back-link">← Назад</a>
    
    <div class="breadcrumbs">
      <a href="../../../../ru/index.html">Главная</a>
      <span class="separator">/</span>
      <a href="../../../../ru/{lang_dir}/index.html">{title}</a>
    </div>

    <h1>Задачник {title} по уровням</h1>
    {levels_html}
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <p>© <span class="copyright-year">2025</span> — <span class="copyright-year">2026</span> acteck.off</p>
      <p>Автор: <a href="https://t.me/Acteck37" target="_blank">Евгений Ацтек</a></p>
    </div>
  </footer>

  <script src="../../../../assets/js/main.js"></script>
</body>
</html>"""

# Template for individual lesson page
LESSON_TEMPLATE = """<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Уровень {level}.{lesson} задачника {title} — acteck.off</title>
  <meta name="description" content="Уровень {level}.{lesson} задачника {title} — учебные материалы по программированию.">
  <link rel="stylesheet" href="../../../../../../assets/css/style.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>">
</head>
<body>
  <header class="header">
    <div class="header-inner">
      <a href="../../../../../../ru/index.html" class="logo">
        <div class="logo-icon">A</div>
        <div>
          <div class="logo-text"><span>acteck</span>.off</div>
          <div class="logo-slogan">обучение программированию</div>
        </div>
      </a>
      <div class="header-actions">
        <div class="lang-switch">
          <a href="../../../../../../ru/index.html" class="lang-btn active">RU</a>
          <a href="../../../../../../../en/index.html" class="lang-btn">EN</a>
        </div>
      </div>
    </div>
  </header>

  <section class="page-content">
    <a href="../../../../../../ru/{lang_dir}/index.html" class="back-link">← Назад</a>
    
    <div class="breadcrumbs">
      <a href="../../../../../../ru/index.html">Главная</a>
      <span class="separator">/</span>
      <a href="../../../../../../ru/{lang_dir}/index.html">{title}</a>
      <span class="separator">/</span>
      <a href="../../../../../../ru/{lang_dir}/tasker/stager/index.html">Задачник по уровням</a>
    </div>

    <h1>Уровень {level}.{lesson} задачника {title}</h1>
    {tasks_html}
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <p>© <span class="copyright-year">2025</span> — <span class="copyright-year">2026</span> acteck.off</p>
      <p>Автор: <a href="https://t.me/Acteck37" target="_blank">Евгений Ацтек</a></p>
    </div>
  </footer>

  <script src="../../../../../../assets/js/main.js"></script>
</body>
</html>"""


def extract_tasks_from_source(source_path):
    """Extract task divs from a code.mu.off lesson page."""
    if not source_path.exists():
        return None
    
    content = source_path.read_text(encoding='utf-8')
    
    # Find all task divs
    tasks = re.findall(
        r'<div data-w="cont/task">\s*<p>\s*(.*?)\s*</p>\s*</div>',
        content,
        re.DOTALL
    )
    
    if not tasks:
        return None
    
    # Build tasks HTML
    tasks_html = ""
    for task_text in tasks:
        # Clean up the text
        task_text = task_text.strip()
        tasks_html += f'<div data-w="cont/task">\n\t<p>\n\t\t{task_text}\n\t</p>\n</div>\n'
    
    return tasks_html


def generate_levels_html(lang_dir):
    """Generate the HTML for all 10 levels with links."""
    levels_html = ""
    for level in range(1, 11):
        level_links = ""
        for lesson in range(1, 11):
            level_links += f'<a data-m-less="{lesson}" href="{level}/{lesson}/index.html">\n\t\tУровень {level}.{lesson}\n\t</a>\n'
        
        levels_html += f'<h2>Уровень {level}</h2>\n<div data-m-sect="{level}.">\n{level_links}</div>\n'
    
    return levels_html


def create_stager_page(lang_dir, title, description):
    """Create the main stager index page."""
    levels_html = generate_levels_html(lang_dir)
    
    content = STAGER_TEMPLATE.format(
        title=title,
        description=description,
        lang_dir=lang_dir,
        levels_html=levels_html
    )
    
    output_dir = ACTECK / "ru" / lang_dir / "tasker" / "stager"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    output_path = output_dir / "index.html"
    output_path.write_text(content, encoding='utf-8')
    print(f"Created stager: {output_path}")


def create_lesson_pages(lang_dir, title):
    """Create individual lesson pages by copying content from code.mu.off."""
    for level in range(1, 11):
        for lesson in range(1, 11):
            # Source path in code.mu.off
            source_path = CODE_MU / "ru" / lang_dir / "tasker" / "stager" / str(level) / f"{lesson}.html"
            
            # Extract tasks
            tasks_html = extract_tasks_from_source(source_path)
            
            if tasks_html is None:
                print(f"  WARNING: No source found for {lang_dir} {level}.{lesson} at {source_path}")
                continue
            
            # Create output
            content = LESSON_TEMPLATE.format(
                level=level,
                lesson=lesson,
                title=title,
                lang_dir=lang_dir,
                tasks_html=tasks_html
            )
            
            output_dir = ACTECK / "ru" / lang_dir / "tasker" / "stager" / str(level) / str(lesson)
            output_dir.mkdir(parents=True, exist_ok=True)
            
            output_path = output_dir / "index.html"
            output_path.write_text(content, encoding='utf-8')
            print(f"  Created: {lang_dir} {level}.{lesson}")


def main():
    for lang_dir, title, description in LANGUAGES:
        print(f"\n=== Processing {title} ({lang_dir}) ===")
        
        # Create stager page
        create_stager_page(lang_dir, title, description)
        
        # Create lesson pages
        create_lesson_pages(lang_dir, title)
    
    print("\nDone!")


if __name__ == "__main__":
    main()
