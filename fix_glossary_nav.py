#!/usr/bin/env python3
"""
Добавляет навигацию (prev/next/up) на страницы терминов глоссария
и исправляет back-link на странице самого глоссария.
"""

import os
import re

GLOSSARY_DIR = "/Users/admin/Desktop/homework/acteck.off/ru/theory/glossary"


def get_terms_from_index():
    """Парсит термины из index.html глоссария в порядке их следования.
    Берёт только ссылки внутри <div> после <h2> (сами термины)."""
    index_path = os.path.join(GLOSSARY_DIR, "index.html")
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Находим все блоки <h2>...</h2><div>...</div>
    # Внутри <div> ищем ссылки вида <a href="xxx/index.html">...</a>
    terms = []
    
    # Ищем блоки <h2>...</h2><div>...</div>
    block_pattern = r'<h2>[^<]*</h2>\s*<div>(.*?)</div>'
    blocks = re.findall(block_pattern, content, re.DOTALL)
    
    for block in blocks:
        # Внутри блока ищем ссылки вида <a href="xxx/index.html">
        link_pattern = r'<a\s+href="([^"]+)"[^>]*>\s*(.*?)\s*</a>'
        matches = re.findall(link_pattern, block, re.DOTALL)
        for href, title in matches:
            if href.endswith('/index.html'):
                title_clean = re.sub(r'<[^>]+>', '', title).strip()
                terms.append((href, title_clean))
    
    return terms


def add_nav_to_term_file(filepath, prev_href, next_href, prev_title, next_title, is_first, is_last):
    """Добавляет навигационный блок в файл термина."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Если уже есть lesson-nav, пропускаем
    if 'lesson-nav' in content:
        print(f"  SKIP (already has nav): {os.path.basename(os.path.dirname(filepath))}")
        return False
    
    # Находим закрывающий тег </section>
    section_end = content.rfind('</section>')
    if section_end == -1:
        print(f"  ERROR: no </section> in {filepath}")
        return False
    
    # Строим навигационный блок
    nav_parts = []
    nav_parts.append('    <div class="lesson-nav">')
    
    if is_first:
        nav_parts.append('      <span class="lesson-nav-btn lesson-nav-prev disabled">← Начало</span>')
    else:
        nav_parts.append(f'      <a href="{prev_href}" class="lesson-nav-btn lesson-nav-prev" title="{prev_title}">← {prev_title}</a>')
    
    nav_parts.append(f'      <a href="../index.html" class="lesson-nav-up" title="К списку уроков">☰</a>')
    
    if is_last:
        nav_parts.append('      <span class="lesson-nav-btn lesson-nav-next disabled">Конец →</span>')
    else:
        nav_parts.append(f'      <a href="{next_href}" class="lesson-nav-btn lesson-nav-next" title="{next_title}">{next_title} →</a>')
    
    nav_parts.append('    </div>')
    
    new_nav = '\n' + '\n'.join(nav_parts) + '\n'
    
    # Вставляем перед </section>
    content = content[:section_end] + new_nav + content[section_end:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ADDED NAV: {os.path.basename(os.path.dirname(filepath))}")
    return True


def fix_glossary_index():
    """Исправляет back-link на странице самого глоссария."""
    index_path = os.path.join(GLOSSARY_DIR, "index.html")
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Сейчас back-link ссылается сам на себя: ../../../ru/theory/glossary/index.html
    # Должен вести на главную: ../../../ru/index.html
    old_back = 'href="../../../ru/theory/glossary/index.html" class="back-link"'
    new_back = 'href="../../../ru/index.html" class="back-link"'
    
    if old_back in content:
        content = content.replace(old_back, new_back)
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("  FIXED back-link in glossary index.html")
        return True
    else:
        print("  WARNING: back-link pattern not found in glossary index.html")
        return False


def main():
    terms = get_terms_from_index()
    print(f"Found {len(terms)} terms in glossary index.html")
    
    for i, (href, title) in enumerate(terms):
        filepath = os.path.join(GLOSSARY_DIR, href)
        
        if not os.path.exists(filepath):
            print(f"  MISSING: {filepath}")
            continue
        
        is_first = (i == 0)
        is_last = (i == len(terms) - 1)
        
        if is_first:
            prev_href = ""
            prev_title = ""
        else:
            prev_href = "../" + terms[i-1][0]
            prev_title = terms[i-1][1]
        
        if is_last:
            next_href = ""
            next_title = ""
        else:
            next_href = "../" + terms[i+1][0]
            next_title = terms[i+1][1]
        
        add_nav_to_term_file(filepath, prev_href, next_href, prev_title, next_title, is_first, is_last)
    
    # Исправляем back-link на странице глоссария
    fix_glossary_index()


if __name__ == "__main__":
    main()
