/**
 * Interview Questions Page Functionality
 * Данные встроены в файл для работы без сервера (GitHub Pages)
 * 5 categories: JS Basic, JS Advanced, Angular, React, Frontend
 */

(function() {
  'use strict';

  // Language detection based on URL
  const isRu = window.location.pathname.includes('/ru/');
  const lang = isRu ? 'ru' : 'en';

  // State
  let questions = [];
  let currentCategory = null;
  let currentQuestion = null;

  // DOM Elements
  const categoriesListEl = document.getElementById('categoriesList');
  const questionsListEl = document.getElementById('questionsList');
  const questionsListSection = document.getElementById('questionsListSection');
  const questionDetailEl = document.getElementById('questionDetail');
  const questionContentEl = document.getElementById('questionContent');
  const backToCategoriesEl = document.getElementById('backToCategories');
  const backToQuestionsEl = document.getElementById('backToQuestions');
  const categoryTitleEl = document.getElementById('categoryTitle');
  const searchInputEl = document.getElementById('searchInput');

  // Category titles
  const CATEGORY_TITLES_RU = [
    "Основные Вопросы с Ответами для Senior JavaScript Разработчика",
    "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика",
    "20 Вопросов с Ответами для Собеседования Angular Разработчика",
    "25 Вопросов с Ответами на Собеседовании для React Разработчика",
    "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  ];

  const CATEGORY_TITLES_EN = [
    "Core Questions and Answers for Senior JavaScript Developer",
    "Additional Questions and Answers for Senior JavaScript Developer",
    "20 Questions and Answers for Angular Developer Interview",
    "25 Questions and Answers for React Developer Interview",
    "25 Questions and Answers for Frontend Developer Interview"
  ];

  const CATEGORY_EMOJIS = ['🟦', '🟪', '🟥', '🟩', '🟨'];

  // Загрузка вопросов из встроенных данных
  function loadQuestions() {
    try {
      if (typeof INTERVIEW_QUESTIONS !== 'undefined' && Array.isArray(INTERVIEW_QUESTIONS)) {
        questions = INTERVIEW_QUESTIONS;
        renderCategories();
        console.log('Loaded', questions.length, 'interview questions in', new Set(questions.map(q => q.category)).size, 'categories');
      } else {
        throw new Error('Questions data not found');
      }
    } catch (error) {
      categoriesListEl.innerHTML = `<div class="no-results">${isRu ? 'Ошибка загрузки вопросов: ' + error.message : 'Error loading questions: ' + error.message}</div>`;
      console.error('Error loading questions:', error);
    }
  }

  // Render categories
  function renderCategories() {
    const titles = isRu ? CATEGORY_TITLES_RU : CATEGORY_TITLES_EN;
    const questionsByCategory = {};
    
    questions.forEach(q => {
      if (!questionsByCategory[q.category]) {
        questionsByCategory[q.category] = [];
      }
      questionsByCategory[q.category].push(q);
    });

    const html = titles.map((title, idx) => {
      const categoryName = CATEGORY_TITLES_RU[idx];
      const count = questionsByCategory[categoryName] ? questionsByCategory[categoryName].length : 0;
      return `
        <div class="category-card" data-category="${escapeHtml(categoryName)}">
          <div class="category-emoji">${CATEGORY_EMOJIS[idx]}</div>
          <h3 class="category-title">${escapeHtml(title)}</h3>
          <p class="category-count">${count} ${isRu ? 'вопросов' : 'questions'}</p>
          <span class="category-arrow">→</span>
        </div>
      `;
    }).join('');

    categoriesListEl.innerHTML = html;

    // Add click handlers
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const category = card.dataset.category;
        showCategoryQuestions(category);
      });
    });
  }

  // Show questions for a category
  function showCategoryQuestions(category) {
    currentCategory = category;
    const title = isRu ? category : getEnglishTitle(category);
    
    categoryTitleEl.textContent = title;
    
    const categoryQuestions = questions.filter(q => q.category === category);
    renderQuestionsList(categoryQuestions);
    
    categoriesListEl.parentElement.classList.add('hidden');
    questionsListSection.classList.remove('hidden');
    questionDetailEl.classList.add('hidden');
    window.scrollTo(0, 0);
  }

  // Get English title for category
  function getEnglishTitle(ruTitle) {
    const idx = CATEGORY_TITLES_RU.indexOf(ruTitle);
    return idx >= 0 ? CATEGORY_TITLES_EN[idx] : ruTitle;
  }

  // Render questions list
  function renderQuestionsList(questionList) {
    if (questionList.length === 0) {
      questionsListEl.innerHTML = `<div class="no-results">${isRu ? 'Вопросы не найдены' : 'No questions found'}</div>`;
      return;
    }

    const html = questionList.map(q => {
      const questionText = isRu ? q.question_ru : q.question_en;
      return `
        <div class="question-item" data-id="${q.id}">
          <span class="question-item-number">#${q.id}</span>
          <p class="question-item-text">${escapeHtml(questionText)}</p>
        </div>
      `;
    }).join('');

    questionsListEl.innerHTML = html;

    // Add click handlers
    document.querySelectorAll('.question-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id);
        showQuestionDetail(id);
      });
    });
  }

  // Show question detail
  function showQuestionDetail(id) {
    const question = questions.find(q => q.id === id);
    if (!question) return;

    currentQuestion = question;
    const questionText = isRu ? question.question_ru : question.question_en;
    const answerText = isRu ? question.answer_ru : question.answer_en;
    const explanationText = isRu ? question.explanation_ru : question.explanation_en;

    let html = `
      <h3>${escapeHtml(questionText)}</h3>
      <div class="answer">${formatAnswer(answerText)}</div>
    `;
    
    if (explanationText) {
      html += `
        <div class="explanation-section">
          <h4>${isRu ? '💡 Пояснение' : '💡 Explanation'}</h4>
          <div class="explanation">${formatAnswer(explanationText)}</div>
        </div>
      `;
    }

    questionContentEl.innerHTML = html;

    categoriesListEl.parentElement.classList.add('hidden');
    questionsListSection.classList.add('hidden');
    questionDetailEl.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  // Back to categories
  function showCategories() {
    currentCategory = null;
    currentQuestion = null;
    questionDetailEl.classList.add('hidden');
    questionsListSection.classList.add('hidden');
    categoriesListEl.parentElement.classList.remove('hidden');
    if (searchInputEl) searchInputEl.value = '';
  }

  // Back to questions list
  function showQuestionsList() {
    currentQuestion = null;
    questionDetailEl.classList.add('hidden');
    questionsListSection.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  // Search functionality
  function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      // Reset to current category view
      if (currentCategory) {
        const categoryQuestions = questions.filter(q => q.category === currentCategory);
        renderQuestionsList(categoryQuestions);
      }
      return;
    }
    
    // Search in all questions or current category
    let searchQuestions = currentCategory 
      ? questions.filter(q => q.category === currentCategory)
      : questions;
    
    const filtered = searchQuestions.filter(q => {
      const qText = isRu ? q.question_ru : q.question_en;
      const aText = isRu ? q.answer_ru : q.answer_en;
      return (qText && qText.toLowerCase().includes(query)) || 
             (aText && aText.toLowerCase().includes(query));
    });
    
    if (!currentCategory) {
      // Show all categories but highlight matching ones
      // For simplicity, switch to questions view
      categoryTitleEl.textContent = isRu ? 'Результаты поиска' : 'Search Results';
      categoriesListEl.parentElement.classList.add('hidden');
      questionsListSection.classList.remove('hidden');
      questionDetailEl.classList.add('hidden');
    }
    
    renderQuestionsList(filtered);
  }

  // Format answer text (convert newlines to <br>, code blocks, etc.)
  function formatAnswer(text) {
    if (!text) return '';
    
    // Escape HTML
    let formatted = escapeHtml(text);
    
    // Convert code blocks (```lang...```)
    formatted = formatted.replace(/```(\w+)?\n([\s\S]*?)```/g, function(match, lang, code) {
      return `<pre class="code-block"><code class="language-${lang || 'javascript'}">${code.trim()}</code></pre>`;
    });
    
    // Convert inline code (`...`)
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
    
    // Convert newlines to <br> (but not inside pre blocks)
    // Split by <pre> tags, process only non-pre parts
    const parts = formatted.split(/(<pre[\s\S]*?<\/pre>)/g);
    formatted = parts.map((part, idx) => {
      if (part.startsWith('<pre')) return part;
      return part.replace(/\n/g, '<br>');
    }).join('');
    
    return formatted;
  }

  // Escape HTML
  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Event listeners
  if (backToCategoriesEl) {
    backToCategoriesEl.addEventListener('click', showCategories);
  }

  if (backToQuestionsEl) {
    backToQuestionsEl.addEventListener('click', showQuestionsList);
  }

  if (searchInputEl) {
    searchInputEl.addEventListener('input', handleSearch);
  }

  // Initialize
  loadQuestions();
})();
