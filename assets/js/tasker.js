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
    '106': {
        id: '106',
        title: { ru: 'Два максимальных числа', en: 'Two Max' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив чисел и возвращает массив из двух самых больших чисел в порядке убывания.',
            en: 'Write a function that takes an array of numbers and returns an array of the two largest numbers in descending order.'
        },
        initialCode: 'function twoMax(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 10, 2, 8, 3]], expected: [10, 8] },
            { input: [[-1, -10, -2]], expected: [-1, -2] }
        ]
    },
    '107': {
        id: '107',
        title: { ru: 'Строго монотонный массив', en: 'Is Sorted' },
        difficulty: 'easy',
        description: {
            ru: 'Проверьте, является ли массив строго монотонно возрастающим (каждый следующий элемент больше предыдущего).',
            en: 'Check if the array is strictly monotonically increasing.'
        },
        initialCode: 'function isSorted(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3]], expected: true },
            { input: [[1, 2, 2, 3]], expected: false }
        ]
    },
    '108': {
        id: '108',
        title: { ru: 'Эффективная ставка НДФЛ', en: 'NDFL Rate' },
        difficulty: 'medium',
        description: {
            ru: 'Вычислите эффективную ставку налога (в процентах), если до 5 млн руб налог 13%, а свыше — 15% на сумму превышения. Верните число.',
            en: 'Calculate the effective tax rate (in percent). 13% up to 5M, 15% above that.'
        },
        initialCode: 'function ndflRate(income) {\n  // Your code here\n}',
        tests: [
            { input: [10000000], expected: 14 }
        ]
    },
    '109': {
        id: '109',
        title: { ru: 'Високосный год', en: 'Leap Year' },
        difficulty: 'easy',
        description: {
            ru: 'Определите, является ли год високосным. Год високосный, если он делится на 4, но не на 100, либо делится на 400.',
            en: 'Determine if a year is a leap year.'
        },
        initialCode: 'function isLeap(year) {\n  // Your code here\n}',
        tests: [
            { input: [2020], expected: true },
            { input: [1900], expected: false }
        ]
    },
    '110': {
        id: '110',
        title: { ru: 'Аналоговые часы', en: 'Analog Clock' },
        difficulty: 'medium',
        description: {
            ru: 'Найдите меньший угол между часовой и минутной стрелками в градусах.',
            en: 'Find the smaller angle between the hour and minute hands in degrees.'
        },
        initialCode: 'function clockAngle(h, m) {\n  // Your code here\n}',
        tests: [
            { input: [3, 30], expected: 75 }
        ]
    },
    '111': {
        id: '111',
        title: { ru: 'Первая цифра', en: 'First Digit' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая возвращает первую цифру числа.',
            en: 'Write a function that returns the first digit of a number.'
        },
        initialCode: 'function getFirstDigit(num) {\n  // Your code here\n}',
        tests: [
            { input: [123], expected: 1 },
            { input: [5678], expected: 5 },
            { input: [9], expected: 9 }
        ]
    },
    '112': {
        id: '112',
        title: { ru: 'Последняя цифра', en: 'Last Digit' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая возвращает последнюю цифру числа.',
            en: 'Write a function that returns the last digit of a number.'
        },
        initialCode: 'function getLastDigit(num) {\n  // Your code here\n}',
        tests: [
            { input: [123], expected: 3 },
            { input: [5678], expected: 8 },
            { input: [0], expected: 0 }
        ]
    },
    '113': {
        id: '113',
        title: { ru: 'Сумма первой и последней', en: 'Sum First and Last' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая возвращает сумму первой и последней цифры числа.',
            en: 'Write a function that returns the sum of the first and last digit of a number.'
        },
        initialCode: 'function sumFirstAndLast(num) {\n  // Your code here\n}',
        tests: [
            { input: [123], expected: 4 },
            { input: [5678], expected: 13 },
            { input: [9], expected: 18 }
        ]
    },
    '114': {
        id: '114',
        title: { ru: 'Количество цифр', en: 'Digit Count' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая возвращает количество цифр в числе.',
            en: 'Write a function that returns the number of digits in a number.'
        },
        initialCode: 'function digitCount(num) {\n  // Your code here\n}',
        tests: [
            { input: [123], expected: 3 },
            { input: [56789], expected: 5 },
            { input: [0], expected: 1 }
        ]
    },
    '115': {
        id: '115',
        title: { ru: 'Сравнение первых цифр', en: 'Compare First Digits' },
        difficulty: 'easy',
        description: {
            ru: 'Проверьте, совпадают ли первые цифры двух чисел.',
            en: 'Check if the first digits of two numbers match.'
        },
        initialCode: 'function compareFirstDigits(num1, num2) {\n  // Your code here\n}',
        tests: [
            { input: [123, 156], expected: true },
            { input: [123, 234], expected: false },
            { input: [5, 500], expected: true }
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
            { input: ['lets talk about javascript'], expected: 3 }
        ]
    },
    '202': {
        id: '202',
        title: { ru: 'Top Words', en: 'Top Words' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая принимает текст и возвращает массив из трех наиболее часто встречающихся слов в порядке убывания их частоты.',
            en: 'Write a function that takes a text and returns an array of the top 3 most frequent words in descending order.'
        },
        initialCode: 'function topWords(text) {\n  // Your code here\n}',
        tests: [
            { input: ["In a village of La Mancha, the name of which I have no desire to call to mind..."], expected: ["of", "a", "la"] }
        ]
    },
    '203': {
        id: '203',
        title: { ru: 'Максимальное число', en: 'Max Number' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая переставляет цифры числа так, чтобы получилось максимально возможное число.',
            en: 'Write a function that rearranges digits of a number to form the maximum possible number.'
        },
        initialCode: 'function maxNumber(n) {\n  // Your code here\n}',
        tests: [
            { input: [42145], expected: 54421 }
        ]
    },
    '204': {
        id: '204',
        title: { ru: 'Поиск элемента', en: '2D Search' },
        difficulty: 'easy',
        description: {
            ru: 'Есть ли в матрице строк хотя бы одна строка длины не менее min.',
            en: 'Check if matrix has a string with length >= min.'
        },
        initialCode: 'function searchValue(matrix, min) {\n  // Your code here\n}',
        tests: [
            { input: [[["a", "bb"], ["ccc"]], 3], expected: true }
        ]
    },
    '205': {
        id: '205',
        title: { ru: 'Длина плейлиста', en: 'Playlist Duration' },
        difficulty: 'medium',
        description: {
            ru: 'Верните общую длительность плейлиста в формате HH:MM:SS или MM:SS.',
            en: 'Return total playlist duration as HH:MM:SS or MM:SS.'
        },
        initialCode: 'function playlistDuration(list) {\n  // Your code here\n}',
        tests: [
            { input: [[["a", "1:00"], ["b", "1:00"]]], expected: "02:00" }
        ]
    },
    '206': {
        id: '206',
        title: { ru: 'Лайк/дислайк', en: 'Like/Dislike' },
        difficulty: 'easy',
        description: {
            ru: 'Определите итоговое состояние кнопки: "Like", "Dislike" или "Nothing".',
            en: 'Determine final button state: "Like", "Dislike" or "Nothing".'
        },
        initialCode: 'function likeOrDislike(arr) {\n  // Your code here\n}',
        tests: [
            { input: [["Like", "Like"]], expected: "Nothing" }
        ]
    },
    '207': {
        id: '207',
        title: { ru: 'Pivot Index', en: 'Pivot Index' },
        difficulty: 'medium',
        description: {
            ru: 'Найдите индекс, где сумма элементов слева равна сумме справа.',
            en: 'Find index where sum of left elements equals sum of right.'
        },
        initialCode: 'function pivotIndex(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 7, 3, 6, 5, 6]], expected: 3 }
        ]
    },
    '208': {
        id: '208',
        title: { ru: 'Строка из цифр', en: 'Only Digits' },
        difficulty: 'easy',
        description: {
            ru: 'Проверьте, что строка состоит только из цифр.',
            en: 'Check if string contains only digits.'
        },
        initialCode: 'function onlyDigits(str) {\n  // Your code here\n}',
        tests: [
            { input: ["123"], expected: true }
        ]
    },
    '209': {
        id: '209',
        title: { ru: 'Первый элемент', en: 'First Element' },
        difficulty: 'easy',
        description: {
            ru: 'Верните первый элемент массива.',
            en: 'Return the first element of an array.'
        },
        initialCode: 'function getFirst(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3]], expected: 1 },
            { input: [["a", "b"]], expected: "a" }
        ]
    },
    '210': {
        id: '210',
        title: { ru: 'Последний элемент', en: 'Last Element' },
        difficulty: 'easy',
        description: {
            ru: 'Верните последний элемент массива.',
            en: 'Return the last element of an array.'
        },
        initialCode: 'function getLast(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3]], expected: 3 },
            { input: [["a", "b"]], expected: "b" }
        ]
    },
    '212': {
        id: '212',
        title: { ru: 'Сумма элементов', en: 'Sum Array' },
        difficulty: 'easy',
        description: {
            ru: 'Верните сумму всех элементов массива.',
            en: 'Return the sum of all elements in an array.'
        },
        initialCode: 'function sumArray(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3]], expected: 6 },
            { input: [[-1, 1, 0]], expected: 0 }
        ]
    },
    '211': {
        id: '211',
        title: { ru: 'Разность массивов', en: 'Array Diff' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте функцию разности, которая вычитает один список из другого.',
            en: 'Implement a difference function, which subtracts one list from another.'
        },
        initialCode: 'function arrayDiff(a, b) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 2], [1]], expected: [2, 2] }
        ]
    },
    '215': {
        id: '215',
        title: { ru: 'Большие буквы', en: 'Find Capitals' },
        difficulty: 'easy',
        description: {
            ru: 'Верните индексы всех заглавных букв в строке.',
            en: 'Return indices of all capital letters in a string.'
        },
        initialCode: 'function capitals(word) {\n  // Your code here\n}',
        tests: [
            { input: ["CodEWaRs"], expected: [0, 3, 4, 6] }
        ]
    },
    '223': {
        id: '223',
        title: { ru: 'Проверка на палиндром', en: 'Is Palindrome' },
        difficulty: 'easy',
        description: {
            ru: 'Проверьте, является ли строка палиндромом (читается одинаково в обе стороны).',
            en: 'Check if a string is a palindrome.'
        },
        initialCode: 'function isPalindrome(line) {\n  // Your code here\n}',
        tests: [
            { input: ["anna"], expected: true },
            { input: ["walter"], expected: false }
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
    '302': {
        id: '302',
        title: { ru: 'Find Developers', en: 'Find Developers' },
        difficulty: 'easy',
        description: {
            ru: 'Верните список имен всех разработчиков, отсортированных по алфавиту.',
            en: 'Return a list of names of all developers, sorted alphabetically.'
        },
        initialCode: 'function findDevelopers(teams) {\n  // Your code here\n}',
        tests: [
            { input: [[{ name: "1", members: [{ name: "Alice", role: "developer" }] }]], expected: ["Alice"] }
        ]
    },
    '303': {
        id: '303',
        title: { ru: 'Greet Developers', en: 'Greet Developers' },
        difficulty: 'easy',
        description: {
            ru: 'Добавьте свойство greeting каждому разработчику в массиве.',
            en: 'Add a greeting property to each developer in the array.'
        },
        initialCode: 'function greetDevelopers(list) {\n  // Your code here\n}',
        tests: [
            { input: [[{ firstName: 'Sofia', language: 'Java' }]], expected: [{ firstName: 'Sofia', language: 'Java', greeting: 'Hi Sofia, what do you like the most about Java?' }] }
        ]
    },
    '304': {
        id: '304',
        title: { ru: 'Наличие свойства', en: 'Has Property' },
        difficulty: 'easy',
        description: {
            ru: 'Проверьте, есть ли у объекта свойство с заданным именем.',
            en: 'Check if an object has a property with a given name.'
        },
        initialCode: 'function hasProperty(obj, prop) {\n  // Your code here\n}',
        tests: [
            { input: [{ a: 1 }, "a"], expected: true },
            { input: [{ a: 1 }, "b"], expected: false }
        ]
    },
    '305': {
        id: '305',
        title: { ru: 'Количество свойств', en: 'Property Count' },
        difficulty: 'easy',
        description: {
            ru: 'Верните количество собственных свойств объекта.',
            en: 'Return the number of own properties of an object.'
        },
        initialCode: 'function countProperties(obj) {\n  // Your code here\n}',
        tests: [
            { input: [{ a: 1, b: 2 }], expected: 2 },
            { input: [{}], expected: 0 }
        ]
    },
    '316': {
        id: '316',
        title: { ru: 'Анаграммы', en: 'Anagrams' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая проверяет, являются ли две строки анаграммами.',
            en: 'Write a function that checks if two strings are anagrams.'
        },
        initialCode: 'function isAnagram(test, original) {\n  // Your code here\n}',
        tests: [
            { input: ["foefet", "toffee"], expected: true },
            { input: ["Buckethead", "DeathCubeK"], expected: true }
        ]
    },
    '401': {
        id: '401',
        title: { ru: 'Функция forEach', en: 'forEach Function' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте аналог стандартного метода Array#forEach. Функция принимает массив и колбэк.',
            en: 'Implement an analogue of the standard Array#forEach method. The function takes an array and a callback.'
        },
        initialCode: 'function forEach(arr, cb) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2], (x, i) => {}], expected: undefined }
        ]
    },
    '402': {
        id: '402',
        title: { ru: 'Функция filter', en: 'filter Function' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте аналог стандартного метода Array#filter.',
            en: 'Implement an analogue of the standard Array#filter method.'
        },
        initialCode: 'function filter(arr, cb) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3, 4], (x) => x % 2 === 0], expected: [2, 4] }
        ]
    },
    '406': {
        id: '406',
        title: { ru: 'Функция map', en: 'map Function' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте аналог стандартного метода Array#map.',
            en: 'Implement an analogue of the standard Array#map method.'
        },
        initialCode: 'function map(arr, cb) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3], (x) => x * 2], expected: [2, 4, 6] }
        ]
    },
    '501': {
        id: '501',
        title: { ru: 'Http Router', en: 'Http Router' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте класс HttpRouter с методами addHandler и runRequest.',
            en: 'Implement an HttpRouter class with addHandler and runRequest methods.'
        },
        initialCode: 'class HttpRouter {\n  constructor() {\n    this.handlers = {};\n  }\n  addHandler(path, method, fn) {\n    // Your code here\n  }\n  runRequest(path, method) {\n    // Your code here\n  }\n}',
        tests: []
    },
    '509': {
        id: '509',
        title: { ru: 'Counter', en: 'Counter' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте класс Counter с методами increment, decrement и getValue.',
            en: 'Implement a Counter class with increment, decrement and getValue methods.'
        },
        initialCode: 'class Counter {\n  constructor() { this.count = 0; }\n  // Your code here\n}',
        tests: []
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
            { input: [{ a: { b: { c: 1 } } }], expected: 3 },
            { input: [{ a: 1 }], expected: 1 }
        ]
    },
    '602': {
        id: '602',
        title: { ru: 'Сумма вершин в дереве', en: 'Tree Sum' },
        difficulty: 'medium',
        description: {
            ru: 'Посчитайте сумму всех значений value в бинарном дереве.',
            en: 'Calculate the sum of all value properties in a binary tree.'
        },
        initialCode: 'function sumTheTreeValues(root) {\n  // Your code here\n}',
        tests: [
            { input: [{ value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }], expected: 6 }
        ]
    },
    '701': {
        id: '701',
        title: { ru: 'Сумма двух промисов', en: 'Add Promises' },
        difficulty: 'medium',
        description: {
            ru: 'Верните сумму результатов двух промисов.',
            en: 'Return the sum of two resolved promises.'
        },
        initialCode: 'async function addTwoPromises(p1, p2) {\n  // Your code here\n}',
        tests: []
    },
    '710': {
        id: '710',
        title: { ru: 'Sleep', en: 'Sleep' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте функцию sleep(ms), которая возвращает промис, резолвящийся через ms миллисекунд.',
            en: 'Implement a sleep(ms) function that returns a promise resolving after ms milliseconds.'
        },
        initialCode: 'function sleep(ms) {\n  // Your code here\n}',
        tests: []
    }
};

const TOPICS = [
    {
        id: 'logic',
        title: { ru: 'Условия и циклы', en: 'Conditions and Loops' },
        taskIds: ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115']
    },
    {
        id: 'arrays',
        title: { ru: 'Массивы и строки', en: 'Arrays and Strings' },
        taskIds: ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '215', '223']
    },
    {
        id: 'objects',
        title: { ru: 'Объекты и сортировки', en: 'Objects and Sorting' },
        taskIds: ['301', '302', '303', '304', '305', '316']
    },
    {
        id: 'fp',
        title: { ru: 'Функциональное программирование', en: 'Functional Programming' },
        taskIds: ['401', '402', '406']
    },
    {
        id: 'oop',
        title: { ru: 'ООП: this, классы, прототипы', en: 'OOP: this, classes, prototypes' },
        taskIds: ['501', '509']
    },
    {
        id: 'recursion',
        title: { ru: 'Рекурсия', en: 'Recursion' },
        taskIds: ['601', '602']
    },
    {
        id: 'async',
        title: { ru: 'Асинхронность', en: 'Asynchrony' },
        taskIds: ['701', '710']
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
        // Find the function name from the user code using regex
        const nameMatch = userCode.match(/function\s+(\w+)/);
        if (!nameMatch) {
            throw new Error(lang === 'ru' ? 'Функция не найдена. Пожалуйста, не меняйте структуру функции.' : 'Function not found. Please do not change the function structure.');
        }
        const functionName = nameMatch[1];
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
