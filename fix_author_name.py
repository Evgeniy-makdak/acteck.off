import os
import re

def fix_author_name(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace Ацтека with Волкова in the title
    # Example: <title>acteck.off — Обучение программированию от Евгения Ацтека</title>
    content = content.replace('Обучение программированию от Евгения Ацтека', 'Обучение программированию от Евгения Волкова')
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    base_dir = "/Users/admin/Desktop/homework/acteck.off"
    fixed_count = 0
    
    # We only need to check HTML files, particularly in ru/ and en/
    for root, dirs, files in os.walk(base_dir):
        if 'assets' in root or '.git' in root:
            continue
            
        for f in files:
            if f.endswith('.html'):
                if fix_author_name(os.path.join(root, f)):
                    fixed_count += 1
                    
    print(f"Fixed author name in {fixed_count} files")

if __name__ == '__main__':
    main()
