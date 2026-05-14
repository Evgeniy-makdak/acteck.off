#!/bin/bash
# Запуск локального сервера для acteck.off

echo "🚀 Запуск локального сервера..."
echo "📂 Директория: $(pwd)"
echo "🌐 Откройте в браузере: http://localhost:8000"
echo ""
echo "📍 Быстрые ссылки:"
echo "   - Главная (RU): http://localhost:8000/ru/index.html"
echo "   - Главная (EN): http://localhost:8000/en/index.html"
echo "   - Вопросы (RU): http://localhost:8000/ru/interview/index.html"
echo "   - Вопросы (EN): http://localhost:8000/en/interview/index.html"
echo ""
echo "⏹  Для остановки нажмите Ctrl+C"
echo ""

python3 -m http.server 8000
