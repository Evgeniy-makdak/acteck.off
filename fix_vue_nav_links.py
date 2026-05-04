#!/usr/bin/env python3
"""
Fix navigation links in Vue book lesson pages at ru/javascript/framework/vue/book/prime/.

Two issues:
1. back-link: href="../../../../../../../../ru/vue/index.html" should be href="../../index.html"
   (points to Vue main page instead of book index)
2. lesson-nav-up: href="../../../../../../../../../../index.html" should be href="../../index.html"
   (points to Desktop root instead of book index)
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
VUE_BOOK_DIR = os.path.join(BASE_DIR, 'ru', 'javascript', 'framework', 'vue', 'book', 'prime')

count_back = 0
count_nav = 0

for root, dirs, files in os.walk(VUE_BOOK_DIR):
    for filename in files:
        if filename == 'index.html':
            filepath = os.path.join(root, filename)
            # Skip the top-level index.html (the book's own index)
            if filepath == os.path.join(VUE_BOOK_DIR, 'index.html'):
                continue
            
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            modified = False
            
            # Fix back-link: ../../../../../../../../ru/vue/index.html -> ../../index.html
            old_back = '../../../../../../../../ru/vue/index.html'
            new_back = '../../index.html'
            if old_back in content:
                content = content.replace(old_back, new_back)
                modified = True
                count_back += 1
            
            # Fix lesson-nav-up: ../../../../../../../../../../index.html -> ../../index.html
            old_nav = '../../../../../../../../../../index.html'
            new_nav = '../../index.html'
            if old_nav in content:
                content = content.replace(old_nav, new_nav)
                modified = True
                count_nav += 1
            
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed: {filepath}")

print(f"\nTotal files with back-link fixed: {count_back}")
print(f"Total files with lesson-nav-up fixed: {count_nav}")
