#!/usr/bin/env python3
"""
Скрипт для добавления навигационных кнопок (предыдущий/следующий)
между тасками в учебниках JavaScript.
"""

import os
import re
import sys

# Путь к папке с учебниками JavaScript
BOOKS_DIR = "ru/javascript/book"

# Учебники, которые нужно обработать (только Основной и Высший)
BOOKS = ["prime", "supreme", "oop", "practice"]


def get_lesson_links(book_index_path):
    """
    Парсит index.html учебника и возвращает список ссылок на уроки
    в порядке их следования.
    Каждый элемент: (href, title, data_m_less)
    """
    with open(book_index_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Ищем все <a data-m-less="..." href="...">...</a>
    pattern = r'<a\s+data-m-less="([^"]*)"\s+href="([^"]*)"[^>]*>\s*(.*?)\s*</a>'
    matches = re.findall(pattern, content, re.DOTALL)

    lessons = []
    for m_less, href, title in matches:
        # Очищаем title от возможных вложенных тегов
        title_clean = re.sub(r'<[^>]+>', '', title).strip()
        lessons.append((href, title_clean, m_less))

    return lessons


def get_relative_path_to_book(from_page_dir, book_index_path):
    """
    Вычисляет относительный путь от страницы урока к index.html учебника.
    """
    # from_page_dir - абсолютный путь к папке урока
    # book_index_path - абсолютный путь к index.html учебника
    book_dir = os.path.dirname(book_index_path)
    rel_path = os.path.relpath(book_dir, from_page_dir)
    return rel_path


def add_navigation_to_lesson(lesson_path, prev_href, next_href, prev_title, next_title, book_index_rel):
    """
    Добавляет навигационные кнопки в index.html урока.
    """
    with open(lesson_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Проверяем, есть ли уже навигация
    if 'class="lesson-nav"' in content:
        print(f"  ⏭ Пропущен (уже есть навигация): {lesson_path}")
        return False

    # Создаём блок навигации
    nav_buttons = '\n    <div class="lesson-nav">\n'

    if prev_href:
        nav_buttons += f'      <a href="{prev_href}" class="lesson-nav-btn lesson-nav-prev" title="{prev_title}">← {prev_title}</a>\n'
    else:
        nav_buttons += '      <span class="lesson-nav-btn lesson-nav-prev disabled">← Начало</span>\n'

    nav_buttons += f'      <a href="{book_index_rel}" class="lesson-nav-up" title="К списку уроков">☰</a>\n'

    if next_href:
        nav_buttons += f'      <a href="{next_href}" class="lesson-nav-btn lesson-nav-next" title="{next_title}">{next_title} →</a>\n'
    else:
        nav_buttons += '      <span class="lesson-nav-btn lesson-nav-next disabled">Конец →</span>\n'

    nav_buttons += '    </div>\n'

    # Вставляем навигацию перед закрывающим </section>
    content = content.replace('</section>', nav_buttons + '  </section>')

    with open(lesson_path, "w", encoding="utf-8") as f:
        f.write(content)

    return True


def process_book(book_name):
    """
    Обрабатывает один учебник.
    """
    book_dir = os.path.join(BOOKS_DIR, book_name)
    book_index_path = os.path.join(book_dir, "index.html")

    if not os.path.exists(book_index_path):
        print(f"❌ Не найден index.html для учебника {book_name}")
        return

    print(f"\n📚 Обработка учебника: {book_name}")

    lessons = get_lesson_links(book_index_path)
    print(f"   Найдено уроков: {len(lessons)}")

    if not lessons:
        print("   ⚠ Нет уроков для обработки")
        return

    # Для каждого урока добавляем навигацию
    for i, (href, title, m_less) in enumerate(lessons):
        lesson_path = os.path.join(book_dir, href)
        lesson_dir = os.path.dirname(lesson_path)

        if not os.path.exists(lesson_path):
            print(f"  ⚠ Не найден файл урока: {lesson_path}")
            continue

        # Предыдущий и следующий уроки
        prev_href = None
        prev_title = None
        if i > 0:
            prev_href = os.path.relpath(
                os.path.join(book_dir, lessons[i-1][0]),
                lesson_dir
            )
            prev_title = lessons[i-1][1]

        next_href = None
        next_title = None
        if i < len(lessons) - 1:
            next_href = os.path.relpath(
                os.path.join(book_dir, lessons[i+1][0]),
                lesson_dir
            )
            next_title = lessons[i+1][1]

        # Относительный путь к index.html учебника
        book_index_rel = os.path.relpath(book_index_path, lesson_dir)

        added = add_navigation_to_lesson(
            lesson_path, prev_href, next_href,
            prev_title, next_title, book_index_rel
        )

        if added:
            print(f"  ✅ {title}")

    print(f"   ✅ Учебник {book_name} обработан")


def main():
    # Проверяем, что мы в корне проекта
    if not os.path.exists(BOOKS_DIR):
        print(f"❌ Папка {BOOKS_DIR} не найдена. Запустите скрипт из корня проекта.")
        sys.exit(1)

    for book in BOOKS:
        process_book(book)

    print("\n🎉 Готово! Навигация добавлена во все учебники.")


if __name__ == "__main__":
    main()
