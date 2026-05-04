#!/usr/bin/env python3
"""
Скрипт для исправления ссылок "К списку" (☰) в справочниках HTML и CSS.

Проблема:
- В HTML справочнике: страницы тегов (tag/xxx/index.html) и атрибутов (attr/xxx/index.html)
  имеют ссылку "К списку" href="../index.html", что ведёт на несуществующие страницы
  (tag/index.html или attr/index.html). Должно быть href="../../index.html" → html/index.html

- В CSS справочнике: страницы свойств (property/xxx/index.html), функций (function/xxx/index.html),
  псевдоклассов (pseudoclass/xxx/index.html), псевдоэлементов (pseudoelement/xxx/index.html),
  команд (command/xxx/index.html), единиц (unit/xxx/index.html) имеют ссылку "К списку"
  href="../index.html", что ведёт на несуществующие страницы. Должно быть href="../../index.html"
  → css/index.html

- Для страниц в поддиректориях глубже 2 уровней (например, css/reference/units/colors/index.html)
  нужно больше уровней подъёма.
"""

import os
import re

ROOT = "/Users/admin/Desktop/homework/acteck.off"

def fix_up_links_in_directory(directory, target_relative_path):
    """
    Исправляет ссылки "К списку" (lesson-nav-up) во всех index.html файлах
    в указанной директории.
    
    Ищет паттерн: href="../index.html" class="lesson-nav-up"
    Заменяет на: href="{target_relative_path}" class="lesson-nav-up"
    """
    count = 0
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f == "index.html":
                filepath = os.path.join(root, f)
                
                # Пропускаем сам index.html справочника
                if filepath == os.path.join(directory, "index.html"):
                    continue
                
                with open(filepath, "r", encoding="utf-8") as fh:
                    content = fh.read()
                
                if 'lesson-nav-up' not in content:
                    continue
                
                # Вычисляем правильный относительный путь от текущего файла
                # к index.html справочника
                file_dir = os.path.dirname(filepath)
                target_path = os.path.join(directory, "index.html")
                correct_href = os.path.relpath(target_path, file_dir)
                
                # Ищем все ссылки lesson-nav-up
                pattern = r'href="([^"]*)" class="lesson-nav-up"'
                
                def replace_href(match):
                    old_href = match.group(1)
                    if old_href != correct_href:
                        print(f"  [FIX] {os.path.relpath(filepath, ROOT)}: {old_href} → {correct_href}")
                        return f'href="{correct_href}" class="lesson-nav-up"'
                    return match.group(0)
                
                new_content = re.sub(pattern, replace_href, content)
                
                if new_content != content:
                    with open(filepath, "w", encoding="utf-8") as fh:
                        fh.write(new_content)
                    count += 1
    
    return count

def main():
    print("=" * 60)
    print("Исправление ссылок 'К списку' в справочниках HTML и CSS")
    print("=" * 60)
    
    # 1. HTML справочник - все страницы тегов и атрибутов
    print("\n1. HTML справочник (ru/markup/manual/html/)")
    html_dir = os.path.join(ROOT, "ru", "markup", "manual", "html")
    if os.path.exists(html_dir):
        count = fix_up_links_in_directory(html_dir, html_dir)
        print(f"   Исправлено файлов: {count}")
    else:
        print(f"   [WARN] Директория не найдена: {html_dir}")
    
    # 2. CSS справочник - все страницы свойств, функций, псевдоклассов и т.д.
    print("\n2. CSS справочник (ru/markup/manual/css/)")
    css_dir = os.path.join(ROOT, "ru", "markup", "manual", "css")
    if os.path.exists(css_dir):
        count = fix_up_links_in_directory(css_dir, css_dir)
        print(f"   Исправлено файлов: {count}")
    else:
        print(f"   [WARN] Директория не найдена: {css_dir}")
    
    print("\n" + "=" * 60)
    print("Готово!")
    print("=" * 60)

if __name__ == "__main__":
    main()
