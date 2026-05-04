#!/usr/bin/env python3
"""
Скрипт для добавления навигации (lesson-nav) в справочник NodeJS.
Добавляет навигацию между страницами внутри каждого модуля (fs, path, os, etc.)
"""

import os
import re

ROOT = "/Users/admin/Desktop/homework/acteck.off"
MANUAL_DIR = os.path.join(ROOT, "ru", "nodejs", "manual")

def get_modules():
    """Получает список модулей справочника (поддиректории)."""
    modules = []
    for item in sorted(os.listdir(MANUAL_DIR)):
        item_path = os.path.join(MANUAL_DIR, item)
        if os.path.isdir(item_path):
            modules.append(item)
    return modules

def get_lessons_in_module(module_name):
    """Получает список уроков в модуле (включая вложенные поддиректории)."""
    module_path = os.path.join(MANUAL_DIR, module_name)
    lessons = []
    
    for root, dirs, files in os.walk(module_path):
        for f in files:
            if f == "index.html":
                filepath = os.path.join(root, f)
                # Пропускаем сам index.html модуля
                if filepath == os.path.join(module_path, "index.html"):
                    continue
                # Получаем относительный путь от модуля
                rel_path = os.path.relpath(filepath, module_path)
                # Извлекаем название (последняя директория)
                title = os.path.basename(os.path.dirname(filepath))
                lessons.append((title, rel_path, filepath))
    
    # Сортируем по пути
    lessons.sort(key=lambda x: x[1])
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
    
    nav_parts.append(f'      <a href="{up_href}" class="lesson-nav-up" title="К списку уроков">☰</a>')
    
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

def process_module(module_name):
    """Обрабатывает один модуль справочника."""
    print(f"\n  Модуль: {module_name}")
    
    lessons = get_lessons_in_module(module_name)
    if not lessons:
        print(f"  [SKIP] Нет уроков для обработки")
        return 0
    
    print(f"  Найдено уроков: {len(lessons)}")
    
    module_path = os.path.join(MANUAL_DIR, module_name)
    # Используем общий index.html справочника, так как в модулях нет своего index.html
    manual_index = os.path.join(MANUAL_DIR, "index.html")
    
    modified_count = 0
    skipped_count = 0
    error_count = 0
    
    for i, (title, rel_path, filepath) in enumerate(lessons):
        # Проверяем, есть ли уже навигация
        with open(filepath, "r", encoding="utf-8") as f:
            file_content = f.read()
        if 'lesson-nav' in file_content:
            print(f"  [SKIP] Уже есть навигация: {rel_path}")
            skipped_count += 1
            continue
        
        # Вычисляем относительный путь от файла урока к index.html справочника
        lesson_dir = os.path.dirname(filepath)
        up_href = os.path.relpath(manual_index, lesson_dir)
        
        # Предыдущий и следующий урок
        is_first = (i == 0)
        is_last = (i == len(lessons) - 1)
        
        prev_href = None
        prev_title = None
        next_href = None
        next_title = None
        
        if not is_first:
            prev_title, prev_rel_path, _ = lessons[i - 1]
            # Вычисляем относительный путь от текущего урока к предыдущему
            current_dir = os.path.dirname(filepath)
            prev_filepath = os.path.join(module_path, prev_rel_path)
            prev_href = os.path.relpath(prev_filepath, current_dir)
        
        if not is_last:
            next_title, next_rel_path, _ = lessons[i + 1]
            current_dir = os.path.dirname(filepath)
            next_filepath = os.path.join(module_path, next_rel_path)
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
            print(f"  [OK] {rel_path}")
        else:
            error_count += 1
    
    print(f"  Итого: {modified_count} изменено, {skipped_count} пропущено, {error_count} ошибок")
    return modified_count

def main():
    print("=" * 60)
    print("Добавление навигации в справочник NodeJS")
    print("=" * 60)
    
    modules = get_modules()
    print(f"\nНайдено модулей: {len(modules)}")
    print(f"Модули: {', '.join(modules)}")
    
    total = 0
    for module_name in modules:
        count = process_module(module_name)
        total += count
    
    print(f"\n{'=' * 60}")
    print(f"Всего изменено файлов: {total}")
    print("=" * 60)

if __name__ == "__main__":
    main()
