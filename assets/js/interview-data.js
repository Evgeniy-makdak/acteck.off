/**
 * Interview Questions Data
 * 70 вопросов по JavaScript с https://habr.com/ru/articles/486820/
 */

const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    question: "В чем разница между null и undefined?",
    answer: "<p><strong>undefined</strong> («неопределенный») представляет собой значение по умолчанию:</p><ul><li>переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;</li><li>функции, которая ничего не возвращает явно, например, console.log(1);</li><li>несуществующего свойства объекта.</li></ul><p><strong>null</strong> — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно.</p><pre><code>let _thisIsUndefined\nconsole.log(_thisIsUndefined) // undefined\n\nconst doNothing = () => {}\nconsole.log(doNothing()) // undefined\n\nconst someObj = { a: 'ay' }\nconsole.log(someObj['d']) // undefined\n\nlet nullValue = null\nconsole.log(nullValue) // null</code></pre><p>При сравнении null и undefined:</p><pre><code>console.log(null == undefined) // true\nconsole.log(null === undefined) // false</code></pre>"
  },
  {
    id: 2,
    question: "Для чего используется оператор «&&»?",
    answer: "<p>Оператор <strong>&&</strong> (логическое И) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные. Он использует короткое замыкание во избежание лишних затрат:</p><pre><code>console.log(false && 1 && []) // false\nconsole.log(' ' && true && 5) // 5</code></pre><p>Пример использования вместо if:</p><pre><code>// Вместо:\nif (conMobile) {\n  conMobile.release()\n}\n\n// Можно написать:\nconMobile && conMobile.release()</code></pre>"
  },
  {
    id: 3,
    question: "Для чего используется оператор «||»?",
    answer: "<p>Оператор <strong>||</strong> (логическое ИЛИ) находит и возвращает первое истинное значение. Он также использует короткое замыкание. Данный оператор использовался для присвоения параметров по умолчанию в функциях до того, как параметры по умолчанию были стандартизированы в ES6.</p><pre><code>console.log(null || 1 || undefined) // 1\n\nfunction logName(name) {\n  let n = name || 'Mark'\n  console.log(n)\n}\n\nlogName() // Mark</code></pre>"
  },
  {
    id: 4,
    question: "Является ли использование унарного плюса (оператор «+») самым быстрым способом преобразования строки в число?",
    answer: "<p>Да, согласно MDN оператор <strong>+</strong> действительно является самым быстрым способом преобразования строки в число, поскольку он не выполняет никаких операций со значением, которое является числом.</p><pre><code>const str = '123'\nconst num = +str\nconsole.log(num) // 123\nconsole.log(typeof num) // number</code></pre>"
  },
  {
    id: 5,
    question: "Что такое DOM?",
    answer: "<p><strong>DOM</strong> или Document Object Model (объектная модель документа) — это прикладной программный интерфейс (API) для работы с HTML и XML документами.</p><p>Когда браузер первый раз читает («парсит») HTML документ, он формирует большой объект, основанный на документе — DOM. DOM представляет собой древовидную структуру (дерево документа). DOM используется для взаимодействия и изменения самой структуры DOM или его отдельных элементов и узлов.</p><p>В JS DOM представлен объектом Document. Объект Document имеет большое количество методов для работы с элементами, их созданием, модификацией, удалением и т.д.</p>"
  },
  {
    id: 6,
    question: "Что такое распространение события (Event Propagation)?",
    answer: "<p>Когда какое-либо событие происходит в элементе DOM, оно на самом деле происходит не только в нем. Событие «распространяется» от объекта Window до вызвавшего его элемента (event.target). При этом событие последовательно пронизывает (затрагивает) всех предков целевого элемента.</p><p><strong>Распространение события имеет три стадии или фазы:</strong></p><ol><li><strong>Фаза погружения (захвата, перехвата)</strong> — событие возникает в объекте Window и опускается до цели события через всех ее предков.</li><li><strong>Целевая фаза</strong> — это когда событие достигает целевого элемента.</li><li><strong>Фаза всплытия</strong> — событие поднимается от event.target, последовательно проходит через всех его предков и достигает объекта Window.</li></ol>"
  },
  {
    id: 7,
    question: "Что такое всплытие события (Event Bubbling)?",
    answer: "<p>Когда событие происходит в элементе DOM, оно затрагивает не только этот элемент. Событие «всплывает» (подобно пузырьку воздуха в воде), переходит от элемента, вызвавшего событие (event.target), к его родителю, затем поднимается еще выше, к родителю родителя элемента, пока не достигает объекта Window.</p><pre><code>&lt;div class=\"grandparent\"&gt;\n  &lt;div class=\"parent\"&gt;\n    &lt;div class=\"child\"&gt;1&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;script&gt;\nfunction addEvent(el, event, callback, isCapture = false) {\n  if (!el || !event || !callback || typeof callback !== 'function') return\n  if (typeof el === 'string') {\n    el = document.querySelector(el)\n  }\n  el.addEventListener(event, callback, isCapture)\n}\n\naddEvent(document, 'DOMContentLoaded', () => {\n  const child = document.querySelector('.child')\n  const parent = document.querySelector('.parent')\n  const grandparent = document.querySelector('.grandparent')\n\n  addEvent(child, 'click', function(e) {\n    console.log('child')\n  })\n\n  addEvent(parent, 'click', function(e) {\n    console.log('parent')\n  })\n\n  addEvent(grandparent, 'click', function(e) {\n    console.log('grandparent')\n  })\n})\n&lt;/script&gt;</code></pre><p>Если мы кликнем по элементу child, в консоль будет выведено: <strong>child, parent, grandparent, html, document, window</strong>.</p>"
  },
  {
    id: 8,
    question: "Что такое погружение события (Event Capturing)?",
    answer: "<p>В фазе погружения событие опускается от объекта Window до цели события через всех его предков.</p><p>У метода <strong>addEventListener</strong> есть третий необязательный параметр — <strong>useCapture</strong>. Когда его значение равняется <strong>true</strong>, событие начинается с фазы погружения.</p><pre><code>addEvent(child, 'click', function(e) {\n  console.log('child')\n}, true) // true = capturing</code></pre><p>Если мы кликнем по элементу child, то увидим в консоли следующее: <strong>window, document, html, grandparent, parent, child</strong>.</p>"
  },
  {
    id: 9,
    question: "В чем разница между методами event.preventDefault() и event.stopPropagation()?",
    answer: "<p><strong>event.preventDefault()</strong> — отключает поведение элемента по умолчанию. Например:</p><ul><li>В элементе form — предотвратит отправку формы (submit)</li><li>В contextmenu — контекстное меню будет отключено</li><li>В keydown — для переопределения клавиатуры</li></ul><p><strong>event.stopPropagation()</strong> — отключает распространение события (его всплытие или погружение).</p>"
  },
  {
    id: 10,
    question: "Как узнать об использовании метода event.preventDefault()?",
    answer: "<p>Для этого мы можем использовать свойство <strong>event.defaultPrevented</strong>, возвращающее логическое значение, служащее индикатором применения к элементу метода event.preventDefault.</p><pre><code>element.addEventListener('click', function(event) {\n  event.preventDefault()\n  console.log(event.defaultPrevented) // true\n})</code></pre>"
  },
  {
    id: 11,
    question: "Почему obj.someprop.x приводит к ошибке?",
    answer: "<p>Мы пытаемся получить доступ к свойству <strong>x</strong> свойства <strong>someprop</strong>, которое имеет значение <strong>undefined</strong>. У undefined нет свойства x.</p><pre><code>const obj = {}\nconsole.log(obj.someprop.x) // TypeError: Cannot read property 'x' of undefined</code></pre>"
  },
  {
    id: 12,
    question: "Что такое цель события или целевой элемент (event.target)?",
    answer: "<p>Простыми словами, <strong>event.target</strong> — это элемент, в котором происходит событие, или элемент, вызвавший событие.</p><pre><code>&lt;div onclick=\"clickFunc(event)\"&gt;\n  &lt;button&gt;Button&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;script&gt;\nfunction clickFunc(event) {\n  console.log(event.target) // &lt;button&gt;Button&lt;/button&gt;\n}\n&lt;/script&gt;</code></pre><p>Мы прикрепили «слушатель» к внешнему div. Однако если мы нажмем на кнопку, то получим в консоли разметку этой кнопки. Это позволяет сделать вывод, что элементом, вызвавшим событие, является именно кнопка.</p>"
  },
  {
    id: 13,
    question: "Что такое текущая цель события (event.currentTarget)?",
    answer: "<p><strong>event.currentTarget</strong> — это элемент, к которому прикреплен прослушиватель событий.</p><pre><code>&lt;div onclick=\"clickFunc(event)\"&gt;\n  &lt;button&gt;Button&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;script&gt;\nfunction clickFunc(event) {\n  console.log(event.currentTarget) // &lt;div&gt;...\n}\n&lt;/script&gt;</code></pre><p>Мы прикрепили слушатель к внешнему div. Куда бы мы ни кликнули, будь то кнопка или один из внутренних div, в консоли мы всегда получим разметку внешнего div.</p>"
  },
  {
    id: 14,
    question: "В чем разница между операторами «==» и «===»?",
    answer: "<p>Разница между оператором <strong>==</strong> (абстрактное или нестрогое равенство) и оператором <strong>===</strong> (строгое равенство) состоит в том, что первый сравнивает значения после их преобразования или приведения к одному типу (Coercion), а второй — без такого преобразования.</p><pre><code>console.log(5 == '5')  // true (строка преобразуется в число)\nconsole.log(5 === '5') // false (разные типы)</code></pre><p><strong>Алгоритм сравнения ==:</strong></p><ol><li>Если типы одинаковые — используется ===</li><li>null == undefined → true</li><li>Если один операнд число, а другой строка — строка преобразуется в число</li><li>Если один операнд логический — он преобразуется в число</li><li>Если один операнд объект — он преобразуется в примитив</li></ol>"
  },
  {
    id: 15,
    question: "Почему результатом сравнения двух похожих объектов является false?",
    answer: "<p>В JS объекты и примитивы сравниваются по-разному. Примитивы сравниваются по значению, а объекты — по ссылке.</p><pre><code>let a = { a: 1 }\nlet b = { a: 1 }\nlet c = a\n\nconsole.log(a === b) // false (разные ссылки)\nconsole.log(a === c) // true (одна ссылка)</code></pre><p>Два объекта равны только тогда, когда они ссылаются на одну и ту же область памяти.</p>"
  },
  {
    id: 16,
    question: "Для чего используется оператор «!!»?",
    answer: "<p>Оператор <strong>!!</strong> используется для явного преобразования значения в логическое (boolean). Первый знак «!» преобразует значение в boolean и инвертирует его, второй «!» инвертирует обратно.</p><pre><code>console.log(!!'hello')  // true\nconsole.log(!!0)        // false\nconsole.log(!!null)     // false\nconsole.log(!!{})       // true</code></pre>"
  },
  {
    id: 17,
    question: "Как записать несколько выражений в одну строку?",
    answer: "<p>В JavaScript можно записать несколько выражений в одну строку, используя точку с запятой <strong>;</strong> для их разделения.</p><pre><code>let a = 1; let b = 2; let c = a + b; console.log(c); // 3</code></pre><p>Также можно использовать оператор запятой <strong>,</strong>, который вычисляет оба операнда и возвращает последний:</p><pre><code>let a = (1, 2, 3) // a = 3\nconsole.log(a) // 3</code></pre>"
  },
  {
    id: 18,
    question: "Что такое поднятие (Hoisting)?",
    answer: "<p><strong>Hoisting</strong> (подъем) — это механизм в JavaScript, при котором объявления переменных (с использованием var) и функций поднимаются в начало их области видимости.</p><pre><code>console.log(a) // undefined\nvar a = 5\n\n// Фактически это работает так:\nvar a // объявление поднято вверх\nconsole.log(a) // undefined\na = 5 // инициализация осталась на месте</code></pre><p><strong>Важно:</strong> let и const тоже подвергаются hoisting, но до инициализации находятся в «Temporal Dead Zone» и доступ к ним вызывает ReferenceError.</p>"
  },
  {
    id: 19,
    question: "Что такое область видимости (Scope)?",
    answer: "<p><strong>Область видимости</strong> определяет доступность переменных в различных частях кода. В JavaScript существуют:</p><ul><li><strong>Глобальная область видимости</strong> — переменные, объявленные вне функций</li><li><strong>Функциональная область видимости</strong> — переменные, объявленные внутри функции (var)</li><li><strong>Блочная область видимости</strong> — переменные, объявленные внутри блока {} (let, const)</li></ul><pre><code>let globalVar = 'global' // глобальная область\n\nfunction myFunc() {\n  let funcVar = 'function' // функциональная область\n  if (true) {\n    let blockVar = 'block' // блочная область\n    console.log(blockVar) // 'block'\n  }\n  console.log(blockVar) // ReferenceError\n}</code></pre>"
  },
  {
    id: 20,
    question: "Что такое замыкание (Closures)?",
    answer: "<p><strong>Замыкание</strong> — это функция, которая «запоминает» свою лексическую среду, даже когда она выполняется за пределами этой среды. Замыкания позволяют функции получать доступ к переменным, которые были объявлены в её внешнем контексте.</p><pre><code>function outer() {\n  let count = 0\n  return function inner() {\n    count++\n    console.log(count)\n  }\n}\n\nconst increment = outer()\nincrement() // 1\nincrement() // 2\nincrement() // 3</code></pre><p>Функция inner хранит ссылку на переменную count из внешней функции, создавая замыкание.</p>"
  },
  {
    id: 21,
    question: "Какие значения в JS являются ложными (falsy)?",
    answer: "<p>В JavaScript существует 7 falsy значений:</p><ol><li><strong>false</strong></li><li><strong>0</strong> (ноль)</li><li><strong>-0</strong> (отрицательный ноль)</li><li><strong>0n</strong> (BigInt)</li><li><strong>\"\"</strong>, <strong>''</strong>, <strong>\`\`</strong> (пустая строка)</li><li><strong>null</strong></li><li><strong>undefined</strong></li><li><strong>NaN</strong></li></ol><pre><code>console.log(!!false)   // false\nconsole.log(!!0)       // false\nconsole.log(!!'')      // false\nconsole.log(!!null)    // false\nconsole.log(!!undefined) // false\nconsole.log(!!NaN)     // false</code></pre>"
  },
  {
    id: 22,
    question: "Как проверить, является ли значение ложным (falsy)?",
    answer: "<p>Для проверки значения на falsy можно использовать оператор <strong>!</strong> или функцию <strong>Boolean()</strong>:</p><pre><code>const value = 0\nconsole.log(!value)        // true (falsy)\nconsole.log(Boolean(value)) // false</code></pre><p>Также можно использовать в условном операторе:</p><pre><code>if (!value) {\n  console.log('Значение falsy')\n}</code></pre>"
  },
  {
    id: 23,
    question: "Для чего используется директива «use strict»?",
    answer: "<p><strong>«use strict»</strong> — это директива, которая включает строгий режим в JavaScript. Строгий режим помогает писать более безопасный и предсказуемый код:</p><ul><li>Запрещает использование необъявленных переменных</li><li>Делает this равным undefined в глобальном контексте</li><li>Запрещает удаление неудаляемых свойств</li><li>Запрещает дублирование имен параметров функций</li><li>Запрещает восьмеричную систему счисления</li></ul><pre><code>'use strict'\n\nfunction myFunc() {\n  console.log(this) // undefined (вместо window)\n}\n\nx = 3.14 // ReferenceError: x is not defined</code></pre>"
  },
  {
    id: 24,
    question: "Какое значение имеет this?",
    answer: "<p><strong>this</strong> — это ключевое слово, которое ссылается на объект, из которого вызывается функция. Поведение this зависит от контекста вызова:</p><ul><li><strong>В методах объекта</strong> — это сам объект</li><li><strong>В обычных функциях</strong> — глобальный объект (window в браузере), если не использован строгий режим</li><li><strong>В стрелочных функциях</strong> — this лексически привязывается к значению, в котором функция была определена</li><li><strong>В конструкторах</strong> — новый создаваемый объект</li><li><strong>При использовании call/apply/bind</strong> — переданный объект</li></ul><pre><code>const obj = {\n  name: 'Alice',\n  greet: function() {\n    console.log(this.name) // 'Alice'\n  }\n}\n\nobj.greet()</code></pre>"
  },
  {
    id: 25,
    question: "Что такое прототип объекта?",
    answer: "<p>Каждый объект в JavaScript имеет скрытое свойство <strong>[[Prototype]]</strong> (доступно через <strong>__proto__</strong>), которое указывает на его прототип. Прототипы используются для реализации наследования.</p><pre><code>function Person(name) {\n  this.name = name\n}\n\nPerson.prototype.sayHello = function() {\n  console.log(`Hello, ${this.name}`)\n}\n\nconst john = new Person('John')\njohn.sayHello() // 'Hello, John'</code></pre><p>Объект john наследует метод sayHello из прототипа Person.</p>"
  },
  {
    id: 26,
    question: "Что такое IIFE?",
    answer: "<p><strong>IIFE</strong> (Immediately Invoked Function Expression) — это функция, которая немедленно выполняется после её объявления. Она часто используется для создания замкнутого контекста и предотвращения загрязнения глобального пространства имен.</p><pre><code>(function() {\n  const privateVar = 'I am private'\n  console.log(privateVar) // 'I am private'\n})()\n\nconsole.log(privateVar) // ReferenceError</code></pre><p>В ES6+ с появлением let/const и блоков IIFE используются реже.</p>"
  },
  {
    id: 27,
    question: "Для чего используется метод Function.prototype.apply?",
    answer: "<p>Метод <strong>apply()</strong> вызывает функцию с указанным значением this и аргументами, переданными в виде массива (или псевдомассива).</p><pre><code>function greet(greeting, punctuation) {\n  console.log(`${greeting}, ${this.name}${punctuation}`)\n}\n\nconst person = { name: 'Alice' }\n\ngreet.apply(person, ['Hello', '!']) // 'Hello, Alice!'</code></pre><p>Полезен для вызова функций с динамическим набором аргументов.</p>"
  },
  {
    id: 28,
    question: "Для чего используется метод Function.prototype.call?",
    answer: "<p>Метод <strong>call()</strong> вызывает функцию с указанным значением this и аргументами, переданными по отдельности.</p><pre><code>function greet(greeting, punctuation) {\n  console.log(`${greeting}, ${this.name}${punctuation}`)\n}\n\nconst person = { name: 'Alice' }\n\ngreet.call(person, 'Hello', '!') // 'Hello, Alice!'</code></pre>"
  },
  {
    id: 29,
    question: "В чем разница между методами call и apply?",
    answer: "<p>Оба метода вызывают функцию с указанным значением this, но отличаются способом передачи аргументов:</p><ul><li><strong>call(thisArg, arg1, arg2, ...)</strong> — аргументы передаются по отдельности</li><li><strong>apply(thisArg, [argsArray])</strong> — аргументы передаются в виде массива</li></ul><pre><code>function sum(a, b, c) {\n  return a + b + c\n}\n\nsum.call(null, 1, 2, 3)    // 6\nsum.apply(null, [1, 2, 3]) // 6</code></pre>"
  },
  {
    id: 30,
    question: "Для чего используется метод Function.prototype.bind?",
    answer: "<p>Метод <strong>bind()</strong> возвращает новую функцию с привязанным значением this и (опционально) начальными аргументами. Функция не вызывается немедленно.</p><pre><code>const person = {\n  name: 'Alice',\n  greet: function(greeting) {\n    console.log(`${greeting}, ${this.name}`)\n  }\n}\n\nconst greetAlice = person.greet.bind(person)\ngreetAlice('Hello') // 'Hello, Alice'\n\n// Частичное применение:\nconst greetHi = person.greet.bind(person, 'Hi')\ngreetHi() // 'Hi, Alice'</code></pre>"
  },
  {
    id: 31,
    question: "Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке?",
    answer: "<p><strong>Функциональное программирование</strong> — это парадигма, которая рассматривает вычисления как выполнение математических функций и избегает изменения состояния и изменяемых данных.</p><p><strong>Особенности JavaScript, позволяющие использовать ФП:</strong></p><ul><li>Функции первого класса (first-class citizens)</li><li>Функции высшего порядка (higher-order functions)</li><li>Замыкания (closures)</li><li>Методы массивов: map, filter, reduce</li><li>Стрелочные функции</li><li>Карринг (currying)</li><li>Композиция функций</li></ul><pre><code>const numbers = [1, 2, 3, 4, 5]\n\nconst result = numbers\n  .filter(n => n % 2 === 0)    // [2, 4]\n  .map(n => n * 2)             // [4, 8]\n  .reduce((acc, n) => acc + n, 0) // 12</code></pre>"
  },
  {
    id: 32,
    question: "Что такое функции высшего порядка (Higher Order Functions)?",
    answer: "<p><strong>Функции высшего порядка</strong> — это функции, которые:</p><ol><li>Принимают другие функции в качестве аргументов, и/или</li><li>Возвращают функции как результат</li></ol><pre><code>// Функция принимает функцию как аргумент:\nfunction forEach(array, callback) {\n  for (let i = 0; i < array.length; i++) {\n    callback(array[i], i)\n  }\n}\n\nforEach([1, 2, 3], (item) => console.log(item))\n\n// Функция возвращает функцию:\nfunction multiplier(factor) {\n  return function(number) {\n    return number * factor\n  }\n}\n\nconst double = multiplier(2)\nconsole.log(double(5)) // 10</code></pre>"
  },
  {
    id: 33,
    question: "Почему функции в JS называют объектами первого класса (First-class Objects)?",
    answer: "<p>Функции в JavaScript являются <strong>объектами первого класса</strong>, потому что они:</p><ul><li>Могут быть присвоены переменным</li><li>Могут быть переданы как аргументы другим функциям</li><li>Могут быть возвращены из функций</li><li>Могут иметь свойства и методы</li><li>Могут быть созданы динамически</li></ul><pre><code>// Присвоение переменной:\nconst greet = function(name) { return `Hello, ${name}` }\n\n// Передача как аргумент:\nfunction execute(fn, value) {\n  return fn(value)\n}\nexecute(greet, 'Alice') // 'Hello, Alice'\n\n// Возврат из функции:\nfunction createGreeter(greeting) {\n  return function(name) {\n    return `${greeting}, ${name}`\n  }\n}\n\n// Свойства функции:\nfunction myFunc() {}\nmyFunc.description = 'My function'\nconsole.log(myFunc.description)</code></pre>"
  },
  {
    id: 34,
    question: "Как бы Вы реализовали метод Array.prototype.map?",
    answer: "<p>Реализация метода <strong>map</strong>:</p><pre><code>Array.prototype.myMap = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function')\n  }\n  \n  const result = []\n  const context = thisArg || this\n  \n  for (let i = 0; i < this.length; i++) {\n    if (i in this) {\n      result[i] = callback.call(context, this[i], i, this)\n    }\n  }\n  \n  return result\n}\n\n// Использование:\nconst numbers = [1, 2, 3]\nconst doubled = numbers.myMap(n => n * 2)\nconsole.log(doubled) // [2, 4, 6]</code></pre>"
  },
  {
    id: 35,
    question: "Как бы Вы реализовали метод Array.prototype.filter?",
    answer: "<p>Реализация метода <strong>filter</strong>:</p><pre><code>Array.prototype.myFilter = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function')\n  }\n  \n  const result = []\n  const context = thisArg || this\n  \n  for (let i = 0; i < this.length; i++) {\n    if (i in this) {\n      const element = this[i]\n      if (callback.call(context, element, i, this)) {\n        result.push(element)\n      }\n    }\n  }\n  \n  return result\n}\n\n// Использование:\nconst numbers = [1, 2, 3, 4, 5]\nconst evens = numbers.myFilter(n => n % 2 === 0)\nconsole.log(evens) // [2, 4]</code></pre>"
  },
  {
    id: 36,
    question: "Как бы Вы реализовали метод Array.prototype.reduce?",
    answer: "<p>Реализация метода <strong>reduce</strong>:</p><pre><code>Array.prototype.myReduce = function(callback, initialValue) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function')\n  }\n  \n  let accumulator = initialValue\n  let startIndex = 0\n  \n  if (initialValue === undefined) {\n    if (this.length === 0) {\n      throw new TypeError('Reduce of empty array with no initial value')\n    }\n    accumulator = this[0]\n    startIndex = 1\n  }\n  \n  for (let i = startIndex; i < this.length; i++) {\n    if (i in this) {\n      accumulator = callback(accumulator, this[i], i, this)\n    }\n  }\n  \n  return accumulator\n}\n\n// Использование:\nconst numbers = [1, 2, 3, 4]\nconst sum = numbers.myReduce((acc, n) => acc + n, 0)\nconsole.log(sum) // 10</code></pre>"
  },
  {
    id: 37,
    question: "Что такое объект arguments?",
    answer: "<p><strong>arguments</strong> — это псевдомассив, доступный внутри обычных функций, который содержит все аргументы, переданные функции.</p><pre><code>function sum() {\n  let total = 0\n  for (let i = 0; i < arguments.length; i++) {\n    total += arguments[i]\n  }\n  return total\n}\n\nconsole.log(sum(1, 2, 3, 4)) // 10</code></pre><p><strong>Важно:</strong> arguments недоступен в стрелочных функциях. В современном коде лучше использовать rest-параметры (<strong>...args</strong>).</p>"
  },
  {
    id: 38,
    question: "Как создать объект, не имеющий прототипа?",
    answer: "<p>Для создания объекта без прототипа используется метод <strong>Object.create(null)</strong>:</p><pre><code>const obj = Object.create(null)\n\nconsole.log(obj.__proto__) // undefined\nconsole.log(Object.getPrototypeOf(obj)) // null\n\n// Такой объект не наследует методы Object:\nconsole.log(obj.toString) // undefined\nconsole.log(obj.hasOwnProperty) // undefined</code></pre><p>Полезно для создания чистых словарей (maps) без конфликтов с встроенными свойствами.</p>"
  },
  {
    id: 39,
    question: "Почему в представленном коде переменная b становится глобальной при вызове функции?",
    answer: "<pre><code>function myFunc() {\n  a = 1      // без var/let/const — глобальная!\n  let b = 2  // локальная\n}\n\nmyFunc()\nconsole.log(a) // 1 (глобальная)\nconsole.log(b) // ReferenceError</code></pre><p>Переменная <strong>a</strong> становится глобальной, потому что она объявлена без ключевого слова var, let или const. В строгом режиме ('use strict') это вызовет ошибку.</p>"
  },
  {
    id: 40,
    question: "Что такое ECMAScript?",
    answer: "<p><strong>ECMAScript</strong> — это спецификация языка программирования, стандартизированная организацией ECMA International. JavaScript — это наиболее известная реализация ECMAScript.</p><p><strong>Основные версии:</strong></p><ul><li>ES1 (1997) — первая версия</li><li>ES5 (2009) — строгий режим, JSON, Array methods</li><li>ES6/ES2015 — классы, модули, стрелочные функции, промисы</li><li>ES2016-ES2023 — ежегодные обновления с новыми функциями</li></ul>"
  },
  {
    id: 41,
    question: "Что нового привнес в JS стандарт ES6 (ECMAScript 2015)?",
    answer: "<p><strong>ES6 добавил множество важных функций:</strong></p><ul><li><strong>let и const</strong> — блочная область видимости</li><li><strong>Стрелочные функции</strong> — краткий синтаксис и лексический this</li><li><strong>Классы</strong> — синтаксический сахар над прототипами</li><li><strong>Модули</strong> — import/export</li><li><strong>Template literals</strong> — шаблонные строки</li><li><strong>Destructuring</strong> — деструктуризация</li><li><strong>Default parameters</strong> — параметры по умолчанию</li><li><strong>Rest/Spread</strong> — операторы ...</li><li><strong>Promises</strong> — встроенные промисы</li><li><strong>Map, Set, WeakMap, WeakSet</strong></li><li><strong>Generators и Iterators</strong></li><li><strong>Symbol</strong> — новый примитивный тип</li></ul>"
  },
  {
    id: 42,
    question: "В чем разница между ключевыми словами «var», «let» и «const»?",
    answer: "<table><tr><th></th><th>var</th><th>let</th><th>const</th></tr><tr><td>Область видимости</td><td>Функциональная</td><td>Блочная</td><td>Блочная</td></tr><tr><td>Hoisting</td><td>Да (undefined)</td><td>Да (TDZ)</td><td>Да (TDZ)</td></tr><tr><td>Переприсваивание</td><td>Да</td><td>Да</td><td>Нет</td></tr><tr><td>В глобальной области</td><td>Добавляет в window</td><td>Не добавляет</td><td>Не добавляет</td></tr></table><pre><code>var a = 1\nlet b = 2\nconst c = 3\n\na = 10  // OK\nb = 20  // OK\nc = 30  // TypeError\n\nif (true) {\n  var x = 100  // виден вне блока\n  let y = 200  // виден только в блоке\n}\nconsole.log(x) // 100\nconsole.log(y) // ReferenceError</code></pre>"
  },
  {
    id: 43,
    question: "Что такое стрелочные функции (Arrow Functions)?",
    answer: "<p><strong>Стрелочные функции</strong> — это функции с более кратким синтаксисом и лексическим связыванием this.</p><pre><code>// Обычная функция:\nfunction add(a, b) {\n  return a + b\n}\n\n// Стрелочная функция:\nconst add = (a, b) => a + b\n\n// С одним параметром:\nconst double = n => n * 2\n\n// Без параметров:\nconst greet = () => 'Hello'\n\n// С возвращением объекта:\nconst getPerson = (name) => ({ name, age: 30 })</code></pre><p><strong>Важно:</strong> Стрелочные функции не имеют своего this, arguments, super или new.target.</p>"
  },
  {
    id: 44,
    question: "Что такое классы (Classes)?",
    answer: "<p><strong>Классы в ES6</strong> — это синтаксический сахар над прототипным наследованием JavaScript.</p><pre><code>class Person {\n  constructor(name, age) {\n    this.name = name\n    this.age = age\n  }\n  \n  greet() {\n    console.log(`Hello, ${this.name}`)\n  }\n  \n  static create(name, age) {\n    return new Person(name, age)\n  }\n}\n\nclass Employee extends Person {\n  constructor(name, age, position) {\n    super(name, age)\n    this.position = position\n  }\n  \n  greet() {\n    super.greet()\n    console.log(`I am a ${this.position}`)\n  }\n}\n\nconst emp = Employee.create('Alice', 30, 'Developer')\nemp.greet()</code></pre>"
  },
  {
    id: 45,
    question: "Что такое шаблонные литералы (Template Literals)?",
    answer: "<p><strong>Шаблонные литералы</strong> — это строки, которые позволяют использовать выражения внутри строки и многострочные строки.</p><pre><code>const name = 'Alice'\nconst age = 30\n\n// Интерполяция:\nconst greeting = `Hello, ${name}! You are ${age} years old.`\n\n// Многострочные строки:\nconst html = `\n  <div>\n    <p>${name}</p>\n  </div>\n`\n\n// Выражения:\nconst result = `Sum: ${2 + 2}`\n\n// Тегированные шаблоны:\nfunction upper(strings, ...values) {\n  return strings.reduce((acc, str, i) => acc + str + (values[i] || '').toUpperCase(), '')\n}\nconst msg = upper`Hello ${name}`</code></pre>"
  },
  {
    id: 46,
    question: "Что такое деструктуризация объекта (Object Destructuring)?",
    answer: "<p><strong>Деструктуризация</strong> позволяет извлекать значения из массивов или объектов и присваивать их переменным.</p><pre><code>// Деструктуризация объекта:\nconst person = { name: 'Alice', age: 30, city: 'NYC' }\nconst { name, age } = person\nconsole.log(name) // 'Alice'\nconsole.log(age)  // 30\n\n// Переименование:\nconst { name: userName, city } = person\nconsole.log(userName) // 'Alice'\n\n// Значения по умолчанию:\nconst { country = 'USA' } = person\n\n// Деструктуризация массива:\nconst colors = ['red', 'green', 'blue']\nconst [first, second] = colors\nconsole.log(first)  // 'red'\nconsole.log(second) // 'green'\n\n// Rest:\nconst [head, ...tail] = colors\nconsole.log(tail) // ['green', 'blue']</code></pre>"
  },
  {
    id: 47,
    question: "Что такое модули (Modules)?",
    answer: "<p><strong>Модули ES6</strong> позволяют разделять код на отдельные файлы и импортировать/экспортировать функции, объекты и данные.</p><pre><code>// math.js — экспорт:\nexport const PI = 3.14159\nexport function add(a, b) {\n  return a + b\n}\nexport default function multiply(a, b) {\n  return a * b\n}\n\n// app.js — импорт:\nimport multiply, { PI, add } from './math.js'\n\nconsole.log(PI)           // 3.14159\nconsole.log(add(2, 3))    // 5\nconsole.log(multiply(2, 3)) // 6\n\n// Или импорт всего:\nimport * as Math from './math.js'\nconsole.log(Math.PI)</code></pre>"
  },
  {
    id: 48,
    question: "Что такое объект Set?",
    answer: "<p><strong>Set</strong> — это коллекция уникальных значений любого типа.</p><pre><code>const set = new Set([1, 2, 3, 3, 4, 4])\nconsole.log(set) // Set { 1, 2, 3, 4 }\nconsole.log(set.size) // 4\n\n// Методы:\nset.add(5)          // добавить\nset.has(3)          // true — проверить\nset.delete(3)       // удалить\nset.clear()         // очистить\n\n// Итерация:\nset.forEach(value => console.log(value))\nfor (let value of set) {\n  console.log(value)\n}\n\n// Удаление дубликатов из массива:\nconst arr = [1, 2, 2, 3, 3, 4]\nconst unique = [...new Set(arr)] // [1, 2, 3, 4]</code></pre>"
  },
  {
    id: 49,
    question: "Что такое функция обратного вызова (Callback Function)?",
    answer: "<p><strong>Callback (функция обратного вызова)</strong> — это функция, которая передается в другую функцию как аргумент и вызывается внутри неё.</p><pre><code>// Синхронный callback:\nfunction forEach(array, callback) {\n  for (let i = 0; i < array.length; i++) {\n    callback(array[i], i)\n  }\n}\n\nforEach([1, 2, 3], (item, index) => {\n  console.log(`${index}: ${item}`)\n})\n\n// Асинхронный callback:\nfunction fetchData(callback) {\n  setTimeout(() => {\n    callback({ data: 'Hello' })\n  }, 1000)\n}\n\nfetchData((result) => {\n  console.log(result.data) // 'Hello'\n})</code></pre>"
  },
  {
    id: 50,
    question: "Что такое промисы (Promises)?",
    answer: "<p><strong>Promise (промис)</strong> — это объект, представляющий результат асинхронной операции, которая может завершиться успешно или с ошибкой.</p><p><strong>Состояния промиса:</strong></p><ul><li><strong>Pending</strong> (ожидает) — операция ещё не завершена</li><li><strong>Fulfilled</strong> (выполнено) — операция успешно завершена</li><li><strong>Rejected</strong> (отклонено) — операция завершилась с ошибкой</li></ul><pre><code>const promise = new Promise((resolve, reject) => {\n  const success = true\n  if (success) {\n    resolve('Success!')\n  } else {\n    reject('Error!')\n  }\n})\n\npromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error))\n  .finally(() => console.log('Done'))</code></pre>"
  },
  {
    id: 51,
    question: "Что такое async/await?",
    answer: "<p><strong>async/await</strong> — это синтаксический сахар для работы с промисами, который делает асинхронный код более читаемым и похожим на синхронный.</p><pre><code>// С промисами:\nfunction fetchData() {\n  return fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error(error))\n}\n\n// С async/await:\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data')\n    const data = await response.json()\n    console.log(data)\n  } catch (error) {\n    console.error(error)\n  }\n}</code></pre><p><strong>async</strong> делает функцию асинхронной (всегда возвращает Promise), <strong>await</strong> ожидает выполнения Promise.</p>"
  },
  {
    id: 52,
    question: "В чем разница между spread-оператором и rest-оператором?",
    answer: "<p>Оба используют синтаксис <strong>...</strong>, но применяются в разных контекстах:</p><ul><li><strong>Spread (распространение)</strong> — «распаковывает» элементы массива или свойства объекта</li><li><strong>Rest (остаток)</strong> — «собирает» несколько элементов в массив</li></ul><pre><code>// Spread:\nconst arr1 = [1, 2, 3]\nconst arr2 = [...arr1, 4, 5] // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1 }\nconst obj2 = { ...obj1, b: 2 } // { a: 1, b: 2 }\n\n// Rest:\nfunction sum(...numbers) {\n  return numbers.reduce((acc, n) => acc + n, 0)\n}\nsum(1, 2, 3, 4) // 10\n\nconst [first, ...rest] = [1, 2, 3, 4]\nconsole.log(rest) // [2, 3, 4]\n\nconst { a, ...others } = { a: 1, b: 2, c: 3 }\nconsole.log(others) // { b: 2, c: 3 }</code></pre>"
  },
  {
    id: 53,
    question: "Что такое параметры по умолчанию (Default Parameters)?",
    answer: "<p><strong>Параметры по умолчанию</strong> позволяют задать значения параметров функции, если они не переданы или равны undefined.</p><pre><code>// До ES6:\nfunction greet(name) {\n  name = name || 'Guest'\n  console.log(`Hello, ${name}`)\n}\n\n// ES6+:\nfunction greet(name = 'Guest', age = 18) {\n  console.log(`Hello, ${name}. You are ${age} years old.`)\n}\n\ngreet()              // 'Hello, Guest. You are 18 years old.'\ngreet('Alice')       // 'Hello, Alice. You are 18 years old.'\ngreet('Bob', 25)     // 'Hello, Bob. You are 25 years old.'\n\n// С выражениями:\nfunction create_user(name, role = name === 'admin' ? 'administrator' : 'user') {\n  return { name, role }\n}</code></pre>"
  },
  {
    id: 54,
    question: "Что такое объектная обертка (Wrapper Objects)?",
    answer: "<p><strong>Wrapper objects</strong> — это объекты-обертки для примитивных типов, которые позволяют использовать методы и свойства.</p><pre><code>// Примитивы автоматически оборачиваются:\nconst str = 'hello'\nconsole.log(str.length)    // 5 (строка временно становится объектом String)\nconsole.log(str.toUpperCase()) // 'HELLO'\n\n// Явное создание оберток (не рекомендуется):\nconst strObj = new String('hello')\nconst numObj = new Number(42)\nconst boolObj = new Boolean(true)\n\nconsole.log(typeof str)    // 'string'\nconsole.log(typeof strObj) // 'object'</code></pre><p><strong>Важно:</strong> Не создавайте обертки явно через new — это может привести к неожиданным результатам при сравнении.</p>"
  },
  {
    id: 55,
    question: "В чем разница между явным и неявным преобразованием типов (Coercion)?",
    answer: "<p><strong>Неявное преобразование (Implicit Coercion)</strong> происходит автоматически при операциях с разными типами:</p><pre><code>console.log('5' + 3)      // '53' (строка)\nconsole.log('5' - 3)      // 2 (число)\nconsole.log(true + 1)     // 2\nconsole.log(null == undefined) // true</code></pre><p><strong>Явное преобразование (Explicit Coercion)</strong> выполняется программистом:</p><pre><code>console.log(Number('5'))      // 5\nconsole.log(String(123))      // '123'\nconsole.log(Boolean(0))       // false\nconsole.log(+'42')            // 42\nconsole.log(!!'hello')        // true</code></pre>"
  },
  {
    id: 56,
    question: "Что такое NaN? Как проверить, является ли значение NaN?",
    answer: "<p><strong>NaN</strong> (Not-a-Number) — это специальное значение, представляющее результат недопустимой математической операции.</p><pre><code>console.log(0 / 0)           // NaN\nconsole.log(Math.sqrt(-1))   // NaN\nconsole.log(parseInt('abc')) // NaN\n\n// Проверка на NaN:\nconsole.log(isNaN(NaN))      // true (но есть проблемы)\nconsole.log(isNaN('hello'))  // true (приводит к NaN)\n\n// Правильная проверка (ES6):\nconsole.log(Number.isNaN(NaN))      // true\nconsole.log(Number.isNaN('hello'))  // false (не приводит типы)</code></pre><p><strong>NaN !== NaN</strong> — это единственное значение, которое не равно самому себе.</p>"
  },
  {
    id: 57,
    question: "Как проверить, является ли значение массивом?",
    answer: "<p>Лучший способ — использовать метод <strong>Array.isArray()</strong>:</p><pre><code>console.log(Array.isArray([]))           // true\nconsole.log(Array.isArray([1, 2, 3]))    // true\nconsole.log(Array.isArray({}))           // false\nconsole.log(Array.isArray('hello'))      // false\nconsole.log(Array.isArray(null))         // false</code></pre><p>Альтернативные (менее надежные) способы:</p><pre><code>console.log([] instanceof Array)  // true\nconsole.log([].constructor === Array) // true</code></pre><p><strong>Важно:</strong> typeof [] возвращает 'object', а не 'array'.</p>"
  },
  {
    id: 58,
    question: "Как проверить, что число является четным, без использования деления по модулю (%)?",
    answer: "<p>Можно использовать побитовый оператор <strong>&</strong>:</p><pre><code>function isEven(num) {\n  return (num & 1) === 0\n}\n\nconsole.log(isEven(4))  // true\nconsole.log(isEven(7))  // false</code></pre><p>Или использовать Math:</p><pre><code>function isEven(num) {\n  return Math.floor(num / 2) === num / 2\n}</code></pre>"
  },
  {
    id: 59,
    question: "Как определить наличие свойства в объекте?",
    answer: "<p>Есть несколько способов:</p><pre><code>const obj = { a: 1, b: 2 }\n\n// 1. Оператор 'in':\nconsole.log('a' in obj)           // true\nconsole.log('toString' in obj)    // true (наследуемое)\n\n// 2. Метод hasOwnProperty:\nconsole.log(obj.hasOwnProperty('a'))    // true\nconsole.log(obj.hasOwnProperty('toString')) // false\n\n// 3. Проверка на undefined:\nconsole.log(obj.a !== undefined)  // true\nconsole.log(obj.c !== undefined)  // false\n\n// 4. Optional chaining (ES2020):\nconsole.log(obj?.a !== undefined) // true</code></pre><p><strong>hasOwnProperty</strong> проверяет только собственные свойства, а <strong>in</strong> — включая унаследованные.</p>"
  },
  {
    id: 60,
    question: "Что такое AJAX?",
    answer: "<p><strong>AJAX</strong> (Asynchronous JavaScript and XML) — это техника создания асинхронных веб-приложений, позволяющая обмениваться данными с сервером без перезагрузки страницы.</p><pre><code>// Старый способ (XMLHttpRequest):\nconst xhr = new XMLHttpRequest()\nxhr.open('GET', '/api/data', true)\nxhr.onload = function() {\n  if (xhr.status === 200) {\n    console.log(xhr.responseText)\n  }\n}\nxhr.send()\n\n// Современный способ (Fetch API):\nfetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error))\n\n// С async/await:\nasync function getData() {\n  const response = await fetch('/api/data')\n  const data = await response.json()\n  console.log(data)\n}</code></pre>"
  },
  {
    id: 61,
    question: "Как в JS создать объект?",
    answer: "<p>Есть несколько способов создания объектов:</p><pre><code>// 1. Объектный литерал:\nconst obj1 = { name: 'Alice', age: 30 }\n\n// 2. Конструктор Object:\nconst obj2 = new Object()\nobj2.name = 'Bob'\n\n// 3. Object.create:\nconst obj3 = Object.create(null) // без прототипа\nconst obj4 = Object.create(obj1) // с прототипом\n\n// 4. Конструктор функции:\nfunction Person(name) {\n  this.name = name\n}\nconst obj5 = new Person('Charlie')\n\n// 5. Классы (ES6):\nclass Person {\n  constructor(name) {\n    this.name = name\n  }\n}\nconst obj6 = new Person('David')\n\n// 6. Object.assign:\nconst obj7 = Object.assign({}, { name: 'Eve' })</code></pre>"
  },
  {
    id: 62,
    question: "В чем разница между методами Object.freeze и Object.seal?",
    answer: "<table><tr><th>Метод</th><th>Добавление свойств</th><th>Удаление свойств</th><th>Изменение свойств</th></tr><tr><td>Object.freeze()</td><td>Нет</td><td>Нет</td><td>Нет</td></tr><tr><td>Object.seal()</td><td>Нет</td><td>Нет</td><td>Да</td></tr></table><pre><code>// Object.freeze:\nconst frozen = Object.freeze({ a: 1 })\nfrozen.a = 2       // не изменится\nfrozen.b = 3       // не добавится\ndelete frozen.a    // не удалится\n\n// Object.seal:\nconst sealed = Object.seal({ a: 1 })\nsealed.a = 2       // изменится\nsealed.b = 3       // не добавится\ndelete sealed.a    // не удалится\n\n// Проверка:\nconsole.log(Object.isFrozen(frozen)) // true\nconsole.log(Object.isSealed(sealed)) // true</code></pre>"
  },
  {
    id: 63,
    question: "В чем разница между оператором «in» и методом hasOwnProperty?",
    answer: "<p><strong>Оператор 'in'</strong> проверяет наличие свойства в объекте, включая унаследованные из прототипа:</p><pre><code>const obj = { a: 1 }\n\nconsole.log('a' in obj)           // true (собственное)\nconsole.log('toString' in obj)    // true (унаследованное)\nconsole.log('b' in obj)           // false</code></pre><p><strong>hasOwnProperty</strong> проверяет только собственные свойства объекта:</p><pre><code>console.log(obj.hasOwnProperty('a'))       // true\nconsole.log(obj.hasOwnProperty('toString')) // false (унаследованное)\nconsole.log(obj.hasOwnProperty('b'))        // false</code></pre><p><strong>Вывод:</strong> 'in' ищет во всей цепочке прототипов, hasOwnProperty — только в собственном объекте.</p>"
  },
  {
    id: 64,
    question: "Какие приемы работы с асинхронным кодом в JS Вы знаете?",
    answer: "<p><strong>Основные приемы работы с асинхронностью:</strong></p><ol><li><strong>Callback функции</strong> — классический подход, может привести к «callback hell»</li><li><strong>Promises</strong> — цепочки .then()/.catch(), лучше управление ошибками</li><li><strong>async/await</strong> — синтаксический сахар над Promise, наиболее читаемый код</li><li><strong>Event Emitter</strong> — событийно-ориентированный подход</li><li><strong>Observables (RxJS)</strong> — реактивное программирование, потоки данных</li><li><strong>Generators + Promises</strong> — комбинация для контроля выполнения</li></ol><pre><code>// Callback:\nsetTimeout(() => {\n  console.log('Callback')\n}, 1000)\n\n// Promise:\nfetch('/api/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n\n// async/await:\nasync function getData() {\n  const res = await fetch('/api/data')\n  const data = await res.json()\n  console.log(data)\n}</code></pre>"
  },
  {
    id: 65,
    question: "В чем разница между обычной функцией и функциональным выражением?",
    answer: "<p><strong>Function Declaration (объявление функции):</strong></p><pre><code>function greet(name) {\n  return `Hello, ${name}`\n}\n\ngreet('Alice') // Работает до объявления (hoisting)</code></pre><p><strong>Function Expression (функциональное выражение):</strong></p><pre><code>const greet = function(name) {\n  return `Hello, ${name}`\n}\n\ngreet('Alice') // Не работает до объявления</code></pre><p><strong>Различия:</strong></p><ul><li>Declaration подвергается hoisting (поднимается вверх), Expression — нет</li><li>Declaration должна иметь имя, Expression может быть анонимной</li><li>Expression может быть передана как аргумент или возвращена из функции</li></ul>"
  },
  {
    id: 66,
    question: "Как в JS вызвать функцию?",
    answer: "<p>Есть несколько способов вызова функции:</p><pre><code>function greet(name) {\n  console.log(`Hello, ${name}`)\n}\n\n// 1. Обычный вызов:\ngreet('Alice')\n\n// 2. Через call:\ngreet.call(null, 'Bob')\n\n// 3. Через apply:\ngreet.apply(null, ['Charlie'])\n\n// 4. Через bind (возвращает новую функцию):\nconst greetDave = greet.bind(null, 'David')\ngreetDave()\n\n// 5. Конструктор (с new):\nfunction Person(name) {\n  this.name = name\n}\nconst person = new Person('Eve')\n\n// 6. Через eval (не рекомендуется):\neval('greet(\"Frank\")')\n\n// 7. Через Function конструктор:\nconst fn = new Function('name', 'console.log(`Hello, ${name}`)')\nfn('Grace')</code></pre>"
  },
  {
    id: 67,
    question: "Что такое запоминание или мемоизация (Memoization)?",
    answer: "<p><strong>Мемоизация</strong> — это техника оптимизации, при которой результаты функции кэшируются для повторного использования с теми же аргументами.</p><pre><code>function memoize(fn) {\n  const cache = {}\n  return function(...args) {\n    const key = JSON.stringify(args)\n    if (!cache[key]) {\n      cache[key] = fn(...args)\n    }\n    return cache[key]\n  }\n}\n\n// Пример с вычислением чисел Фибоначчи:\nfunction fibonacci(n) {\n  if (n <= 1) return n\n  return fibonacci(n - 1) + fibonacci(n - 2)\n}\n\nconst memoizedFib = memoize(fibonacci)\n\nconsole.log(memoizedFib(10)) // 55\nconsole.log(memoizedFib(10)) // 55 (из кэша, быстрее)</code></pre>"
  },
  {
    id: 68,
    question: "Как бы Вы реализовали вспомогательную функцию запоминания?",
    answer: "<p>Реализация универсальной функции мемоизации:</p><pre><code>function memoize(fn) {\n  const cache = new Map()\n  \n  return function(...args) {\n    // Создаем уникальный ключ из аргументов\n    const key = args.map(arg => \n      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)\n    ).join('|')\n    \n    // Проверяем кэш\n    if (cache.has(key)) {\n      return cache.get(key)\n    }\n    \n    // Вычисляем и сохраняем результат\n    const result = fn.apply(this, args)\n    cache.set(key, result)\n    \n    return result\n  }\n}\n\n// Использование:\nfunction expensiveCalculation(a, b) {\n  console.log('Вычисляю...')\n  return a + b\n}\n\nconst memoized = memoize(expensiveCalculation)\nmemoized(2, 3) // Вычисляю... 5\nmemoized(2, 3) // 5 (из кэша)\nmemoized(4, 5) // Вычисляю... 9</code></pre>"
  },
  {
    id: 69,
    question: "Почему typeof null возвращает object? Как проверить, является ли значение null?",
    answer: "<p><strong>typeof null === 'object'</strong> — это историческая ошибка в JavaScript, которая была допущена в первой версии и сохранена для обратной совместимости.</p><pre><code>console.log(typeof null)  // 'object' (ошибка!)\nconsole.log(typeof {})    // 'object'\nconsole.log(typeof [])    // 'object'</code></pre><p><strong>Правильная проверка на null:</strong></p><pre><code>const value = null\n\n// Способ 1 — строгое равенство:\nconsole.log(value === null) // true\n\n// Способ 2 — комбинация с typeof:\nconsole.log(value === null && typeof value === 'object') // true\n\n// Важно: null == undefined (true), но null !== undefined</code></pre>"
  },
  {
    id: 70,
    question: "Для чего используется ключевое слово «new»?",
    answer: "<p>Ключевое слово <strong>new</strong> используется для создания экземпляра объекта на основе функции-конструктора или класса.</p><p><strong>Что происходит при использовании new:</strong></p><ol><li>Создается новый пустой объект</li><li>Новый объект связывается с прототипом конструктора</li><li>Функция-конструктор вызывается с this = новый объект</li><li>Если конструктор не возвращает объект, возвращается новый объект</li></ol><pre><code>function Person(name, age) {\n  this.name = name\n  this.age = age\n}\n\nconst person = new Person('Alice', 30)\n\n// Эквивалентно:\nconst person2 = Object.create(Person.prototype)\nPerson.call(person2, 'Alice', 30)\n\n// С классами:\nclass Animal {\n  constructor(name) {\n    this.name = name\n  }\n}\n\nconst animal = new Animal('Dog')</code></pre>"
  }
];