import os
import re

def fix_lang_switch_in_file(filepath, is_en):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    if is_en:
        # 1. Ensure lang="en"
        content = content.replace('lang="ru"', 'lang="en"')
        
        # 2. Fix lang-switch buttons for EN pages
        # Find the lang-switch block and swap active class
        # Pattern to find the RU button that is active and make it inactive
        content = re.sub(
            r'(<div class="lang-switch">\s*)<a([^>]+)class="lang-btn active">RU</a>',
            r'\1<a\2class="lang-btn">RU</a>',
            content,
            flags=re.DOTALL
        )
        # Pattern to find the EN button that is NOT active and make it active
        content = re.sub(
            r'(<div class="lang-switch">.*?<a[^>]+>RU</a>\s*)<a([^>]+)class="lang-btn">EN</a>',
            r'\1<a\2class="lang-btn active">EN</a>',
            content,
            flags=re.DOTALL
        )
    else:
        # For RU pages, ensure RU is active (though it usually is)
        content = content.replace('lang="en"', 'lang="ru"')
        
        # Ensure RU is active and EN is not
        content = re.sub(
            r'(<div class="lang-switch">\s*)<a([^>]+)class="lang-btn">RU</a>',
            r'\1<a\2class="lang-btn active">RU</a>',
            content,
            flags=re.DOTALL
        )
        content = re.sub(
            r'(<div class="lang-switch">.*?<a[^>]+>RU</a>\s*)<a([^>]+)class="lang-btn active">EN</a>',
            r'\1<a\2class="lang-btn">EN</a>',
            content,
            flags=re.DOTALL
        )

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    base_dir = "/Users/admin/Desktop/homework/acteck.off"
    en_dir = os.path.join(base_dir, "en")
    ru_dir = os.path.join(base_dir, "ru")
    
    fixed_count = 0
    
    print("Processing EN directory...")
    for root, dirs, files in os.walk(en_dir):
        for f in files:
            if f.endswith('.html'):
                if fix_lang_switch_in_file(os.path.join(root, f), is_en=True):
                    fixed_count += 1
                    
    print("Processing RU directory...")
    for root, dirs, files in os.walk(ru_dir):
        for f in files:
            if f.endswith('.html'):
                if fix_lang_switch_in_file(os.path.join(root, f), is_en=False):
                    fixed_count += 1
                    
    print(f"Total files fixed: {fixed_count}")

if __name__ == '__main__':
    main()
