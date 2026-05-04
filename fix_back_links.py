#!/usr/bin/env python3
"""
Fix back-link hrefs in Next.js book/prime and Node.js manual files.

Issues:
1. Next.js book/prime (ru/next/book/prime/): back-link points to ru/next/index.html
   instead of book/prime/index.html
2. Next.js book/prime (ru/javascript/framework/next/book/prime/): same issue
3. Node.js manual (ru/nodejs/manual/): back-link points to ru/nodejs/index.html
   instead of manual/index.html
4. Node.js manual (ru/javascript/nodejs/manual/): same issue
"""

import os
import re

BASE_DIR = "/Users/admin/Desktop/homework/acteck.off"

# Directories to fix with their correct back-link targets
DIRS = [
    {
        'path': os.path.join(BASE_DIR, 'ru', 'next', 'book', 'prime'),
        'target': os.path.join(BASE_DIR, 'ru', 'next', 'book', 'prime', 'index.html'),
        'name': 'Next.js book/prime (ru/next/book/prime/)',
    },
    {
        'path': os.path.join(BASE_DIR, 'ru', 'javascript', 'framework', 'next', 'book', 'prime'),
        'target': os.path.join(BASE_DIR, 'ru', 'javascript', 'framework', 'next', 'book', 'prime', 'index.html'),
        'name': 'Next.js book/prime (ru/javascript/framework/next/book/prime/)',
    },
    {
        'path': os.path.join(BASE_DIR, 'ru', 'nodejs', 'manual'),
        'target': os.path.join(BASE_DIR, 'ru', 'nodejs', 'manual', 'index.html'),
        'name': 'Node.js manual (ru/nodejs/manual/)',
    },
    {
        'path': os.path.join(BASE_DIR, 'ru', 'javascript', 'nodejs', 'manual'),
        'target': os.path.join(BASE_DIR, 'ru', 'javascript', 'nodejs', 'manual', 'index.html'),
        'name': 'Node.js manual (ru/javascript/nodejs/manual/)',
    },
]


def fix_back_link_in_file(filepath, correct_back_href):
    """Fix back-link href in a single file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern 1: href="..." class="back-link"
    pattern1 = r'(href=")([^"]*)("[^>]*class="back-link")'
    # Pattern 2: class="back-link" href="..."
    pattern2 = r'(class="back-link"[^>]*href=")([^"]*)(")'
    
    def replace_back(match):
        old_href = match.group(2)
        if old_href != correct_back_href:
            return f'{match.group(1)}{correct_back_href}{match.group(3)}'
        return match.group(0)
    
    new_content = re.sub(pattern1, replace_back, content)
    new_content = re.sub(pattern2, replace_back, new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False


def main():
    total_fixed = 0
    total_checked = 0
    
    for dir_config in DIRS:
        dir_path = dir_config['path']
        target = dir_config['target']
        name = dir_config['name']
        
        if not os.path.exists(dir_path):
            print(f"[SKIP] Directory not found: {dir_path}")
            continue
        
        print(f"\n{'=' * 60}")
        print(f"Обработка: {name}")
        print(f"{'=' * 60}")
        
        # Collect all index.html files (except the target itself)
        files_to_fix = []
        for root, dirs, files in os.walk(dir_path):
            if 'index.html' in files:
                filepath = os.path.join(root, 'index.html')
                if filepath != target:  # Skip the target index itself
                    files_to_fix.append(filepath)
        
        files_to_fix.sort()
        fixed = 0
        skipped = 0
        
        for filepath in files_to_fix:
            total_checked += 1
            lesson_dir = os.path.dirname(filepath)
            correct_href = os.path.relpath(target, lesson_dir)
            
            if fix_back_link_in_file(filepath, correct_href):
                rel_path = os.path.relpath(filepath, BASE_DIR)
                print(f"  [FIX] {rel_path}: → {correct_href}")
                fixed += 1
                total_fixed += 1
            else:
                skipped += 1
        
        print(f"  Исправлено: {fixed}, Пропущено: {skipped}")
    
    print(f"\n{'=' * 60}")
    print(f"ИТОГО: Исправлено {total_fixed} файлов из {total_checked} проверенных")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
