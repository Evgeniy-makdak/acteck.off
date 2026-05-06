/* ============================================
   acteck.off - Tasker Engine
   ============================================ */

const TASKS = {
    '101': {
        id: '101',
        title: { ru: 'Инициалы имени', en: 'Abbreviate Name' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая преобразует имя в инициалы. Входные данные — строка из двух слов с одним пробелом между ними. Результатом должны быть две заглавные буквы с точкой, разделяющей их.',
            en: 'Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.'
        },
        initialCode: 'function abbrevName(name) {\n  // Your code here\n}',
        tests: [
            { input: ['Sam Harris'], expected: 'S.H' },
            { input: ['patrick feeney'], expected: 'P.F' },
            { input: ['Evan Cole'], expected: 'E.C' },
            { input: ['David Mendieta'], expected: 'D.M' }
        ]
    },
    '102': {
        id: '102',
        title: { ru: 'Маскировка карты', en: 'Credit Card Mask' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая заменяет все символы строки на "#", кроме последних четырех.',
            en: 'Write a function that masks all characters of a string except for the last four characters.'
        },
        initialCode: 'function maskify(cc) {\n  // Your code here\n}',
        tests: [
            { input: ['455678'], expected: '##5678' },
            { input: ['1234567890123456'], expected: '############3456' },
            { input: ['skippy'], expected: '##ippy' },
            { input: [''], expected: '' }
        ]
    },
    '103': {
        id: '103',
        title: { ru: 'Определить век по году', en: 'Calculate Century' },
        difficulty: 'easy',
        description: {
            ru: 'Первый век охватывает период с 1 года по 100 год включительно, второй — с 101 года по 200 год включительно и так далее. По заданному году верните век, в котором он находится.',
            en: 'The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.'
        },
        initialCode: 'function century(year) {\n  // Your code here\n}',
        tests: [
            { input: [1705], expected: 18 },
            { input: [1900], expected: 19 },
            { input: [1601], expected: 17 },
            { input: [2000], expected: 20 },
            { input: [89], expected: 1 }
        ]
    },
    '104': {
        id: '104',
        title: { ru: 'Разворот строки', en: 'Reverse String' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает строку и возвращает её в перевернутом виде.',
            en: 'Write a function that takes a string and returns it reversed.'
        },
        initialCode: 'function reverseString(str) {\n  // Your code here\n}',
        tests: [
            { input: ['hello'], expected: 'olleh' },
            { input: ['world'], expected: 'dlrow' },
            { input: ['12345'], expected: '54321' },
            { input: [''], expected: '' }
        ]
    },
    '105': {
        id: '105',
        title: { ru: 'Рост населения', en: 'Population Growth' },
        difficulty: 'medium',
        description: {
            ru: 'В начале года население города составляет p0 = 1000. Население ежегодно увеличивается на 2% и еще на 50 новых жителей. Сколько лет потребуется городу, чтобы его население достигло или превысило p = 1200?',
            en: 'At the start of the year, the population of a town is p0 = 1000. The population increases by 2% each year and plus 50 new inhabitants. How many years does the town need to see its population greater or equal to p = 1200?'
        },
        initialCode: 'function nbYear(p0, percent, aug, p) {\n  // Your code here\n}',
        tests: [
            { input: [1500, 5, 100, 5000], expected: 15 },
            { input: [1500000, 2.5, 10000, 2000000], expected: 10 },
            { input: [1500000, 0.25, 1000, 2000000], expected: 94 }
        ]
    },
    '201': {
        id: '201',
        title: { ru: 'Самое короткое слово', en: 'Shortest Word' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает строку слов и возвращает длину самого короткого слова.',
            en: 'Simple, given a string of words, return the length of the shortest word(s).'
        },
        initialCode: 'function findShort(s) {\n  // Your code here\n}',
        tests: [
            { input: ['bitcoin take over the world maybe who knows perhaps'], expected: 3 },
            { input: ['turns out random test cases are easier than writing out basic ones'], expected: 3 },
            { input: ['lets talk about javascript the best language'], expected: 3 },
            { input: ['i want to travel the world writing code one day'], expected: 1 },
            { input: ['Lets all go on holiday somewhere very cold'], expected: 2 }
        ]
    },
    '301': {
        id: '301',
        title: { ru: 'Плюс один год', en: 'Plus One Year' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает объект человека с полем age и увеличивает его на 1.',
            en: 'Write a function that takes a person object with an age field and increments it by 1.'
        },
        initialCode: 'function incrementAge(person) {\n  // Your code here\n}',
        tests: [
            { input: [{ name: 'John', age: 25 }], expected: { name: 'John', age: 26 } },
            { input: [{ name: 'Jane', age: 30 }], expected: { name: 'Jane', age: 31 } }
        ]
    },
    '601': {
        id: '601',
        title: { ru: 'Глубина объекта', en: 'Max Depth' },
        difficulty: 'hard',
        description: {
            ru: 'Напишите функцию, которая вычисляет максимальную глубину вложенности объекта.',
            en: 'Write a function that calculates the maximum nesting depth of an object.'
        },
        initialCode: 'function maxDepth(obj) {\n  // Your code here\n}',
        tests: [
            { input: [{ a: 1, b: { c: 2 } }], expected: 2 },
            { input: [{ a: 1, b: { c: { d: 3 } } }], expected: 3 },
            { input: [{ a: 1 }], expected: 1 },
            { input: [{}], expected: 1 }
        ]
    }
};

const TOPICS = [
    {
        id: 'logic',
        title: { ru: 'Условия и циклы', en: 'Conditions and Loops' },
        taskIds: ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110']
    },
    {
        id: 'arrays',
        title: { ru: 'Массивы и строки', en: 'Arrays and Strings' },
        taskIds: ['201', '202', '203', '204', '205']
    },
    {
        id: 'objects',
        title: { ru: 'Объекты и сортировки', en: 'Objects and Sorting' },
        taskIds: ['301', '302', '303']
    },
    {
        id: 'fp',
        title: { ru: 'Функциональное программирование', en: 'Functional Programming' },
        taskIds: ['401', '402', '403']
    },
    {
        id: 'oop',
        title: { ru: 'ООП: this, классы, прототипы', en: 'OOP: this, classes, prototypes' },
        taskIds: ['501', '502', '503']
    },
    {
        id: 'recursion',
        title: { ru: 'Рекурсия', en: 'Recursion' },
        taskIds: ['601', '602', '603']
    },
    {
        id: 'async',
        title: { ru: 'Асинхронность', en: 'Asynchrony' },
        taskIds: ['701', '702', '703']
    }
];

function initTasker() {
    const urlParams = new URLSearchParams(window.location.search);
    const problemId = urlParams.get('id');
    const topicId = urlParams.get('topic');

    if (problemId) {
        renderProblem(problemId);
    } else if (topicId) {
        renderTopic(topicId);
    } else {
        renderTopics();
    }
}

function renderTopics() {
    const container = document.getElementById('tasker-content');
    if (!container) return;

    const lang = document.documentElement.lang || 'ru';
    
    let html = `<div class="topics-grid">`;
    TOPICS.forEach(topic => {
        html += `
            <div class="topic-card" onclick="window.location.href='?topic=${topic.id}'">
                <h3>${topic.title[lang]}</h3>
                <span class="task-count">${topic.taskIds.length} ${lang === 'ru' ? 'задач' : 'tasks'}</span>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}

function renderTopic(topicId) {
    const container = document.getElementById('tasker-content');
    if (!container) return;

    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    const lang = document.documentElement.lang || 'ru';

    let html = `
        <a href="index.html" class="back-link">← ${lang === 'ru' ? 'К разделам' : 'Back to topics'}</a>
        <h2>${topic.title[lang]}</h2>
        <div class="problem-list">
    `;

    topic.taskIds.forEach(id => {
        const task = TASKS[id] || { id, title: { ru: `Задача ${id}`, en: `Problem ${id}` } };
        html += `
            <a href="?id=${id}" class="problem-item">
                <div class="problem-info">
                    <span class="problem-id">${id}</span>
                    <span class="problem-title">${task.title[lang]}</span>
                </div>
                <div class="problem-meta">
                    <span class="difficulty ${task.difficulty || 'easy'}">${task.difficulty || 'easy'}</span>
                </div>
            </a>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function renderProblem(id) {
    const container = document.getElementById('tasker-content');
    if (!container) return;

    const task = TASKS[id];
    if (!task) {
        container.innerHTML = 'Problem not found';
        return;
    }

    const topic = TOPICS.find(t => t.taskIds.includes(id));
    const lang = document.documentElement.lang || 'ru';
    const backUrl = topic ? `?topic=${topic.id}` : 'index.html';
    const backText = topic ? (topic.title[lang]) : (lang === 'ru' ? 'К разделам' : 'Back to topics');

    // Scroll to top when switching to a problem
    window.scrollTo(0, 0);

    container.innerHTML = `
        <a href="${backUrl}" class="back-link">← ${backText}</a>
        
        <div class="tasker-container">
            <div class="problem-desc">
                <span class="difficulty ${task.difficulty}">${task.difficulty}</span>
                <h2>${task.title[lang]}</h2>
                <div class="desc-content">
                    <p>${task.description[lang]}</p>
                </div>
            </div>
            
            <div class="editor-panel">
                <div class="editor-container">
                    <textarea id="code-editor" class="code-editor" spellcheck="false">${task.initialCode}</textarea>
                </div>
                
                <div class="results-panel">
                    <div class="results-header">
                        <h3>${lang === 'ru' ? 'Результаты тестов' : 'Test Results'}</h3>
                        <button class="btn-check" onclick="runTests('${id}')">${lang === 'ru' ? 'Проверить' : 'Run Tests'}</button>
                    </div>
                    <div id="test-results" class="test-cases">
                        <p style="color: var(--text-light)">${lang === 'ru' ? 'Нажмите "Проверить", чтобы запустить тесты' : 'Click "Run Tests" to check your solution'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function runTests(id) {
    const task = TASKS[id];
    const userCode = document.getElementById('code-editor').value;
    const resultsContainer = document.getElementById('test-results');
    const lang = document.documentElement.lang || 'ru';

    resultsContainer.innerHTML = '';
    
    try {
        // Create function from user code
        // We assume the function name matches the one in initialCode
        const functionName = task.initialCode.match(/function\s+(\w+)/)[1];
        const fullCode = userCode + `\nreturn ${functionName};`;
        const userFn = new Function(fullCode)();

        let allPassed = true;

        task.tests.forEach((test, index) => {
            let result;
            let error = null;
            try {
                // Clone input to prevent modification
                const input = JSON.parse(JSON.stringify(test.input));
                result = userFn(...input);
            } catch (e) {
                error = e.message;
            }

            const passed = error === null && JSON.stringify(result) === JSON.stringify(test.expected);
            if (!passed) allPassed = false;

            const testCase = document.createElement('div');
            testCase.className = `test-case ${passed ? 'pass' : 'fail'}`;
            
            testCase.innerHTML = `
                <div class="test-icon"></div>
                <div class="test-details">
                    Test #${index + 1}: Input <code>${JSON.stringify(test.input)}</code><br>
                    ${passed ? 
                        `Expected <code>${JSON.stringify(test.expected)}</code>, got <code>${JSON.stringify(result)}</code>` : 
                        (error ? `Error: <code>${error}</code>` : `Expected <code>${JSON.stringify(test.expected)}</code>, but got <code>${JSON.stringify(result)}</code>`)
                    }
                </div>
            `;
            resultsContainer.appendChild(testCase);
        });

        if (allPassed) {
            const successMsg = document.createElement('div');
            successMsg.style.color = '#2ecc71';
            successMsg.style.marginTop = '15px';
            successMsg.style.fontWeight = 'bold';
            successMsg.innerHTML = lang === 'ru' ? '🎉 Все тесты пройдены!' : '🎉 All tests passed!';
            resultsContainer.prepend(successMsg);
        }

    } catch (e) {
        resultsContainer.innerHTML = `<div class="test-case fail" style="border-left: 4px solid #e74c3c;">
            <div class="test-icon"></div>
            <div class="test-details">
                <strong>${lang === 'ru' ? 'Ошибка синтаксиса:' : 'Syntax Error:'}</strong><br>
                <code>${e.message}</code>
            </div>
        </div>`;
    }
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTasker);
} else {
    initTasker();
}
