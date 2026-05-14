#!/usr/bin/env python3
"""
Скрипт для перевода вопросов и ответов на русский язык.
Использует deep-translator для перевода.
"""

import json
import time

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("Установка deep-translator...")
    import subprocess
    subprocess.check_call(['pip', 'install', 'deep-translator'])
    from deep_translator import GoogleTranslator

def translate_text(text, translator, max_retries=3):
    """Переводит текст с английского на русский с повторами при ошибках."""
    if not text or not text.strip():
        return text
    
    for attempt in range(max_retries):
        try:
            # Ограничение Google Translate ~5000 символов
            if len(text) > 4500:
                # Разбиваем на части
                parts = []
                current = ""
                for line in text.split('\n'):
                    if len(current) + len(line) + 1 > 4500:
                        if current:
                            parts.append(current)
                        current = line
                    else:
                        current += '\n' + line if current else line
                if current:
                    parts.append(current)
                
                translated_parts = []
                for part in parts:
                    translated = translator.translate(part)
                    translated_parts.append(translated)
                    time.sleep(0.3)
                return '\n'.join(translated_parts)
            else:
                return translator.translate(text)
        except Exception as e:
            print(f"  Ошибка перевода (попытка {attempt + 1}): {e}")
            time.sleep(2)
    
    return text

def main():
    print("Загрузка английских вопросов...")
    with open('questions_en.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
    
    print(f"Всего вопросов: {len(questions)}")
    print("Инициализация переводчика...")
    translator = GoogleTranslator(source='en', target='ru')
    
    translated_questions = []
    
    for i, q in enumerate(questions):
        print(f"\n[{i+1}/{len(questions)}] Перевод вопроса #{q['id']}...")
        
        # Переводим вопрос
        print(f"  Вопрос: {q['question_en'][:60]}...")
        question_ru = translate_text(q['question_en'], translator)
        
        # Переводим ответ
        print(f"  Ответ ({len(q['answer_en'])} символов)...")
        answer_ru = translate_text(q['answer_en'], translator)
        
        translated_questions.append({
            'id': q['id'],
            'question_ru': question_ru,
            'answer_ru': answer_ru,
            'question_en': q['question_en'],
            'answer_en': q['answer_en']
        })
        
        # Сохраняем прогресс каждые 10 вопросов
        if (i + 1) % 10 == 0:
            print(f"  Сохранение промежуточного результата...")
            with open('questions_ru_progress.json', 'w', encoding='utf-8') as f:
                json.dump(translated_questions, f, ensure_ascii=False, indent=2)
        
        time.sleep(0.5)
    
    # Сохраняем финальный результат
    print("\nСохранение финального результата...")
    with open('ru/interview/questions_ru.json', 'w', encoding='utf-8') as f:
        json.dump(translated_questions, f, ensure_ascii=False, indent=2)
    
    print(f"\nГотово! Переведено {len(translated_questions)} вопросов.")
    print("Файл сохранен: ru/interview/questions_ru.json")

if __name__ == '__main__':
    main()
