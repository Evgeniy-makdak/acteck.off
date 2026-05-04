#!/usr/bin/env python3
"""
Скрипт для исправления навигации в учебниках:
1. Исправляет up_href в React supreme (ru/javascript/framework/react/book/supreme/)
   - Было: ../../../../../../../../../../index.html (10 уровней)
   - Должно быть: ../../index.html
2. Исправляет up_href в TypeScript supreme (ru/javascript/typescript/book/supreme/)
   - Было: ../../../../../../../../../index.html (9 уровней)
   - Должно быть: ../../index.html
3. Исправляет ссылку в ru/terminal/index.html
   - Было: "Основной учебник Terminal"
   - Должно быть: "Учебник по командной строке"
4. Добавляет навигацию в ru/react/book/supreme/ (Высший учебник React)
5. Добавляет навигацию в ru/typescript/book/supreme/ (Высший учебник TypeScript)
6. Добавляет навигацию в ru/react/book/redux/ (Учебник Redux)
"""

import os
import re

ROOT = "/Users/admin/Desktop/homework/acteck.off"

def fix_up_href_in_files(directory, wrong_pattern, correct_href):
    """Исправляет up_href во всех файлах с lesson-nav в указанной директории."""
    count = 0
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f == "index.html":
                filepath = os.path.join(root, f)
                with open(filepath, "r", encoding="utf-8") as fh:
                    content = fh.read()
                
                # Проверяем, есть ли lesson-nav с неправильным up_href
                if 'lesson-nav-up' in content and wrong_pattern in content:
                    # Заменяем неправильный href на правильный
                    new_content = content.replace(
                        f'href="{wrong_pattern}" class="lesson-nav-up"',
                        f'href="{correct_href}" class="lesson-nav-up"'
                    )
                    if new_content != content:
                        with open(filepath, "w", encoding="utf-8") as fh:
                            fh.write(new_content)
                        count += 1
                        print(f"  [FIX] {os.path.relpath(filepath, ROOT)}")
    return count

def fix_terminal_index():
    """Исправляет ссылку в ru/terminal/index.html."""
    filepath = os.path.join(ROOT, "ru", "terminal", "index.html")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Меняем "Основной учебник Terminal" на "Учебник по командной строке"
    old = '<a href="book/prime/index.html">Основной учебник Terminal</a>'
    new = '<a href="book/prime/index.html">Учебник по командной строке</a>'
    
    if old in content:
        content = content.replace(old, new)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [FIX] ru/terminal/index.html - исправлена ссылка")
        return True
    else:
        print(f"  [SKIP] ru/terminal/index.html - ссылка не найдена или уже исправлена")
        return False

def add_nav_to_lesson(file_path, prev_href, next_href, prev_title, next_title, up_href, is_first, is_last):
    """
    Добавляет lesson-nav блок в файл урока.
    Вставляет перед закрывающим </section>.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
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

def add_nav_to_standalone_lessons(tutorial_path):
    """
    Добавляет навигацию в уроки, которые находятся в директории учебника,
    но на которые index.html ссылается через внешние пути (javascript/...).
    
    Парсим index.html учебника, получаем список уроков с их href,
    затем для каждого href заменяем путь на локальный (берём только последние части пути)
    и добавляем навигацию в соответствующий локальный файл.
    """
    print(f"\n  Обработка: {tutorial_path}")
    
    index_path = os.path.join(ROOT, tutorial_path, "index.html")
    if not os.path.exists(index_path):
        print(f"  [WARN] index.html не найден: {index_path}")
        return 0
    
    with open(index_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Ищем все ссылки на уроки внутри data-m-sect блоков
    pattern = r'<a\s+data-m-less="[^"]*"\s+href="([^"]*)"[^>]*>\s*\n\s*([^<]+)'
    
    lessons = []
    for match in re.finditer(pattern, content, re.DOTALL):
        href = match.group(1).strip()
        title = match.group(2).strip()
        lessons.append((title, href))
    
    if not lessons:
        print("  Нет уроков для обработки.")
        return 0
    
    print(f"  Найдено уроков в index.html: {len(lessons)}")
    
    modified_count = 0
    skipped_count = 0
    error_count = 0
    
    for i, (title, href) in enumerate(lessons):
        # Из href вида "../../../javascript/framework/react/book/supreme/hooks/intro/index.html"
        # извлекаем локальный путь: "hooks/intro/index.html"
        parts = href.split("/")
        # Находим последние части пути до index.html
        local_parts = []
        for p in reversed(parts):
            local_parts.insert(0, p)
            if p == "index.html" and len(local_parts) >= 3:
                # Проверяем, существует ли такой файл
                test_path = os.path.join(ROOT, tutorial_path, *local_parts)
                if os.path.exists(test_path):
                    break
        else:
            # Если не нашли, используем последние 3 части
            local_parts = parts[-3:]
        
        local_href = "/".join(local_parts)
        lesson_file = os.path.join(ROOT, tutorial_path, local_href)
        
        if not os.path.exists(lesson_file):
            print(f"  [WARN] Файл не найден: {lesson_file}")
            error_count += 1
            continue
        
        # Проверяем, есть ли уже навигация
        with open(lesson_file, "r", encoding="utf-8") as f:
            file_content = f.read()
        if 'lesson-nav' in file_content:
            print(f"  [SKIP] Уже есть навигация: {local_href}")
            skipped_count += 1
            continue
        
        # Вычисляем относительный путь от файла урока к index.html учебника
        lesson_dir = os.path.dirname(lesson_file)
        tutorial_index = os.path.join(ROOT, tutorial_path, "index.html")
        up_href = os.path.relpath(tutorial_index, lesson_dir)
        
        # Предыдущий и следующий урок
        is_first = (i == 0)
        is_last = (i == len(lessons) - 1)
        
        prev_href = None
        prev_title = None
        next_href = None
        next_title = None
        
        if not is_first:
            prev_title, prev_href_full = lessons[i - 1]
            # Извлекаем локальный путь для предыдущего урока
            prev_parts = prev_href_full.split("/")
            prev_local_parts = []
            for p in reversed(prev_parts):
                prev_local_parts.insert(0, p)
                if p == "index.html" and len(prev_local_parts) >= 3:
                    test_path = os.path.join(ROOT, tutorial_path, *prev_local_parts)
                    if os.path.exists(test_path):
                        break
            else:
                prev_local_parts = prev_parts[-3:]
            prev_local_href = "/".join(prev_local_parts)
            
            # Вычисляем относительный путь от текущего урока к предыдущему
            current_dir = os.path.dirname(local_href)
            prev_rel = os.path.relpath(
                os.path.join(ROOT, tutorial_path, prev_local_href),
                os.path.join(ROOT, tutorial_path, current_dir)
            )
            prev_href = prev_rel
        
        if not is_last:
            next_title, next_href_full = lessons[i + 1]
            # Извлекаем локальный путь для следующего урока
            next_parts = next_href_full.split("/")
            next_local_parts = []
            for p in reversed(next_parts):
                next_local_parts.insert(0, p)
                if p == "index.html" and len(next_local_parts) >= 3:
                    test_path = os.path.join(ROOT, tutorial_path, *next_local_parts)
                    if os.path.exists(test_path):
                        break
            else:
                next_local_parts = next_parts[-3:]
            next_local_href = "/".join(next_local_parts)
            
            current_dir = os.path.dirname(local_href)
            next_rel = os.path.relpath(
                os.path.join(ROOT, tutorial_path, next_local_href),
                os.path.join(ROOT, tutorial_path, current_dir)
            )
            next_href = next_rel
        
        # Добавляем навигацию
        success = add_nav_to_lesson(
            lesson_file,
            prev_href, next_href,
            prev_title, next_title,
            up_href,
            is_first, is_last
        )
        
        if success:
            modified_count += 1
            print(f"  [OK] {local_href}")
        else:
            error_count += 1
    
    print(f"  Итого: {modified_count} изменено, {skipped_count} пропущено, {error_count} ошибок")
    return modified_count

def main():
    print("=" * 60)
    print("Исправление навигации в учебниках")
    print("=" * 60)
    
    # 1. Исправляем up_href в React supreme (javascript версия)
    print("\n1. React supreme (ru/javascript/framework/react/book/supreme/)")
    react_dir = os.path.join(ROOT, "ru", "javascript", "framework", "react", "book", "supreme")
    if os.path.exists(react_dir):
        count = fix_up_href_in_files(
            react_dir,
            "../../../../../../../../../../index.html",
            "../../index.html"
        )
        print(f"   Исправлено файлов: {count}")
    else:
        print(f"   [WARN] Директория не найдена: {react_dir}")
    
    # 2. Исправляем up_href в TypeScript supreme (javascript версия)
    print("\n2. TypeScript supreme (ru/javascript/typescript/book/supreme/)")
    ts_dir = os.path.join(ROOT, "ru", "javascript", "typescript", "book", "supreme")
    if os.path.exists(ts_dir):
        count = fix_up_href_in_files(
            ts_dir,
            "../../../../../../../../../index.html",
            "../../index.html"
        )
        print(f"   Исправлено файлов: {count}")
    else:
        print(f"   [WARN] Директория не найдена: {ts_dir}")
    
    # 3. Исправляем ссылку в ru/terminal/index.html
    print("\n3. Terminal index (ru/terminal/index.html)")
    fix_terminal_index()
    
    # 4. Добавляем навигацию в ru/react/book/supreme/ (Высший учебник React)
    print("\n4. Высший учебник React (ru/react/book/supreme/)")
    add_nav_to_standalone_lessons("ru/react/book/supreme")
    
    # 5. Добавляем навигацию в ru/typescript/book/supreme/ (Высший учебник TypeScript)
    print("\n5. Высший учебник TypeScript (ru/typescript/book/supreme/)")
    add_nav_to_standalone_lessons("ru/typescript/book/supreme")
    
    # 6. Добавляем навигацию в ru/react/book/redux/ (Учебник Redux)
    print("\n6. Учебник Redux (ru/react/book/redux/)")
    add_nav_to_standalone_lessons("ru/react/book/redux")
    
    print("\n" + "=" * 60)
    print("Готово!")
    print("=" * 60)

if __name__ == "__main__":
    main()
