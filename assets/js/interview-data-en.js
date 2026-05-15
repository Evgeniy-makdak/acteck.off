/**
 * Interview Questions Data - English
 * 70 JavaScript interview questions
 */

const INTERVIEW_QUESTIONS_EN = [
  {
    id: 1,
    question: "What is the difference between null and undefined?",
    answer: "<p><strong>undefined</strong> represents a default value:</p><ul><li>for a variable that has not been assigned a value, i.e. declared but not initialized;</li><li>for a function that does not explicitly return anything, e.g. console.log(1);</li><li>for a non-existent property of an object.</li></ul><p><strong>null</strong> is the \"value of no value\". null is a value that is explicitly assigned to a variable.</p><pre><code>let _thisIsUndefined\nconsole.log(_thisIsUndefined) // undefined\n\nconst doNothing = () => {}\nconsole.log(doNothing()) // undefined\n\nconst someObj = { a: 'ay' }\nconsole.log(someObj['d']) // undefined\n\nlet nullValue = null\nconsole.log(nullValue) // null</code></pre><p>When comparing null and undefined:</p><pre><code>console.log(null == undefined) // true\nconsole.log(null === undefined) // false</code></pre>"
  },
  {
    id: 2,
    question: "What is the purpose of the '&&' operator?",
    answer: "<p>The <strong>&&</strong> (logical AND) operator finds and returns the first falsy value or the last operand when all values are truthy. It uses short-circuit evaluation to avoid unnecessary work:</p><pre><code>console.log(false && 1 && []) // false\nconsole.log(' ' && true && 5) // 5</code></pre><p>Example of using it instead of if:</p><pre><code>// Instead of:\nif (conMobile) {\n  conMobile.release()\n}\n\n// You can write:\nconMobile && conMobile.release()</code></pre>"
  },
  {
    id: 3,
    question: "What is the purpose of the '||' operator?",
    answer: "<p>The <strong>||</strong> (logical OR) operator finds and returns the first truthy value. It also uses short-circuit evaluation. This operator was used for assigning default parameters in functions before default parameters were standardized in ES6.</p><pre><code>console.log(null || 1 || undefined) // 1\n\nfunction logName(name) {\n  let n = name || 'Mark'\n  console.log(n)\n}\n\nlogName() // Mark</code></pre>"
  },
  {
    id: 4,
    question: "Is using the unary plus (operator '+') the fastest way to convert a string to a number?",
    answer: "<p>Yes, according to MDN the <strong>+</strong> operator is indeed the fastest way to convert a string to a number, since it does not perform any operations on a value that is already a number.</p><pre><code>const str = '123'\nconst num = +str\nconsole.log(num) // 123\nconsole.log(typeof num) // number</code></pre>"
  },
  {
    id: 5,
    question: "What is the DOM?",
    answer: "<p><strong>DOM</strong> or Document Object Model is an application programming interface (API) for working with HTML and XML documents.</p><p>When the browser first reads (parses) an HTML document, it forms a large object based on the document — the DOM. The DOM represents a tree structure (document tree). The DOM is used to interact with and modify the structure of the DOM itself or its individual elements and nodes.</p><p>In JS, the DOM is represented by the Document object. The Document object has many methods for working with elements, creating, modifying, deleting them, etc.</p>"
  },
  {
    id: 6,
    question: "What is Event Propagation?",
    answer: "<p>When an event occurs in a DOM element, it doesn't actually happen only in it. The event \"propagates\" from the Window object to the element that triggered it (event.target). In doing so, the event sequentially passes through (touches) all ancestors of the target element.</p><p><strong>Event propagation has three stages or phases:</strong></p><ol><li><strong>Capturing phase</strong> — the event originates in the Window object and descends to the event target through all its ancestors.</li><li><strong>Target phase</strong> — this is when the event reaches the target element.</li><li><strong>Bubbling phase</strong> — the event rises from event.target, sequentially passes through all its ancestors, and reaches the Window object.</li></ol>"
  },
  {
    id: 7,
    question: "What is Event Bubbling?",
    answer: "<p>When an event occurs in a DOM element, it affects not only that element. The event \"bubbles\" (like an air bubble in water), moving from the element that triggered the event (event.target) to its parent, then rises higher, to the parent of the element's parent, until it reaches the Window object.</p><pre><code>&lt;div class=\"grandparent\"&gt;\n  &lt;div class=\"parent\"&gt;\n    &lt;div class=\"child\"&gt;1&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;script&gt;\nfunction addEvent(el, event, callback, isCapture = false) {\n  if (!el || !event || !callback || typeof callback !== 'function') return\n  if (typeof el === 'string') {\n    el = document.querySelector(el)\n  }\n  el.addEventListener(event, callback, isCapture)\n}\n\naddEvent(document, 'DOMContentLoaded', () => {\n  const child = document.querySelector('.child')\n  const parent = document.querySelector('.parent')\n  const grandparent = document.querySelector('.grandparent')\n\n  addEvent(child, 'click', function(e) {\n    console.log('child')\n  })\n\n  addEvent(parent, 'click', function(e) {\n    console.log('parent')\n  })\n\n  addEvent(grandparent, 'click', function(e) {\n    console.log('grandparent')\n  })\n})\n&lt;/script&gt;</code></pre><p>If we click on the child element, the console will output: <strong>child, parent, grandparent, html, document, window</strong>.</p>"
  },
  {
    id: 8,
    question: "What is Event Capturing?",
    answer: "<p>In the capturing phase, the event descends from the Window object to the event target through all its ancestors.</p><p>The <strong>addEventListener</strong> method has a third optional parameter — <strong>useCapture</strong>. When its value is <strong>true</strong>, the event starts with the capturing phase.</p><pre><code>addEvent(child, 'click', function(e) {\n  console.log('child')\n}, true) // true = capturing</code></pre><p>If we click on the child element, we will see the following in the console: <strong>window, document, html, grandparent, parent, child</strong>.</p>"
  },
  {
    id: 9,
    question: "What is the difference between event.preventDefault() and event.stopPropagation()?",
    answer: "<p><strong>event.preventDefault()</strong> — disables the default behavior of an element. For example:</p><ul><li>In a form element — will prevent form submission (submit)</li><li>In contextmenu — the context menu will be disabled</li><li>In keydown — for keyboard override</li></ul><p><strong>event.stopPropagation()</strong> — disables event propagation (its bubbling or capturing).</p>"
  },
  {
    id: 10,
    question: "How do you know if event.preventDefault() was used?",
    answer: "<p>For this we can use the <strong>event.defaultPrevented</strong> property, which returns a boolean value that serves as an indicator of whether the event.preventDefault method was applied to the element.</p><pre><code>element.addEventListener('click', function(event) {\n  event.preventDefault()\n  console.log(event.defaultPrevented) // true\n})</code></pre>"
  },
  {
    id: 11,
    question: "Why does obj.someprop.x throw an error?",
    answer: "<p>We are trying to access the <strong>x</strong> property of the <strong>someprop</strong> property, which has the value <strong>undefined</strong>. undefined does not have an x property.</p><pre><code>const obj = {}\nconsole.log(obj.someprop.x) // TypeError: Cannot read property 'x' of undefined</code></pre>"
  },
  {
    id: 12,
    question: "What is the event target (event.target)?",
    answer: "<p>In simple words, <strong>event.target</strong> is the element where the event occurs, or the element that triggered the event.</p><pre><code>&lt;div onclick=\"clickFunc(event)\"&gt;\n  &lt;button&gt;Button&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;script&gt;\nfunction clickFunc(event) {\n  console.log(event.target) // &lt;button&gt;Button&lt;/button&gt;\n}\n&lt;/script&gt;</code></pre><p>We attached a listener to the outer div. However, if we click on the button, we will get the markup of this button in the console. This allows us to conclude that the element that triggered the event is the button.</p>"
  },
  {
    id: 13,
    question: "What is the current event target (event.currentTarget)?",
    answer: "<p><strong>event.currentTarget</strong> is the element to which the event listener is attached.</p><pre><code>&lt;div onclick=\"clickFunc(event)\"&gt;\n  &lt;button&gt;Button&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;script&gt;\nfunction clickFunc(event) {\n  console.log(event.currentTarget) // &lt;div&gt;...\n}\n&lt;/script&gt;</code></pre><p>We attached the listener to the outer div. No matter where we click, whether it's the button or one of the inner divs, in the console we will always get the markup of the outer div.</p>"
  },
  {
    id: 14,
    question: "What is the difference between '==' and '===' operators?",
    answer: "<p>The difference between the <strong>==</strong> (abstract or loose equality) operator and the <strong>===</strong> (strict equality) operator is that the first compares values after converting or coercing them to a single type (Coercion), while the second does so without such conversion.</p><pre><code>console.log(5 == '5')  // true (string is converted to number)\nconsole.log(5 === '5') // false (different types)</code></pre><p><strong>== comparison algorithm:</strong></p><ol><li>If types are the same — === is used</li><li>null == undefined → true</li><li>If one operand is a number and the other is a string — the string is converted to a number</li><li>If one operand is boolean — it is converted to a number</li><li>If one operand is an object — it is converted to a primitive</li></ol>"
  },
  {
    id: 15,
    question: "Why is the result of comparing two similar objects false?",
    answer: "<p>In JS, objects and primitives are compared differently. Primitives are compared by value, while objects are compared by reference.</p><pre><code>let a = { a: 1 }\nlet b = { a: 1 }\nlet c = a\n\nconsole.log(a === b) // false (different references)\nconsole.log(a === c) // true (same reference)</code></pre><p>Two objects are equal only when they refer to the same area of memory.</p>"
  },
  {
    id: 16,
    question: "What is the purpose of the '!!' operator?",
    answer: "<p>The <strong>!!</strong> operator is used to explicitly convert a value to a boolean. The first \"!\" converts the value to a boolean and inverts it, the second \"!\" inverts it back.</p><pre><code>console.log(!!'hello')  // true\nconsole.log(!!0)        // false\nconsole.log(!!null)     // false\nconsole.log(!!{})       // true</code></pre>"
  },
  {
    id: 17,
    question: "How to write multiple expressions in one line?",
    answer: "<p>In JavaScript, you can write multiple expressions in one line using a semicolon <strong>;</strong> to separate them.</p><pre><code>let a = 1; let b = 2; let c = a + b; console.log(c); // 3</code></pre><p>You can also use the comma operator <strong>,</strong>, which evaluates both operands and returns the last one:</p><pre><code>let a = (1, 2, 3) // a = 3\nconsole.log(a) // 3</code></pre>"
  },
  {
    id: 18,
    question: "What is Hoisting?",
    answer: "<p><strong>Hoisting</strong> is a mechanism in JavaScript where variable declarations (using var) and function declarations are moved to the top of their scope.</p><pre><code>console.log(a) // undefined\nvar a = 5\n\n// In fact, this works like this:\nvar a // declaration is hoisted up\nconsole.log(a) // undefined\na = 5 // initialization stays in place</code></pre><p><strong>Important:</strong> let and const are also subject to hoisting, but before initialization they are in the \"Temporal Dead Zone\" and accessing them causes a ReferenceError.</p>"
  },
  {
    id: 19,
    question: "What is Scope?",
    answer: "<p><strong>Scope</strong> determines the availability of variables in different parts of the code. In JavaScript there are:</p><ul><li><strong>Global scope</strong> — variables declared outside of functions</li><li><strong>Function scope</strong> — variables declared inside a function (var)</li><li><strong>Block scope</strong> — variables declared inside a block {} (let, const)</li></ul><pre><code>let globalVar = 'global' // global scope\n\nfunction myFunc() {\n  let funcVar = 'function' // function scope\n  if (true) {\n    let blockVar = 'block' // block scope\n    console.log(blockVar) // 'block'\n  }\n  console.log(blockVar) // ReferenceError\n}</code></pre>"
  },
  {
    id: 20,
    question: "What are Closures?",
    answer: "<p><strong>Closure</strong> is a function that \"remembers\" its lexical environment even when executed outside that environment. Closures allow a function to access variables that were declared in its outer context.</p><pre><code>function outer() {\n  let count = 0\n  return function inner() {\n    count++\n    console.log(count)\n  }\n}\n\nconst increment = outer()\nincrement() // 1\nincrement() // 2\nincrement() // 3</code></pre><p>The inner function keeps a reference to the count variable from the outer function, creating a closure.</p>"
  },
  {
    id: 21,
    question: "What values in JS are falsy?",
    answer: "<p>There are 7 falsy values in JavaScript:</p><ol><li><strong>false</strong></li><li><strong>0</strong> (zero)</li><li><strong>-0</strong> (negative zero)</li><li><strong>0n</strong> (BigInt)</li><li><strong>\"\"</strong>, <strong>''</strong>, <strong>\`\`</strong> (empty string)</li><li><strong>null</strong></li><li><strong>undefined</strong></li><li><strong>NaN</strong></li></ol><pre><code>console.log(!!false)   // false\nconsole.log(!!0)       // false\nconsole.log(!!'')      // false\nconsole.log(!!null)    // false\nconsole.log(!!undefined) // false\nconsole.log(!!NaN)     // false</code></pre>"
  },
  {
    id: 22,
    question: "How to check if a value is falsy?",
    answer: "<p>To check a value for falsy, you can use the <strong>!</strong> operator or the <strong>Boolean()</strong> function:</p><pre><code>const value = 0\nconsole.log(!value)        // true (falsy)\nconsole.log(Boolean(value)) // false</code></pre><p>You can also use it in a conditional statement:</p><pre><code>if (!value) {\n  console.log('Value is falsy')\n}</code></pre>"
  },
  {
    id: 23,
    question: "What is the purpose of the 'use strict' directive?",
    answer: "<p><strong>\"use strict\"</strong> is a directive that enables strict mode in JavaScript. Strict mode helps write safer and more predictable code:</p><ul><li>Prohibits the use of undeclared variables</li><li>Makes this equal to undefined in the global context</li><li>Prohibits deleting non-deletable properties</li><li>Prohibits duplicate parameter names in functions</li><li>Prohibits octal number system</li></ul><pre><code>'use strict'\n\nfunction myFunc() {\n  console.log(this) // undefined (instead of window)\n}\n\nx = 3.14 // ReferenceError: x is not defined</code></pre>"
  },
  {
    id: 24,
    question: "What is the value of this?",
    answer: "<p><strong>this</strong> is a keyword that refers to the object from which the function is called. The behavior of this depends on the call context:</p><ul><li><strong>In object methods</strong> — it is the object itself</li><li><strong>In regular functions</strong> — the global object (window in the browser), if strict mode is not used</li><li><strong>In arrow functions</strong> — this is lexically bound to the value in which the function was defined</li><li><strong>In constructors</strong> — the new object being created</li><li><strong>When using call/apply/bind</strong> — the passed object</li></ul><pre><code>const obj = {\n  name: 'Alice',\n  greet: function() {\n    console.log(this.name) // 'Alice'\n  }\n}\n\nobj.greet()</code></pre>"
  },
  {
    id: 25,
    question: "What is an object's prototype?",
    answer: "<p>Every object in JavaScript has a hidden property <strong>[[Prototype]]</strong> (accessible via <strong>__proto__</strong>), which points to its prototype. Prototypes are used to implement inheritance.</p><pre><code>function Person(name) {\n  this.name = name\n}\n\nPerson.prototype.sayHello = function() {\n  console.log(`Hello, ${this.name}`)\n}\n\nconst john = new Person('John')\njohn.sayHello() // 'Hello, John'</code></pre><p>The john object inherits the sayHello method from the Person prototype.</p>"
  },
  {
    id: 26,
    question: "What is an IIFE?",
    answer: "<p><strong>IIFE</strong> (Immediately Invoked Function Expression) is a function that is executed immediately after its declaration. It is often used to create a closed context and prevent polluting the global namespace.</p><pre><code>(function() {\n  const privateVar = 'I am private'\n  console.log(privateVar) // 'I am private'\n})()\n\nconsole.log(privateVar) // ReferenceError</code></pre><p>In ES6+ with the advent of let/const and blocks, IIFEs are used less frequently.</p>"
  },
  {
    id: 27,
    question: "What is the purpose of the Function.prototype.apply method?",
    answer: "<p>The <strong>apply()</strong> method calls a function with a given this value and arguments provided as an array (or array-like object).</p><pre><code>function greet(greeting, punctuation) {\n  console.log(`${greeting}, ${this.name}${punctuation}`)\n}\n\nconst person = { name: 'Alice' }\n\ngreet.apply(person, ['Hello', '!']) // 'Hello, Alice!'</code></pre><p>Useful for calling functions with a dynamic set of arguments.</p>"
  },
  {
    id: 28,
    question: "What is the purpose of the Function.prototype.call method?",
    answer: "<p>The <strong>call()</strong> method calls a function with a given this value and arguments provided individually.</p><pre><code>function greet(greeting, punctuation) {\n  console.log(`${greeting}, ${this.name}${punctuation}`)\n}\n\nconst person = { name: 'Alice' }\n\ngreet.call(person, 'Hello', '!') // 'Hello, Alice!'</code></pre>"
  },
  {
    id: 29,
    question: "What is the difference between call and apply methods?",
    answer: "<p>Both methods call a function with a given this value, but differ in the way arguments are passed:</p><ul><li><strong>call(thisArg, arg1, arg2, ...)</strong> — arguments are passed individually</li><li><strong>apply(thisArg, [argsArray])</strong> — arguments are passed as an array</li></ul><pre><code>function sum(a, b, c) {\n  return a + b + c\n}\n\nsum.call(null, 1, 2, 3)    // 6\nsum.apply(null, [1, 2, 3]) // 6</code></pre>"
  },
  {
    id: 30,
    question: "What is the purpose of the Function.prototype.bind method?",
    answer: "<p>The <strong>bind()</strong> method returns a new function with a bound this value and (optionally) initial arguments. The function is not called immediately.</p><pre><code>const person = {\n  name: 'Alice',\n  greet: function(greeting) {\n    console.log(`${greeting}, ${this.name}`)\n  }\n}\n\nconst greetAlice = person.greet.bind(person)\ngreetAlice('Hello') // 'Hello, Alice'\n\n// Partial application:\nconst greetHi = person.greet.bind(person, 'Hi')\ngreetHi() // 'Hi, Alice'</code></pre>"
  },
  {
    id: 31,
    question: "What is functional programming and what features of JS allow us to call it a functional language?",
    answer: "<p><strong>Functional programming</strong> is a paradigm that treats computation as the execution of mathematical functions and avoids changing state and mutable data.</p><p><strong>JavaScript features that enable FP:</strong></p><ul><li>First-class functions</li><li>Higher-order functions</li><li>Closures</li><li>Array methods: map, filter, reduce</li><li>Arrow functions</li><li>Currying</li><li>Function composition</li></ul><pre><code>const numbers = [1, 2, 3, 4, 5]\n\nconst result = numbers\n  .filter(n => n % 2 === 0)    // [2, 4]\n  .map(n => n * 2)             // [4, 8]\n  .reduce((acc, n) => acc + n, 0) // 12</code></pre>"
  },
  {
    id: 32,
    question: "What are Higher Order Functions?",
    answer: "<p><strong>Higher-order functions</strong> are functions that:</p><ol><li>Accept other functions as arguments, and/or</li><li>Return functions as a result</li></ol><pre><code>// Function accepts a function as an argument:\nfunction forEach(array, callback) {\n  for (let i = 0; i < array.length; i++) {\n    callback(array[i], i)\n  }\n}\n\nforEach([1, 2, 3], (item) => console.log(item))\n\n// Function returns a function:\nfunction multiplier(factor) {\n  return function(number) {\n    return number * factor\n  }\n}\n\nconst double = multiplier(2)\nconsole.log(double(5)) // 10</code></pre>"
  },
  {
    id: 33,
    question: "Why are functions in JS called first-class objects?",
    answer: "<p>Functions in JavaScript are <strong>first-class objects</strong> because they:</p><ul><li>Can be assigned to variables</li><li>Can be passed as arguments to other functions</li><li>Can be returned from functions</li><li>Can have properties and methods</li><li>Can be created dynamically</li></ul><pre><code>// Assignment to a variable:\nconst greet = function(name) { return `Hello, ${name}` }\n\n// Passing as an argument:\nfunction execute(fn, value) {\n  return fn(value)\n}\nexecute(greet, 'Alice') // 'Hello, Alice'\n\n// Returning from a function:\nfunction createGreeter(greeting) {\n  return function(name) {\n    return `${greeting}, ${name}`\n  }\n}\n\n// Function properties:\nfunction myFunc() {}\nmyFunc.description = 'My function'\nconsole.log(myFunc.description)</code></pre>"
  },
  {
    id: 34,
    question: "How would you implement the Array.prototype.map method?",
    answer: "<p>Implementation of the <strong>map</strong> method:</p><pre><code>Array.prototype.myMap = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function')\n  }\n  \n  const result = []\n  const context = thisArg || this\n  \n  for (let i = 0; i < this.length; i++) {\n    if (i in this) {\n      result[i] = callback.call(context, this[i], i, this)\n    }\n  }\n  \n  return result\n}\n\n// Usage:\nconst numbers = [1, 2, 3]\nconst doubled = numbers.myMap(n => n * 2)\nconsole.log(doubled) // [2, 4, 6]</code></pre>"
  },
  {
    id: 35,
    question: "How would you implement the Array.prototype.filter method?",
    answer: "<p>Implementation of the <strong>filter</strong> method:</p><pre><code>Array.prototype.myFilter = function(callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function')\n  }\n  \n  const result = []\n  const context = thisArg || this\n  \n  for (let i = 0; i < this.length; i++) {\n    if (i in this) {\n      const element = this[i]\n      if (callback.call(context, element, i, this)) {\n        result.push(element)\n      }\n    }\n  }\n  \n  return result\n}\n\n// Usage:\nconst numbers = [1, 2, 3, 4, 5]\nconst evens = numbers.myFilter(n => n % 2 === 0)\nconsole.log(evens) // [2, 4]</code></pre>"
  },
  {
    id: 36,
    question: "How would you implement the Array.prototype.reduce method?",
    answer: "<p>Implementation of the <strong>reduce</strong> method:</p><pre><code>Array.prototype.myReduce = function(callback, initialValue) {\n  if (typeof callback !== 'function') {\n    throw new TypeError(callback + ' is not a function')\n  }\n  \n  let accumulator = initialValue\n  let startIndex = 0\n  \n  if (initialValue === undefined) {\n    if (this.length === 0) {\n      throw new TypeError('Reduce of empty array with no initial value')\n    }\n    accumulator = this[0]\n    startIndex = 1\n  }\n  \n  for (let i = startIndex; i < this.length; i++) {\n    if (i in this) {\n      accumulator = callback(accumulator, this[i], i, this)\n    }\n  }\n  \n  return accumulator\n}\n\n// Usage:\nconst numbers = [1, 2, 3, 4]\nconst sum = numbers.myReduce((acc, n) => acc + n, 0)\nconsole.log(sum) // 10</code></pre>"
  },
  {
    id: 37,
    question: "What is the arguments object?",
    answer: "<p><strong>arguments</strong> is an array-like object available inside regular functions that contains all arguments passed to the function.</p><pre><code>function sum() {\n  let total = 0\n  for (let i = 0; i < arguments.length; i++) {\n    total += arguments[i]\n  }\n  return total\n}\n\nconsole.log(sum(1, 2, 3, 4)) // 10</code></pre><p><strong>Important:</strong> arguments is not available in arrow functions. In modern code, it's better to use rest parameters (<strong>...args</strong>).</p>"
  },
  {
    id: 38,
    question: "How to create an object that has no prototype?",
    answer: "<p>To create an object without a prototype, use the <strong>Object.create(null)</strong> method:</p><pre><code>const obj = Object.create(null)\n\nconsole.log(obj.__proto__) // undefined\nconsole.log(Object.getPrototypeOf(obj)) // null\n\n// Such an object does not inherit Object methods:\nconsole.log(obj.toString) // undefined\nconsole.log(obj.hasOwnProperty) // undefined</code></pre><p>Useful for creating clean dictionaries (maps) without conflicts with built-in properties.</p>"
  },
  {
    id: 39,
    question: "Why does variable b become global when the function is called in the shown code?",
    answer: "<pre><code>function myFunc() {\n  a = 1      // without var/let/const — global!\n  let b = 2  // local\n}\n\nmyFunc()\nconsole.log(a) // 1 (global)\nconsole.log(b) // ReferenceError</code></pre><p>The variable <strong>a</strong> becomes global because it is declared without the var, let, or const keyword. In strict mode ('use strict') this will throw an error.</p>"
  },
  {
    id: 40,
    question: "What is ECMAScript?",
    answer: "<p><strong>ECMAScript</strong> is a programming language specification standardized by ECMA International. JavaScript is the most well-known implementation of ECMAScript.</p><p><strong>Major versions:</strong></p><ul><li>ES1 (1997) — first version</li><li>ES5 (2009) — strict mode, JSON, Array methods</li><li>ES6/ES2015 — classes, modules, arrow functions, promises</li><li>ES2016-ES2023 — annual updates with new features</li></ul>"
  },
  {
    id: 41,
    question: "What new features did the ES6 standard (ECMAScript 2015) bring to JS?",
    answer: "<p><strong>ES6 added many important features:</strong></p><ul><li><strong>let and const</strong> — block scope</li><li><strong>Arrow functions</strong> — concise syntax and lexical this</li><li><strong>Classes</strong> — syntactic sugar over prototypes</li><li><strong>Modules</strong> — import/export</li><li><strong>Template literals</strong> — template strings</li><li><strong>Destructuring</strong></li><li><strong>Default parameters</strong></li><li><strong>Rest/Spread</strong> — ... operators</li><li><strong>Promises</strong> — built-in promises</li><li><strong>Map, Set, WeakMap, WeakSet</strong></li><li><strong>Generators and Iterators</strong></li><li><strong>Symbol</strong> — new primitive type</li></ul>"
  },
  {
    id: 42,
    question: "What is the difference between 'var', 'let', and 'const' keywords?",
    answer: "<table><tr><th></th><th>var</th><th>let</th><th>const</th></tr><tr><td>Scope</td><td>Function</td><td>Block</td><td>Block</td></tr><tr><td>Hoisting</td><td>Yes (undefined)</td><td>Yes (TDZ)</td><td>Yes (TDZ)</td></tr><tr><td>Reassignment</td><td>Yes</td><td>Yes</td><td>No</td></tr><tr><td>In global scope</td><td>Adds to window</td><td>Does not add</td><td>Does not add</td></tr></table><pre><code>var a = 1\nlet b = 2\nconst c = 3\n\na = 10  // OK\nb = 20  // OK\nc = 30  // TypeError\n\nif (true) {\n  var x = 100  // visible outside the block\n  let y = 200  // visible only in the block\n}\nconsole.log(x) // 100\nconsole.log(y) // ReferenceError</code></pre>"
  },
  {
    id: 43,
    question: "What are Arrow Functions?",
    answer: "<p><strong>Arrow functions</strong> are functions with a more concise syntax and lexical this binding.</p><pre><code>// Regular function:\nfunction add(a, b) {\n  return a + b\n}\n\n// Arrow function:\nconst add = (a, b) => a + b\n\n// With one parameter:\nconst double = n => n * 2\n\n// With no parameters:\nconst greet = () => 'Hello'\n\n// Returning an object:\nconst getPerson = (name) => ({ name, age: 30 })</code></pre><p><strong>Important:</strong> Arrow functions do not have their own this, arguments, super, or new.target.</p>"
  },
  {
    id: 44,
    question: "What are Classes?",
    answer: "<p><strong>Classes in ES6</strong> are syntactic sugar over JavaScript's prototype-based inheritance.</p><pre><code>class Person {\n  constructor(name, age) {\n    this.name = name\n    this.age = age\n  }\n  \n  greet() {\n    console.log(`Hello, ${this.name}`)\n  }\n  \n  static create(name, age) {\n    return new Person(name, age)\n  }\n}\n\nclass Employee extends Person {\n  constructor(name, age, position) {\n    super(name, age)\n    this.position = position\n  }\n  \n  greet() {\n    super.greet()\n    console.log(`I am a ${this.position}`)\n  }\n}\n\nconst emp = Employee.create('Alice', 30, 'Developer')\nemp.greet()</code></pre>"
  },
  {
    id: 45,
    question: "What are Template Literals?",
    answer: "<p><strong>Template literals</strong> are strings that allow expressions inside the string and multiline strings.</p><pre><code>const name = 'Alice'\nconst age = 30\n\n// Interpolation:\nconst greeting = `Hello, ${name}! You are ${age} years old.`\n\n// Multiline strings:\nconst html = `\n  <div>\n    <p>${name}</p>\n  </div>\n`\n\n// Expressions:\nconst result = `Sum: ${2 + 2}`\n\n// Tagged templates:\nfunction upper(strings, ...values) {\n  return strings.reduce((acc, str, i) => acc + str + (values[i] || '').toUpperCase(), '')\n}\nconst msg = upper`Hello ${name}`</code></pre>"
  },
  {
    id: 46,
    question: "What is Object Destructuring?",
    answer: "<p><strong>Destructuring</strong> allows extracting values from arrays or objects and assigning them to variables.</p><pre><code>// Object destructuring:\nconst person = { name: 'Alice', age: 30, city: 'NYC' }\nconst { name, age } = person\nconsole.log(name) // 'Alice'\nconsole.log(age)  // 30\n\n// Renaming:\nconst { name: userName, city } = person\nconsole.log(userName) // 'Alice'\n\n// Default values:\nconst { country = 'USA' } = person\n\n// Array destructuring:\nconst colors = ['red', 'green', 'blue']\nconst [first, second] = colors\nconsole.log(first)  // 'red'\nconsole.log(second) // 'green'\n\n// Rest:\nconst [head, ...tail] = colors\nconsole.log(tail) // ['green', 'blue']</code></pre>"
  },
  {
    id: 47,
    question: "What are Modules?",
    answer: "<p><strong>ES6 Modules</strong> allow splitting code into separate files and importing/exporting functions, objects, and data.</p><pre><code>// math.js — export:\nexport const PI = 3.14159\nexport function add(a, b) {\n  return a + b\n}\nexport default function multiply(a, b) {\n  return a * b\n}\n\n// app.js — import:\nimport multiply, { PI, add } from './math.js'\n\nconsole.log(PI)           // 3.14159\nconsole.log(add(2, 3))    // 5\nconsole.log(multiply(2, 3)) // 6\n\n// Or import everything:\nimport * as Math from './math.js'\nconsole.log(Math.PI)</code></pre>"
  },
  {
    id: 48,
    question: "What is a Set object?",
    answer: "<p><strong>Set</strong> is a collection of unique values of any type.</p><pre><code>const set = new Set([1, 2, 3, 3, 4, 4])\nconsole.log(set) // Set { 1, 2, 3, 4 }\nconsole.log(set.size) // 4\n\n// Methods:\nset.add(5)          // add\nset.has(3)          // true — check\nset.delete(3)       // delete\nset.clear()         // clear\n\n// Iteration:\nset.forEach(value => console.log(value))\nfor (let value of set) {\n  console.log(value)\n}\n\n// Removing duplicates from an array:\nconst arr = [1, 2, 2, 3, 3, 4]\nconst unique = [...new Set(arr)] // [1, 2, 3, 4]</code></pre>"
  },
  {
    id: 49,
    question: "What is a Callback Function?",
    answer: "<p><strong>Callback</strong> is a function that is passed into another function as an argument and is called inside it.</p><pre><code>// Synchronous callback:\nfunction forEach(array, callback) {\n  for (let i = 0; i < array.length; i++) {\n    callback(array[i], i)\n  }\n}\n\nforEach([1, 2, 3], (item, index) => {\n  console.log(`${index}: ${item}`)\n})\n\n// Asynchronous callback:\nfunction fetchData(callback) {\n  setTimeout(() => {\n    callback({ data: 'Hello' })\n  }, 1000)\n}\n\nfetchData((result) => {\n  console.log(result.data) // 'Hello'\n})</code></pre>"
  },
  {
    id: 50,
    question: "What are Promises?",
    answer: "<p><strong>Promise</strong> is an object representing the result of an asynchronous operation that may complete successfully or with an error.</p><p><strong>Promise states:</strong></p><ul><li><strong>Pending</strong> — operation is not yet complete</li><li><strong>Fulfilled</strong> — operation completed successfully</li><li><strong>Rejected</strong> — operation completed with an error</li></ul><pre><code>const promise = new Promise((resolve, reject) => {\n  const success = true\n  if (success) {\n    resolve('Success!')\n  } else {\n    reject('Error!')\n  }\n})\n\npromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error))\n  .finally(() => console.log('Done'))</code></pre>"
  },
  {
    id: 51,
    question: "What is async/await?",
    answer: "<p><strong>async/await</strong> is syntactic sugar for working with promises that makes asynchronous code more readable and similar to synchronous code.</p><pre><code>// With promises:\nfunction fetchData() {\n  return fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error(error))\n}\n\n// With async/await:\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data')\n    const data = await response.json()\n    console.log(data)\n  } catch (error) {\n    console.error(error)\n  }\n}</code></pre><p><strong>async</strong> makes a function asynchronous (always returns a Promise), <strong>await</strong> waits for a Promise to resolve.</p>"
  },
  {
    id: 52,
    question: "What is the difference between the spread operator and the rest operator?",
    answer: "<p>Both use the <strong>...</strong> syntax, but are applied in different contexts:</p><ul><li><strong>Spread</strong> — \"unpacks\" array elements or object properties</li><li><strong>Rest</strong> — \"collects\" multiple elements into an array</li></ul><pre><code>// Spread:\nconst arr1 = [1, 2, 3]\nconst arr2 = [...arr1, 4, 5] // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1 }\nconst obj2 = { ...obj1, b: 2 } // { a: 1, b: 2 }\n\n// Rest:\nfunction sum(...numbers) {\n  return numbers.reduce((acc, n) => acc + n, 0)\n}\nsum(1, 2, 3, 4) // 10\n\nconst [first, ...rest] = [1, 2, 3, 4]\nconsole.log(rest) // [2, 3, 4]\n\nconst { a, ...others } = { a: 1, b: 2, c: 3 }\nconsole.log(others) // { b: 2, c: 3 }</code></pre>"
  },
  {
    id: 53,
    question: "What are Default Parameters?",
    answer: "<p><strong>Default parameters</strong> allow setting default values for function parameters if they are not passed or are undefined.</p><pre><code>// Before ES6:\nfunction greet(name) {\n  name = name || 'Guest'\n  console.log(`Hello, ${name}`)\n}\n\n// ES6+:\nfunction greet(name = 'Guest', age = 18) {\n  console.log(`Hello, ${name}. You are ${age} years old.`)\n}\n\ngreet()              // 'Hello, Guest. You are 18 years old.'\ngreet('Alice')       // 'Hello, Alice. You are 18 years old.'\ngreet('Bob', 25)     // 'Hello, Bob. You are 25 years old.'\n\n// With expressions:\nfunction create_user(name, role = name === 'admin' ? 'administrator' : 'user') {\n  return { name, role }\n}</code></pre>"
  },
  {
    id: 54,
    question: "What are Wrapper Objects?",
    answer: "<p><strong>Wrapper objects</strong> are wrappers for primitive types that allow using methods and properties.</p><pre><code>// Primitives are automatically wrapped:\nconst str = 'hello'\nconsole.log(str.length)    // 5 (string temporarily becomes a String object)\nconsole.log(str.toUpperCase()) // 'HELLO'\n\n// Explicit creation of wrappers (not recommended):\nconst strObj = new String('hello')\nconst numObj = new Number(42)\nconst boolObj = new Boolean(true)\n\nconsole.log(typeof str)    // 'string'\nconsole.log(typeof strObj) // 'object'</code></pre><p><strong>Important:</strong> Do not create wrappers explicitly via new — this can lead to unexpected comparison results.</p>"
  },
  {
    id: 55,
    question: "What is the difference between explicit and implicit type coercion?",
    answer: "<p><strong>Implicit Coercion</strong> happens automatically during operations with different types:</p><pre><code>console.log('5' + 3)      // '53' (string)\nconsole.log('5' - 3)      // 2 (number)\nconsole.log(true + 1)     // 2\nconsole.log(null == undefined) // true</code></pre><p><strong>Explicit Coercion</strong> is performed by the programmer:</p><pre><code>console.log(Number('5'))      // 5\nconsole.log(String(123))      // '123'\nconsole.log(Boolean(0))       // false\nconsole.log(+'42')            // 42\nconsole.log(!!'hello')        // true</code></pre>"
  },
  {
    id: 56,
    question: "What is NaN? How to check if a value is NaN?",
    answer: "<p><strong>NaN</strong> (Not-a-Number) is a special value representing the result of an invalid mathematical operation.</p><pre><code>console.log(0 / 0)           // NaN\nconsole.log(Math.sqrt(-1))   // NaN\nconsole.log(parseInt('abc')) // NaN\n\n// Check for NaN:\nconsole.log(isNaN(NaN))      // true (but has issues)\nconsole.log(isNaN('hello'))  // true (coerces to NaN)\n\n// Correct check (ES6):\nconsole.log(Number.isNaN(NaN))      // true\nconsole.log(Number.isNaN('hello'))  // false (does not coerce types)</code></pre><p><strong>NaN !== NaN</strong> — this is the only value that is not equal to itself.</p>"
  },
  {
    id: 57,
    question: "How to check if a value is an array?",
    answer: "<p>The best way is to use the <strong>Array.isArray()</strong> method:</p><pre><code>console.log(Array.isArray([]))           // true\nconsole.log(Array.isArray([1, 2, 3]))    // true\nconsole.log(Array.isArray({}))           // false\nconsole.log(Array.isArray('hello'))      // false\nconsole.log(Array.isArray(null))         // false</code></pre><p>Alternative (less reliable) ways:</p><pre><code>console.log([] instanceof Array)  // true\nconsole.log([].constructor === Array) // true</code></pre><p><strong>Important:</strong> typeof [] returns 'object', not 'array'.</p>"
  },
  {
    id: 58,
    question: "How to check if a number is even without using the modulo operator (%)?",
    answer: "<p>You can use the bitwise <strong>&</strong> operator:</p><pre><code>function isEven(num) {\n  return (num & 1) === 0\n}\n\nconsole.log(isEven(4))  // true\nconsole.log(isEven(7))  // false</code></pre><p>Or use Math:</p><pre><code>function isEven(num) {\n  return Math.floor(num / 2) === num / 2\n}</code></pre>"
  },
  {
    id: 59,
    question: "How to determine if a property exists in an object?",
    answer: "<p>There are several ways:</p><pre><code>const obj = { a: 1, b: 2 }\n\n// 1. 'in' operator:\nconsole.log('a' in obj)           // true\nconsole.log('toString' in obj)    // true (inherited)\n\n// 2. hasOwnProperty method:\nconsole.log(obj.hasOwnProperty('a'))    // true\nconsole.log(obj.hasOwnProperty('toString')) // false\n\n// 3. Check for undefined:\nconsole.log(obj.a !== undefined)  // true\nconsole.log(obj.c !== undefined)  // false\n\n// 4. Optional chaining (ES2020):\nconsole.log(obj?.a !== undefined) // true</code></pre><p><strong>hasOwnProperty</strong> checks only own properties, while <strong>in</strong> checks including inherited ones.</p>"
  },
  {
    id: 60,
    question: "What is AJAX?",
    answer: "<p><strong>AJAX</strong> (Asynchronous JavaScript and XML) is a technique for creating asynchronous web applications that allows exchanging data with the server without reloading the page.</p><pre><code>// Old way (XMLHttpRequest):\nconst xhr = new XMLHttpRequest()\nxhr.open('GET', '/api/data', true)\nxhr.onload = function() {\n  if (xhr.status === 200) {\n    console.log(xhr.responseText)\n  }\n}\nxhr.send()\n\n// Modern way (Fetch API):\nfetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error))\n\n// With async/await:\nasync function getData() {\n  const response = await fetch('/api/data')\n  const data = await response.json()\n  console.log(data)\n}</code></pre>"
  },
  {
    id: 61,
    question: "How to create an object in JS?",
    answer: "<p>There are several ways to create objects:</p><pre><code>// 1. Object literal:\nconst obj1 = { name: 'Alice', age: 30 }\n\n// 2. Object constructor:\nconst obj2 = new Object()\nobj2.name = 'Bob'\n\n// 3. Object.create:\nconst obj3 = Object.create(null) // no prototype\nconst obj4 = Object.create(obj1) // with prototype\n\n// 4. Function constructor:\nfunction Person(name) {\n  this.name = name\n}\nconst obj5 = new Person('Charlie')\n\n// 5. Classes (ES6):\nclass Person {\n  constructor(name) {\n    this.name = name\n  }\n}\nconst obj6 = new Person('David')\n\n// 6. Object.assign:\nconst obj7 = Object.assign({}, { name: 'Eve' })</code></pre>"
  },
  {
    id: 62,
    question: "What is the difference between Object.freeze and Object.seal methods?",
    answer: "<table><tr><th>Method</th><th>Add properties</th><th>Delete properties</th><th>Change properties</th></tr><tr><td>Object.freeze()</td><td>No</td><td>No</td><td>No</td></tr><tr><td>Object.seal()</td><td>No</td><td>No</td><td>Yes</td></tr></table><pre><code>// Object.freeze:\nconst frozen = Object.freeze({ a: 1 })\nfrozen.a = 2       // won't change\nfrozen.b = 3       // won't add\ndelete frozen.a    // won't delete\n\n// Object.seal:\nconst sealed = Object.seal({ a: 1 })\nsealed.a = 2       // will change\nsealed.b = 3       // won't add\ndelete sealed.a    // won't delete\n\n// Check:\nconsole.log(Object.isFrozen(frozen)) // true\nconsole.log(Object.isSealed(sealed)) // true</code></pre>"
  },
  {
    id: 63,
    question: "What is the difference between the 'in' operator and the hasOwnProperty method?",
    answer: "<p><strong>The 'in' operator</strong> checks for the presence of a property in an object, including inherited ones from the prototype:</p><pre><code>const obj = { a: 1 }\n\nconsole.log('a' in obj)           // true (own)\nconsole.log('toString' in obj)    // true (inherited)\nconsole.log('b' in obj)           // false</code></pre><p><strong>hasOwnProperty</strong> checks only the object's own properties:</p><pre><code>console.log(obj.hasOwnProperty('a'))       // true\nconsole.log(obj.hasOwnProperty('toString')) // false (inherited)\nconsole.log(obj.hasOwnProperty('b'))        // false</code></pre><p><strong>Conclusion:</strong> 'in' searches the entire prototype chain, hasOwnProperty — only in the own object.</p>"
  },
  {
    id: 64,
    question: "What techniques for working with asynchronous code in JS do you know?",
    answer: "<p><strong>Main techniques for working with asynchronicity:</strong></p><ol><li><strong>Callback functions</strong> — classic approach, can lead to \"callback hell\"</li><li><strong>Promises</strong> — .then()/.catch() chains, better error handling</li><li><strong>async/await</strong> — syntactic sugar over Promise, most readable code</li><li><strong>Event Emitter</strong> — event-driven approach</li><li><strong>Observables (RxJS)</strong> — reactive programming, data streams</li><li><strong>Generators + Promises</strong> — combination for execution control</li></ol><pre><code>// Callback:\nsetTimeout(() => {\n  console.log('Callback')\n}, 1000)\n\n// Promise:\nfetch('/api/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n\n// async/await:\nasync function getData() {\n  const res = await fetch('/api/data')\n  const data = await res.json()\n  console.log(data)\n}</code></pre>"
  },
  {
    id: 65,
    question: "What is the difference between a regular function and a function expression?",
    answer: "<p><strong>Function Declaration:</strong></p><pre><code>function greet(name) {\n  return `Hello, ${name}`\n}\n\ngreet('Alice') // Works before declaration (hoisting)</code></pre><p><strong>Function Expression:</strong></p><pre><code>const greet = function(name) {\n  return `Hello, ${name}`\n}\n\ngreet('Alice') // Does not work before declaration</code></pre><p><strong>Differences:</strong></p><ul><li>Declaration is hoisted (moved up), Expression is not</li><li>Declaration must have a name, Expression can be anonymous</li><li>Expression can be passed as an argument or returned from a function</li></ul>"
  },
  {
    id: 66,
    question: "How to call a function in JS?",
    answer: "<p>There are several ways to call a function:</p><pre><code>function greet(name) {\n  console.log(`Hello, ${name}`)\n}\n\n// 1. Regular call:\ngreet('Alice')\n\n// 2. Via call:\ngreet.call(null, 'Bob')\n\n// 3. Via apply:\ngreet.apply(null, ['Charlie'])\n\n// 4. Via bind (returns a new function):\nconst greetDave = greet.bind(null, 'David')\ngreetDave()\n\n// 5. Constructor (with new):\nfunction Person(name) {\n  this.name = name\n}\nconst person = new Person('Eve')\n\n// 6. Via eval (not recommended):\neval('greet(\"Frank\")')\n\n// 7. Via Function constructor:\nconst fn = new Function('name', 'console.log(`Hello, ${name}`)')\nfn('Grace')</code></pre>"
  },
  {
    id: 67,
    question: "What is Memoization?",
    answer: "<p><strong>Memoization</strong> is an optimization technique where function results are cached for reuse with the same arguments.</p><pre><code>function memoize(fn) {\n  const cache = {}\n  return function(...args) {\n    const key = JSON.stringify(args)\n    if (!cache[key]) {\n      cache[key] = fn(...args)\n    }\n    return cache[key]\n  }\n}\n\n// Example with Fibonacci numbers:\nfunction fibonacci(n) {\n  if (n <= 1) return n\n  return fibonacci(n - 1) + fibonacci(n - 2)\n}\n\nconst memoizedFib = memoize(fibonacci)\n\nconsole.log(memoizedFib(10)) // 55\nconsole.log(memoizedFib(10)) // 55 (from cache, faster)</code></pre>"
  },
  {
    id: 68,
    question: "How would you implement a memoization helper function?",
    answer: "<p>Implementation of a universal memoization function:</p><pre><code>function memoize(fn) {\n  const cache = new Map()\n  \n  return function(...args) {\n    // Create a unique key from arguments\n    const key = args.map(arg => \n      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)\n    ).join('|')\n    \n    // Check cache\n    if (cache.has(key)) {\n      return cache.get(key)\n    }\n    \n    // Compute and save result\n    const result = fn.apply(this, args)\n    cache.set(key, result)\n    \n    return result\n  }\n}\n\n// Usage:\nfunction expensiveCalculation(a, b) {\n  console.log('Computing...')\n  return a + b\n}\n\nconst memoized = memoize(expensiveCalculation)\nmemoized(2, 3) // Computing... 5\nmemoized(2, 3) // 5 (from cache)\nmemoized(4, 5) // Computing... 9</code></pre>"
  },
  {
    id: 69,
    question: "Why does typeof null return 'object'? How to check if a value is null?",
    answer: "<p><strong>typeof null === 'object'</strong> is a historical bug in JavaScript that was made in the first version and kept for backward compatibility.</p><pre><code>console.log(typeof null)  // 'object' (bug!)\nconsole.log(typeof {})    // 'object'\nconsole.log(typeof [])    // 'object'</code></pre><p><strong>Correct null check:</strong></p><pre><code>const value = null\n\n// Method 1 — strict equality:\nconsole.log(value === null) // true\n\n// Method 2 — combination with typeof:\nconsole.log(value === null && typeof value === 'object') // true\n\n// Important: null == undefined (true), but null !== undefined</code></pre>"
  },
  {
    id: 70,
    question: "What is the purpose of the 'new' keyword?",
    answer: "<p>The <strong>new</strong> keyword is used to create an object instance based on a constructor function or class.</p><p><strong>What happens when using new:</strong></p><ol><li>A new empty object is created</li><li>The new object is linked to the constructor's prototype</li><li>The constructor function is called with this = new object</li><li>If the constructor does not return an object, the new object is returned</li></ol><pre><code>function Person(name, age) {\n  this.name = name\n  this.age = age\n}\n\nconst person = new Person('Alice', 30)\n\n// Equivalent to:\nconst person2 = Object.create(Person.prototype)\nPerson.call(person2, 'Alice', 30)\n\n// With classes:\nclass Animal {\n  constructor(name) {\n    this.name = name\n  }\n}\n\nconst animal = new Animal('Dog')</code></pre>"
  }
];
