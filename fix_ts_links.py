#!/usr/bin/env python3
"""
Скрипт для исправления ссылок в index.html учебников TypeScript.
Проблема: ссылки вида ../../../javascript/typescript/book/prime/basis/intro/index.html
должны быть относительными от текущего файла, например basis/intro/index.html
"""
import os
import re

ROOT = "/Users/admin/Desktop/homework/acteck.off"

def fix_links_in_index(filepath):
    """Исправляет ссылки в index.html, заменяя ../../../javascript/typescript/... на правильные относительные пути."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Определяем директорию файла относительно ROOT
    rel_path = os.path.relpath(filepath, ROOT)
    rel_dir = os.path.dirname(rel_path)
    
    # Находим все ссылки вида ../../../javascript/typescript/book/...
    # и заменяем их на правильные относительные пути
    pattern = r'href="(\.\./\.\./\.\./javascript/typescript/book/[^"]*)"'
    
    def replace_href(match):
        old_href = match.group(1)
        # old_href = "../../../javascript/typescript/book/prime/basis/intro/index.html"
        # Нам нужно извлечь часть после "book/"
        # book/prime/basis/intro/index.html или book/supreme/oop/intro/index.html
        
        # Находим "book/" в href
        book_idx = old_href.find("book/")
        if book_idx == -1:
            return match.group(0)
        
        # Часть после "book/" - это путь относительно index.html
        # Например: "prime/basis/intro/index.html"
        local_path = old_href[book_idx + 5:]  # +5 чтобы пропустить "book/"
        
        # Вычисляем правильный относительный путь от index.html к файлу урока
        # index.html находится в .../typescript/book/prime/
        # урок находится в .../typescript/book/prime/basis/intro/index.html
        # значит правильный путь: basis/intro/index.html
        new_href = local_path
        
        # Убираем "prime/" или "supreme/" из начала, так как index.html уже в этой папке
        # local_path = "prime/basis/intro/index.html" -> "basis/intro/index.html"
        parts = local_path.split("/")
        if len(parts) >= 2:
            new_href = "/".join(parts[1:])
        
        return f'href="{new_href}"'
    
    new_content = re.sub(pattern, replace_href, content)
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"  [FIX] {rel_path}")
        return True
    else:
        print(f"  [SKIP] {rel_path} - не найдено ссылок для исправления")
        return False

def fix_internal_links(filepath):
    """Исправляет внутренние ссылки на javascript/typescript в тексте уроков."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Определяем директорию файла относительно ROOT
    rel_path = os.path.relpath(filepath, ROOT)
    rel_dir = os.path.dirname(rel_path)
    
    # Находим ссылки вида ../../../../javascript/typescript/book/prime/...
    # и заменяем на правильные относительные пути
    pattern = r'href="((?:\.\./)+)javascript/typescript/book/([^"]*)"'
    
    def replace_internal(match):
        dots = match.group(1)  # "../../../../"
        path_after_book = match.group(2)  # "prime/structures/interfaces/index.html"
        
        # Вычисляем, сколько уровней вверх нужно подняться от текущего файла
        # до корня проекта, а затем спуститься к typescript/book/
        
        # Текущий файл: ru/typescript/book/supreme/interfaces/intro/index.html
        # Нужно перейти к: ru/typescript/book/prime/structures/interfaces/index.html
        
        # Считаем количество "../" в dots
        up_levels = dots.count("../")
        
        # Относительный путь от текущего файла
        # Поднимаемся на up_levels, затем идём к typescript/book/
        # Но это неправильно, так как dots уже включает javascript/
        
        # Правильный подход: от текущего файла подняться до ru/typescript/book/
        # и затем спуститься к нужному учебнику
        
        # Определяем, сколько уровней от текущего файла до ru/typescript/book/
        # Например: ru/typescript/book/supreme/interfaces/intro/index.html
        # до ru/typescript/book/ нужно подняться на 3 уровня: ../../../
        
        # Находим "typescript/book/" в rel_dir
        ts_book_idx = rel_dir.find("typescript/book/")
        if ts_book_idx == -1:
            return match.group(0)
        
        # Часть после typescript/book/
        after_book = rel_dir[ts_book_idx + len("typescript/book/"):]
        # Например: "supreme/interfaces/intro"
        
        # Количество уровней до typescript/book/
        levels_to_book = len(after_book.split("/")) + 1  # +1 за index.html
        
        # Путь от текущего файла до typescript/book/
        up_path = "../" * levels_to_book
        
        # Затем спускаемся к нужному учебнику
        new_href = f"{up_path}{path_after_book}"
        
        return f'href="{new_href}"'
    
    new_content = re.sub(pattern, replace_internal, content)
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"  [FIX] {rel_path}")
        return True
    else:
        return False

def main():
    print("=" * 60)
    print("Исправление ссылок в учебниках TypeScript")
    print("=" * 60)
    
    # 1. Исправляем ссылки в index.html файлах
    print("\n1. Основной учебник TypeScript (ru)")
    fix_links_in_index(os.path.join(ROOT, "ru", "typescript", "book", "prime", "index.html"))
    
    print("\n2. Основной учебник TypeScript (en)")
    fix_links_in_index(os.path.join(ROOT, "en", "typescript", "book", "prime", "index.html"))
    
    print("\n3. Высший учебник TypeScript (ru)")
    fix_links_in_index(os.path.join(ROOT, "ru", "typescript", "book", "supreme", "index.html"))
    
    print("\n4. Высший учебник TypeScript (en)")
    fix_links_in_index(os.path.join(ROOT, "en", "typescript", "book", "supreme", "index.html"))
    
    # 2. Исправляем внутренние ссылки в уроках
    print("\n5. Внутренние ссылки в уроках")
    # Ищем все файлы с javascript/typescript в ссылках
    for root, dirs, files in os.walk(os.path.join(ROOT, "ru", "typescript")):
        for f in files:
            if f == "index.html":
                filepath = os.path.join(root, f)
                with open(filepath, "r", encoding="utf-8") as fh:
                    content = fh.read()
                if "javascript/typescript" in content:
                    fix_internal_links(filepath)
    
    for root, dirs, files in os.walk(os.path.join(ROOT, "en", "typescript")):
        for f in files:
            if f == "index.html":
                filepath = os.path.join(root, f)
                with open(filepath, "r", encoding="utf-8") as fh:
                    content = fh.read()
                if "javascript/typescript" in content:
                    fix_internal_links(filepath)
    
    print("\n" + "=" * 60)
    print("Готово!")
    print("=" * 60)

if __name__ == "__main__":
    main()
