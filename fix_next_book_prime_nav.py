#!/usr/bin/env python3
"""
Исправляет навигацию в учебнике Next.js book/prime:

1. ru/next/book/prime/ (57 файлов) - lesson-nav полностью отсутствует.
   Копируем lesson-nav из ru/javascript/framework/next/book/prime/ (того же файла),
   исправляя lesson-nav-up на ../../index.html

2. ru/javascript/framework/next/book/prime/ (57 файлов) - lesson-nav-up ссылается
   на ../../../../../../../../../../index.html вместо ../../index.html
"""

import os
import re

BASE_DIR = "/Users/admin/Desktop/homework/acteck.off"

# Два набора директорий
DIRS = [
    {
        "name": "ru/next/book/prime/",
        "lesson_dir": os.path.join(BASE_DIR, "ru/next/book/prime"),
        "source_dir": os.path.join(BASE_DIR, "ru/javascript/framework/next/book/prime"),
        "needs_nav": True,  # нужно добавить lesson-nav
        "needs_fix_up": False,  # не нужно чинить lesson-nav-up
    },
    {
        "name": "ru/javascript/framework/next/book/prime/",
        "lesson_dir": os.path.join(BASE_DIR, "ru/javascript/framework/next/book/prime"),
        "source_dir": None,  # не нужен source
        "needs_nav": False,  # lesson-nav уже есть
        "needs_fix_up": True,  # нужно починить lesson-nav-up
    },
]


def get_lesson_nav_block(filepath):
    """Извлекает блок lesson-nav из файла."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r'(    <div class="lesson-nav">.*?</div>\n)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(1)
    return None


def fix_lesson_nav_up(filepath):
    """Исправляет lesson-nav-up href с ../../../../../../../../../../index.html на ../../index.html"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Заменяем неправильный href в lesson-nav-up
    new_content = content.replace(
        'href="../../../../../../../../../../index.html" class="lesson-nav-up"',
        'href="../../index.html" class="lesson-nav-up"'
    )
    
    if new_content == content:
        return False
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True


def add_lesson_nav_to_file(filepath, nav_block):
    """Добавляет блок lesson-nav в файл перед </section>."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Пробуем разные паттерны для вставки nav_block перед </section>
    patterns = [
        # Паттерн 1: с </div> перед </section> (есть контент до этого)
        ('</div>\n  </section>\n\n  <footer class="footer">',
         f'</div>\n    {nav_block}  </section>\n\n  <footer class="footer">'),
        # Паттерн 2: без </div> перед </section>
        ('  </section>\n\n  <footer class="footer">',
         f'    {nav_block}  </section>\n\n  <footer class="footer">'),
    ]
    
    new_content = content
    for search_pattern, replacement in patterns:
        if search_pattern in new_content:
            new_content = new_content.replace(search_pattern, replacement)
            break
    
    if new_content == content:
        print(f"  [WARN] Не удалось вставить nav в {filepath}")
        return False
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True


def main():
    for dir_config in DIRS:
        lesson_dir = dir_config["lesson_dir"]
        source_dir = dir_config["source_dir"]
        needs_nav = dir_config["needs_nav"]
        needs_fix_up = dir_config["needs_fix_up"]
        name = dir_config["name"]
        
        print(f"\n{'='*60}")
        print(f"Обработка: {name}")
        print(f"{'='*60}")
        
        # Собираем все index.html файлы (кроме корневого index.html справочника)
        lesson_files = []
        for root, dirs, files in os.walk(lesson_dir):
            if 'index.html' in files:
                rel_path = os.path.relpath(os.path.join(root, 'index.html'), lesson_dir)
                if rel_path != 'index.html':  # пропускаем корневой index.html
                    lesson_files.append(os.path.join(root, 'index.html'))
        
        lesson_files.sort()
        print(f"Найдено {len(lesson_files)} файлов для обработки")
        
        success = 0
        skipped = 0
        errors = 0
        
        for lesson_file in lesson_files:
            rel_path = os.path.relpath(lesson_file, lesson_dir)
            
            if needs_fix_up:
                # Просто чиним lesson-nav-up
                if fix_lesson_nav_up(lesson_file):
                    print(f"  [FIX] {rel_path}: lesson-nav-up исправлен")
                    success += 1
                else:
                    print(f"  [SKIP] {rel_path}: не найден неправильный href")
                    skipped += 1
            
            if needs_nav:
                # Проверяем, есть ли уже lesson-nav
                with open(lesson_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if 'lesson-nav' in content:
                    print(f"  [SKIP] {rel_path}: уже есть lesson-nav")
                    skipped += 1
                    continue
                
                # Находим source файл
                source_file = os.path.join(source_dir, rel_path)
                if not os.path.exists(source_file):
                    print(f"  [ERROR] Source не найден: {source_file}")
                    errors += 1
                    continue
                
                # Получаем nav блок из source
                nav_block = get_lesson_nav_block(source_file)
                if not nav_block:
                    print(f"  [ERROR] Nav не найден в source: {source_file}")
                    errors += 1
                    continue
                
                # Исправляем lesson-nav-up в nav_block
                nav_block = nav_block.replace(
                    'href="../../../../../../../../../../index.html"',
                    'href="../../index.html"'
                )
                
                # Добавляем nav в target
                if add_lesson_nav_to_file(lesson_file, nav_block):
                    print(f"  [OK] {rel_path}")
                    success += 1
                else:
                    errors += 1
        
        print(f"  Итого: Успешно: {success}, Пропущено: {skipped}, Ошибок: {errors}")


if __name__ == "__main__":
    main()
