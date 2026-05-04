#!/usr/bin/env python3
"""Fix back-link in Vue book lesson pages to point to book index instead of Vue main page."""

import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
VUE_BOOK_DIR = os.path.join(BASE_DIR, 'ru', 'vue', 'book', 'prime')

# Pattern: href="../../../../../../ru/vue/index.html" should become href="../../../../../../ru/vue/book/prime/index.html"
# All lesson pages are at depth 6 from root (ru/vue/book/prime/*/.../index.html)
# So the relative path to ru/vue/book/prime/index.html is ../../../../../../ru/vue/book/prime/index.html

old_href = '../../../../../../ru/vue/index.html'
new_href = '../../../../../../ru/vue/book/prime/index.html'

count = 0
for root, dirs, files in os.walk(VUE_BOOK_DIR):
    for filename in files:
        if filename == 'index.html':
            filepath = os.path.join(root, filename)
            # Skip the top-level index.html (the book's own index)
            if filepath == os.path.join(VUE_BOOK_DIR, 'index.html'):
                continue
            
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if old_href in content:
                new_content = content.replace(old_href, new_href)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                print(f"Fixed: {filepath}")

print(f"\nTotal files fixed: {count}")
