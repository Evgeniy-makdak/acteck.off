#!/usr/bin/env python3
"""
Исправляет навигационные ссылки (lesson-nav) в уроках HTTP.
Проблема: скрипт add_http_nav.py использовал href из index.html как есть,
но эти href относительны от BASE_DIR, а не от расположения каждого урока.
"""

import os
import re

BASE_DIR = "/Users/admin/Desktop/homework/acteck.off/ru/internet/protocol/http"


def get_lessons_from_index():
    """Парсит уроки из index.html в порядке их следования."""
    index_path = os.path.join(BASE_DIR, "index.html")
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r'<a\s+data-m-less="([^"]*)"\s+href="([^"]*)"[^>]*>\s*(.*?)\s*</a>'
    matches = re.findall(pattern, content, re.DOTALL)
    
    lessons = []
    for m_less, href, title in matches:
        title_clean = re.sub(r'<[^>]+>', '', title).strip()
        lessons.append((href, title_clean, m_less))
    
    return lessons


def compute_relative_path(from_lesson_href, to_lesson_href):
    """
    Вычисляет относительный путь от одного урока к другому.
    Оба href относительны от BASE_DIR.
    Например:
      from: "headers-groups/index.html"
      to:   "headers/index.html"
      result: "../headers/index.html"
    
      from: "headers/index.html"
      to:   "headers-groups/index.html"
      result: "../headers-groups/index.html"
    """
    # Получаем директорию исходного урока
    from_dir = os.path.dirname(from_lesson_href)  # например "headers-groups"
    
    # Если from_dir пустой (урок в корне), то просто возвращаем to
    if not from_dir:
        return to_lesson_href
    
    # Вычисляем относительный путь
    rel = os.path.relpath(
        os.path.join(BASE_DIR, to_lesson_href),
        os.path.join(BASE_DIR, from_dir)
    )
    return rel


def fix_nav_in_file(filepath, prev_href, next_href, up_href, is_first, is_last, prev_title="", next_title=""):
    """Исправляет навигационный блок в файле урока."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'lesson-nav' not in content:
        print(f"  SKIP (no nav): {filepath}")
        return False
    
    # Находим блок lesson-nav
    nav_pattern = r'<div class="lesson-nav">\s*.*?\s*</div>'
    nav_match = re.search(nav_pattern, content, re.DOTALL)
    
    if not nav_match:
        print(f"  ERROR: cannot find nav block in {filepath}")
        return False
    
    old_nav = nav_match.group(0)
    
    # Строим новый навигационный блок
    nav_parts = []
    nav_parts.append('    <div class="lesson-nav">')
    
    if is_first:
        nav_parts.append('      <span class="lesson-nav-btn lesson-nav-prev disabled">← Начало</span>')
    else:
        nav_parts.append(f'      <a href="{prev_href}" class="lesson-nav-btn lesson-nav-prev" title="{prev_title}">← {prev_title}</a>')
    
    nav_parts.append(f'      <a href="{up_href}" class="lesson-nav-up" title="К списку уроков">☰</a>')
    
    if is_last:
        nav_parts.append('      <span class="lesson-nav-btn lesson-nav-next disabled">Конец →</span>')
    else:
        nav_parts.append(f'      <a href="{next_href}" class="lesson-nav-btn lesson-nav-next" title="{next_title}">{next_title} →</a>')
    
    nav_parts.append('    </div>')
    
    new_nav = '\n'.join(nav_parts)
    
    content = content.replace(old_nav, new_nav)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  FIXED: {os.path.basename(os.path.dirname(filepath))}")
    return True


def main():
    lessons = get_lessons_from_index()
    print(f"Found {len(lessons)} lessons in index.html")
    
    for i, (href, title, m_less) in enumerate(lessons):
        filepath = os.path.join(BASE_DIR, href)
        
        if not os.path.exists(filepath):
            print(f"  MISSING: {filepath}")
            continue
        
        is_first = (i == 0)
        is_last = (i == len(lessons) - 1)
        
        # Вычисляем правильные относительные пути
        if is_first:
            prev_href = ""
            prev_title = ""
        else:
            prev_href = compute_relative_path(href, lessons[i-1][0])
            prev_title = lessons[i-1][1]
        
        if is_last:
            next_href = ""
            next_title = ""
        else:
            next_href = compute_relative_path(href, lessons[i+1][0])
            next_title = lessons[i+1][1]
        
        # Путь к списку уроков (index.html учебника)
        # От урока вида "section/index.html" нужно подняться на уровень выше
        lesson_dir = os.path.dirname(href)
        if lesson_dir:
            up_href = "../index.html"
        else:
            up_href = "index.html"
        
        fix_nav_in_file(filepath, prev_href, next_href, up_href, is_first, is_last, prev_title, next_title)


if __name__ == "__main__":
    main()
