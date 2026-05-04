#!/usr/bin/env python3
"""
Fix navigation in NodeJS book/prime lesson pages.

Issues:
1. No lesson-nav (prev/next/up) at all - need to add it
2. back-link points to ../../../../../../ru/nodejs/index.html (NodeJS main page)
   instead of ../../index.html (book index)
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BOOK_DIR = os.path.join(BASE_DIR, 'ru', 'nodejs', 'book', 'prime')
BOOK_INDEX = os.path.join(BOOK_DIR, 'index.html')

def get_lessons():
    """Get all lesson files in order from the book index."""
    lessons = []
    
    with open(BOOK_INDEX, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all <a data-m-less="..." href="...">...</a>
    pattern = r'<a\s+data-m-less="([^"]*)"\s+href="([^"]*)"[^>]*>\s*(.*?)\s*</a>'
    matches = re.findall(pattern, content, re.DOTALL)
    
    for m_less, href, title in matches:
        title_clean = re.sub(r'<[^>]+>', '', title).strip()
        
        # The href in index.html is like ../../../javascript/nodejs/book/prime/basis/intro/index.html
        # This is a broken cross-reference. The actual files are at ru/nodejs/book/prime/...
        # We need to extract the relative path from the href and resolve it correctly.
        # The href goes up 3 levels from book dir, then into javascript/nodejs/book/prime/...
        # But the actual files are directly in the book dir.
        # Let's extract the path after 'book/prime/' from the href.
        
        # Pattern: ../../../javascript/nodejs/book/prime/basis/intro/index.html
        # We want: basis/intro/index.html
        parts = href.split('book/prime/')
        if len(parts) > 1:
            rel_path = parts[1]
        else:
            # Fallback: just use the href as-is relative to book dir
            rel_path = href
        
        abs_path = os.path.normpath(os.path.join(BOOK_DIR, rel_path))
        if os.path.exists(abs_path):
            lessons.append((title_clean, abs_path))
        else:
            print(f"  [WARN] Lesson file not found: {abs_path} (from href: {href})")
    
    return lessons


def add_nav_to_lesson(filepath, prev_path, next_path, prev_title, next_title, up_href, is_first, is_last):
    """Add lesson-nav block to a lesson file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has navigation
    if 'lesson-nav' in content:
        return False
    
    # Build nav block
    nav_parts = []
    nav_parts.append('    <div class="lesson-nav">')
    
    if is_first or prev_path is None:
        nav_parts.append('      <span class="lesson-nav-btn lesson-nav-prev disabled">← Начало</span>')
    else:
        lesson_dir = os.path.dirname(filepath)
        prev_href = os.path.relpath(prev_path, lesson_dir)
        nav_parts.append(f'      <a href="{prev_href}" class="lesson-nav-btn lesson-nav-prev" title="{prev_title}">← {prev_title}</a>')
    
    nav_parts.append(f'      <a href="{up_href}" class="lesson-nav-up" title="К списку уроков">☰</a>')
    
    if is_last or next_path is None:
        nav_parts.append('      <span class="lesson-nav-btn lesson-nav-next disabled">Конец →</span>')
    else:
        lesson_dir = os.path.dirname(filepath)
        next_href = os.path.relpath(next_path, lesson_dir)
        nav_parts.append(f'      <a href="{next_href}" class="lesson-nav-btn lesson-nav-next" title="{next_title}">{next_title} →</a>')
    
    nav_parts.append('    </div>')
    
    nav_block = '\n'.join(nav_parts)
    
    # Insert before </section>
    pattern = r'(\s*</section>\s*\n\s*<footer)'
    replacement = f'\n{nav_block}\n  </section>\n\n  <footer'
    
    if re.search(pattern, content):
        content = re.sub(pattern, replacement, content, count=1)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    else:
        print(f"  [ERROR] Cannot find </section> before <footer in {filepath}")
        return False


def fix_back_link(filepath):
    """Fix back-link to point to book index instead of NodeJS main page."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lesson_dir = os.path.dirname(filepath)
    correct_back = os.path.relpath(BOOK_INDEX, lesson_dir)
    
    # Find back-link href (href can be before or after class)
    pattern = r'(href=")([^"]*)("[^>]*class="back-link")'
    pattern2 = r'(class="back-link"[^>]*href=")([^"]*)(")'
    
    def replace_back(match):
        old_href = match.group(2)
        if old_href != correct_back:
            print(f"  [FIX back-link] {os.path.relpath(filepath, BASE_DIR)}: {old_href} → {correct_back}")
            return f'{match.group(1)}{correct_back}{match.group(3)}'
        return match.group(0)
    
    new_content = re.sub(pattern, replace_back, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False


def main():
    print("=" * 60)
    print("Исправление навигации в учебнике NodeJS (book/prime)")
    print("=" * 60)
    
    lessons = get_lessons()
    print(f"\nНайдено уроков: {len(lessons)}")
    
    if not lessons:
        print("Нет уроков для обработки!")
        return
    
    nav_added = 0
    back_fixed = 0
    
    for i, (title, filepath) in enumerate(lessons):
        is_first = (i == 0)
        is_last = (i == len(lessons) - 1)
        
        prev_path = lessons[i-1][1] if not is_first else None
        next_path = lessons[i+1][1] if not is_last else None
        prev_title = lessons[i-1][0] if not is_first else None
        next_title = lessons[i+1][0] if not is_last else None
        
        # Calculate up_href (relative path to book index)
        lesson_dir = os.path.dirname(filepath)
        up_href = os.path.relpath(BOOK_INDEX, lesson_dir)
        
        # Add lesson-nav
        if add_nav_to_lesson(filepath, prev_path, next_path, prev_title, next_title, up_href, is_first, is_last):
            nav_added += 1
            print(f"  [ADD nav] {title}")
        
        # Fix back-link
        if fix_back_link(filepath):
            back_fixed += 1
    
    print(f"\n{'=' * 60}")
    print(f"Добавлено lesson-nav: {nav_added}")
    print(f"Исправлено back-link: {back_fixed}")
    print(f"Всего обработано файлов: {len(lessons)}")
    print("=" * 60)


if __name__ == "__main__":
    main()
