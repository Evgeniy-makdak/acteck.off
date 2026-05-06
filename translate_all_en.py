#!/usr/bin/env python3
"""
translate_all_en.py — Автоматический перевод всех HTML-файлов из ru/ в en/
с использованием Google Translate API (бесплатно, без ключа).

Логика работы:
1. Проходит по всем HTML-файлам в ru/
2. Извлекает текстовое содержимое (заголовки, параграфы, описания)
3. Переводит через Google Translate
4. Сохраняет переведённый HTML в соответствующий файл в en/
5. Пропускает уже переведённые файлы (где нет русского текста)
6. Сохраняет прогресс после каждого файла
"""

import os
import re
import json
import time
import sys
import requests

# ============================================================
# Configuration
# ============================================================
RU_DIR = "/Users/admin/Desktop/homework/acteck.off/ru"
EN_DIR = "/Users/admin/Desktop/homework/acteck.off/en"
CACHE_FILE = "/Users/admin/Desktop/homework/acteck.off/translation_cache.json"
LOG_FILE = "/Users/admin/Desktop/homework/acteck.off/translation_log.json"
DELAY_BETWEEN_REQUESTS = 0.3  # seconds
MAX_RETRIES = 10
TIMEOUT = 60

# ============================================================
# Google Translate API (free, no key needed)
# ============================================================
def google_translate(text, source='ru', target='en'):
    """Translate text using Google Translate free API."""
    url = 'https://translate.googleapis.com/translate_a/single'
    params = {
        'client': 'gtx',
        'sl': source,
        'tl': target,
        'dt': 't',
        'q': text
    }
    
    for attempt in range(MAX_RETRIES):
        try:
            resp = requests.get(url, params=params, timeout=TIMEOUT)
            if resp.status_code == 200:
                data = resp.json()
                translated_parts = []
                for part in data[0]:
                    if part and part[0]:
                        translated_parts.append(part[0])
                return ''.join(translated_parts)
            elif resp.status_code == 429:
                wait = min(30 * (attempt + 1), 120)
                print(f"  ⚠ Rate limited (429), waiting {wait}s...")
                time.sleep(wait)
            else:
                print(f"  ⚠ HTTP {resp.status_code}, attempt {attempt+1}/{MAX_RETRIES}")
                time.sleep(2 ** attempt)
        except requests.exceptions.Timeout:
            print(f"  ⚠ Timeout, attempt {attempt+1}/{MAX_RETRIES}")
            time.sleep(5)
        except requests.exceptions.ConnectionError:
            print(f"  ⚠ Connection error, attempt {attempt+1}/{MAX_RETRIES}")
            time.sleep(10)
        except Exception as e:
            print(f"  ⚠ Error: {e}, attempt {attempt+1}/{MAX_RETRIES}")
            time.sleep(2 ** attempt)
    
    return None


# ============================================================
# Translation Cache
# ============================================================
class TranslationCache:
    def __init__(self, cache_file):
        self.cache_file = cache_file
        self.cache = {}
        self.load()
    
    def load(self):
        if os.path.exists(self.cache_file):
            try:
                with open(self.cache_file, 'r', encoding='utf-8') as f:
                    self.cache = json.load(f)
                print(f"  📦 Loaded {len(self.cache)} cached translations")
            except:
                self.cache = {}
    
    def save(self):
        with open(self.cache_file, 'w', encoding='utf-8') as f:
            json.dump(self.cache, f, ensure_ascii=False, indent=2)
    
    def get(self, text):
        return self.cache.get(text)
    
    def set(self, text, translation):
        self.cache[text] = translation
    
    def size(self):
        return len(self.cache)


# ============================================================
# Progress Log (tracks which files have been processed)
# ============================================================
class ProgressLog:
    def __init__(self, log_file):
        self.log_file = log_file
        self.processed = set()
        self.load()
    
    def load(self):
        if os.path.exists(self.log_file):
            try:
                with open(self.log_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.processed = set(data.get('processed', []))
                print(f"  📋 Loaded progress: {len(self.processed)} files already processed")
            except:
                self.processed = set()
    
    def mark_done(self, rel_path):
        self.processed.add(rel_path)
    
    def is_done(self, rel_path):
        return rel_path in self.processed
    
    def save(self):
        with open(self.log_file, 'w', encoding='utf-8') as f:
            json.dump({'processed': list(self.processed)}, f, ensure_ascii=False, indent=2)


# ============================================================
# HTML Translation Engine
# ============================================================
SKIP_TAGS = {'script', 'style', 'code', 'pre', 'samp', 'kbd', 'var'}
TRANSLATABLE_ATTRS = {'title', 'alt', 'placeholder', 'aria-label', 'aria-description', 'content'}


def has_russian(text):
    """Check if text contains Russian characters."""
    return bool(re.search(r'[а-яА-ЯёЁ]', text))


def translate_html_content(html_content, cache, stats):
    """
    Translate all Russian text in HTML content.
    Preserves HTML structure, only translates text nodes and certain attributes.
    """
    parts = re.split(r'(<[^>]+>)', html_content)
    
    result_parts = []
    text_buffer = []
    skip_depth = 0
    
    for part in parts:
        if not part:
            continue
        
        if part.startswith('<'):
            if text_buffer:
                translated = _translate_text(''.join(text_buffer), cache, stats)
                result_parts.append(translated)
                text_buffer = []
            
            if part.startswith('</'):
                tag_name = part[2:-1].split()[0].lower().rstrip('>')
                if tag_name in SKIP_TAGS:
                    skip_depth -= 1
            else:
                tag_match = re.match(r'<(\w+)', part)
                if tag_match:
                    tag_name = tag_match.group(1).lower()
                    if tag_name in SKIP_TAGS:
                        skip_depth += 1
                    else:
                        part = _translate_attributes(part, cache, stats)
            
            result_parts.append(part)
        else:
            if skip_depth > 0:
                result_parts.append(part)
            elif has_russian(part):
                text_buffer.append(part)
            else:
                if text_buffer:
                    translated = _translate_text(''.join(text_buffer), cache, stats)
                    result_parts.append(translated)
                    text_buffer = []
                result_parts.append(part)
    
    if text_buffer:
        translated = _translate_text(''.join(text_buffer), cache, stats)
        result_parts.append(translated)
    
    return ''.join(result_parts)


def _translate_attributes(tag, cache, stats):
    """Translate translatable attributes in a tag."""
    for attr in TRANSLATABLE_ATTRS:
        def make_replacer(a):
            def replacer(match):
                value = match.group(1)
                if has_russian(value):
                    translated = _translate_text(value, cache, stats)
                    if translated:
                        stats['attr_translations'] += 1
                        return f'{a}="{translated}"'
                return match.group(0)
            return replacer
        
        pattern = rf'{attr}=["\']([^"\']+)["\']'
        tag = re.sub(pattern, make_replacer(attr), tag)
    
    return tag


def _translate_text(text, cache, stats):
    """Translate a single text string, using cache."""
    normalized = re.sub(r'\s+', ' ', text).strip()
    if not normalized or not has_russian(normalized):
        return text
    
    cached = cache.get(normalized)
    if cached:
        stats['cache_hits'] += 1
        return cached
    
    result = google_translate(normalized)
    if result:
        cache.set(normalized, result)
        stats['api_calls'] += 1
        stats['text_translations'] += 1
        time.sleep(DELAY_BETWEEN_REQUESTS)
        return result
    
    return text


# ============================================================
# File Processing
# ============================================================
def needs_translation(filepath):
    """Check if file contains Russian text."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return has_russian(content)


def get_en_path(ru_path):
    """Convert ru/ path to en/ path."""
    relative = os.path.relpath(ru_path, RU_DIR)
    return os.path.join(EN_DIR, relative)


def translate_file(ru_path, en_path, cache, stats):
    """Translate a single HTML file and fix links/lang."""
    with open(ru_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    translated = translate_html_content(content, cache, stats)
    
    # Fix lang attribute
    translated = translated.replace('lang="ru"', 'lang="en"')
    
    # Fix relative links from /ru/ to /en/
    # This handles links like ../../../ru/index.html -> ../../../en/index.html
    translated = re.sub(
        r'(href="(?:\.\./)+)ru/',
        r'\1en/',
        translated
    )
    
    # Fix active class in lang-switch for EN pages
    translated = re.sub(
        r'(<div class="lang-switch">\s*)<a([^>]+)class="lang-btn active">RU</a>',
        r'\1<a\2class="lang-btn">RU</a>',
        translated,
        flags=re.DOTALL
    )
    translated = re.sub(
        r'(<div class="lang-switch">.*?<a[^>]+>RU</a>\s*)<a([^>]+)class="lang-btn">EN</a>',
        r'\1<a\2class="lang-btn active">EN</a>',
        translated,
        flags=re.DOTALL
    )
    
    # Fix back the RU language switcher button
    # It should still point to the RU version
    translated = re.sub(
        r'(<a href="(?:\.\./)+)en/(index\.html" class="lang-btn[^"]*">RU</a>)',
        r'\1ru/\2',
        translated
    )

    os.makedirs(os.path.dirname(en_path), exist_ok=True)
    
    with open(en_path, 'w', encoding='utf-8') as f:
        f.write(translated)
    
    return True


def main():
    print("=" * 70)
    print("  🌐 acteck.off — Automatic Translation Tool")
    print("  ru/ → en/ via Google Translate (free API)")
    print("=" * 70)
    print()
    
    cache = TranslationCache(CACHE_FILE)
    progress = ProgressLog(LOG_FILE)
    
    stats = {
        'total_files': 0,
        'translated_files': 0,
        'skipped_files': 0,
        'failed_files': 0,
        'api_calls': 0,
        'cache_hits': 0,
        'text_translations': 0,
        'attr_translations': 0,
    }
    
    # Collect all HTML files
    all_files = []
    for root, dirs, files in os.walk(RU_DIR):
        for f in files:
            if f.endswith('.html'):
                all_files.append(os.path.join(root, f))
    
    stats['total_files'] = len(all_files)
    print(f"  📁 Found {len(all_files)} HTML files in ru/")
    print()
    
    # Process files
    for idx, ru_path in enumerate(all_files):
        en_path = get_en_path(ru_path)
        rel_path = os.path.relpath(ru_path, RU_DIR)
        
        progress_str = f"[{idx+1}/{len(all_files)}]"
        
        # Skip if already processed in a previous run
        if progress.is_done(rel_path):
            continue
        
        # Check if translation is needed
        if not needs_translation(ru_path):
            print(f"  {progress_str} ⏭  {rel_path} (no Russian text)")
            stats['skipped_files'] += 1
            progress.mark_done(rel_path)
            continue
        
        # Check if already translated
        if os.path.exists(en_path):
            if not needs_translation(en_path):
                print(f"  {progress_str} ✅ {rel_path} (already translated)")
                stats['skipped_files'] += 1
                progress.mark_done(rel_path)
                continue
        
        # Translate
        print(f"  {progress_str} 🔄 {rel_path} ...", end=' ', flush=True)
        
        try:
            translate_file(ru_path, en_path, cache, stats)
            stats['translated_files'] += 1
            progress.mark_done(rel_path)
            print(f"✓")
        except Exception as e:
            stats['failed_files'] += 1
            print(f"✗ ERROR: {e}")
        
        # Save cache and progress after EVERY file
        cache.save()
        progress.save()
        
        # Print periodic stats
        if stats['translated_files'] % 10 == 0 and stats['translated_files'] > 0:
            print(f"     📊 Stats: {stats['translated_files']} translated, "
                  f"{stats['failed_files']} failed, "
                  f"{cache.size()} cache entries, "
                  f"{stats['cache_hits']} cache hits")
    
    # Final save
    cache.save()
    progress.save()
    
    print()
    print("=" * 70)
    print("  ✅ Translation Complete!")
    print(f"  Total files:     {stats['total_files']}")
    print(f"  Translated:      {stats['translated_files']}")
    print(f"  Skipped:         {stats['skipped_files']}")
    print(f"  Failed:          {stats['failed_files']}")
    print(f"  API calls:       {stats['api_calls']}")
    print(f"  Cache hits:      {stats['cache_hits']}")
    print(f"  Cache entries:   {cache.size()}")
    print(f"  Text translates: {stats['text_translations']}")
    print(f"  Attr translates: {stats['attr_translations']}")
    print("=" * 70)


if __name__ == '__main__':
    main()
