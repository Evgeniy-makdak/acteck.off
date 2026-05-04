#!/usr/bin/env python3
"""
Добавляет lesson-nav (prev/up/next) во все файлы справочника NodeJS
в папке ru/javascript/nodejs/manual/ (183 файла).
Берёт блок lesson-nav из соответствующего файла в ru/nodejs/manual/.
"""

import os
import re

BASE_DIR = "/Users/admin/Desktop/homework/acteck.off"
SOURCE_DIR = os.path.join(BASE_DIR, "ru/nodejs/manual")
TARGET_DIR = os.path.join(BASE_DIR, "ru/javascript/nodejs/manual")

def get_lesson_nav_block(filepath):
    """Извлекает блок lesson-nav из файла (без </section>)."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Ищем блок lesson-nav до </section>
    pattern = r'(    <div class="lesson-nav">.*?</div>\n)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(1)
    return None

def add_lesson_nav_to_file(filepath, nav_block):
    """Добавляет блок lesson-nav в файл перед </section>."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Вставляем nav_block перед </section> которое идёт перед <footer>
    # Паттерн: </div>\n</section>\n\n  <footer
    search_pattern = '</div>\n  </section>\n\n  <footer class="footer">'
    replacement = f'</div>\n    {nav_block}  </section>\n\n  <footer class="footer">'
    
    new_content = content.replace(search_pattern, replacement)
    
    if new_content == content:
        print(f"  [WARN] Не удалось вставить nav в {filepath}")
        return False
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True

def main():
    # Собираем все index.html файлы в target (кроме самого index.html справочника)
    target_files = []
    for root, dirs, files in os.walk(TARGET_DIR):
        if 'index.html' in files:
            rel_path = os.path.relpath(os.path.join(root, 'index.html'), TARGET_DIR)
            if rel_path != 'index.html':  # пропускаем корневой index.html справочника
                target_files.append(os.path.join(root, 'index.html'))
    
    target_files.sort()
    print(f"Найдено {len(target_files)} файлов для обработки")
    
    success = 0
    skipped = 0
    errors = 0
    
    for target_file in target_files:
        # Находим соответствующий source файл
        rel_path = os.path.relpath(target_file, TARGET_DIR)
        source_file = os.path.join(SOURCE_DIR, rel_path)
        
        if not os.path.exists(source_file):
            print(f"  [ERROR] Source не найден: {source_file}")
            errors += 1
            continue
        
        # Проверяем, есть ли уже lesson-nav в target
        with open(target_file, 'r', encoding='utf-8') as f:
            target_content = f.read()
        
        if 'lesson-nav' in target_content:
            print(f"  [SKIP] Уже есть nav: {rel_path}")
            skipped += 1
            continue
        
        # Получаем nav блок из source
        nav_block = get_lesson_nav_block(source_file)
        if not nav_block:
            print(f"  [ERROR] Nav не найден в source: {source_file}")
            errors += 1
            continue
        
        # Добавляем nav в target
        if add_lesson_nav_to_file(target_file, nav_block):
            print(f"  [OK] {rel_path}")
            success += 1
        else:
            errors += 1
    
    print(f"\nГотово! Успешно: {success}, Пропущено: {skipped}, Ошибок: {errors}")

if __name__ == "__main__":
    main()
