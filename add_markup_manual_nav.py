#!/usr/bin/env python3
"""
Скрипт для добавления навигации (lesson-nav) в справочники HTML и CSS.
Добавляет навигацию между страницами внутри каждой категории (теги, атрибуты, свойства, селекторы и т.д.)
"""

import os
import re

ROOT = "/Users/admin/Desktop/homework/acteck.off"
MANUAL_HTML_DIR = os.path.join(ROOT, "ru", "markup", "manual", "html")
MANUAL_CSS_DIR = os.path.join(ROOT, "ru", "markup", "manual", "css")

def get_lessons_in_category(category_path):
    """Получает список уроков в категории (поддиректории с index.html)."""
    lessons = []
    
    if not os.path.exists(category_path):
        return lessons
    
    for item in sorted(os.listdir(category_path)):
        item_path = os.path.join(category_path, item)
        index_path = os.path.join(item_path, "index.html")
        if os.path.isdir(item_path) and os.path.exists(index_path):
            # Название — имя директории
            title = item
            lessons.append((title, item, index_path))
    
    return lessons

def add_nav_to_lesson(file_path, prev_href, next_href, prev_title, next_title, up_href, is_first, is_last):
    """Добавляет lesson-nav блок в файл урока."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Проверяем, есть ли уже навигация
    if 'lesson-nav' in content:
        return False
    
    # Формируем lesson-nav блок
    nav_parts = []
    nav_parts.append('    <div class="lesson-nav">')
    
    if is_first or prev_href is None:
        nav_parts.append(f'      <span class="lesson-nav-btn lesson-nav-prev disabled">← Начало</span>')
    else:
        nav_parts.append(f'      <a href="{prev_href}" class="lesson-nav-btn lesson-nav-prev" title="{prev_title}">← {prev_title}</a>')
    
    nav_parts.append(f'      <a href="{up_href}" class="lesson-nav-up" title="К списку">☰</a>')
    
    if is_last or next_href is None:
        nav_parts.append(f'      <span class="lesson-nav-btn lesson-nav-next disabled">Конец →</span>')
    else:
        nav_parts.append(f'      <a href="{next_href}" class="lesson-nav-btn lesson-nav-next" title="{next_title}">{next_title} →</a>')
    
    nav_parts.append('    </div>')
    
    nav_block = '\n'.join(nav_parts)
    
    # Вставляем перед </section>
    pattern = r'(\s*</section>\s*\n\s*<footer)'
    replacement = f'\n{nav_block}\n  </section>\n\n  <footer'
    
    if re.search(pattern, content):
        content = re.sub(pattern, replacement, content, count=1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    else:
        print(f"  [ERROR] Не найден </section> перед <footer в {file_path}")
        return False

def process_category(category_path, category_name, up_href_base):
    """Обрабатывает одну категорию справочника."""
    print(f"\n  Категория: {category_name}")
    
    lessons = get_lessons_in_category(category_path)
    if not lessons:
        print(f"  [SKIP] Нет уроков для обработки")
        return 0
    
    print(f"  Найдено страниц: {len(lessons)}")
    
    modified_count = 0
    skipped_count = 0
    error_count = 0
    
    for i, (title, item_name, filepath) in enumerate(lessons):
        # Проверяем, есть ли уже навигация
        with open(filepath, "r", encoding="utf-8") as f:
            file_content = f.read()
        if 'lesson-nav' in file_content:
            print(f"  [SKIP] Уже есть навигация: {item_name}")
            skipped_count += 1
            continue
        
        # Вычисляем относительный путь от файла урока к index.html категории
        lesson_dir = os.path.dirname(filepath)
        up_href = os.path.relpath(up_href_base, lesson_dir)
        
        # Предыдущий и следующий урок
        is_first = (i == 0)
        is_last = (i == len(lessons) - 1)
        
        prev_href = None
        prev_title = None
        next_href = None
        next_title = None
        
        if not is_first:
            prev_title, prev_item_name, prev_filepath = lessons[i - 1]
            current_dir = os.path.dirname(filepath)
            prev_href = os.path.relpath(prev_filepath, current_dir)
        
        if not is_last:
            next_title, next_item_name, next_filepath = lessons[i + 1]
            current_dir = os.path.dirname(filepath)
            next_href = os.path.relpath(next_filepath, current_dir)
        
        # Добавляем навигацию
        success = add_nav_to_lesson(
            filepath,
            prev_href, next_href,
            prev_title, next_title,
            up_href,
            is_first, is_last
        )
        
        if success:
            modified_count += 1
            print(f"  [OK] {item_name}")
        else:
            error_count += 1
    
    print(f"  Итого: {modified_count} изменено, {skipped_count} пропущено, {error_count} ошибок")
    return modified_count

def process_html_manual():
    """Обрабатывает справочник HTML."""
    print("\n" + "=" * 60)
    print("СПРАВОЧНИК HTML")
    print("=" * 60)
    
    total = 0
    
    # Теги
    tag_dir = os.path.join(MANUAL_HTML_DIR, "tag")
    tag_index = os.path.join(MANUAL_HTML_DIR, "tag", "index.html")
    if os.path.exists(tag_dir):
        total += process_category(tag_dir, "Теги", tag_index)
    
    # Атрибуты
    attr_dir = os.path.join(MANUAL_HTML_DIR, "attr")
    attr_index = os.path.join(MANUAL_HTML_DIR, "attr", "index.html")
    if os.path.exists(attr_dir):
        total += process_category(attr_dir, "Атрибуты", attr_index)
    
    return total

def process_css_manual():
    """Обрабатывает справочник CSS."""
    print("\n" + "=" * 60)
    print("СПРАВОЧНИК CSS")
    print("=" * 60)
    
    total = 0
    
    categories = [
        ("Свойства", "property"),
        ("Селекторы", "selector"),
        ("Псевдоклассы", "pseudoclass"),
        ("Псевдоэлементы", "pseudoelement"),
        ("Функции", "function"),
        ("Команды", "command"),
        ("Единицы измерения", "unit"),
        ("Справочные значения", "reference"),
    ]
    
    for cat_name, cat_dir_name in categories:
        cat_dir = os.path.join(MANUAL_CSS_DIR, cat_dir_name)
        cat_index = os.path.join(MANUAL_CSS_DIR, cat_dir_name, "index.html")
        if os.path.exists(cat_dir):
            total += process_category(cat_dir, cat_name, cat_index)
    
    return total

def main():
    print("=" * 60)
    print("Добавление навигации в справочники HTML и CSS")
    print("=" * 60)
    
    total = 0
    
    # HTML справочник
    total += process_html_manual()
    
    # CSS справочник
    total += process_css_manual()
    
    print(f"\n{'=' * 60}")
    print(f"Всего изменено файлов: {total}")
    print("=" * 60)

if __name__ == "__main__":
    main()
