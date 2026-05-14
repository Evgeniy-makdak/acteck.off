#!/usr/bin/env python3
"""
Скрипт для парсинга вопросов из pdf_text.txt и создания JSON файлов
с вопросами и ответами на русском и английском языках.
"""

import re
import json

def parse_questions(filepath):
    """Парсит вопросы и ответы из pdf_text.txt"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Разделяем по маркерам страниц
    pages = re.split(r'---PAGE_\d+---', content)
    
    # Объединяем весь текст
    full_text = '\n'.join(pages)
    
    # Удаляем метаданные PDF
    full_text = re.sub(r'26/4/2021 md2pdf - Markdown to PDF', '', full_text)
    full_text = re.sub(r'https://md2pdf\.netlify\.app \d+/\d+', '', full_text)
    
    questions = []
    
    # Паттерн для поиска вопросов с номерами (например, "1. What are the possible ways...")
    # Вопросы начинаются с цифры и точки в начале строки
    question_pattern = r'^(\d+)\.\s+(.+?)\n'
    
    # Находим все вопросы
    matches = list(re.finditer(question_pattern, full_text, re.MULTILINE))
    
    for i, match in enumerate(matches):
        question_num = int(match.group(1))
        question_text = match.group(2).strip()
        
        # Получаем ответ - текст между текущим вопросом и следующим
        start_pos = match.end()
        end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(full_text)
        
        answer_text = full_text[start_pos:end_pos].strip()
        
        # Очищаем ответ от лишних символов и номеров страниц
        answer_text = re.sub(r'---PAGE_\d+---', '', answer_text)
        answer_text = re.sub(r'26/4/2021 md2pdf - Markdown to PDF', '', answer_text)
        answer_text = re.sub(r'https://md2pdf\.netlify\.app \d+/\d+', '', answer_text)
        answer_text = re.sub(r'Screenshot', '', answer_text)
        answer_text = answer_text.strip()
        
        questions.append({
            'id': question_num,
            'question_en': question_text,
            'answer_en': answer_text
        })
    
    return questions

def main():
    print("Парсинг вопросов из pdf_text.txt...")
    questions = parse_questions('pdf_text.txt')
    print(f"Найдено вопросов: {len(questions)}")
    
    # Сохраняем английскую версию
    with open('questions_en.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    print("Сохранено: questions_en.json")
    
    # Для русской версии нужно перевести вопросы
    # Создадим заглушку с переводом первых вопросов для демонстрации
    ru_questions = []
    for q in questions[:50]:  # Первые 50 вопросов для примера
        ru_questions.append({
            'id': q['id'],
            'question_en': q['question_en'],
            'answer_en': q['answer_en'],
            'question_ru': f"[Перевод] {q['question_en']}",
            'answer_ru': f"[Перевод] {q['answer_en']}"
        })
    
    with open('questions_ru_partial.json', 'w', encoding='utf-8') as f:
        json.dump(ru_questions, f, ensure_ascii=False, indent=2)
    print("Сохранено: questions_ru_partial.json (первые 50 вопросов с заглушками перевода)")

if __name__ == '__main__':
    main()
