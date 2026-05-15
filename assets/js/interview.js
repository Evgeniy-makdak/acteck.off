/**
 * Interview Questions Page Functionality
 * 70 вопросов по JavaScript с https://habr.com/ru/articles/486820/
 */

(function() {
  'use strict';

  // Detect locale from URL path
  const pathLocale = window.location.pathname.match(/\/(ru|en)(?=\/)/i)?.[1].toLowerCase() || 'ru';
  const isEn = pathLocale === 'en';

  // Select questions based on locale
  const questions = isEn && typeof INTERVIEW_QUESTIONS_EN !== 'undefined'
    ? INTERVIEW_QUESTIONS_EN
    : (typeof INTERVIEW_QUESTIONS_RU !== 'undefined' ? INTERVIEW_QUESTIONS_RU : INTERVIEW_QUESTIONS);

  const questionsListEl = document.getElementById('questionsList');
  const searchInputEl = document.getElementById('searchInput');

  // Localized strings
  const i18n = {
    noResults: isEn ? 'No questions found' : 'Вопросы не найдены',
    loading: isEn ? 'Loading questions...' : 'Загрузка вопросов...'
  };

  // Wrap tables for mobile horizontal scroll
  function wrapTables() {
    document.querySelectorAll('.answer-content table').forEach(table => {
      if (!table.parentElement.classList.contains('table-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }

  // Render questions list
  function renderQuestions(filteredQuestions) {
    if (!filteredQuestions.length) {
      questionsListEl.innerHTML = `<div class="no-results">${i18n.noResults}</div>`;
      return;
    }

    const html = filteredQuestions.map((q, index) => {
      return `
        <div class="question-item" data-id="${q.id}">
          <div class="question-header">
            <span class="question-item-number">${index + 1}</span>
            <p class="question-item-text">${escapeHtml(q.question)}</p>
            <span class="question-toggle">+</span>
          </div>
          <div class="question-answer">
            <div class="answer-content">${q.answer}</div>
          </div>
        </div>
      `;
    }).join('');

    questionsListEl.innerHTML = html;

    // Wrap tables for horizontal scrolling
    wrapTables();

    // Add click handlers for accordion
    document.querySelectorAll('.question-item').forEach(item => {
      const header = item.querySelector('.question-header');
      const answer = item.querySelector('.question-answer');
      const toggle = item.querySelector('.question-toggle');

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all others (optional - remove this block for multiple open)
        document.querySelectorAll('.question-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.question-toggle').textContent = '+';
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          toggle.textContent = '+';
        } else {
          item.classList.add('open');
          toggle.textContent = '−';
        }
      });
    });
  }

  // Search functionality
  function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderQuestions(questions);
      return;
    }
    
    const filtered = questions.filter(q => {
      return q.question.toLowerCase().includes(query) ||
             q.answer.toLowerCase().includes(query);
    });

    renderQuestions(filtered);
  }

  // Escape HTML
  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  if (searchInputEl) {
    searchInputEl.addEventListener('input', handleSearch);
  }

  // Initialize
  renderQuestions(questions);
})();
