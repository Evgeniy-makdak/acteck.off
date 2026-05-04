#!/usr/bin/env python3
"""
Скрипт для добавления навигации (lesson-nav) в уроки всех учебников,
кроме JavaScript (там уже есть).
"""

import os
import re
import sys

# Корневая директория проекта
ROOT = "/Users/admin/Desktop/homework/acteck.off"

# Учебники, в которые нужно добавить lesson-nav
# (JavaScript уже имеет навигацию)
TUTORIALS = [
    # Основные учебники (prime)
    "ru/markup/book/prime",
    "ru/nodejs/book/prime",
    "ru/next/book/prime",
    "ru/react/book/prime",
    "ru/vue/book/prime",
    "ru/typescript/book/prime",
    "ru/deploy/book/prime",
    "ru/git/book/prime",
    "ru/terminal/book/prime",
    "ru/javascript/framework/angular/book/prime",
    "ru/javascript/framework/next/book/prime",
    "ru/javascript/framework/react/book/prime",
    "ru/javascript/framework/vue/book/prime",
    "ru/javascript/lib/jquery/book/prime",
    "ru/javascript/nodejs/book/prime",
    "ru/javascript/typescript/book/prime",
    # Высшие учебники (supreme)
    "ru/markup/book/supreme",
    "ru/nodejs/book/supreme",
    "ru/next/book/supreme",
    "ru/react/book/supreme",
    "ru/typescript/book/supreme",
    "ru/javascript/framework/react/book/supreme",
    "ru/javascript/typescript/book/supreme",
    # Учебники препроцессоров
    "ru/markup/book/prep/less",
    "ru/markup/book/prep/sass",
    # Учебник Redux
    "ru/javascript/framework/react/book/redux",
    # Учебник Terminal (основной)
    "ru/terminal/book/prime",

]


def get_lesson_list(tutorial_path):
    """
    Парсит index.html учебника и возвращает список уроков в порядке их следования.
    Каждый элемент: (название, относительный_путь_от_index.html_учебника)
    """
    index_path = os.path.join(ROOT, tutorial_path, "index.html")
    if not os.path.exists(index_path):
        print(f"  [WARN] index.html не найден: {index_path}")
        return []
    
    with open(index_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    lessons = []
    # Ищем все ссылки на уроки внутри data-m-sect блоков
    # Паттерн: <a data-m-less="XXX" href="...">Название</a>
    pattern = r'<a\s+data-m-less="[^"]*"\s+href="([^"]*)"[^>]*>\s*\n\s*([^<]+)'
    
    for match in re.finditer(pattern, content, re.DOTALL):
        href = match.group(1).strip()
        title = match.group(2).strip()
        lessons.append((title, href))
    
    return lessons


def get_lesson_files(tutorial_path):
    """
    Возвращает список всех index.html файлов уроков (не включая сам index.html учебника).
    """
    tutorial_dir = os.path.join(ROOT, tutorial_path)
    lesson_files = []
    
    for root, dirs, files in os.walk(tutorial_dir):
        if "index.html" in files:
            full_path = os.path.join(root, "index.html")
            if full_path != os.path.join(tutorial_dir, "index.html"):
                lesson_files.append(full_path)
    
    return lesson_files


def has_lesson_nav(file_path):
    """Проверяет, есть ли уже lesson-nav в файле."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    return 'lesson-nav' in content


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
    # Ищем последнее вхождение </section> перед <footer
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


def process_tutorial(tutorial_path):
    """Обрабатывает один учебник."""
    print(f"\n{'='*60}")
    print(f"Обработка: {tutorial_path}")
    print(f"{'='*60}")
    
    lessons = get_lesson_list(tutorial_path)
    
    if not lessons:
        print("  Нет уроков для обработки.")
        return
    
    print(f"  Найдено уроков в index.html: {len(lessons)}")
    
    # Вычисляем относительный путь от урока к index.html учебника
    # Урок находится на глубине: tutorial_path + /section/lesson/index.html
    # Относительный путь: ../../index.html (для уроков на глубине 2)
    # или ../../../index.html (для уроков на глубине 3)
    
    # Определяем глубину урока относительно учебника
    # Пример: ru/markup/book/prime/html/intro/index.html
    # tutorial_path = ru/markup/book/prime
    # lesson_path = html/intro/index.html -> глубина 2
    
    modified_count = 0
    skipped_count = 0
    error_count = 0
    
    for i, (title, href) in enumerate(lessons):
        # Полный путь к файлу урока
        lesson_file = os.path.join(ROOT, tutorial_path, href)
        
        if not os.path.exists(lesson_file):
            print(f"  [WARN] Файл не найден: {lesson_file}")
            error_count += 1
            continue
        
        # Проверяем, есть ли уже навигация
        if has_lesson_nav(lesson_file):
            print(f"  [SKIP] Уже есть навигация: {href}")
            skipped_count += 1
            continue
        
        # Вычисляем относительный путь от файла урока к index.html учебника
        # Используем os.path.relpath для правильного вычисления
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
            prev_title, prev_href_rel = lessons[i - 1]
            # Вычисляем относительный путь от текущего урока к предыдущему
            # Текущий: section/lesson/index.html
            # Предыдущий: section_prev/lesson_prev/index.html
            # Относительный путь: ../section_prev/lesson_prev/index.html
            
            # Получаем директорию текущего урока
            current_dir = os.path.dirname(href)  # например "section/lesson"
            # Поднимаемся на уровень вверх
            prev_rel = os.path.relpath(
                os.path.join(ROOT, tutorial_path, prev_href_rel),
                os.path.join(ROOT, tutorial_path, current_dir)
            )
            prev_href = prev_rel
        
        if not is_last:
            next_title, next_href_rel = lessons[i + 1]
            current_dir = os.path.dirname(href)
            next_rel = os.path.relpath(
                os.path.join(ROOT, tutorial_path, next_href_rel),
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
            print(f"  [OK] {href}")
        else:
            error_count += 1
    
    print(f"\n  Итого: {modified_count} изменено, {skipped_count} пропущено, {error_count} ошибок")


def main():
    for tutorial in TUTORIALS:
        tutorial_path = os.path.join(ROOT, tutorial)
        if os.path.exists(tutorial_path):
            process_tutorial(tutorial)
        else:
            print(f"\n[WARN] Директория не найдена: {tutorial_path}")


if __name__ == "__main__":
    main()
