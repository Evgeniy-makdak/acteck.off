#!/usr/bin/env python3
"""Add navigation arrows and 'к списку уроков' button to all Webpack lesson pages."""

import os

BASE_DIR = "/Users/admin/Desktop/homework/acteck.off/ru/webpack"

# Ordered list of all lessons (relative path from ru/webpack/, title)
LESSONS = [
    ("basis/intro/index.html", "Принцип работы"),
    ("basis/cache-problem/index.html", "Проблема кеша"),
    ("basis/es-modules/index.html", "ES модули"),
    ("basis/install/index.html", "Установка"),
    ("basis/initial-config/index.html", "Начальная настройка"),
    ("basis/build-launch-config/index.html", "Настройка запуска сборки"),
    ("basis/test-build/index.html", "Тестовая сборка"),
    ("basis/bundle-layout/index.html", "Подключение бандла к верстке"),
    ("basis/entry-point-import/index.html", "Импорт файлов в точку входа"),
    ("basis/absolute-paths/index.html", "Абсолютные пути"),
    ("basis/plugins/index.html", "Плагины"),
    ("basis/loaders/index.html", "Лоадеры"),
    ("mode/types/index.html", "Виды режимов сборки"),
    ("mode/config-file/index.html", "Режимы в файле конфигурации"),
    ("mode/scripts/index.html", "Режимы сборки через scripts"),
    ("mode/watch/index.html", "Автоматическая сборка"),
    ("points/entry-output/index.html", "Точки входа и выхода"),
    ("points/output/index.html", "Точка выхода"),
    ("points/many-output/index.html", "Несколько точек входа"),
    ("points/bundle-hash/index.html", "Хеш в файле сборки"),
    ("points/entry-names/index.html", "Имена точек входа"),
    ("points/entry-array-names/index.html", "Именованные точки-массивы"),
    ("points/bundles-names/index.html", "Имена бандлов"),
    ("points/bundles-hash-names/index.html", "Имена и хеш бандлов"),
    ("points/bundle-dir-path/index.html", "Путь к папке сборки"),
    ("points/entry-context/index.html", "Контекст точек входа"),
    ("css/import-styles/index.html", "Импорт CSS стилей"),
    ("css/styles-loaders/index.html", "Лоадеры для CSS стилей"),
    ("css/import-styles-config/index.html", "Настройка импорта CSS стилей"),
    ("css/import-styles-test/index.html", "Тестирование импорта CSS стилей"),
    ("css/css-bundle-config/index.html", "Настройка сборки CSS в бандл"),
    ("css/css-bundle-test/index.html", "Тестирование сборки CSS в бандл"),
    ("css/css-bundle-name/index.html", "Имя файла CSS бандла"),
    ("css/css-bundle-hash/index.html", "Хеш CSS бандла"),
    ("css/css-several-bundles/index.html", "Несколько CSS бандлов"),
    ("css/import-css-libs/index.html", "Подключение CSS библиотек"),
    ("css/less-compilation/index.html", "Работа с LESS"),
    ("css/sass-compilation/index.html", "Работа с SASS"),
    ("html/layouts/index.html", "Работа с HTML макетами"),
    ("html/layout-generation/index.html", "Генерация HTML макета"),
    ("html/many-scripts-bundles/index.html", "Несколько бандлов скриптов"),
    ("html/hash-scripts-bundles/index.html", "Бандлы скриптов с хешем"),
    ("html/styles-bundles/index.html", "Бандлы стилей"),
    ("html/many-styles-bundles/index.html", "Несколько бандлов стилей"),
    ("html/custom-layout/index.html", "Свой файл макета"),
    ("assets/intro/index.html", "Введение"),
    ("assets/javascript-bundles/index.html", "Ассеты в JavaScript бандлах"),
    ("assets/css-bundles/index.html", "Ассеты в CSS бандлах"),
    ("assets/custom-files-path/index.html", "Кастомизация пути к файлам ассета"),
    ("assets/custom-groups-path/index.html", "Кастомизация пути к группам ассетов"),
    ("assets/inline-type/index.html", "Инлайн ассеты"),
    ("assets/source-type/index.html", "Source ассеты"),
    ("assets/common-type/index.html", "Общие ассеты"),
    ("plugins/build-dir-clear/index.html", "Очистка папки сборки"),
    ("plugins/copying-files/index.html", "Копирование файлов"),
]

NAV_TEMPLATE = '''    <div class="lesson-nav">
      <a href="{prev_link}" class="lesson-nav-btn lesson-nav-prev" title="{prev_title}">← {prev_title}</a>
      <a href="../../index.html" class="lesson-nav-up" title="К списку уроков">☰</a>
      <a href="{next_link}" class="lesson-nav-btn lesson-nav-next" title="{next_title}">{next_title} →</a>
    </div>'''

NAV_FIRST_TEMPLATE = '''    <div class="lesson-nav">
      <span class="lesson-nav-btn lesson-nav-prev disabled">← Начало</span>
      <a href="../../index.html" class="lesson-nav-up" title="К списку уроков">☰</a>
      <a href="{next_link}" class="lesson-nav-btn lesson-nav-next" title="{next_title}">{next_title} →</a>
    </div>'''

NAV_LAST_TEMPLATE = '''    <div class="lesson-nav">
      <a href="{prev_link}" class="lesson-nav-btn lesson-nav-prev" title="{prev_title}">← {prev_title}</a>
      <a href="../../index.html" class="lesson-nav-up" title="К списку уроков">☰</a>
      <span class="lesson-nav-btn lesson-nav-next disabled">Конец →</span>
    </div>'''


def get_up_prefix(rel_path):
    """Get '../' prefix to go from lesson file up to ru/webpack/ directory.
    e.g. 'basis/intro/index.html' -> '../../'
    """
    depth = len(rel_path.split("/")) - 1  # number of directory levels
    return "../" * depth


def add_nav_to_file(filepath, prev_link, prev_title, next_link, next_title, is_first, is_last):
    """Add navigation block before </section> in the file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'lesson-nav' in content:
        print(f"  SKIP (already has nav): {filepath}")
        return
    
    if is_first:
        nav_block = NAV_FIRST_TEMPLATE.format(
            next_link=next_link,
            next_title=next_title
        )
    elif is_last:
        nav_block = NAV_LAST_TEMPLATE.format(
            prev_link=prev_link,
            prev_title=prev_title
        )
    else:
        nav_block = NAV_TEMPLATE.format(
            prev_link=prev_link,
            prev_title=prev_title,
            next_link=next_link,
            next_title=next_title
        )
    
    # Insert before </section>
    content = content.replace('  </section>', nav_block + '\n  </section>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  OK: {filepath}")


def main():
    for i, (rel_path, title) in enumerate(LESSONS):
        filepath = os.path.join(BASE_DIR, rel_path)
        
        if not os.path.exists(filepath):
            print(f"  MISSING: {filepath}")
            continue
        
        is_first = (i == 0)
        is_last = (i == len(LESSONS) - 1)
        
        up = get_up_prefix(rel_path)
        
        if is_first:
            prev_link = ""
            prev_title = ""
        else:
            prev_rel = LESSONS[i-1][0]
            prev_link = up + prev_rel
            prev_title = LESSONS[i-1][1]
        
        if is_last:
            next_link = ""
            next_title = ""
        else:
            next_rel = LESSONS[i+1][0]
            next_link = up + next_rel
            next_title = LESSONS[i+1][1]
        
        add_nav_to_file(filepath, prev_link, prev_title, next_link, next_title, is_first, is_last)


if __name__ == "__main__":
    main()
