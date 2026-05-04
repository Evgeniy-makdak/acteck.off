#!/usr/bin/env python3
"""
Копирует структуру файлов из ru/ в en/.
Для каждого HTML-файла:
1. Копирует содержимое из ru/ в en/
2. Заменяет lang="ru" на lang="en"
3. Заменяет пути с /ru/ на /en/ в href и src
4. Переводит основные тексты навигации на английский
"""

import os
import re
import shutil

RU_DIR = "/Users/admin/Desktop/homework/acteck.off/ru"
EN_DIR = "/Users/admin/Desktop/homework/acteck.off/en"

# Разделы для копирования
SECTIONS = [
    "markup", "javascript", "typescript", "vue", "react",
    "nodejs", "next", "git", "webpack", "internet",
    "terminal", "deploy", "theory",
]

# Таблица перевода русских текстов в английские
TRANSLATIONS = {
    # Навигация
    "← Начало": "← Start",
    "Конец →": "End →",
    "К списку уроков": "Back to lessons",
    "к списку уроков": "back to lessons",
    "На главную": "Home",
    "на главную": "home",
    "← Назад": "← Back",
    "Назад": "Back",
    "Вперёд": "Forward",
    "Предыдущий урок": "Previous lesson",
    "Следующий урок": "Next lesson",
    "предыдущий урок": "previous lesson",
    "следующий урок": "next lesson",
    "Предыдущая глава": "Previous chapter",
    "Следующая глава": "Next chapter",
    "предыдущая глава": "previous chapter",
    "следующая глава": "next chapter",
    "Предыдущий раздел": "Previous section",
    "Следующий раздел": "Next section",
    "предыдущий раздел": "previous section",
    "следующий раздел": "next section",
    "Предыдущая страница": "Previous page",
    "Следующая страница": "Next page",
    "предыдущая страница": "previous page",
    "следующая страница": "next page",
    "В начало": "To start",
    "В конец": "To end",
    "Начало": "Start",
    "Конец": "End",
    "Содержание": "Contents",
    "Оглавление": "Table of contents",
    "Главная": "Home",
    "Главная": "Home",
    "Глоссарий": "Glossary",
    "Словарь терминов": "Glossary of terms",
    "Термины и определения": "Terms and definitions",
    "Справочники": "References",
    "Учебники": "Textbooks",
    "Задачи": "Tasks",
    "Задачник": "Tasker",
    "Практические задания": "Practical exercises",
    "Практические примеры": "Practical examples",
    "Часто задаваемые вопросы": "Frequently Asked Questions",
    "Вопросы и ответы": "Questions and Answers",
    "Разделы": "Sections",
    "Дополнительно": "Additional",
    "Инструменты": "Tools",
    "Ресурсы": "Resources",
    "Полезные ссылки": "Useful links",
    "Ссылки": "Links",
    "Информация": "Information",
    "О проекте": "About",
    "Контакты": "Contacts",
    "Телеграм": "Telegram",
    "Автор:": "Author:",
    "Все материалы предоставлены для образовательных целей": "All materials provided for educational purposes",
    "обучение программированию": "programming education",
    "Обучение программированию от Евгения Ацтека": "Programming Education by Evgeniy Acteck",
    "Современные учебники, задачники и справочники по веб-разработке. Автор: Евгений Волков.": "Modern textbooks, problem books and reference guides for web development. Author: Evgeniy Acteck.",
    "Современные учебники, задачники и справочники по веб-разработке от практикующего разработчика": "Modern textbooks, problem books and reference guides for web development from a practicing developer",
    "Изучай": "Learn",
    "программирование": "Programming",
    "Автор: <strong>Евгений Волков</strong>": "Author: <strong>Evgeniy Acteck</strong>",
    "Евгений Волков": "Evgeniy Acteck",
    "Вёрстка": "Markup",
    "HTML, CSS, адаптивная верстка, Flexbox, Grid, препроцессоры": "HTML, CSS, responsive layout, Flexbox, Grid, preprocessors",
    "Основы, продвинутые концепции, DOM, асинхронность, фреймворки": "Basics, advanced concepts, DOM, async, frameworks",
    "Статическая типизация, интерфейсы, дженерики, декораторы": "Static typing, interfaces, generics, decorators",
    "Компонентный подход, реактивность, Vue Router, Pinia, Composition API": "Component approach, reactivity, Vue Router, Pinia, Composition API",
    "Компоненты, хуки, состояние, роутинг, Next.js, экосистема": "Components, hooks, state, routing, Next.js, ecosystem",
    "Серверный JavaScript, Express, базы данных, REST API, аутентификация": "Server-side JavaScript, Express, databases, REST API, authentication",
    "SSR, SSG, App Router, Server Components, API Routes, оптимизация": "SSR, SSG, App Router, Server Components, API Routes, optimization",
    "Система контроля версий, ветвление, слияние, GitHub, CI/CD": "Version control, branching, merging, GitHub, CI/CD",
    "Сборщик модулей, лоадеры, плагины, оптимизация, code splitting": "Module bundler, loaders, plugins, optimization, code splitting",
    "Протоколы HTTP/HTTPS, DNS, безопасность, REST, WebSockets": "HTTP/HTTPS protocols, DNS, security, REST, WebSockets",
    "Командная строка, bash/zsh, скрипты, утилиты, автоматизация": "Command line, bash/zsh, scripts, utilities, automation",
    "Хостинг, CI/CD, Docker, облачные платформы, домены, SSL": "Hosting, CI/CD, Docker, cloud platforms, domains, SSL",
    "Словарь терминов и определений в веб-разработке и программировании": "Dictionary of terms and definitions in web development and programming",
    "Учебники, справочники, задачи": "Textbooks, references, tasks",
    "Учебники, справочники, FAQ": "Textbooks, references, FAQ",
    "Учебники, справочники": "Textbooks, references",
    "Основы JavaScript": "JavaScript basics",
    "Продвинутые темы": "Advanced topics",
    "Объектно-ориентированное программирование": "Object-oriented programming",
    "Базовый учебник HTML/CSS": "Prime Textbook HTML/CSS",
    "Продвинутый учебник HTML/CSS": "Supreme Textbook HTML/CSS",
    "Справочник HTML": "HTML Reference",
    "Справочник CSS": "CSS Reference",
    "все теги и атрибуты": "all tags and attributes",
    "все свойства и селекторы": "all properties and selectors",
    "Задачник по уровням": "Tasker by levels",
    "практические упражнения": "practical exercises",
    "от нуля до уверенного уровня": "from zero to confident level",
    "продвинутые техники вёрстки": "advanced layout techniques",
    "Полный курс JavaScript от основ до продвинутых тем": "Complete JavaScript course from basics to advanced concepts",
    "Базовый учебник": "Prime Textbook",
    "Продвинутый учебник": "Supreme Textbook",
    "Учебник по ООП": "OOP Textbook",
    "Практический учебник": "Practice Textbook",
    "Справочник JavaScript": "JavaScript Reference",
    "Верстка": "Markup",
    "Программирование": "Programming",
    "Обучение": "Education",
    "Учебные материалы": "Learning materials",
    "RU": "RU",
    "EN": "EN",
    "Теория": "Theory",
    "Урок": "Lesson",
    "Глава": "Chapter",
    "Раздел": "Section",
    "Страница": "Page",
    # HTTP specific
    "Введение": "Introduction",
    "Запросы и ответы": "Requests and Responses",
    "Отсутствие состояния": "Stateless Protocol",
    "Структура HTTP сообщений": "HTTP Message Structure",
    "Стартовая строка HTTP запроса": "HTTP Request Starting Line",
    "Методы HTTP запросов": "HTTP Request Methods",
    "Стартовая строка HTTP ответа": "HTTP Response Starting Line",
    "Группы кодов состояний HTTP ответа": "HTTP Response Status Code Groups",
    "HTTP заголовки": "HTTP Headers",
    "Группы HTTP заголовков": "HTTP Header Groups",
    "Полезные HTTP заголовки": "Useful HTTP Headers",
    "Свои HTTP заголовки": "Custom HTTP Headers",
    "Тело HTTP сообщения": "HTTP Message Body",
    "Автоматические HTTP запросы браузера": "Browser Auto Requests",
    "Затраты на HTTP запросы": "HTTP Request Costs",
    "HTTP сообщения в отладчике браузера": "HTTP Messages in Browser Debugger",
    "HTTP редиректы": "HTTP Redirects",
    "HTTP Referer": "HTTP Referer",
    "User Agent": "User Agent",
    "HTTPS": "HTTPS",
    "GET параметры": "GET Parameters",
    "Отправка форм методом GET": "Form Submission via GET",
    "Отправка форм методом POST": "Form Submission via POST",
    "MIME типы": "MIME Types",
    "AJAX": "AJAX",
    "Cookie": "Cookie",
    "Сессии": "Sessions",
    "API": "API",
    "REST API": "REST API",
    # Glossary specific
    "Стиль кода": "Code Style",
    "Стиль кода camelCase": "camelCase Code Style",
    "Стиль кода snake_case": "snake_case Code Style",
    "Стиль кода kebab-case": "kebab-case Code Style",
    "Стиль кода PascalCase": "PascalCase Code Style",
    "Принципы SOLID": "SOLID Principles",
    "Принцип DRY": "DRY Principle",
    "Принцип KISS": "KISS Principle",
    "Принцип YAGNI": "YAGNI Principle",
    "Принцип CQS": "CQS Principle",
    "Принцип LoD (Закон Деметры)": "LoD Principle (Law of Demeter)",
    "Принцип разделения ответственности": "Separation of Concerns",
    "SCRUM": "SCRUM",
    "Канбан": "Kanban",
    "Экстремальное программирование (XP)": "Extreme Programming (XP)",
    "RUP (Rational Unified Process)": "RUP (Rational Unified Process)",
    "RAD (Быстрая разработка приложений)": "RAD (Rapid Application Development)",
    "PMBOK": "PMBOK",
    "COBIT": "COBIT",
    "PRINCE2": "PRINCE2",
    "ITIL": "ITIL",
    "Agile (Гибкая методология разработки)": "Agile (Agile Development Methodology)",
    "TDD (Разработка через тестирование)": "TDD (Test-Driven Development)",
    "Антипаттерн": "Anti-pattern",
    "Паттерны проектирования": "Design Patterns",
    "UML (Унифицированный язык моделирования)": "UML (Unified Modeling Language)",
    "Парадигма программирования": "Programming Paradigm",
    "ООП (Объектно-ориентированное программирование)": "OOP (Object-Oriented Programming)",
    "REST": "REST",
    "API": "API",
    "MVC (Model-View-Controller)": "MVC (Model-View-Controller)",
    "Покер планирования": "Planning Poker",
    "Диаграмма сгорания задач": "Burndown Chart",
    "SOAP": "SOAP",
    "CORS (Cross-Origin Resource Sharing)": "CORS (Cross-Origin Resource Sharing)",
    "Язык программирования высокого уровня": "High-Level Programming Language",
    "Язык программирования низкого уровня": "Low-Level Programming Language",
    "Машинный язык": "Machine Language",
    "Язык разметки": "Markup Language",
    "IDE (Интегрированная среда разработки)": "IDE (Integrated Development Environment)",
    "Trello": "Trello",
    "Git": "Git",
    "Альфа-версия": "Alpha Version",
    "Бета-версия": "Beta Version",
    "Легаси (Устаревший код)": "Legacy Code",
    "Модуль": "Module",
    "Утечка памяти": "Memory Leak",
    "Runtime (Среда выполнения)": "Runtime",
    "Серверная часть (Backend)": "Server-Side (Backend)",
    "Исходные данные": "Source Data",
    "Браузер": "Browser",
    "Поисковая система": "Search Engine",
    "Программное обеспечение": "Software",
    "Операционная система": "Operating System",
    "Стек": "Stack",
    "Куча (Heap)": "Heap",
    "CDN (Сеть доставки контента)": "CDN (Content Delivery Network)",
    "LIFO (Last In, First Out)": "LIFO (Last In, First Out)",
    "FIFO (First In, First Out)": "FIFO (First In, First Out)",
}


def translate_content(content):
    """Переводит русские тексты в английские."""
    for ru_text, en_text in TRANSLATIONS.items():
        content = content.replace(ru_text, en_text)
    return content


def fix_paths(content):
    """Заменяет пути с /ru/ на /en/ в href и src атрибутах."""
    # Заменяем lang="ru" на lang="en"
    content = content.replace('lang="ru"', 'lang="en"')
    
    # Заменяем пути в href и src
    # Сначала заменяем явные ссылки на ru/
    content = re.sub(r'(href|src)="([^"]*)/ru/', r'\1="\2/en/', content)
    
    return content


def copy_structure():
    """Копирует структуру файлов из ru/ в en/."""
    total_files = 0
    
    for section in SECTIONS:
        src_dir = os.path.join(RU_DIR, section)
        dst_dir = os.path.join(EN_DIR, section)
        
        if not os.path.exists(src_dir):
            print(f"  SKIP (source not found): {section}")
            continue
        
        section_count = 0
        for root, dirs, files in os.walk(src_dir):
            # Вычисляем относительный путь
            rel_path = os.path.relpath(root, src_dir)
            if rel_path == '.':
                dst_root = dst_dir
            else:
                dst_root = os.path.join(dst_dir, rel_path)
            
            # Создаём директорию
            os.makedirs(dst_root, exist_ok=True)
            
            for file in files:
                if file == '.DS_Store':
                    continue
                
                src_file = os.path.join(root, file)
                dst_file = os.path.join(dst_root, file)
                
                if file.endswith('.html'):
                    try:
                        with open(src_file, 'r', encoding='utf-8') as f:
                            content = f.read()
                        
                        # Применяем замены
                        content = fix_paths(content)
                        content = translate_content(content)
                        
                        with open(dst_file, 'w', encoding='utf-8') as f:
                            f.write(content)
                        
                        section_count += 1
                    except Exception as e:
                        print(f"    ERROR: {os.path.join(section, rel_path, file)}: {e}")
                else:
                    # Копируем не-HTML файлы как есть
                    try:
                        shutil.copy2(src_file, dst_file)
                    except Exception as e:
                        print(f"    ERROR copying {os.path.join(section, rel_path, file)}: {e}")
        
        print(f"  {section}: {section_count} HTML files copied")
        total_files += section_count
    
    print(f"\nTotal: {total_files} HTML files copied")


def main():
    print("Copying ru/ structure to en/...")
    copy_structure()
    print("Done!")


if __name__ == "__main__":
    main()
