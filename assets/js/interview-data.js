/**
 * Interview Questions Data
 * Auto-generated from вопросы с собеседований.docx
 * 121 questions in 5 categories
 */

const INTERVIEW_CATEGORIES = [
  "Основные Вопросы с Ответами для Senior JavaScript Разработчика",
  "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика",
  "20 Вопросов с Ответами для Собеседования Angular Разработчика",
  "25 Вопросов с Ответами на Собеседовании для React Разработчика",
  "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
];

const INTERVIEW_QUESTIONS = [
  {
    "id": 1,
    "question_ru": "Чем отличается var, let и const в JavaScript?",
    "answer_ru": "var: Объявляет переменную с функциональной областью видимости, которая подвержена всплытию (hoisting).\nlet: Объявляет переменную с блочной областью видимости, не подвержен всплытию.\nconst: Также объявляет переменную с блочной областью видимости, но ее значение нельзя изменить после присваивания.",
    "explanation_ru": "Важнейшее отличие между ними — область видимости и возможность повторного присваивания.",
    "question_en": "What is the difference between var, let and const in JavaScript?",
    "answer_en": "var: Declares a functionally scoped variable that is subject to hoisting.\nlet: Declare a block-scoped variable, not subject to bubbling.\nconst: Also declares a block-scoped variable, but its value cannot be changed once assigned.",
    "explanation_en": "The most important difference between them is scope and reassignability.",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 2,
    "question_ru": "Что такое «this» в JavaScript? Как он работает?",
    "answer_ru": "this — это ключевое слово, которое ссылается на объект, из которого вызывается функция. Поведение this зависит от контекста вызова:\nВ методах объекта — это сам объект.\nВ обычных функциях — глобальный объект (window в браузере или global в Node.js), если не использован строгий режим ('use strict').\nВ стрелочных функциях this лексически привязывается к значению, в котором функция была определена.",
    "explanation_ru": "Строгий режим ('use strict') может изменить поведение this, сделав его undefined в некоторых случаях.",
    "question_en": "What is \"this\" in JavaScript? How does it work?",
    "answer_en": "this is a keyword that refers to the object from which the function is called. This behavior depends on the context of the call:\nIn object methods, this is the object itself.\nIn normal functions, a global object (window in a browser or global in Node.js), unless strict mode is used ('use strict').\nIn arrow functions, this is lexically bound to the value in which the function was defined.",
    "explanation_en": "Strict mode ('use strict') can change the behavior of this, making it undefined in some cases.",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 3,
    "question_ru": "Что такое “hoisting” в JavaScript?",
    "answer_ru": "Hoisting (подъем) — это механизм в JavaScript, при котором объявления переменных (с использованием var) и функций поднимаются в начало их области видимости.",
    "explanation_ru": "Например:\n\n```javascript\nconsole.log(a); // undefined var a = 5; Переменная a поднимается, но инициализация происходит в месте её объявления.\n```",
    "question_en": "What is “hoisting” in JavaScript?",
    "answer_en": "Hoisting is a mechanism in JavaScript that hoists variable (using var) and function declarations to the top of their scope.",
    "explanation_en": "For example: javascriptCopy codeconsole.log(a); // undefined var a = 5; The variable a is hoisted, but initialization occurs at the place where it is declared.",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 4,
    "question_ru": "Что такое асинхронность в JavaScript? Как работают setTimeout и setInterval?",
    "answer_ru": "Асинхронность в JavaScript позволяет выполнять операции (например, HTTP-запросы или таймеры) без блокировки основного потока выполнения. setTimeout запускает функцию через заданное время, а setInterval вызывает функцию с заданным интервалом.",
    "explanation_ru": "setTimeout: Ожидает заданное количество миллисекунд, а затем выполняет переданную функцию.\nsetInterval: Выполняет переданную функцию через интервал времени, пока не будет отменен.",
    "question_en": "What is asynchrony in JavaScript? How do setTimeout and setInterval work?",
    "answer_en": "Asynchrony in JavaScript allows you to perform operations (such as HTTP requests or timers) without blocking the main thread of execution. setTimeout runs a function after a given amount of time, while setInterval runs a function at a given interval.",
    "explanation_en": "setTimeout: Waits the specified number of milliseconds and then executes the passed function.\nsetInterval: Executes the passed function at intervals until canceled.",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 5,
    "question_ru": "Что такое промисы (Promises) в JavaScript и как они работают?",
    "answer_ru": "Промис — это объект, который представляет собой результат асинхронной операции, которая может завершиться успешно или с ошибкой.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What are Promises in JavaScript and how do they work?",
    "answer_en": "A promise is an object that represents the result of an asynchronous operation that can either succeed or fail.",
    "explanation_en": "javascriptCopy code const promise = new Promise((resolve, reject) => { let success = true; if (success) { resolve('Success!'); } else { reject('Error'); } }); promise.then(result => console.log(result)).catch(error => console.error(error));",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 6,
    "question_ru": "Что такое async/await? Чем это отличается от работы с промисами?",
    "answer_ru": "async/await — это синтаксический сахар для работы с промисами. async делает функцию асинхронной, а await заставляет её ждать выполнения промиса.",
    "explanation_ru": "Это упрощает код и делает его более читаемым:\n\n```javascript\nasync function fetchData() { let data = await fetch('url'); let result = await data.json(); console.log(result); }\n```",
    "question_en": "What is async/await? How is this different from working with promises?",
    "answer_en": "async/await is syntactic sugar for working with promises. async makes the function asynchronous, while await makes it wait for the promise to complete.",
    "explanation_en": "This simplifies the code and makes it more readable: javascriptCopy codeasync function fetchData() { let data = await fetch('url'); let result = await data.json(); console.log(result); }",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 7,
    "question_ru": "Что такое event loop и как работает очередь событий в JavaScript?",
    "answer_ru": "Event Loop — это механизм, который позволяет JavaScript выполнять асинхронные операции без блокировки потока. Он состоит из двух очередей: очереди задач (Task Queue) и очереди микрозадач (Microtask Queue).",
    "explanation_ru": "Микрозадачи (например, обработчики промисов) выполняются перед задачами из основной очереди.",
    "question_en": "What is an event loop and how does the event queue work in JavaScript?",
    "answer_en": "Event Loop is a mechanism that allows JavaScript to perform asynchronous operations without blocking a thread. It consists of two queues: a task queue (Task Queue) and a microtask queue (Microtask Queue).",
    "explanation_en": "Microtasks (for example, promise handlers) are executed before tasks from the main queue.",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 8,
    "question_ru": "Объясни разницу между null и undefined.",
    "answer_ru": "null — это значение, которое явно указывает на отсутствие значения или объекта.\nundefined — это значение, которое присваивается переменной, которая была объявлена, но не инициализирована.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "Explain the difference between null and undefined.",
    "answer_en": "null is a value that explicitly indicates the absence of a value or object.\nundefined is a value that is assigned to a variable that has been declared but not initialized.",
    "explanation_en": "javascriptCopy codelet a; console.log(a); // undefined let b = null; console.log(b); // null",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 9,
    "question_ru": "Что такое прототипы в JavaScript?",
    "answer_ru": "Каждый объект в JavaScript имеет скрытое свойство __proto__, которое указывает на его прототип. Прототипы используются для реализации наследования.",
    "explanation_ru": "Пример:\n\n```javascript\nfunction Person(name) { this.name = name; } Person.prototype.sayHello = function() { console.log(`Hello, ${this.name}`); }; const john = new Person('John'); john.sayHello(); // \"Hello, John\"\n```",
    "question_en": "What are prototypes in JavaScript?",
    "answer_en": "Every object in JavaScript has a hidden property called __proto__, which points to its prototype. Prototypes are used to implement inheritance.",
    "explanation_en": "Example:javascriptCopy codefunction Person(name) { this.name = name; } Person.prototype.sayHello = function() { console.log(`Hello, ${this.name}`); }; const john = new Person('John'); john.sayHello(); // \"Hello, John\"",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 10,
    "question_ru": "Что такое map, filter, reduce и в чем их отличие?",
    "answer_ru": "map — создает новый массив, применяя функцию ко всем элементам исходного массива.\nfilter — создает новый массив, включающий только те элементы, которые проходят тест.\nreduce — преобразует массив в одно значение (например, сумма элементов).",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What are map, filter, reduce and what is their difference?",
    "answer_en": "map - Creates a new array by applying a function to all elements of the original array.\nfilter - Creates a new array containing only those elements that pass the test.\nreduce - Converts an array to a single value (for example, the sum of the elements).",
    "explanation_en": "javascriptCopy codelet arr = [1, 2, 3, 4]; let mapped = arr.map(x => x * 2); // [2, 4, 6, 8] let filtered = arr.filter(x => x > 2); // [3, 4] let sum = arr.reduce((acc, x) => acc + x, 0); // 10",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 11,
    "question_ru": "Что такое деструктуризация в JavaScript?",
    "answer_ru": "Деструктуризация позволяет извлекать значения из массивов или объектов и присваивать их переменным.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What is destructuring in JavaScript?",
    "answer_en": "Destructuring allows you to extract values ​​from arrays or objects and assign them to variables.",
    "explanation_en": "javascriptCopy codeconst person = { name: 'John', age: 30 }; const { name, age } = person; console.log(name); //John console.log(age); // 30",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 12,
    "question_ru": "Что такое REST и Spread операторы?",
    "answer_ru": "REST — используется для сбора оставшихся элементов в массив или объект (например, в функциях или при деструктуризации).\nSpread — используется для распространения элементов массива или объекта.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What are REST and Spread operators?",
    "answer_en": "REST - Used to collect remaining elements into an array or object (for example, in functions or destructuring).\nSpread - Used to spread the elements of an array or object.",
    "explanation_en": "javascriptCopy codeconst arr = [1, 2, 3]; const newArr = [...arr, 4]; // [1, 2, 3, 4] function sum(...numbers) { return numbers.reduce((acc, num) => acc + num, 0); } console.log(sum(1, 2, 3)); // 6",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 13,
    "question_ru": "Как работает оператор typeof?",
    "answer_ru": "Оператор typeof используется для проверки типа значения.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "How does the typeof operator work?",
    "answer_en": "The typeof operator is used to check the type of a value.",
    "explanation_en": "javascriptCopy codeconsole.log(typeof 42); // 'number' console.log(typeof 'hello'); // 'string' console.log(typeof undefined); // 'undefined'",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 14,
    "question_ru": "Что такое call, apply и bind?",
    "answer_ru": "Эти методы позволяют изменять контекст this в функциях.\ncall и apply вызывают функцию немедленно, но с разными способами передачи аргументов.\nbind возвращает новую функцию с привязанным контекстом.",
    "explanation_ru": "",
    "question_en": "What are call, apply and bind?",
    "answer_en": "These methods allow you to change the context of this in functions.\ncall and apply call the function immediately, but with different ways of passing the arguments.\nbind returns a new function with a bound context.",
    "explanation_en": "",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 15,
    "question_ru": "Что такое promise chaining?",
    "answer_ru": "Promise chaining — это последовательное выполнение нескольких асинхронных операций с использованием метода then.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What is promise chaining?",
    "answer_en": "Promise chaining is the sequential execution of several asynchronous operations using the then method.",
    "explanation_en": "javascriptCopy codefetch('url') .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.error(error));",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 16,
    "question_ru": "Что такое модульная система в JavaScript?",
    "answer_ru": "Модульная система позволяет разделить код на отдельные файлы (модули) для улучшения структуры и повторного использования.",
    "explanation_ru": "В ECMAScript 6 появились нативные модули, которые используют import и export.\n\n```javascript\n// person.js export const person = { name: 'John' }; // app.js import { person } from './person'; console.log(person.name); // John\n```",
    "question_en": "What is the modular system in JavaScript?",
    "answer_en": "The modular system allows you to divide code into separate files (modules) for better structure and reuse.",
    "explanation_en": "ECMAScript 6 introduced native modules that use import and export.javascript Copy code // person.js export const person = { name: 'John' }; // app.js import { person } from './person'; console.log(person.name); //John",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 17,
    "question_ru": "Что такое Symbol в JavaScript?",
    "answer_ru": "Symbol — это примитивный тип данных, который представляет уникальные и неизменяемые идентификаторы.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What is Symbol in JavaScript?",
    "answer_en": "Symbol is a primitive data type that represents unique and immutable identifiers.",
    "explanation_en": "javascriptCopy codeconst sym1 = Symbol('description'); const sym2 = Symbol('description'); console.log(sym1 === sym2); // false",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 18,
    "question_ru": "Что такое мемоизация?",
    "answer_ru": "Мемоизация — это оптимизация функций, при которой результаты выполнения функции кэшируются для повторного использования с теми же аргументами.",
    "explanation_ru": "Мемоизация помогает улучшить производительность при повторном вызове одинаковых функций с одинаковыми параметрами.",
    "question_en": "What is memoization?",
    "answer_en": "Memoization is a function optimization in which the results of function execution are cached for reuse with the same arguments.",
    "explanation_en": "Memoization helps improve performance when calling the same functions with the same parameters repeatedly.",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 19,
    "question_ru": "Что такое “event delegation”?",
    "answer_ru": "Делегация событий — это техника, при которой событие обрабатывается на родительском элементе, а не на каждом дочернем. Это позволяет оптимизировать обработку событий.",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What is “event delegation”?",
    "answer_en": "Event delegation is a technique in which an event is processed on a parent element rather than on each child element. This allows you to optimize event processing.",
    "explanation_en": "javascriptCopy codedocument.getElementById('parent').addEventListener('click', function(event) { if (event.target && event.target.matches('button')) { console.log('Button clicked'); } });",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 20,
    "question_ru": "Как работают дебаунсинг и троттлинг?",
    "answer_ru": "Это техники для управления количеством вызовов функции в определенный промежуток времени.\nДебаунсинг задерживает выполнение функции до тех пор, пока не прекратится серия вызовов.\nТроттлинг ограничивает количество вызовов функции в заданный промежуток времени.",
    "explanation_ru": "",
    "question_en": "How do debouncing and throttling work?",
    "answer_en": "These are techniques for controlling the number of function calls in a certain period of time.\nDebouncing delays the execution of a function until the series of calls stops.\nThrottling limits the number of calls to a function in a given period of time.",
    "explanation_en": "",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 21,
    "question_ru": "Что такое прокси (Proxy) в JavaScript?",
    "answer_ru": "Прокси — это объект, который оборачивает другой объект и позволяет перехватывать и изменять операции с ним (например, геттеры, сеттеры).",
    "explanation_ru": "```javascript\n\n```\n\n",
    "question_en": "What is a proxy in JavaScript?",
    "answer_en": "A proxy is an object that wraps another object and allows operations on it to be intercepted and modified (for example, getters, setters).",
    "explanation_en": "javascriptCopy codeconst person = { name: 'John' }; const proxy = new Proxy(person, { get(target, prop) { return prop in target ? target[prop] : 'Not found'; } }); console.log(proxy.name); // John console.log(proxy.age); // Not found",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 22,
    "question_ru": "Объясни, как работают стрелочные функции.",
    "answer_ru": "Стрелочные функции — это функции с более кратким синтаксисом и лексическим связыванием this.",
    "explanation_ru": "Стрелочная функция не имеет своего контекста this, и использует значение из родительского контекста.\n\n```javascript\nconst obj = { name: 'Alice', greet: () => { console.log(this.name); // undefined } }; obj.greet();\n```",
    "question_en": "Explain how arrow functions work.",
    "answer_en": "Arrow functions are functions with a more concise syntax and lexical binding this.",
    "explanation_en": "The arrow function does not have its own this context, and uses the value from the parent context.javascriptCopy code const obj = { name: 'Alice', greet: () => { console.log(this.name); // undefined } }; obj.greet();",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 23,
    "question_ru": "Какие способы клонирования объектов существуют в JavaScript?",
    "answer_ru": "Клонирование объектов можно сделать несколькими способами:\nИспользование Object.assign()\nИспользование оператора spread (...)\nИспользование JSON.parse() и JSON.stringify() (для глубокого клонирования, но с ограничениями).",
    "explanation_ru": "",
    "question_en": "What methods are there for cloning objects in JavaScript?",
    "answer_en": "Cloning objects can be done in several ways:\nUsing Object.assign()\nUsing the spread operator (...)\nUsing JSON.parse() and JSON.stringify() (for deep cloning, but with limitations).",
    "explanation_en": "",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 24,
    "question_ru": "Что такое гибридные приложения?",
    "answer_ru": "Это приложения, которые сочетают в себе элементы как веб-приложений, так и нативных мобильных приложений. Они разрабатываются с использованием веб-технологий (HTML, CSS, JavaScript) и затем оборачиваются в нативные контейнеры, что позволяет запускать их на различных мобильных платформах (iOS, Android и др.).\nОдним из главных преимуществ гибридных приложений является возможность работы на различных платформах без необходимости писать отдельный код для каждой платформы.\nГибридные приложения разрабатываются с использованием стандартных веб-технологий (HTML, CSS, JavaScript), что упрощает процесс разработки для веб-разработчиков.\nЭти приложения оборачиваются в нативные контейнеры (например, с помощью Apache Cordova или Capacitor), что позволяет им использовать функции и API нативных платформ.\nФреймворк для создания мобильных приложений с использованием веб-технологий. Позволяет оборачивать веб-приложения в нативные контейнеры.\nПопулярный фреймворк для разработки гибридных мобильных приложений. Основан на Angular и Cordova, но также поддерживает другие фреймворки, такие как React и Vue.\nСовременная альтернатива Cordova, разработанная командой Ionic. Предоставляет более мощные и гибкие возможности для интеграции с нативными функциями.\nХотя React Native обычно рассматривается как фреймворк для кроссплатформенной разработки нативных приложений, его можно использовать для создания гибридных приложений, интегрируя веб-контент.\nnpm install -g @ionic/cli\nionic start myApp tabs –type=angular\ncd myApp\nionic serve\nionic capacitor add android\nionic capacitor run android\nРазработка и поддержка единой кодовой базы для нескольких платформ позволяет сократить затраты на разработку и время выхода на рынок.\nВозможность запуска на различных платформах без необходимости переписывать код для каждой платформы.\nВеб-разработчики могут использовать свои знания HTML, CSS и JavaScript для создания мобильных приложений.\nГибридные приложения могут работать медленнее по сравнению с нативными приложениями, особенно при выполнении сложных графических операций или интенсивного использования ресурсов.\nХотя большинство нативных функций доступны через плагины, некоторые из них могут быть ограничены или требовать дополнительных усилий для интеграции.\nДостижение нативного пользовательского интерфейса может быть сложным, и гибридные приложения могут не всегда соответствовать ожиданиям пользователей по внешнему виду и поведению.",
    "explanation_ru": "",
    "question_en": "What are hybrid apps?",
    "answer_en": "These are applications that combine elements of both web applications and native mobile applications. They are developed using web technologies (HTML, CSS, JavaScript) and then wrapped in native containers, which allows them to run on various mobile platforms (iOS, Android, etc.).\nOne of the main benefits of hybrid apps is the ability to work on multiple platforms without having to write separate code for each platform.\nHybrid apps are developed using standard web technologies (HTML, CSS, JavaScript), which simplifies the development process for web developers.\nThese applications are wrapped in native containers (for example, using Apache Cordova or Capacitor), which allows them to use the features and APIs of native platforms.\nA framework for creating mobile applications using web technologies. Allows you to wrap web applications in native containers.\nA popular framework for developing hybrid mobile applications. Based on Angular and Cordova, but also supports other frameworks such as React and Vue.\nA modern alternative to Cordova, developed by the Ionic team. Provides more powerful and flexible options for integration with native functions.\nWhile React Native is generally considered as a framework for cross-platform native app development, it can be used to create hybrid apps by integrating web content.\nnpm install -g @ionic/cli\nionic start myApp tabs –type=angular\ncd myApp\nionic serve\nionic capacitor add android\nionic capacitor run android\nDeveloping and maintaining a single code base for multiple platforms reduces development costs and time to market.\nAbility to run on multiple platforms without having to rewrite code for each platform.\nWeb developers can use their knowledge of HTML, CSS, and JavaScript to create mobile applications.\nHybrid applications may be slower than native applications, especially when performing graphically intensive or resource-intensive operations.\nWhile most native features are available through plugins, some may be limited or require additional effort to integrate.\nAchieving a native user experience can be challenging, and hybrid apps may not always meet user expectations in appearance and behavior.",
    "explanation_en": "",
    "category": "Основные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 25,
    "question_ru": "Что такое Event Loop в JavaScript?",
    "answer_ru": "Event Loop — это механизм, который позволяет JavaScript выполнять асинхронные операции, такие как обработка событий, таймеры, и запросы. JavaScript работает в однопоточном режиме, но Event Loop позволяет обрабатывать операции без блокировки основного потока.\nПример работы:\nКогда код выполняется синхронно, он выполняется в основном потоке.\nАсинхронные операции (например, сетевые запросы, таймеры) помещаются в очередь “macro” или “micro” задач.\nEvent Loop проверяет, есть ли задачи в очереди, и поочередно выполняет их.",
    "explanation_ru": "",
    "question_en": "What is Event Loop in JavaScript?",
    "answer_en": "Event Loop is a mechanism that allows JavaScript to perform asynchronous operations such as event handling, timers, and queries. JavaScript runs in single-threaded mode, but the Event Loop allows operations to be processed without blocking the main thread.\nExample of work:\nWhen code is executed synchronously, it is executed on the main thread.\nAsynchronous operations (for example, network requests, timers) are placed in a “macro” or “micro” task queue.\nEvent Loop checks if there are tasks in the queue and executes them one by one.",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 26,
    "question_ru": "Что такое замыкания (closures)?",
    "answer_ru": "Замыкание — это функция, которая “запоминает” свою лексическую среду, даже когда она выполняется за пределами этой среды. Замыкания позволяют функции доступ к переменным, которые были объявлены в её внешнем контексте.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are closures?",
    "answer_en": "A closure is a function that “remembers” its lexical environment even when it is executed outside of that environment. Closures allow a function to access variables that have been declared in its outer context.\nExample:\njavascriptCopy codefunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  };\n}\n\nconst increment = outer();\nincrement(); // 1\nincrement(); // 2\nHere, the inner function stores a reference to the count variable from the outer function, creating a closure.",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 27,
    "question_ru": "Что такое промисы (Promises) и как они работают?",
    "answer_ru": "Промис (Promise) — это объект, представляющий результат асинхронной операции. Промис может быть в одном из трёх состояний:\nPending (ожидает): операция ещё не завершена.\nResolved (выполнено): операция успешно завершена.\nRejected (отклонено): операция завершилась с ошибкой.\nПример использования:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are Promises and how do they work?",
    "answer_en": "A Promise is an object that represents the result of an asynchronous operation. A promise can be in one of three states:\nPending: The operation is not yet completed.\nResolved: The operation completed successfully.\nRejected: The operation failed.\nUsage example:\njavascriptCopy codeconst promise = new Promise((resolve, reject) => {\n  let success = true;\n  if (success) {\n    resolve(\"Success!\");\n  } else {\n    reject(\"Error!\");\n  }\n});\n\npromise\n  .then(result => console.log(result))\n  .catch(error => console.log(error));",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 28,
    "question_ru": "Чем отличается == от === в JavaScript?",
    "answer_ru": "== — это оператор сравнения с приведением типов (loose equality). Он пытается преобразовать операнды к одинаковому типу перед сравнением.\n=== — это строгий оператор сравнения (strict equality), который сравнивает значения и типы без преобразования типов.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is the difference between == and === in JavaScript?",
    "answer_en": "== is a comparison operator with type casting (loose equality). It tries to convert the operands to the same type before comparing.\n=== is a strict equality operator that compares values ​​and types without converting types.\nExample:\njavascriptCopy codeconsole.log(1 == '1');   // true\nconsole.log(1 === '1');  // false",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 29,
    "question_ru": "Что такое “hoisting” в JavaScript?",
    "answer_ru": "Hoisting — это механизм в JavaScript, при котором объявления переменных и функций поднимаются вверх своей области видимости. Важно заметить, что только объявления поднимаются, но инициализация (присваивание значений) остаётся на своём месте.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “hoisting” in JavaScript?",
    "answer_en": "Hoisting is a mechanism in JavaScript where variable and function declarations are hoisted to the top of their scope. It is important to note that only the declarations are raised, but the initialization (assigning values) remains in place.\nExample:\njavascriptCopy codeconsole.log(a); // undefined\nvar a = 10;",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 30,
    "question_ru": "Что такое “this” в JavaScript?",
    "answer_ru": "this — это ключевое слово в JavaScript, которое ссылается на контекст, в котором была вызвана функция. Значение this зависит от того, как была вызвана функция.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “this” in JavaScript?",
    "answer_en": "this is a keyword in JavaScript that refers to the context in which the function was called. The meaning of this depends on how the function was called.\nExample:\njavascriptCopy codeconst person = {\n  name: 'Alice',\n  greet: function() {\n    console.log(this.name);\n  }\n};\n\nperson.greet(); //Alice\nInside the greet method, this refers to the person object.",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 31,
    "question_ru": "Что такое стрелочные функции в JavaScript и как они отличаются от обычных функций?",
    "answer_ru": "Стрелочные функции (arrow functions) — это короткий синтаксис для объявления функций. Важно, что стрелочные функции не имеют своего this и наследуют его от окружающего контекста, что полезно для работы с обработчиками событий и внутри методов объектов.\nПример:\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are arrow functions in JavaScript and how are they different from regular functions?",
    "answer_en": "Arrow functions are a short syntax for declaring functions. It is important that arrow functions do not have their own this and inherit it from the surrounding context, which is useful for working with event handlers and inside object methods.\nExample: ```javascript\nconst add = (a, b) => a + b;\n\n``` Unlike regular functions, arrow functions do not have their own context this:\njavascriptCopy codeconst obj = {\n  value: 10,\n  getValue: function() {\n    setTimeout(() => {\n      console.log(this.value);  // 10, arrow function uses `this` from `getValue`\n    }, 1000);\n  }\n};\nobj.getValue();\n\n```javascript\n```",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 32,
    "question_ru": "Что такое “debouncing” и “throttling”?",
    "answer_ru": "Debouncing — это техника, при которой выполнение функции откладывается до тех пор, пока не прекратятся её вызовы на протяжении заданного времени. Это полезно для обработки событий, таких как изменение размера окна или ввод текста в поле поиска.\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are “debouncing” and “throttling”?",
    "answer_en": "Debouncing is a technique in which the execution of a function is delayed until there are no more calls to it for a specified amount of time. This is useful for handling events such as window resizing or text being entered into a search field.\njavascriptCopy codefunction debounce(func, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => func(...args), delay);\n  };\n}\nThrottling is a technique in which a function is executed no more than once in a certain time interval. This is useful for limiting the frequency of events such as page scrolling.\n\n```javascript\n\n```\n\n",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 33,
    "question_ru": "Что такое “prototype” в JavaScript?",
    "answer_ru": "Прототип — это объект, на основе которого другие объекты могут наследовать свойства и методы. Каждый объект в JavaScript имеет свойство prototype, которое указывает на его родительский объект.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is a “prototype” in JavaScript?",
    "answer_en": "A prototype is an object from which other objects can inherit properties and methods. Every object in JavaScript has a prototype property, which points to its parent object.\nExample:\njavascriptCopy codefunction Animal(name) {\n  this.name = name;\n}\n\nAnimal.prototype.sayHello = function() {\n  console.log(`Hello, my name is ${this.name}`);\n};\n\nconst dog = new Animal('Rex');\ndog.sayHello();  // Hello, my name is Rex",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 34,
    "question_ru": "Что такое “async/await” и как их использовать?",
    "answer_ru": "async/await — это синтаксический сахар для работы с асинхронным кодом, который делает его более читаемым и похожим на синхронный код.\nasync используется для объявления функции, которая всегда возвращает промис.\nawait используется внутри асинхронных функций для ожидания выполнения промиса.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are “async/await” and how to use them?",
    "answer_en": "async/await is syntactic sugar for working with asynchronous code, making it more readable and similar to synchronous code.\nasync is used to declare a function that always returns a promise.\nawait is used inside asynchronous functions to wait for a promise to be completed.\nExample:\njavascriptCopy codeasync function fetchData() {\n  const response = await fetch('https://api.example.com');\n  const data = await response.json();\n  return data;\n}",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 35,
    "question_ru": "Как работает механизм обработки ошибок с использованием try/catch?",
    "answer_ru": "try/catch — это конструкция для обработки ошибок в JavaScript. Внутри блока try выполняется код, а если возникает ошибка, управление передается в блок catch.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does the error handling mechanism using try/catch work?",
    "answer_en": "try/catch is a construct for error handling in JavaScript. Inside the try block, the code is executed, and if an error occurs, control is transferred to the catch block.\nExample:\njavascriptCopy code try {\n  const result = someFunction();\n} catch (error) {\n  console.error('Error:', error);\n}",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 36,
    "question_ru": "Что такое “IIFE” (Immediately Invoked Function Expression)?",
    "answer_ru": "IIFE — это функция, которая немедленно выполняется после её объявления. Она часто используется для создания замкнутого контекста и предотвращения загрязнения глобального пространства имен.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “IIFE” (Immediately Invoked Function Expression)?",
    "answer_en": "IIFE is a function that is executed immediately after it is declared. It is often used to create a closed context and prevent global namespace pollution.\nExample:\njavascriptCopy code(function() {\n  console.log('This function runs immediately');\n})();",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 37,
    "question_ru": "Как работает механизм событий в JavaScript (Event Bubbling и Capturing)?",
    "answer_ru": "Event Bubbling (всплытие события) — это процесс, при котором событие сначала обрабатывается на самом вложенном элементе, а затем по цепочке всплывает вверх к родительским элементам.\nEvent Capturing (поглощение события) — это процесс, при котором событие сначала обрабатывается на самом верхнем элементе, а затем по цепочке передается вниз к дочерним элементам.\nПример:\n\n```html\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does the JavaScript event mechanism (Event Bubbling and Capturing) work?",
    "answer_en": "Event Bubbling is a process in which an event is first processed on the nested element itself and then bubbles up the chain to its parent elements.\nEvent Capturing is a process in which an event is first processed on the topmost element and then passed down the chain to child elements.\nExample:\nhtmlCopy code<div id=\"parent\">\n  <button id=\"child\">Click me</button>\n</div>\njavascriptCopy codedocument.getElementById('parent').addEventListener('click', function() {\n  console.log('Parent clicked');\n}, true); //capturing\n\ndocument.getElementById('child').addEventListener('click', function() {\n  console.log('Child clicked');\n}); // bubbling",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 38,
    "question_ru": "Что такое “modules” в JavaScript?",
    "answer_ru": "Модули в JavaScript — это способ организации и изоляции кода. Модули позволяют импортировать и экспортировать функции, объекты и данные между различными файлами, обеспечивая лучшую структуру и повторное использование кода.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are “modules” in JavaScript?",
    "answer_en": "Modules in JavaScript are a way to organize and isolate code. Modules allow you to import and export functions, objects and data between different files, providing better structure and code reuse.\nExample:\njavascriptCopy code // module.js\nexport const greet = (name) => `Hello, ${name}`;\n\n// main.js\nimport { greet } from './module.js';\nconsole.log(greet('Alice'));",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 39,
    "question_ru": "Что такое “memoization” и когда её стоит использовать?",
    "answer_ru": "Memoization — это техника оптимизации, при которой результаты дорогостоящих вычислений кэшируются для повторного использования. Это полезно в ситуациях, когда функция часто вызывается с одинаковыми аргументами.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “memoization” and when should you use it?",
    "answer_en": "Memoization is an optimization technique in which the results of expensive computations are cached for reuse. This is useful in situations where a function is often called with the same arguments.\nExample:\njavascriptCopy codefunction memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (!cache[key]) {\n      cache[key] = fn(...args);\n    }\n    return cache[key];\n  };\n}\nAdditional Questions with Answers for Senior JavaScript Developer",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 40,
    "question_ru": "Что такое “defer” и “async” в тегах <script>?",
    "answer_ru": "Атрибуты defer и async используются в тегах <script> для управления загрузкой и выполнением JavaScript на веб-странице.\ndefer: Скрипт с атрибутом defer загружается асинхронно, но выполняется только после того, как весь HTML документ будет полностью загружен (после события DOMContentLoaded). Скрипты с defer выполняются в порядке их появления на странице.\n\n```html\n\n```\n\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are “defer” and “async” in <script> tags?",
    "answer_en": "The defer and async attributes are used in <script> tags to control the loading and execution of JavaScript on a web page.\ndefer: A script with the defer attribute is loaded asynchronously, but is executed only after the entire HTML document has been completely loaded (after the DOMContentLoaded event). Defer scripts are executed in the order they appear on the page. ```html\n<script src=\"script.js\" defer></script>\nasync: Скрипт с атрибутом async загружается асинхронно и выполняется сразу после того, как он будет загружен, без ожидания загрузки других скриптов или HTML. Порядок выполнения может быть произвольным, так как скрипты могут загружаться параллельно.\n\n``` html\n<script src=\"script.js\" async></script>\n\n```javascript\n```",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 41,
    "question_ru": "Что такое мемоизация и когда её стоит использовать?",
    "answer_ru": "Мемоизация — это техника оптимизации, при которой результаты функции кэшируются, чтобы избежать повторных вычислений с одинаковыми входными данными. Это особенно полезно для функций, которые выполняют дорогие вычисления и часто вызываются с одинаковыми аргументами.\nПример реализации мемоизации:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is memoization and when should you use it?",
    "answer_en": "Memoization is an optimization technique in which the results of a function are cached to avoid repeated calculations with the same input data. This is especially useful for functions that perform expensive calculations and are often called with the same arguments.\nExample implementation of memoization:\njavascriptCopy codefunction memoize(fn) {\n  const cache = {};\n  return function (...args) {\n    const key = args.join(',');\n    if (!cache[key]) {\n      cache[key] = fn(...args);\n    }\n    return cache[key];\n  };\n}\n\nconst slowFunction = (a, b) => a + b;  // example function\nconst fastFunction = memoize(slowFunction);\n\nconsole.log(fastFunction(1, 2)); // 3\nconsole.log(fastFunction(1, 2)); // 3 (from cache)",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 42,
    "question_ru": "Объясните, что такое прототипное наследование в JavaScript?",
    "answer_ru": "В JavaScript все объекты имеют скрытое свойство [[Prototype]] (прототип), которое указывает на другой объект. Когда вы пытаетесь получить доступ к свойству объекта, и оно не существует, JavaScript будет искать это свойство в его прототипе. Этот процесс называется прототипным наследованием.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "Explain what is prototypal inheritance in JavaScript?",
    "answer_en": "In JavaScript, all objects have a hidden property called [[Prototype]] that points to another object. When you try to access a property of an object and it doesn't exist, JavaScript will look for that property in its prototype. This process is called prototypical inheritance.\nExample:\njavascriptCopy codeconst animal = {\n  speak: function() {\n    console.log(\"Animal speaks\");\n  }\n};\n\nconst dog = Object.create(animal);\ndog.speak(); //Animal speaks\nIn this example, the dog object inherits the speak method from the animal object.",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 43,
    "question_ru": "Что такое “this” в стрелочных функциях?",
    "answer_ru": "В стрелочных функциях this не привязывается к самому объекту, а наследуется от окружающего контекста, в отличие от обычных функций, где this привязывается к объекту, который вызывает функцию.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “this” in arrow functions?",
    "answer_en": "In arrow functions, this is not bound to the object itself, but is inherited from the surrounding context, unlike regular functions, where this is bound to the object that calls the function.\nExample:\njavascriptCopy codeconst obj = {\n  value: 42,\n  regularFunction: function() {\n    console.log(this.value);  // 42 because `this` points to `obj`\n  },\n  arrowFunction: () => {\n    console.log(this.value);  // undefined, since `this` is inherited from the surrounding context (global object)\n  }\n};\n\nobj.regularFunction();\nobj.arrowFunction();",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 44,
    "question_ru": "Как работает система модулей в JavaScript?",
    "answer_ru": "Система модулей позволяет разделять код на независимые блоки. В JavaScript существуют два основных типа модулей:\nCommonJS: Используется в Node.js, позволяет экспортировать и импортировать данные с помощью module.exports и require.\nES6 Modules: Стандартный способ работы с модулями в браузере и Node.js. Используются ключевые слова export и import.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does the module system work in JavaScript?",
    "answer_en": "The module system allows you to divide code into independent blocks. There are two main types of modules in JavaScript:\nCommonJS: Used in Node.js, it allows you to export and import data using module.exports and require.\nES6 Modules: The standard way to work with modules in the browser and Node.js. The keywords \"export\" and \"import\" are used.\nExample:\njavascriptCopy code // ES6 Modules\nexport const myFunction = () => { console.log(\"Hello!\"); };\n\n//import\nimport { myFunction } from './module.js';\nmyFunction();",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 45,
    "question_ru": "Что такое Shadow DOM?",
    "answer_ru": "Shadow DOM — это механизм инкапсуляции, который позволяет скрыть часть DOM от основного дерева. Это полезно для создания компонентов с независимым стилем и поведением, предотвращая влияние на другие части страницы.\nПример:\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is Shadow DOM?",
    "answer_en": "Shadow DOM is an encapsulation mechanism that allows you to hide part of the DOM from the main tree. This is useful for creating components with independent styling and behavior, preventing them from affecting other parts of the page.\nExample:\nhtmlCopy code<my-element></my-element>\n\n<script>\n  class MyElement extends HTMLElement {\n    constructor() {\n      super();\n      const shadowRoot = this.attachShadow({ mode: 'open' });\n      shadowRoot.innerHTML = `<p>Hello from Shadow DOM</p>`;\n    }\n  }\n\n  customElements.define('my-element', MyElement);\n</script>",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 46,
    "question_ru": "Объясните разницу между bind(), call() и apply() в JavaScript.",
    "answer_ru": "bind(): Создаёт новую функцию с привязанным значением this и аргументами, которые могут быть добавлены позже.\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "Explain the difference between bind(), call() and apply() in JavaScript.",
    "answer_en": "bind(): Creates a new function with a bound this value and arguments that can be added later.\njavascriptCopy codeconst obj = { name: 'Alice' };\nconst greet = function() {\n  console.log(`Hello, ${this.name}`);\n};\n\nconst boundGreet = greet.bind(obj);\nboundGreet(); // Hello, Alice\ncall(): Immediately calls a function with the specified this value and the passed arguments. ```javascript\ngreet.call(obj); // Hello, Alice\n\n``` apply(): Like call(), calls a function with the specified this value, but passes the arguments as an array.\n\n```javascript\n```\n\ngreet.apply(obj); // Hello, Alice\n\n```javascript\n```",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 47,
    "question_ru": "Что такое “currying” в JavaScript?",
    "answer_ru": "Currying — это процесс преобразования функции, которая принимает несколько аргументов, в серию функций, каждая из которых принимает один аргумент. Это позволяет создавать более универсальные и частично применяемые функции.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “currying” in JavaScript?",
    "answer_en": "Currying is the process of converting a function that takes multiple arguments into a series of functions that each take one argument. This allows you to create more versatile and partially usable functions.\nExample:\njavascriptCopy codeconst add = a => b => a + b;\n\nconst add5 = add(5);\nconsole.log(add5(3));  // 8",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 48,
    "question_ru": "Что такое “event delegation” и зачем она используется?",
    "answer_ru": "Event delegation — это техника обработки событий, при которой вместо привязки обработчиков ко всем дочерним элементам, обработчик привязывается к родительскому элементу. Это позволяет эффективно обрабатывать события на динамически добавляемых элементах.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “event delegation” and why is it used?",
    "answer_en": "Event delegation is an event handling technique in which, instead of binding handlers to all child elements, a handler is bound to the parent element. This allows you to efficiently handle events on dynamically added elements.\nExample:\njavascriptCopy codedocument.getElementById('parent').addEventListener('click', function(e) {\n  if (e.target && e.target.matches('button.classname')) {\n    console.log('Button clicked!');\n  }\n});",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 49,
    "question_ru": "Что такое “polyfill” и зачем он нужен?",
    "answer_ru": "Polyfill — это код, который добавляет поддержку новых возможностей в старые браузеры. Это позволяет использовать новые функции JavaScript, такие как Promise, fetch, Object.assign, в браузерах, которые их не поддерживают.\nПример polyfill для Array.prototype.includes:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “polyfill” and why is it needed?",
    "answer_en": "Polyfill is code that adds support for new features to older browsers. This allows new JavaScript features such as Promise, fetch, Object.assign to be used in browsers that do not support them.\nExample polyfill for Array.prototype.includes:\njavascriptCopy codeif (!Array.prototype.includes) {\n  Array.prototype.includes = function(element) {\n    return this.indexOf(element) !== -1;\n  };\n}",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 50,
    "question_ru": "Что такое “webpack” и как он работает?",
    "answer_ru": "Webpack — это модульный бандлер для JavaScript-приложений. Он анализирует зависимости между файлами и создаёт оптимизированный бандл для загрузки на клиенте. Webpack позволяет использовать различные плагины и загрузчики для обработки стилей, изображений, шрифтов и других активов.\nОсновные понятия:\nentry: точка входа в приложение.\noutput: куда будет собран конечный бандл.\nloaders: обработчики для файлов (например, для компиляции SCSS в CSS).\nplugins: дополнения для расширения функционала (например, для минимизации кода).\nПример базовой конфигурации:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “webpack” and how does it work?",
    "answer_en": "Webpack is a modular bundler for JavaScript applications. It analyzes dependencies between files and creates an optimized bundle for downloading on the client. Webpack allows you to use various plugins and loaders to handle styles, images, fonts and other assets.\nBasic concepts:\nentry: The entry point to the application.\noutput: where the final bundle will be assembled.\nloaders: handlers for files (for example, for compiling SCSS to CSS).\nplugins: add-ons to expand functionality (for example, to minimize code).\nBasic configuration example:\njavascriptCopy codemodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  }\n};",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 51,
    "question_ru": "Что такое “service workers” в JavaScript?",
    "answer_ru": "Service Workers — это скрипты, которые работают в фоновом режиме и могут использоваться для реализации функционала, такого как кэширование данных для работы в оффлайн-режиме, push-уведомления и фоновые синхронизации.\nПример регистрации service worker:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are “service workers” in JavaScript?",
    "answer_en": "Service Workers are scripts that run in the background and can be used to implement functionality such as data caching for offline operation, push notifications, and background synchronization.\nExample of service worker registration:\njavascriptCopy codeif ('serviceWorker' in navigator) {\nnavigator.serviceWorker.register('/service-worker.js')\n.then(function(registration) {\nconsole.log('Service Worker registered:', registration);\n})\n.catch(function(error) {\nconsole.log",
    "explanation_en": "",
    "category": "Дополнительные Вопросы с Ответами для Senior JavaScript Разработчика"
  },
  {
    "id": 52,
    "question_ru": "Что такое Angular и чем он отличается от других фреймворков (например, React или Vue)?",
    "answer_ru": "Angular — это полноценный фреймворк для разработки веб-приложений от Google. Он использует TypeScript, предлагает двустороннюю привязку данных, инжекцию зависимостей, маршрутизацию, формы, HTTP-клиент и много других встроенных возможностей. В отличие от React и Vue, которые фокусируются на представлении (View) и предоставляют минимальную функциональность, Angular — это более монолитный фреймворк, который включает в себя все необходимые инструменты для создания крупных приложений.",
    "explanation_ru": "",
    "question_en": "What is Angular and how is it different from other frameworks (like React or Vue)?",
    "answer_en": "Angular is a complete web application development framework from Google. It uses TypeScript, offers two-way data binding, dependency injection, routing, forms, an HTTP client, and many other built-in capabilities. Unlike React and Vue, which focus on the View and provide minimal functionality, Angular is a more monolithic framework that includes all the necessary tools to build large applications.",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 53,
    "question_ru": "Что такое компоненты в Angular?",
    "answer_ru": "Компонент в Angular — это основной строительный блок приложения. Он состоит из:\nШаблона (HTML), который определяет представление.\nКласса (TypeScript), который управляет логикой компонента.\nСтилей (CSS), которые управляют внешним видом.\nКаждый компонент имеет декоратор @Component, который указывает Angular, что это компонент и какие шаблон, стили и другие настройки ему присвоены.\nПример:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are components in Angular?",
    "answer_en": "A component in Angular is the basic building block of an application. It consists of:\nTemplate (HTML) that defines the view.\nA class (TypeScript) that controls the logic of the component.\nStyles (CSS) that control appearance.\nEach component has a decorator called @Component, which tells Angular that it is a component and what template, styles, and other settings are assigned to it.\nExample:\ntypescriptCopy code@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n  styleUrls: ['./my-component.component.css']\n})\nexport class MyComponent {\n  title: string = 'Hello, Angular!';\n}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 54,
    "question_ru": "Что такое директивы в Angular и чем они отличаются от компонентов?",
    "answer_ru": "Директивы — это классы, которые позволяют манипулировать элементами DOM. В отличие от компонентов, которые могут содержать шаблон и логику, директивы не имеют собственного представления. Они используются для изменения поведения DOM-элементов.\nСуществует три типа директив:\nСтруктурные директивы (*ngIf, *ngFor) — изменяют структуру DOM.\nАтрибутные директивы (например, ngClass, ngStyle) — изменяют внешний вид или поведение элементов.\nКомпоненты — можно рассматривать как директивы с шаблоном.\nПример атрибутной директивы:\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are directives in Angular and how are they different from components?",
    "answer_en": "Directives are classes that allow you to manipulate DOM elements. Unlike components, which can contain template and logic, directives do not have their own representation. They are used to change the behavior of DOM elements.\nThere are three types of directives:\nStructural directives (*ngIf, *ngFor) - change the structure of the DOM.\nAttribute directives (for example, ngClass, ngStyle) - change the appearance or behavior of elements.\nComponents - can be thought of as templated directives.\nExample of an attribute directive:\n\n```html\n\n```\n\n",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 55,
    "question_ru": "Что такое двухсторонняя привязка данных (two-way data binding) в Angular?",
    "answer_ru": "Двухсторонняя привязка данных позволяет синхронизировать данные между компонентом и его представлением. Когда данные изменяются в компоненте, изменения автоматически отображаются в шаблоне, и наоборот — при изменении данных в шаблоне они автоматически обновляются в компоненте.\nПример:\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is two-way data binding in Angular?",
    "answer_en": "Two-way data binding allows you to synchronize data between a component and its view. When data changes in a component, the changes are automatically reflected in the template, and vice versa - when data in the template changes, they are automatically updated in the component.\nExample:\nhtmlCopy code<input [(ngModel)]=\"username\">\n<p>Your username is: {{ username }}</p>\nHere, changes in the input field automatically update the username value in the component and vice versa.",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 56,
    "question_ru": "Что такое сервисы и инъекция зависимостей в Angular?",
    "answer_ru": "Сервис — это класс, предназначенный для выполнения логики, которая может быть повторно использована в разных компонентах, например, обработка данных, запросы к API и т.д. В Angular сервисы обычно инжектируются в компоненты или другие сервисы с помощью системы инъекции зависимостей.\nПример создания сервиса:\n\n```typescript\n\n```\n\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are services and dependency injection in Angular?",
    "answer_en": "A service is a class designed to perform logic that can be reused across different components, such as data processing, API requests, etc. In Angular, services are typically injected into components or other services using a dependency injection system.\nExample of creating a service:\ntypescriptCopy code@Injectable({\n  providedIn: 'root'\n})\nexport class MyService {\n  getData() {\n    return 'Hello, Service!';\n  }\n}\nUsage in component:\ntypescriptCopy codeconstructor(private myService: MyService) {}\n\nngOnInit() {\n  console.log(this.myService.getData());\n}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 57,
    "question_ru": "Что такое маршрутизация в Angular?",
    "answer_ru": "Маршрутизация в Angular — это механизм, который позволяет навигировать между различными представлениями (страницами) приложения. В Angular маршруты определяются в файле маршрутизации и связываются с компонентами.\nПример маршрутизации:\n\n```typescript\n\n```\n\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is routing in Angular?",
    "answer_en": "Routing in Angular is a mechanism that allows you to navigate between different views (pages) of an application. In Angular, routes are defined in a routing file and associated with components.\nRouting example:\ntypescriptCopy codeconst routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule {}\nIn the template:\nhtmlCopy code<a routerLink=\"/home\">Home</a>\n<router-outlet></router-outlet>",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 58,
    "question_ru": "Что такое RxJS и как он используется в Angular?",
    "answer_ru": "RxJS (Reactive Extensions for JavaScript) — это библиотека для работы с асинхронными событиями и потоками данных, которая активно используется в Angular для работы с асинхронными операциями (например, HTTP-запросами, событиями пользователя). Основной абстракцией в RxJS является Observable, который представляет собой поток значений, с которым можно работать с помощью операторов, таких как map, filter, mergeMap, и т.д.\nПример использования RxJS:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is RxJS and how is it used in Angular?",
    "answer_en": "RxJS (Reactive Extensions for JavaScript) is a library for working with asynchronous events and data flows, which is actively used in Angular for working with asynchronous operations (for example, HTTP requests, user events). The main abstraction in RxJS is an Observable, which is a stream of values ​​that can be manipulated using operators such as map, filter, mergeMap, etc.\nExample of using RxJS:\ntypescriptCopy codeimport { Observable } from 'rxjs';\n\nconst observable = new Observable(subscriber => {\n  subscriber.next('Hello');\n  subscriber.next('World');\n  subscriber.complete();\n});\n\nobservable.subscribe({\n  next(x) { console.log(x); },\n  complete() { console.log('Completed!'); }\n});",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 59,
    "question_ru": "Что такое шаблонные переменные в Angular?",
    "answer_ru": "Шаблонные переменные в Angular используются для получения доступа к элементам DOM или компонентам в шаблоне. Они могут быть использованы для передачи данных в другие компоненты или для манипуляций с DOM.\nПример:\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are template variables in Angular?",
    "answer_en": "Template variables in Angular are used to access DOM elements or components in a template. They can be used to pass data to other components or to manipulate the DOM.\nExample:\nhtmlCopy code<input #inputElement>\n<button (click)=\"logValue(inputElement.value)\">Log Value</button>\nIn this example, #inputElement is a template variable that references the <input> element.",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 60,
    "question_ru": "Что такое жизненный цикл компонента в Angular?",
    "answer_ru": "Angular предоставляет несколько хуков жизненного цикла компонента, которые позволяют разработчикам выполнять различные действия в разные моменты времени в процессе создания, изменения и уничтожения компонента.\nОсновные хуки:\nngOnInit() — вызывается после инициализации компонента.\nngOnChanges() — вызывается при изменении входных данных компонента.\nngDoCheck() — вызывается при каждом цикле проверки изменений.\nngOnDestroy() — вызывается перед уничтожением компонента.\nПример:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is the life cycle of a component in Angular?",
    "answer_en": "Angular provides several component lifecycle hooks that allow developers to perform different actions at different points in time during the process of creating, modifying, and destroying a component.\nBasic hooks:\nngOnInit() - Called after the component is initialized.\nngOnChanges() - Called when the component's input changes.\nngDoCheck() - Called every time a change is checked.\nngOnDestroy() - Called before the component is destroyed.\nExample:\ntypescriptCopy codengOnInit() {\n  console.log('Component initialized');\n}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 61,
    "question_ru": "Что такое Angular CLI и как его использовать?",
    "answer_ru": "Angular CLI (Command Line Interface) — это инструмент командной строки, который помогает создавать, разрабатывать и обслуживать Angular-приложения. Он предоставляет команды для генерации компонентов, сервисов, модулей и других элементов, а также для сборки и тестирования приложения.\nПример использования:\nСоздание нового компонента:\nng generate component my-component\nЗапуск приложения:\nng serve",
    "explanation_ru": "",
    "question_en": "What is Angular CLI and how to use it?",
    "answer_en": "Angular CLI (Command Line Interface) is a command line tool that helps you create, develop and maintain Angular applications. It provides commands for generating components, services, modules, and other elements, as well as for building and testing the application.\nUsage example:\nCreating a new component:\nng generate component my-component\nLaunching the application:\nng serve",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 62,
    "question_ru": "Что такое анимации в Angular?",
    "answer_ru": "Анимации в Angular позволяют создавать визуальные эффекты в приложении. Angular использует модуль @angular/animations для создания анимаций, таких как плавные переходы между состояниями компонентов.\nПример анимации:\n\n```typescript\n\n```\n\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are animations in Angular?",
    "answer_en": "Animations in Angular allow you to create visual effects in your application. Angular uses the @angular/animations module to create animations such as smooth transitions between component states.\nAnimation example:\ntypescriptCopy codeimport { trigger, state, style, animate, transition } from '@angular/animations';\n\n@Component({\n  selector: 'app-box',\n  templateUrl: './box.component.html',\n  styleUrls: ['./box.component.css'],\n  animations: [\n    trigger('fadeInOut', [\n      state('in', style({\n        opacity: 1\n      })),\n      state('out', style({\n        opacity: 0\n      })),\n      transition('in <=> out', animate(1000))\n    ])\n  ]\n})\nexport class BoxComponent {\n  state = 'in';\n}\nIn the template:\n\n```html\n\n```\n\n",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 63,
    "question_ru": "Что такое Angular Forms и чем отличаются template-driven формы от reactive forms?",
    "answer_ru": "Angular поддерживает два типа форм:\nTemplate-driven forms: Управляются через шаблон, с использованием директив ngModel и других атрибутов. Просты в использовании для небольших форм.\nReactive forms: Управляются программно через реактивную модель, где состояние и валидация формы контролируются в компоненте. Подходят для сложных форм с динамическими полями.\nПример reactive формы:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are Angular Forms and how do template-driven forms differ from reactive forms?",
    "answer_en": "Angular supports two types of forms:\nTemplate-driven forms: Managed through a template, using ngModel directives and other attributes. Easy to use for small shapes.\nReactive forms: Managed programmatically through a reactive model, where the form's state and validation are controlled within the component. Suitable for complex forms with dynamic fields.\nExample of a reactive form:\ntypescriptCopy codeimport { FormGroup, FormControl } from '@angular/forms';\n\nthis.form = new FormGroup({\n  name: new FormControl('')\n});",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 64,
    "question_ru": "Что такое ngIf и ngFor в Angular?",
    "answer_ru": "ngIf — структурная директива, которая добавляет или удаляет элемент DOM в зависимости от условия.\n\n```html\n\n```\n\n\n```javascript\n\n```\n\n\n```html\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are ngIf and ngFor in Angular?",
    "answer_en": "ngIf is a structural directive that adds or removes a DOM element depending on a condition. ```html\n<div *ngIf=\"isVisible\">This is visible</div>\n``` ngFor - Used to iterate through a collection and create elements for each element in the array.\n\n```javascript\n```\n\n```javascript\n```",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 65,
    "question_ru": "Что такое интерцепторы HTTP в Angular?",
    "answer_ru": "Интерцепторы в Angular позволяют перехватывать HTTP-запросы и ответы, модифицировать их или обрабатывать ошибки. Это полезно для добавления заголовков, обработки ошибок или выполнения логирования.\nПример создания интерцептора:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are HTTP Interceptors in Angular?",
    "answer_en": "Interceptors in Angular allow you to intercept HTTP requests and responses, modify them, or handle errors. This is useful for adding headers, handling errors, or performing logging.\nAn example of creating an interceptor:\ntypescriptCopy code@Injectable()\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) {\n    const clonedReq = req.clone({\n      setHeaders: {\n        Authorization: 'Bearer ' + this.authService.getToken()\n      }\n    });\n    return next.handle(clonedReq);\n  }\n}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 66,
    "question_ru": "Что такое lazy loading в Angular?",
    "answer_ru": "Lazy loading — это техника загрузки модулей только тогда, когда они действительно необходимы (например, при навигации на определённую страницу). Это улучшает производительность, так как не нужно загружать все модули сразу при старте приложения.\nПример настройки lazy loading:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is lazy loading in Angular?",
    "answer_en": "Lazy loading is a technique for loading modules only when they are actually needed (for example, when navigating to a specific page). This improves performance since all modules do not need to be loaded at once when the application starts.\nExample of lazy loading setup:\ntypescriptCopy codeconst routes: Routes = [\n  {\n    path: 'feature',\n    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)\n  }\n];",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 67,
    "question_ru": "Что такое ngOnChanges() и когда оно вызывается?",
    "answer_ru": "ngOnChanges() — это хук жизненного цикла, который вызывается, когда входные данные компонента изменяются. Этот метод получает объект с текущими и предыдущими значениями входных данных.\nПример:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is ngOnChanges() and when is it called?",
    "answer_en": "ngOnChanges() is a lifecycle hook that is called when a component's input changes. This method receives an object with the current and previous input values.\nExample:\ntypescriptCopy codengOnChanges(changes: SimpleChanges) {\n  console.log(changes);\n}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 68,
    "question_ru": "Как управлять состоянием в Angular?",
    "answer_ru": "В Angular можно управлять состоянием несколькими способами:\nЧерез сервисы, которые хранят состояние и передают его компонентам.\nС помощью RxJS (например, через BehaviorSubject).\nИспользование NgRx — библиотеки для управления состоянием с использованием Redux-подхода.",
    "explanation_ru": "",
    "question_en": "How to manage state in Angular?",
    "answer_en": "In Angular, you can manage state in several ways:\nThrough services that store state and pass it on to components.\nUsing RxJS (for example, via BehaviorSubject).\nUsing NgRx, a state management library using the Redux approach.",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 69,
    "question_ru": "Что такое providedIn: 'root' в Angular?",
    "answer_ru": "providedIn: 'root' в декораторе @Injectable() означает, что сервис будет предоставлен на уровне корневого инжектора и будет доступен во всём приложении.\nПример:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is providedIn: 'root' in Angular?",
    "answer_en": "providedIn: 'root' in the @Injectable() decorator means that the service will be provided at the root injector level and will be available throughout the application.\nExample:\ntypescriptCopy code@Injectable({\n  providedIn: 'root'\n})\nexport class MyService {\n  // Service logic\n}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 70,
    "question_ru": "Что такое Change Detection в Angular?",
    "answer_ru": "Change detection (обнаружение изменений) в Angular — это процесс проверки изменений в данных и обновления DOM для отображения этих изменений. Angular использует различные стратегии обнаружения изменений, такие как Default и OnPush.\nПример:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is Change Detection in Angular?",
    "answer_en": "Change detection in Angular is the process of checking for changes in data and updating the DOM to reflect those changes. Angular uses different change detection strategies such as Default and OnPush.\nExample:\ntypescriptCopy code@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class MyComponent {}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 71,
    "question_ru": "Как работают модули в Angular?",
    "answer_ru": "Модули в Angular — это контейнеры для компонентов, сервисов и других объектов, которые нужны для работы приложения. Каждый Angular-приложение начинается с главного модуля (AppModule), который объединяет все части приложения и экспортирует необходимые элементы для других частей.\nПример модуля:\n\n```typescript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How do modules work in Angular?",
    "answer_en": "Modules in Angular are containers for components, services and other objects that are needed for the application to work. Every Angular application starts with a main module (AppModule), which combines all parts of the application and exports the necessary elements for other parts.\nExample module:\ntypescriptCopy code@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}",
    "explanation_en": "",
    "category": "20 Вопросов с Ответами для Собеседования Angular Разработчика"
  },
  {
    "id": 72,
    "question_ru": "Что такое React?",
    "answer_ru": "React — это библиотека JavaScript для создания пользовательских интерфейсов. Она разработана Facebook и позволяет строить компоненты, которые могут обновлять и рендерить интерфейс в ответ на изменения состояния приложения. React использует виртуальный DOM для повышения производительности.",
    "explanation_ru": "",
    "question_en": "What is React?",
    "answer_en": "React is a JavaScript library for creating user interfaces. It is developed by Facebook and allows you to build components that can update and render the interface in response to changes in application state. React uses a virtual DOM to improve performance.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 73,
    "question_ru": "Что такое JSX?",
    "answer_ru": "JSX (JavaScript XML) — это синтаксический сахар для JavaScript, который позволяет писать HTML-подобный код внутри JavaScript. JSX превращается в обычный JavaScript с помощью компилятора, такого как Babel. Пример:\n\n```jsx\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is JSX?",
    "answer_en": "JSX (JavaScript XML) is syntactic sugar for JavaScript that allows you to write HTML-like code inside JavaScript. JSX is turned into regular JavaScript using a compiler such as Babel. Example: ```jsx\nconst element = <h1>Hello, world!</h1>;\n\n``` JSX makes it easy to create and read UI components.\n\n```javascript\n```",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 74,
    "question_ru": "Что такое Virtual DOM и как он работает?",
    "answer_ru": "Virtual DOM — это абстракция реального DOM, которая используется React для оптимизации производительности. Когда компонент обновляется, React сначала изменяет виртуальный DOM, затем сравнивает его с предыдущей версией и вносит минимальные изменения в реальный DOM.",
    "explanation_ru": "",
    "question_en": "What is Virtual DOM and how does it work?",
    "answer_en": "Virtual DOM is an abstraction of the real DOM that React uses to optimize performance. When a component is updated, React first modifies the virtual DOM, then compares it to the previous version and makes minimal changes to the real DOM.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 75,
    "question_ru": "Что такое компонент в React?",
    "answer_ru": "Компонент в React — это функциональная или классовая сущность, которая принимает входные данные (props) и возвращает UI, описанный с использованием JSX. Компоненты могут быть повторно используемыми и могут содержать логику состояния.",
    "explanation_ru": "",
    "question_en": "What is a component in React?",
    "answer_en": "A component in React is a functional or class entity that takes input (props) and returns a UI written using JSX. Components can be reusable and can contain state logic.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 76,
    "question_ru": "Что такое props и state в React?",
    "answer_ru": "Props (свойства) — это данные, которые передаются в компонент родителем. Props являются неизменяемыми для компонента.\nState (состояние) — это данные, которые управляются внутри компонента и могут изменяться. Изменение состояния вызывает повторный рендер компонента.",
    "explanation_ru": "",
    "question_en": "What are props and state in React?",
    "answer_en": "Props are data that is passed to a component by its parent. Props are immutable for the component.\nState is data that is managed within a component and can change. Changing the state causes the component to be re-rendered.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 77,
    "question_ru": "Как работает метод setState?",
    "answer_ru": "Метод setState используется для обновления состояния компонента в React. Когда состояние изменяется, React перерисовывает компонент и его дочерние элементы. Важно, что setState работает асинхронно, и обновления могут быть объединены.\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does the setState method work?",
    "answer_en": "The setState method is used to update the state of a component in React. When the state changes, React redraws the component and its children. It is important that setState works asynchronously and updates can be merged.\n\n```javascript\n\n```\n\n",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 78,
    "question_ru": "Что такое жизненный цикл компонента?",
    "answer_ru": "Жизненный цикл компонента — это набор методов, которые вызываются на разных стадиях существования компонента. Важно знать методы:\ncomponentDidMount — вызывается после первого рендера компонента.\ncomponentDidUpdate — вызывается после обновления компонента.\ncomponentWillUnmount — вызывается перед удалением компонента.\nС появлением React Hooks жизненный цикл можно управлять и с помощью хуков (например, useEffect).",
    "explanation_ru": "",
    "question_en": "What is the life cycle of a component?",
    "answer_en": "The life cycle of a component is a set of methods that are called at different stages of the component's life. It is important to know the methods:\ncomponentDidMount - Called after the component has first rendered.\ncomponentDidUpdate - Called after a component is updated.\ncomponentWillUnmount - Called before removing a component.\nWith the advent of React Hooks, the lifecycle can also be controlled using hooks (for example, useEffect).",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 79,
    "question_ru": "Что такое React Hooks?",
    "answer_ru": "React Hooks — это новые возможности, введенные в React 16.8, которые позволяют использовать состояние и другие возможности React в функциональных компонентах, без необходимости писать классовые компоненты. Примеры хуков:\nuseState — для управления состоянием.\nuseEffect — для работы с побочными эффектами.\nuseContext — для работы с контекстом.",
    "explanation_ru": "",
    "question_en": "What are React Hooks?",
    "answer_en": "React Hooks are new features introduced in React 16.8 that allow you to use state and other React features in functional components, without having to write class components. Examples of hooks:\nuseState - for state management.\nuseEffect - for working with side effects.\nuseContext - for working with context.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 80,
    "question_ru": "Как работает хук useState?",
    "answer_ru": "useState — это хук, который позволяет добавлять состояние в функциональные компоненты. Он возвращает массив из двух элементов: текущего состояния и функции для его обновления.\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does the useState hook work?",
    "answer_en": "useState is a hook that allows you to add state to functional components. It returns an array of two elements: the current state and a function to update it.\n\n```javascript\n\n```\n\n",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 81,
    "question_ru": "Что такое хук useEffect?",
    "answer_ru": "useEffect — это хук, который позволяет выполнять побочные эффекты в функциональных компонентах (например, запросы к API, подписки, манипуляции с DOM). Он выполняется после рендера компонента.\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is the useEffect hook?",
    "answer_en": "useEffect is a hook that allows you to perform side effects on functional components (e.g. API requests, subscriptions, DOM manipulation). It is executed after the component is rendered.\njsCopy codeuseEffect(() => {\n  // code for side effect\n}, [dependencies]); // dependencies upon changing which the effect will be executed",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 82,
    "question_ru": "Как работает хук useContext?",
    "answer_ru": "useContext позволяет функциональным компонентам использовать значения из контекста. Это полезно для передачи данных между компонентами, не прокидывая props через всю иерархию.\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does the useContext hook work?",
    "answer_en": "useContext allows functional components to use values ​​from the context. This is useful for passing data between components without passing props through the entire hierarchy.\n\n```javascript\n\n```\n\n",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 83,
    "question_ru": "Что такое React Context?",
    "answer_ru": "React Context — это механизм, позволяющий передавать данные через дерево компонентов без необходимости вручную передавать props на каждом уровне. Context полезен для глобальных данных, таких как тема, авторизация и настройки.",
    "explanation_ru": "",
    "question_en": "What is React Context?",
    "answer_en": "React Context is a mechanism that allows you to pass data through a component tree without having to manually pass props at each level. Context is useful for global data such as topic, authorization, and settings.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 84,
    "question_ru": "Что такое Higher-Order Component (HOC)?",
    "answer_ru": "HOC — это функция, которая принимает компонент и возвращает новый компонент с добавленной функциональностью. HOC часто используется для повторного использования логики между компонентами.\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is Higher-Order Component (HOC)?",
    "answer_en": "A HOC is a function that takes a component and returns a new component with added functionality. HOC is often used to reuse logic between components.\njsCopy codeconst withAuth = (Component) => {\n  return function AuthHOC(props) {\n    if (!props.isAuthenticated) {\n      return <Redirect to=\"/login\" />;\n    }\n    return <Component {...props} />;\n  };\n};",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 85,
    "question_ru": "Как обрабатываются события в React?",
    "answer_ru": "События в React обрабатываются через синтетические события, которые абстрагируют реальные события браузера. Например, для обработки клика на кнопку:\n\n```jsx\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How are events handled in React?",
    "answer_en": "Events in React are handled through synthetic events that abstract away real browser events. For example, to handle a click on a button:\njsxCopy codefunction handleClick() {\n  console.log('Clicked');\n}\n\n<button onClick={handleClick}>Click me</button>",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 86,
    "question_ru": "Что такое key в списках React?",
    "answer_ru": "key — это уникальный идентификатор для каждого элемента в списке, который помогает React эффективно отслеживать изменения в DOM. key должен быть уникальным для каждого элемента в пределах списка.\n\n```jsx\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is a key in React lists?",
    "answer_en": "key is a unique identifier for each element in the list, which helps React efficiently track changes to the DOM. key must be unique for each element within the list.\njsxCopy code const items = [1, 2, 3];\nreturn items.map(item => <li key={item}>{item}</li>);",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 87,
    "question_ru": "Как в React управлять формами?",
    "answer_ru": "Формы в React управляются с помощью состояния компонента. Для обработки ввода данных используется двухсторонняя привязка. Важный момент — в React элементы формы (например, <input>) контролируются через состояние.\n\n```jsx\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How to manage forms in React?",
    "answer_en": "Forms in React are controlled using component state. Two-way binding is used to process data input. An important point is that in React, form elements (for example, <input>) are controlled through state.\njsxCopy codeconst [value, setValue] = useState('');\n\nconst handleChange = (event) => {\n  setValue(event.target.value);\n};\n\nreturn <input value={value} onChange={handleChange} />;",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 88,
    "question_ru": "Что такое мемоизация в React?",
    "answer_ru": "Мемоизация — это процесс кэширования результатов вычислений для того, чтобы не выполнять их повторно с теми же входными данными. В React мемоизация часто используется с помощью React.memo для компонентов и useMemo для вычислений.\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is memoization in React?",
    "answer_en": "Memoization is the process of caching the results of calculations so that they are not repeated with the same input data. In React, memoization is often used with React.memo for components and useMemo for calculations.\n\n```javascript\n\n```\n\n",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 89,
    "question_ru": "Что такое динамический импорт в React?",
    "answer_ru": "Динамический импорт позволяет загружать модули асинхронно. В React это используется для ленивой загрузки компонентов, что улучшает производительность приложения. Пример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is dynamic import in React?",
    "answer_en": "Dynamic import allows modules to be loaded asynchronously. React uses this to lazily load components, which improves application performance. Example:\n\n```javascript\n\n```\n\n",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 90,
    "question_ru": "Что такое Redux?",
    "answer_ru": "Redux — это библиотека для управления состоянием в JavaScript-приложениях. Он использует принцип единого хранилища (store), которое содержит все состояние приложения, и позволяет изменять его через действия (actions) и редьюсеры (reducers).",
    "explanation_ru": "",
    "question_en": "What is Redux?",
    "answer_en": "Redux is a library for managing state in JavaScript applications. It uses the principle of a single store, which contains the entire state of the application, and allows you to change it through actions and reducers.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 91,
    "question_ru": "Что такое “middleware” в Redux?",
    "answer_ru": "Middleware в Redux — это промежуточные слои, которые могут перехватывать и обрабатывать действия перед тем, как они будут отправлены в редьюсер. Примером является redux-thunk, который позволяет использовать асинхронные операции.",
    "explanation_ru": "",
    "question_en": "What is “middleware” in Redux?",
    "answer_en": "Middleware in Redux are intermediate layers that can intercept and process actions before they are sent to the reducer. An example is redux-thunk, which allows for asynchronous operations.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 92,
    "question_ru": "Что такое “pure” компоненты?",
    "answer_ru": "Pure компоненты в React — это компоненты, которые не изменяют свои props и state, и всегда возвращают одинаковый результат при одинаковых входных данных. Они могут быть реализованы с помощью React.PureComponent или функциональных компонентов с использованием React.memo.",
    "explanation_ru": "",
    "question_en": "What are “pure” ingredients?",
    "answer_en": "Pure components in React are components that do not change their props and state, and always return the same result given the same input data. They can be implemented using React.PureComponent or functional components using React.memo.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 93,
    "question_ru": "Как работает Suspense в React?",
    "answer_ru": "Suspense — это компонент, который позволяет отложить рендеринг части интерфейса до тех пор, пока не будут загружены необходимые ресурсы (например, компоненты или данные). Это часто используется в сочетании с React.lazy.",
    "explanation_ru": "",
    "question_en": "How does Suspense work in React?",
    "answer_en": "Suspense is a component that allows you to defer rendering of part of the interface until the necessary resources (such as components or data) have been loaded. This is often used in combination with React.lazy.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 94,
    "question_ru": "Как оптимизировать производительность React-приложений?",
    "answer_ru": "Некоторые способы оптимизации:\nИспользование React.memo и useMemo для предотвращения лишних рендеров.\nЛенивая загрузка компонентов с помощью React.lazy и Suspense.\nРазбиение компонента на более мелкие части.\nИспользование shouldComponentUpdate или PureComponent.",
    "explanation_ru": "",
    "question_en": "How to optimize the performance of React applications?",
    "answer_en": "Some optimization methods:\nUsing React.memo and useMemo to prevent unnecessary renders.\nLazy loading of components with React.lazy and Suspense.\nBreaking a component into smaller parts.\nUsing shouldComponentUpdate or PureComponent.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 95,
    "question_ru": "Что такое серверный рендеринг (SSR) в React?",
    "answer_ru": "Серверный рендеринг (SSR) — это процесс рендеринга React-компонентов на сервере перед отправкой HTML-кода на клиент. Это улучшает SEO и ускоряет первоначальную загрузку приложения.",
    "explanation_ru": "",
    "question_en": "What is Server Side Rendering (SSR) in React?",
    "answer_en": "Server-side rendering (SSR) is the process of rendering React components on the server before sending the HTML code to the client. This improves SEO and speeds up the initial app load.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 96,
    "question_ru": "Что такое React Router и как он работает?",
    "answer_ru": "React Router — это библиотека для маршрутизации в React-приложениях. Она позволяет управлять навигацией между страницами, используя компоненты Route, Link и BrowserRouter.\n\n```jsx\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is React Router and how does it work?",
    "answer_en": "React Router is a library for routing in React applications. It allows you to control navigation between pages using the Route, Link and BrowserRouter components.\njsxCopy code<BrowserRouter>\n  <Link to=\"/home\">Home</Link>\n  <Route path=\"/home\" component={Home} />\n</BrowserRouter>",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами на Собеседовании для React Разработчика"
  },
  {
    "id": 97,
    "question_ru": "Что такое DOM?",
    "answer_ru": "DOM (Document Object Model) — это программный интерфейс для работы с HTML и XML документами. Он представляет страницу в виде структуры, состоящей из узлов, каждый из которых представляет собой элемент, атрибут или текстовый контент. Взаимодействие с DOM позволяет изменять содержимое, структуру и стиль веб-страницы.",
    "explanation_ru": "",
    "question_en": "What is DOM?",
    "answer_en": "DOM (Document Object Model) is a programming interface for working with HTML and XML documents. It represents a page as a structure consisting of nodes, each of which represents an element, attribute, or text content. Interacting with the DOM allows you to change the content, structure, and style of a web page.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 98,
    "question_ru": "Что такое событие DOMContentLoaded?",
    "answer_ru": "Событие DOMContentLoaded срабатывает, когда HTML-документ полностью загружен и разобран, но до загрузки внешних ресурсов, таких как изображения и стили. Это событие часто используется для выполнения кода, который манипулирует DOM, когда структура страницы готова.\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is the DOMContentLoaded event?",
    "answer_en": "The DOMContentLoaded event fires when the HTML document is fully loaded and parsed, but before external resources such as images and styles are loaded. This event is often used to execute code that manipulates the DOM when the page structure is ready.\njavascriptCopy codedocument.addEventListener('DOMContentLoaded', function() {\n  console.log('DOM is fully loaded');\n});",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 99,
    "question_ru": "Что такое CORS и как с ним работать?",
    "answer_ru": "CORS (Cross-Origin Resource Sharing) — это механизм, который позволяет или запрещает веб-страницам из одного домена запрашивать ресурсы с другого домена. CORS помогает предотвратить атаки типа CSRF (Cross-Site Request Forgery). Сервер должен отправить заголовки, разрешающие доступ к ресурсам, например:\n\n```http\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is CORS and how to work with it?",
    "answer_en": "CORS (Cross-Origin Resource Sharing) is a mechanism that allows or prevents web pages from one domain from requesting resources from another domain. CORS helps prevent CSRF (Cross-Site Request Forgery) attacks. The server must send headers that allow access to resources, for example: ```http\nAccess-Control-Allow-Origin: *\n``` To work with CORS, you can use a proxy server or configure the server side with the necessary headers.\n\n```javascript\n```",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 100,
    "question_ru": "Как работает асинхронность в JavaScript?",
    "answer_ru": "JavaScript использует асинхронное выполнение через события и коллбеки, чтобы не блокировать основной поток. Это позволяет выполнять долгие операции (например, запросы к серверу) в фоновом режиме, не замедляя работу интерфейса.\nАсинхронные операции можно обрабатывать с использованием:\nКоллбеков: функции, передаваемые в другие функции для выполнения после завершения операции.\nPromises: объекты, представляющие будущее значение асинхронной операции.\nasync/await: синтаксический сахар для работы с промисами, упрощающий асинхронный код.\nПример с async/await:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does asynchrony work in JavaScript?",
    "answer_en": "JavaScript uses asynchronous execution through events and callbacks to avoid blocking the main thread. This allows you to perform long operations (such as server requests) in the background without slowing down the interface.\nAsynchronous operations can be handled using:\nCallbacks: Functions that are passed to other functions to be executed after an operation completes.\nPromises: objects representing the future value of an asynchronous operation.\nasync/await: syntactic sugar for working with promises, simplifying asynchronous code.\nExample with async/await:\njavascriptCopy codeasync function fetchData() {\n  const response = await fetch('https://api.example.com');\n  const data = await response.json();\n  console.log(data);\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 101,
    "question_ru": "Что такое “hoisting” в JavaScript?",
    "answer_ru": "Hoisting — это механизм в JavaScript, при котором объявления переменных и функций “поднимаются” вверх своей области видимости до того, как выполнится код. Это влияет на работу переменных и функций.\nПример:\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “hoisting” in JavaScript?",
    "answer_en": "Hoisting is a mechanism in JavaScript whereby variable and function declarations are “hoisted” to the top of their scope before the code is executed. This affects how variables and functions work.\nExample:\njavascriptCopy codeconsole.log(a);  // undefined\nvar a = 10;\nThis is in contrast to variables declared with let or const, which are not hoisted.\njavascriptCopy codeconsole.log(b);  // ReferenceError: Cannot access 'b' before initialization\nlet b = 10;",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 102,
    "question_ru": "Что такое “debouncing” и “throttling”?",
    "answer_ru": "Debouncing — это техника, которая позволяет задержать выполнение функции до тех пор, пока не прекратится поток событий (например, при вводе текста в поле поиска). Это предотвращает выполнение функции слишком часто.\n\n```javascript\n\n```\n\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are “debouncing” and “throttling”?",
    "answer_en": "Debouncing is a technique that allows you to delay the execution of a function until the flow of events stops (for example, when you enter text in a search field). This prevents the function from being executed too often.\njavascriptCopy codefunction debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}\nThrottling is a technique that limits the execution of a function to no more than a specified interval of time. This is useful when you need to limit the number of requests or event processing.\njavascriptCopy codefunction throttle(func, delay) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastCall >= delay) {\n      lastCall = now;\n      func.apply(this, args);\n    }\n  };\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 103,
    "question_ru": "Что такое “flexbox” и как его использовать?",
    "answer_ru": "Flexbox (Flexible Box Layout) — это модель компоновки, предназначенная для создания гибких и адаптивных макетов. Она позволяет легко управлять выравниванием, распределением пространства и размерами элементов в контейнере.\nПример использования Flexbox:\n\n```css\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is flexbox and how to use it?",
    "answer_en": "Flexbox (Flexible Box Layout) is a layout model designed to create flexible and responsive layouts. It allows you to easily control the alignment, space distribution, and sizes of elements in a container.\nFlexbox usage example:\ncssCopy code.container {\n  display: flex;\n  justify-content: space-between; /* Uniform distribution of space */\n}\n\n.item {\n  flex: 1; /* Each element is stretched to the same amount of space */\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 104,
    "question_ru": "Что такое “grid layout” в CSS?",
    "answer_ru": "CSS Grid Layout — это мощная система компоновки, которая позволяет создавать сетки для размещения элементов. Она предоставляет более сложные и точные возможности для создания сеточных макетов.\nПример:\n\n```css\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “grid layout” in CSS?",
    "answer_en": "CSS Grid Layout is a powerful layout system that allows you to create grids for placing elements. It provides more sophisticated and precise capabilities for creating grid layouts.\nExample:\ncssCopy code.container {\n  display:grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 columns of the same width */\n}\n\n.item {\n  grid-column: span 2; /* Element occupies 2 columns */\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 105,
    "question_ru": "Что такое this в JavaScript?",
    "answer_ru": "this — это ключевое слово, которое ссылается на объект, в контексте которого была вызвана функция. В JavaScript контекст this может изменяться в зависимости от того, как была вызвана функция.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is this in JavaScript?",
    "answer_en": "this is a keyword that refers to the object in the context of which the function was called. In JavaScript, the context of this can change depending on how the function was called.\nExample:\njavascriptCopy codeconst obj = {\n  value: 42,\n  showValue: function() {\n    console.log(this.value);  // this points to obj\n  }\n};\nobj.showValue();",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 106,
    "question_ru": "Что такое closure в JavaScript?",
    "answer_ru": "Closure (замыкание) — это функция, которая “запоминает” окружение, в котором она была создана. Это позволяет функции доступ к переменным из внешней функции даже после того, как внешняя функция завершила выполнение.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is closure in JavaScript?",
    "answer_en": "Closure is a function that “remembers” the environment in which it was created. This allows a function to access variables from an outer function even after the outer function has finished executing.\nExample:\njavascriptCopy codefunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  };\n}\n\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 107,
    "question_ru": "Как работает event delegation в JavaScript?",
    "answer_ru": "Event delegation — это техника, при которой обработчик событий привязывается к родительскому элементу, а не к каждому дочернему. Это позволяет эффективно обрабатывать события на динамически добавляемых элементах.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "How does event delegation work in JavaScript?",
    "answer_en": "Event delegation is a technique in which an event handler is attached to a parent element rather than to each child element. This allows you to efficiently handle events on dynamically added elements.\nExample:\njavascriptCopy codedocument.querySelector('#parent').addEventListener('click', function(event) {\n  if (event.target && event.target.matches('button')) {\n    console.log('Button clicked!');\n  }\n});",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 108,
    "question_ru": "Что такое localStorage и sessionStorage?",
    "answer_ru": "localStorage — это объект Web API, который позволяет сохранять данные в браузере в виде ключ-значение. Данные сохраняются даже после закрытия вкладки или браузера.\nsessionStorage — аналогичен localStorage, но данные сохраняются только в рамках одной сессии браузера и удаляются при закрытии вкладки.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are localStorage and sessionStorage?",
    "answer_en": "localStorage is a Web API object that allows you to store data in a key-value format in the browser. The data is saved even after closing the tab or browser.\nsessionStorage - similar to localStorage, but data is saved only within one browser session and is deleted when the tab is closed.\nExample:\njavascriptCopy codelocalStorage.setItem('key', 'value');\nconsole.log(localStorage.getItem('key')); // 'value'",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 109,
    "question_ru": "Что такое “responsive design”?",
    "answer_ru": "Responsive design (отзывчивый дизайн) — это подход к созданию веб-страниц, который позволяет интерфейсу адаптироваться под различные устройства и размеры экрана. Используются медиазапросы, гибкие макеты и элементы, которые изменяют свой размер в зависимости от ширины экрана.\nПример медиазапроса:\n\n```css\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is “responsive design”?",
    "answer_en": "Responsive design is an approach to creating web pages that allows the interface to adapt to different devices and screen sizes. Uses media queries, flexible layouts, and elements that resize based on screen width.\nMedia query example:\ncssCopy code@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 110,
    "question_ru": "Что такое async и await?",
    "answer_ru": "async и await — это синтаксический сахар для работы с промисами, который делает асинхронный код более читаемым. async перед функцией указывает, что функция возвращает промис, а await позволяет ожидать результат выполнения асинхронной операции.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are async and await?",
    "answer_en": "async and await are syntactic sugar for working with promises, which makes asynchronous code more readable. async before a function indicates that the function returns a promise, and await allows you to wait for the result of an asynchronous operation.\nExample:\njavascriptCopy codeasync function fetchData() {\n  const response = await fetch('https://api.example.com');\n  const data = await response.json();\n  console.log(data);\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 111,
    "question_ru": "Как работает var, let и const в JavaScript?",
    "answer_ru": "var: Переменная с var имеет функциональную область видимости и может быть переобъявлена.\nlet: Переменная с let имеет блочную область видимости и не может быть переобъявлена в той же области.\nconst: Переменная с const имеет блочную область видимости и не может быть переназначена, но объект или массив, объявленный с const, может быть изменен.",
    "explanation_ru": "",
    "question_en": "How do var, let and const work in JavaScript?",
    "answer_en": "var: A variable with var has functional scope and can be redeclared.\nlet: A variable with let has block scope and cannot be redeclared in the same scope.\nconst: A const variable has block scope and cannot be reassigned, but an object or array declared with const can be modified.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 112,
    "question_ru": "Что такое JSON?",
    "answer_ru": "JSON (JavaScript Object Notation) — это текстовый формат обмена данными, основанный на JavaScript, который используется для представления структурированных данных. Он широко используется для обмена данными между клиентом и сервером.\nПример:\n\n```json\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What is JSON?",
    "answer_en": "JSON (JavaScript Object Notation) is a text-based data interchange format based on JavaScript that is used to represent structured data. It is widely used for communication between client and server.\nExample:\njsonCopy code{\n  \"name\": \"John\",\n  \"age\": 30,\n  \"city\": \"New York\"\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 113,
    "question_ru": "Что такое Promises в JavaScript?",
    "answer_ru": "Promise (обещание) — это объект, представляющий асинхронную операцию, которая может завершиться успешно (resolved) или с ошибкой (rejected). Он используется для работы с асинхронным кодом, позволяя избегать “callback hell”.\nПример:\n\n```javascript\n\n```\n\n",
    "explanation_ru": "",
    "question_en": "What are Promises in JavaScript?",
    "answer_en": "A Promise is an object that represents an asynchronous operation that can either succeed (resolved) or fail (rejected). It is used to work with asynchronous code, avoiding “callback hell”.\nExample:\njavascriptCopy codeconst promise = new Promise((resolve, reject) => {\n  let success = true;\n  if (success) {\n    resolve('Data loaded');\n  } else {\n    reject('Error');\n  }\n});\n\npromise.then(response => console.log(response)).catch(error => console.log(error));",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 114,
    "question_ru": "Что такое webpack?",
    "answer_ru": "Webpack — это модульный бандлер для JavaScript-приложений. Он обрабатывает и собирает ресурсы (JS, CSS, изображения и другие файлы) в бандлы, которые могут быть загружены в браузере. В процессе сборки webpack может использовать плагины для оптимизации и преобразования файлов.",
    "explanation_ru": "",
    "question_en": "What is webpack?",
    "answer_en": "Webpack is a modular bundler for JavaScript applications. It processes and assembles resources (JS, CSS, images and other files) into bundles that can be loaded in the browser. During the build process, webpack can use plugins to optimize and transform files.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 115,
    "question_ru": "Что такое Babel и зачем он используется?",
    "answer_ru": "Babel — это транспайлер, который позволяет использовать современные возможности JavaScript (например, ES6+ синтаксис) в старых браузерах. Он преобразует новый JavaScript код в более старую версию, поддерживаемую большинством браузеров.",
    "explanation_ru": "",
    "question_en": "What is Babel and why is it used?",
    "answer_en": "Babel is a transpiler that allows you to use modern JavaScript features (such as ES6+ syntax) in older browsers. It converts new JavaScript code into an older version that is supported by most browsers.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 116,
    "question_ru": "Что такое SASS и чем он отличается от CSS?",
    "answer_ru": "SASS (Syntactically Awesome Stylesheets) — это расширение CSS, которое добавляет дополнительные возможности, такие как переменные, вложенность, миксины и наследование. SASS позволяет писать более чистый и удобный код для стилей.\nПример использования переменной:\ns\n\n```css\n```\n\n$primary-color: #333;\n\nbody {\n  color: $primary-color;\n}",
    "explanation_ru": "",
    "question_en": "What is SASS and how is it different from CSS?",
    "answer_en": "SASS (Syntactically Awesome Stylesheets) is a CSS extension that adds additional features such as variables, nesting, mixins, and inheritance. SASS allows you to write cleaner, more user-friendly styling code.\nExample of using a variable:\nscssCopy code$primary-color: #333;\n\nbody {\n  color: $primary-color;\n}",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 117,
    "question_ru": "Что такое service worker?",
    "answer_ru": "Service Worker — это скрипт, который работает в фоновом режиме, отдельно от веб-страницы, и может перехватывать запросы, кэшировать ресурсы, работать в оффлайн-режиме и отправлять push-уведомления. Это используется для создания Progressive Web Apps (PWA).",
    "explanation_ru": "",
    "question_en": "What is a service worker?",
    "answer_en": "A service worker is a script that runs in the background, separate from the web page, and can intercept requests, cache resources, work offline, and send push notifications. This is used to create Progressive Web Apps (PWA).",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 118,
    "question_ru": "Что такое “virtual DOM”?",
    "answer_ru": "Virtual DOM — это абстракция, используемая во многих современных фреймворках (например, React). Он представляет собой копию реального DOM, которая используется для минимизации операций с реальным DOM, ускоряя обновление UI.",
    "explanation_ru": "",
    "question_en": "What is “virtual DOM”?",
    "answer_en": "Virtual DOM is an abstraction used in many modern frameworks (such as React). It is a copy of the real DOM, which is used to minimize operations on the real DOM, speeding up UI updates.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 119,
    "question_ru": "Что такое npm?",
    "answer_ru": "npm (Node Package Manager) — это менеджер пакетов для JavaScript, который используется для установки и управления зависимостями в проектах. Он также позволяет публиковать и устанавливать пакеты, такие как библиотеки и утилиты.",
    "explanation_ru": "",
    "question_en": "What is npm?",
    "answer_en": "npm (Node Package Manager) is a package manager for JavaScript that is used to install and manage dependencies in projects. It also allows you to publish and install packages such as libraries and utilities.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 120,
    "question_ru": "Что такое “single page application” (SPA)?",
    "answer_ru": "SPA (Single Page Application) — это веб-приложение, которое загружает одну HTML-страницу и динамически обновляет содержимое, не перезагружая страницу. Это позволяет создавать быстрые и интерактивные пользовательские интерфейсы.",
    "explanation_ru": "",
    "question_en": "What is “single page application” (SPA)?",
    "answer_en": "SPA (Single Page Application) is a web application that loads a single HTML page and dynamically updates the content without reloading the page. This allows you to create fast and interactive user interfaces.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  },
  {
    "id": 121,
    "question_ru": "Что такое CSS specificity?",
    "answer_ru": "CSS specificity (специфичность) — это система, которая определяет, какой из конфликтующих стилей будет применяться к элементу. Специфичность рассчитывается на основе селекторов: id, классов и элементов.\nПример:\nID-селектор имеет большую специфичность, чем класс.\nКласс имеет большую специфичность, чем элемент.",
    "explanation_ru": "",
    "question_en": "What is CSS specificity?",
    "answer_en": "CSS specificity is a system that determines which of the conflicting styles will be applied to an element. Specificity is calculated based on selectors: id, classes and elements.\nExample:\nAn ID selector is more specific than a class.\nA class has more specificity than an element.",
    "explanation_en": "",
    "category": "25 Вопросов с Ответами для Собеседования Frontend Разработчика"
  }
];
