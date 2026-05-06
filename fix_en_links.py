#!/usr/bin/env python3
"""
Fix English HTML files in en/ directory:
1. Change lang="ru" to lang="en" in <html> tag
2. Change relative href paths from /ru/ to /en/ (e.g., ../../ru/index.html -> ../../en/index.html)
3. Preserve RU language switcher buttons (they should still point to ru/)
4. Preserve external URLs (like https://www.reg.ru/)
"""

import os
import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1. Fix lang="ru" to lang="en"
    content = content.replace('lang="ru"', 'lang="en"')
    
    # 2. Fix relative href paths: /ru/ -> /en/
    # Only match href=".../ru/..." where the path starts with ../ (relative path)
    # This avoids breaking external URLs like https://www.reg.ru/
    content = re.sub(
        r'(href="(?:\.\./)+)ru/',
        r'\1en/',
        content
    )
    
    # 3. Fix back the RU language switcher buttons
    # The RU button in the language switcher should still point to ru/
    content = re.sub(
        r'(<a href="(?:\.\./)+)en/(index\.html" class="lang-btn[^"]*">RU</a>)',
        r'\1ru/\2',
        content
    )

    # 4. Fix breadcrumbs and logo links that might be missing the ../ prefix logic
    # Sometimes they are just /ru/ or ru/
    # But in this project they seem to be mostly relative with ../
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    en_dir = os.path.join(script_dir, 'en')
    
    html_files = []
    for root, dirs, files in os.walk(en_dir):
        for f in files:
            if f.endswith('.html'):
                html_files.append(os.path.join(root, f))
    
    print(f"Found {len(html_files)} HTML files in en/ directory")
    
    fixed_count = 0
    for filepath in html_files:
        if fix_file(filepath):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
