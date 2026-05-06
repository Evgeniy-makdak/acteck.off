import os
import re

def fix_logo_link(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Calculate relative path to the root acteck.off directory
    # The project structure is like /Users/admin/Desktop/homework/acteck.off/ru/path/to/file.html
    # We want to point to ru/index.html relative to the project root.
    
    rel_path = os.path.relpath(filepath, "/Users/admin/Desktop/homework/acteck.off")
    depth = rel_path.count(os.sep)
    prefix = "../" * depth
    
    target_link = prefix + "ru/index.html"
    
    # Replace the logo link href
    # Looking for <a href="..." class="logo">
    content = re.sub(
        r'(<a href=")[^"]*(" class="logo">)',
        r'\1' + target_link + r'\2',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    base_dir = "/Users/admin/Desktop/homework/acteck.off"
    fixed_count = 0
    
    for root, dirs, files in os.walk(base_dir):
        # Skip assets and .git
        if 'assets' in root or '.git' in root:
            continue
            
        for f in files:
            if f.endswith('.html'):
                if fix_logo_link(os.path.join(root, f)):
                    fixed_count += 1
                    
    print(f"Fixed logo links in {fixed_count} files")

if __name__ == '__main__':
    main()
