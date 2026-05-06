#!/usr/bin/env python3
"""
Translate remaining Russian text in en/ HTML files to English.
Uses a JSON dictionary of translations.
"""

import os
import json
import re
import glob

EN_DIR = "/Users/admin/Desktop/homework/acteck.off/en"
TRANS_FILE = "/Users/admin/Desktop/homework/acteck.off/translations.json"

def load_translations():
    """Load translations from JSON file."""
    if os.path.exists(TRANS_FILE):
        with open(TRANS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def translate_file(filepath, translations):
    """Translate Russian text in a single HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    changes = 0
    
    # Sort by length (longest first) to avoid partial replacements
    for ru_text in sorted(translations.keys(), key=len, reverse=True):
        en_text = translations[ru_text]
        if ru_text in content:
            content = content.replace(ru_text, en_text)
            changes += 1
    
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return changes
    return 0

def main():
    translations = load_translations()
    print(f"Loaded {len(translations)} translations")
    
    all_files = []
    for root, dirs, files in os.walk(EN_DIR):
        for f in files:
            if f.endswith('.html'):
                all_files.append(os.path.join(root, f))
    
    print(f"Found {len(all_files)} HTML files")
    
    total_changes = 0
    changed_files = 0
    
    for filepath in all_files:
        changes = translate_file(filepath, translations)
        if changes > 0:
            total_changes += changes
            changed_files += 1
            print(f"  {changes} changes in {os.path.relpath(filepath, EN_DIR)}")
    
    print(f"\nDone! {changed_files} files modified, {total_changes} total replacements")

if __name__ == '__main__':
    main()
