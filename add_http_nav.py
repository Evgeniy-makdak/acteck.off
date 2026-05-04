#!/usr/bin/env python3
"""Add navigation arrows and 'к списку уроков' button to all HTTP lesson pages."""

import os
import re

BASE_DIR = "/Users/admin/Desktop/homework/acteck.off/ru/internet/protocol/http"

# Parse lessons from index.html in order
def get_lessons_from_index():
    index_path = os.path.join(BASE_DIR, "index.html")
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all <a data-m-less="..." href="...">...</a>
    pattern = r'<a\s+data-m-less="([^"]*)"\s+href="([^"]*)"[^>]*>\s*(.*?)\s*</a>'
    matches = re.findall(pattern, content, re.DOTALL)
    
    lessons = []
    for m_less, href, title in matches:
        title_clean = re.sub(r'<[^>]+>', '', title).strip()
        lessons.append((href, title_clean, m_less))
    
    return lessons

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


def add_nav_to_file(filepath, prev_link, prev_title, next_link, next_title, is_first, is_last):
    """Add navigation block before </section> in the file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'lesson-nav' in content:
        print(f"  SKIP (already has nav): {filepath}")
        return False
    
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
    
    print(f"  OK: {os.path.basename(os.path.dirname(filepath))}")
    return True


def main():
    lessons = get_lessons_from_index()
    print(f"Found {len(lessons)} lessons in index.html")
    
    for i, (href, title, m_less) in enumerate(lessons):
        filepath = os.path.join(BASE_DIR, href)
        
        if not os.path.exists(filepath):
            print(f"  MISSING: {filepath}")
            continue
        
        is_first = (i == 0)
        is_last = (i == len(lessons) - 1)
        
        if is_first:
            prev_link = ""
            prev_title = ""
        else:
            prev_link = lessons[i-1][0]
            prev_title = lessons[i-1][1]
        
        if is_last:
            next_link = ""
            next_title = ""
        else:
            next_link = lessons[i+1][0]
            next_title = lessons[i+1][1]
        
        add_nav_to_file(filepath, prev_link, prev_title, next_link, next_title, is_first, is_last)


if __name__ == "__main__":
    main()
