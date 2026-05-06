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
    '116': {
        id: '116',
        title: { ru: 'Чётное или нечётное', en: 'Even or Odd' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает целое число и возвращает "Even" если число чётное, и "Odd" если нечётное.',
            en: 'Write a function that takes an integer and returns "Even" if the number is even, and "Odd" if it is odd.'
        },
        initialCode: 'function evenOrOdd(number) {\n  // Your code here\n}',
        tests: [
            { input: [2], expected: 'Even' },
            { input: [7], expected: 'Odd' },
            { input: [0], expected: 'Even' },
            { input: [-3], expected: 'Odd' }
        ]
    },
    '117': {
        id: '117',
        title: { ru: 'Обратный порядок чисел', en: 'Reverse Sequence' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает положительное число n и возвращает массив чисел от n до 1 в обратном порядке.',
            en: 'Write a function that takes a positive integer n and returns an array of numbers from n down to 1.'
        },
        initialCode: 'function reverseSeq(n) {\n  // Your code here\n}',
        tests: [
            { input: [5], expected: [5, 4, 3, 2, 1] },
            { input: [1], expected: [1] },
            { input: [3], expected: [3, 2, 1] }
        ]
    },
    '118': {
        id: '118',
        title: { ru: 'Сумма положительных', en: 'Sum of Positives' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив чисел и возвращает сумму всех положительных чисел. Если положительных чисел нет, верните 0.',
            en: 'Write a function that takes an array of numbers and returns the sum of all positive numbers. If there are no positive numbers, return 0.'
        },
        initialCode: 'function positiveSum(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, -4, 7, 12]], expected: 20 },
            { input: [[-1, -2, -3]], expected: 0 },
            { input: [[0, 0, 0]], expected: 0 }
        ]
    },
    '119': {
        id: '119',
        title: { ru: 'Квадраты чисел', en: 'Square Numbers' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждое число возведено в квадрат.',
            en: 'Write a function that takes an array of numbers and returns a new array where each number is squared.'
        },
        initialCode: 'function squareNumbers(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3, 4]], expected: [1, 4, 9, 16] },
            { input: [[0, -1, -2]], expected: [0, 1, 4] },
            { input: [[]], expected: [] }
        ]
    },
    '120': {
        id: '120',
        title: { ru: 'Удвоение элементов', en: 'Double Elements' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждый элемент умножен на 2.',
            en: 'Write a function that takes an array of numbers and returns a new array where each element is multiplied by 2.'
        },
        initialCode: 'function double(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3]], expected: [2, 4, 6] },
            { input: [[0, -1, 5]], expected: [0, -2, 10] },
            { input: [[]], expected: [] }
        ]
    },
    '121': {
        id: '121',
        title: { ru: 'Количество гласных', en: 'Vowel Count' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая принимает строку и возвращает количество гласных букв (a, e, i, o, u) в ней. Регистр не важен.',
            en: 'Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in it. Case insensitive.'
        },
        initialCode: 'function getCount(str) {\n  // Your code here\n}',
        tests: [
            { input: ['abracadabra'], expected: 5 },
            { input: ['HELLO WORLD'], expected: 3 },
            { input: ['xyz'], expected: 0 }
        ]
    },
    '122': {
        id: '122',
        title: { ru: 'Среднее арифметическое', en: 'Average' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив чисел и возвращает их среднее арифметическое. Если массив пуст, верните 0.',
            en: 'Write a function that takes an array of numbers and returns their average. If the array is empty, return 0.'
        },
        initialCode: 'function findAverage(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3, 4]], expected: 2.5 },
            { input: [[10, 20, 30]], expected: 20 },
            { input: [[]], expected: 0 }
        ]
    },
    '123': {
        id: '123',
        title: { ru: 'Удаление пробелов', en: 'Remove Spaces' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает строку и возвращает её без всех пробелов.',
            en: 'Write a function that takes a string and returns it with all spaces removed.'
        },
        initialCode: 'function noSpace(x) {\n  // Your code here\n}',
        tests: [
            { input: ['8 j 8   mBliB8g  imjB8B8  jl  B'], expected: '8j8mBliB8gimjB8B8jlB' },
            { input: ['hello world'], expected: 'helloworld' },
            { input: ['   '], expected: '' }
        ]
    },
    '124': {
        id: '124',
        title: { ru: 'Противоположное число', en: 'Opposite Number' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает число и возвращает его противоположное значение (с обратным знаком).',
            en: 'Write a function that takes a number and returns its opposite value (with the opposite sign).'
        },
        initialCode: 'function opposite(number) {\n  // Your code here\n}',
        tests: [
            { input: [1], expected: -1 },
            { input: [-34], expected: 34 },
            { input: [0], expected: 0 }
        ]
    },
    '125': {
        id: '125',
        title: { ru: 'Сумма без максимума и минимума', en: 'Sum Without Extremes' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов, исключая минимальное и максимальное значения. Если массив пуст или содержит 1 элемент, верните 0.',
            en: 'Write a function that takes an array of numbers and returns the sum of all elements excluding the minimum and maximum values. If the array is empty or has 1 element, return 0.'
        },
        initialCode: 'function sumWithoutExtremes(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[6, 2, 1, 8, 10]], expected: 16 },
            { input: [[1, 1, 11, 2, 3]], expected: 6 },
            { input: [[5]], expected: 0 }
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
    '224': {
        id: '224',
        title: { ru: 'Количество вхождений', en: 'Count Occurrences' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив и значение, и возвращает количество раз, которое значение встречается в массиве.',
            en: 'Write a function that takes an array and a value, and returns the number of times the value occurs in the array.'
        },
        initialCode: 'function countOccurrences(arr, val) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 2, 3, 2], 2], expected: 3 },
            { input: [['a', 'b', 'a'], 'a'], expected: 2 },
            { input: [[1, 2, 3], 4], expected: 0 }
        ]
    },
    '225': {
        id: '225',
        title: { ru: 'Удаление дубликатов', en: 'Remove Duplicates' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив и возвращает новый массив без дубликатов, сохраняя порядок.',
            en: 'Write a function that takes an array and returns a new array without duplicates, preserving order.'
        },
        initialCode: 'function removeDuplicates(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 2, 3, 1, 4]], expected: [1, 2, 3, 4] },
            { input: [['a', 'a', 'b']], expected: ['a', 'b'] },
            { input: [[]], expected: [] }
        ]
    },
    '226': {
        id: '226',
        title: { ru: 'Пересечение массивов', en: 'Array Intersection' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая принимает два массива и возвращает массив их общих элементов (без дубликатов).',
            en: 'Write a function that takes two arrays and returns an array of their common elements (no duplicates).'
        },
        initialCode: 'function intersection(arr1, arr2) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 2, 3], [2, 3, 4]], expected: [2, 3] },
            { input: [[1, 2], [3, 4]], expected: [] },
            { input: [[], [1, 2]], expected: [] }
        ]
    },
    '227': {
        id: '227',
        title: { ru: 'Объединение массивов', en: 'Array Union' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая принимает два массива и возвращает массив всех уникальных элементов из обоих массивов.',
            en: 'Write a function that takes two arrays and returns an array of all unique elements from both arrays.'
        },
        initialCode: 'function union(arr1, arr2) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3], [2, 3, 4]], expected: [1, 2, 3, 4] },
            { input: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] },
            { input: [[], [1, 2]], expected: [1, 2] }
        ]
    },
    '228': {
        id: '228',
        title: { ru: 'Разделение строки', en: 'Split String' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает строку и разделитель, и возвращает массив подстрок.',
            en: 'Write a function that takes a string and a separator, and returns an array of substrings.'
        },
        initialCode: 'function splitString(str, separator) {\n  // Your code here\n}',
        tests: [
            { input: ['a,b,c', ','], expected: ['a', 'b', 'c'] },
            { input: ['hello world', ' '], expected: ['hello', 'world'] },
            { input: ['abc', ''], expected: ['a', 'b', 'c'] }
        ]
    },
    '229': {
        id: '229',
        title: { ru: 'Смена регистра', en: 'Swap Case' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает строку и меняет регистр каждого символа на противоположный.',
            en: 'Write a function that takes a string and swaps the case of each character.'
        },
        initialCode: 'function swapCase(str) {\n  // Your code here\n}',
        tests: [
            { input: ['Hello World'], expected: 'hELLO wORLD' },
            { input: ['ABC'], expected: 'abc' },
            { input: ['123'], expected: '123' }
        ]
    },
    '230': {
        id: '230',
        title: { ru: 'Повторение строки', en: 'Repeat String' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает строку и число n, и возвращает строку, повторённую n раз.',
            en: 'Write a function that takes a string and a number n, and returns the string repeated n times.'
        },
        initialCode: 'function repeat(str, n) {\n  // Your code here\n}',
        tests: [
            { input: ['abc', 3], expected: 'abcabcabc' },
            { input: ['x', 5], expected: 'xxxxx' },
            { input: ['test', 0], expected: '' }
        ]
    },
    '231': {
        id: '231',
        title: { ru: 'Обрезка строки', en: 'Truncate String' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая обрезает строку до указанной длины и добавляет "..." в конце, если строка была обрезана.',
            en: 'Write a function that truncates a string to the specified length and adds "..." at the end if it was truncated.'
        },
        initialCode: 'function truncate(str, maxLength) {\n  // Your code here\n}',
        tests: [
            { input: ['Hello World', 5], expected: 'Hello...' },
            { input: ['Hi', 5], expected: 'Hi' },
            { input: ['JavaScript', 10], expected: 'JavaScript' }
        ]
    },
    '232': {
        id: '232',
        title: { ru: 'Каждое слово с заглавной', en: 'Capitalize Words' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает строку и возвращает её с заглавной первой буквой каждого слова.',
            en: 'Write a function that takes a string and returns it with the first letter of each word capitalized.'
        },
        initialCode: 'function capitalizeWords(str) {\n  // Your code here\n}',
        tests: [
            { input: ['hello world'], expected: 'Hello World' },
            { input: ['javaScript is fun'], expected: 'JavaScript Is Fun' },
            { input: ['hello'], expected: 'Hello' }
        ]
    },
    '233': {
        id: '233',
        title: { ru: 'Перемешивание массива', en: 'Shuffle Array' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая перемешивает элементы массива в случайном порядке (алгоритм Фишера-Йетса).',
            en: 'Write a function that shuffles array elements in random order (Fisher-Yates algorithm).'
        },
        initialCode: 'function shuffle(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3, 4, 5]], expected: 'shuffled' }
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
    '306': {
        id: '306',
        title: { ru: 'Сортировка по цене', en: 'Sort by Price' },
        difficulty: 'easy',
        description: { ru: 'Отсортируйте массив объектов (товаров) по цене в порядке возрастания.', en: 'Sort an array of products by price in ascending order.' },
        initialCode: 'function sortByPrice(products) {\n  // Your code here\n}',
        tests: [{ input: [[{ name: 'A', price: 10 }, { name: 'B', price: 5 }]], expected: [{ name: 'B', price: 5 }, { name: 'A', price: 10 }] }]
    },
    '307': {
        id: '307',
        title: { ru: 'Клонирование объекта', en: 'Clone Object' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте функцию для глубокого клонирования объекта.', en: 'Implement a function for deep cloning an object.' },
        initialCode: 'function deepClone(obj) {\n  // Your code here\n}',
        tests: []
    },
    '308': {
        id: '308',
        title: { ru: 'Объединение объектов', en: 'Merge Objects' },
        difficulty: 'easy',
        description: { ru: 'Напишите функцию, которая объединяет два объекта в один.', en: 'Write a function that merges two objects into one.' },
        initialCode: 'function merge(obj1, obj2) {\n  // Your code here\n}',
        tests: [{ input: [{ a: 1 }, { b: 2 }], expected: { a: 1, b: 2 } }]
    },
    '309': {
        id: '309',
        title: { ru: 'Инверсия объекта', en: 'Invert Object' },
        difficulty: 'medium',
        description: { ru: 'Создайте новый объект, где ключи станут значениями, а значения - ключами.', en: 'Create a new object where keys become values and values become keys.' },
        initialCode: 'function invert(obj) {\n  // Your code here\n}',
        tests: [{ input: [{ a: 'x', b: 'y' }], expected: { x: 'a', y: 'b' } }]
    },
    '310': {
        id: '310',
        title: { ru: 'Сортировка по именам', en: 'Sort by Name' },
        difficulty: 'easy',
        description: { ru: 'Отсортируйте массив объектов по полю name в алфавитном порядке.', en: 'Sort an array of objects by the name field alphabetically.' },
        initialCode: 'function sortByName(arr) {\n  // Your code here\n}',
        tests: [{ input: [[{ name: 'Z' }, { name: 'A' }]], expected: [{ name: 'A' }, { name: 'Z' }] }]
    },
    '311': {
        id: '311',
        title: { ru: 'Группировка данных', en: 'Group By' },
        difficulty: 'hard',
        description: { ru: 'Сгруппируйте массив объектов по значению указанного свойства.', en: 'Group an array of objects by the value of a specified property.' },
        initialCode: 'function groupBy(arr, prop) {\n  // Your code here\n}',
        tests: [{ input: [[{ type: 'A', v: 1 }, { type: 'B', v: 2 }, { type: 'A', v: 3 }], 'type'], expected: { A: [{ type: 'A', v: 1 }, { type: 'A', v: 3 }], B: [{ type: 'B', v: 2 }] } }]
    },
    '312': {
        id: '312',
        title: { ru: 'Массив ключей', en: 'Get Keys' },
        difficulty: 'easy',
        description: { ru: 'Верните массив всех ключей объекта.', en: 'Return an array of all object keys.' },
        initialCode: 'function getKeys(obj) {\n  // Your code here\n}',
        tests: [{ input: [{ a: 1, b: 2 }], expected: ['a', 'b'] }]
    },
    '313': {
        id: '313',
        title: { ru: 'Массив значений', en: 'Get Values' },
        difficulty: 'easy',
        description: { ru: 'Верните массив всех значений объекта.', en: 'Return an array of all object values.' },
        initialCode: 'function getValues(obj) {\n  // Your code here\n}',
        tests: [{ input: [{ a: 1, b: 2 }], expected: [1, 2] }]
    },
    '314': {
        id: '314',
        title: { ru: 'Фильтрация объекта', en: 'Pick' },
        difficulty: 'medium',
        description: { ru: 'Создайте новый объект, содержащий только указанные ключи из исходного.', en: 'Create a new object containing only the specified keys.' },
        initialCode: 'function pick(obj, keys) {\n  // Your code here\n}',
        tests: [{ input: [{ a: 1, b: 2, c: 3 }, ['a', 'c']], expected: { a: 1, c: 3 } }]
    },
    '315': {
        id: '315',
        title: { ru: 'Удаление ключей', en: 'Omit' },
        difficulty: 'medium',
        description: { ru: 'Создайте новый объект, исключив из него указанные ключи.', en: 'Create a new object excluding the specified keys.' },
        initialCode: 'function omit(obj, keys) {\n  // Your code here\n}',
        tests: [{ input: [{ a: 1, b: 2, c: 3 }, ['b']], expected: { a: 1, c: 3 } }]
    },
    '316': {
        id: '316',
        title: { ru: 'Анаграммы', en: 'Anagrams' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функция, которая проверяет, являются ли две строки анаграммами.',
            en: 'Write a function that checks if two strings are anagrams.'
        },
        initialCode: 'function isAnagram(test, original) {\n  // Your code here\n}',
        tests: [
            { input: ["foefet", "toffee"], expected: true },
            { input: ["Buckethead", "DeathCubeK"], expected: true }
        ]
    },
    '317': {
        id: '317',
        title: { ru: 'Поиск по свойству', en: 'Find by Property' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив объектов и имя свойства, и возвращает массив значений этого свойства.',
            en: 'Write a function that takes an array of objects and a property name, and returns an array of values for that property.'
        },
        initialCode: 'function pluck(arr, prop) {\n  // Your code here\n}',
        tests: [
            { input: [[{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], 'name'], expected: ['Alice', 'Bob'] },
            { input: [[{ a: 1 }, { a: 2 }], 'a'], expected: [1, 2] }
        ]
    },
    '318': {
        id: '318',
        title: { ru: 'Частота элементов', en: 'Frequency Counter' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая принимает массив и возвращает объект, где ключи — элементы массива, а значения — количество их вхождений.',
            en: 'Write a function that takes an array and returns an object where keys are array elements and values are their counts.'
        },
        initialCode: 'function frequency(arr) {\n  // Your code here\n}',
        tests: [
            { input: [['a', 'b', 'a', 'c', 'b', 'a']], expected: { a: 3, b: 2, c: 1 } },
            { input: [[1, 2, 1, 1, 3]], expected: { 1: 3, 2: 1, 3: 1 } },
            { input: [[]], expected: {} }
        ]
    },
    '319': {
        id: '319',
        title: { ru: 'Трансформация объекта', en: 'Transform Object' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая принимает объект и трансформирует его, удваивая все числовые значения.',
            en: 'Write a function that takes an object and transforms it by doubling all numeric values.'
        },
        initialCode: 'function doubleValues(obj) {\n  // Your code here\n}',
        tests: [
            { input: [{ a: 2, b: 3, c: 'test' }], expected: { a: 4, b: 6, c: 'test' } },
            { input: [{ x: 0, y: -1 }], expected: { x: 0, y: -2 } }
        ]
    },
    '320': {
        id: '320',
        title: { ru: 'Слияние с проверкой', en: 'Merge with Check' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая объединяет два объекта, но не перезаписывает существующие ключи.',
            en: 'Write a function that merges two objects but does not overwrite existing keys.'
        },
        initialCode: 'function mergeDefaults(obj, defaults) {\n  // Your code here\n}',
        tests: [
            { input: [{ a: 1, b: 2 }, { b: 3, c: 4 }], expected: { a: 1, b: 2, c: 4 } },
            { input: [{}, { x: 1 }], expected: { x: 1 } }
        ]
    },
    '321': {
        id: '321',
        title: { ru: 'Сортировка по нескольким полям', en: 'Multi-field Sort' },
        difficulty: 'hard',
        description: {
            ru: 'Напишите функцию, которая сортирует массив объектов сначала по полю age (возрастание), а при равенстве — по полю name (алфавит).',
            en: 'Write a function that sorts an array of objects first by age (ascending), then by name (alphabetical).'
        },
        initialCode: 'function sortByAgeThenName(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[{ name: 'John', age: 25 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]], expected: [{ name: 'Alice', age: 25 }, { name: 'John', age: 25 }, { name: 'Bob', age: 30 }] }
        ]
    },
    '322': {
        id: '322',
        title: { ru: 'Фильтрация по диапазону', en: 'Filter by Range' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает массив объектов с полем age и возвращает только тех, чей возраст между min и max (включительно).',
            en: 'Write a function that filters objects by age between min and max (inclusive).'
        },
        initialCode: 'function filterByAge(people, min, max) {\n  // Your code here\n}',
        tests: [
            { input: [[{ name: 'A', age: 20 }, { name: 'B', age: 30 }, { name: 'C', age: 40 }], 25, 35], expected: [{ name: 'B', age: 30 }] }
        ]
    },
    '323': {
        id: '323',
        title: { ru: 'Сумма числовых полей', en: 'Sum Numeric Fields' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает объект и возвращает сумму всех его числовых значений.',
            en: 'Write a function that takes an object and returns the sum of all its numeric values.'
        },
        initialCode: 'function sumNumeric(obj) {\n  // Your code here\n}',
        tests: [
            { input: [{ a: 10, b: 20, c: 'hello' }], expected: 30 },
            { input: [{ x: 5, y: -3, z: 0 }], expected: 2 }
        ]
    },
    '324': {
        id: '324',
        title: { ru: 'Переименование ключей', en: 'Rename Keys' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию, которая принимает объект и объект с маппингом старых ключей на новые, и возвращает новый объект с переименованными ключами.',
            en: 'Write a function that renames object keys according to a mapping object.'
        },
        initialCode: 'function renameKeys(obj, mapping) {\n  // Your code here\n}',
        tests: [
            { input: [{ name: 'Alice', age: 25 }, { name: 'fullName', age: 'years' }], expected: { fullName: 'Alice', years: 25 } }
        ]
    },
    '325': {
        id: '325',
        title: { ru: 'Проверка на пустоту', en: 'Is Empty Object' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая проверяет, является ли объект пустым (не имеет собственных свойств).',
            en: 'Write a function that checks if an object is empty (has no own properties).'
        },
        initialCode: 'function isEmpty(obj) {\n  // Your code here\n}',
        tests: [
            { input: [{}], expected: true },
            { input: [{ a: 1 }], expected: false }
        ]
    },
    '326': {
        id: '326',
        title: { ru: 'Значения по умолчанию', en: 'Default Values' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию, которая принимает объект и возвращает новый объект, где отсутствующие ключи заполняются значениями по умолчанию.',
            en: 'Write a function that fills missing keys with default values.'
        },
        initialCode: 'function defaults(obj, defaultObj) {\n  // Your code here\n}',
        tests: [
            { input: [{ a: 1 }, { a: 0, b: 0 }], expected: { a: 1, b: 0 } },
            { input: [{}, { x: 10, y: 20 }], expected: { x: 10, y: 20 } }
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
    '403': {
        id: '403',
        title: { ru: 'Функция reduce', en: 'reduce Function' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте аналог метода Array#reduce.', en: 'Implement an analogue of the standard Array#reduce method.' },
        initialCode: 'function reduce(arr, cb, initial) {\n  // Your code here\n}',
        tests: [{ input: [[1, 2, 3], (acc, x) => acc + x, 0], expected: 6 }]
    },
    '404': {
        id: '404',
        title: { ru: 'Функция find', en: 'find Function' },
        difficulty: 'easy',
        description: { ru: 'Реализуйте аналог метода Array#find.', en: 'Implement an analogue of the standard Array#find method.' },
        initialCode: 'function find(arr, cb) {\n  // Your code here\n}',
        tests: [{ input: [[1, 2, 3], (x) => x > 1], expected: 2 }]
    },
    '405': {
        id: '405',
        title: { ru: 'Функция every', en: 'every Function' },
        difficulty: 'easy',
        description: { ru: 'Реализуйте аналог метода Array#every.', en: 'Implement an analogue of the standard Array#every method.' },
        initialCode: 'function every(arr, cb) {\n  // Your code here\n}',
        tests: [{ input: [[2, 4, 6], (x) => x % 2 === 0], expected: true }]
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
    '407': {
        id: '407',
        title: { ru: 'Функция some', en: 'some Function' },
        difficulty: 'easy',
        description: { ru: 'Реализуйте аналог метода Array#some.', en: 'Implement an analogue of the standard Array#some method.' },
        initialCode: 'function some(arr, cb) {\n  // Your code here\n}',
        tests: [{ input: [[1, 2, 3], (x) => x > 2], expected: true }]
    },
    '408': {
        id: '408',
        title: { ru: 'Каррирование', en: 'Currying' },
        difficulty: 'hard',
        description: { ru: 'Напишите функцию curry, которая трансформирует функцию с n аргументами в цепочку функций.', en: 'Implement a currying function.' },
        initialCode: 'function curry(fn) {\n  // Your code here\n}',
        tests: []
    },
    '409': {
        id: '409',
        title: { ru: 'Композиция', en: 'Compose' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте функцию compose, которая объединяет несколько функций в одну (справа налево).', en: 'Implement a compose function.' },
        initialCode: 'function compose(...fns) {\n  // Your code here\n}',
        tests: []
    },
    '410': {
        id: '410',
        title: { ru: 'Частичное применение', en: 'Partial' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте функцию partial для частичного применения аргументов.', en: 'Implement a partial application function.' },
        initialCode: 'function partial(fn, ...args) {\n  // Your code here\n}',
        tests: []
    },
    '411': {
        id: '411',
        title: { ru: 'Мемоизация', en: 'Memoize' },
        difficulty: 'hard',
        description: { ru: 'Напишите функцию memoize, которая кеширует результаты вызовов функции.', en: 'Implement a memoization function.' },
        initialCode: 'function memoize(fn) {\n  // Your code here\n}',
        tests: []
    },
    '412': {
        id: '412',
        title: { ru: 'Once', en: 'Once' },
        difficulty: 'easy',
        description: { ru: 'Напишите функцию, которая позволяет вызвать переданную функцию только один раз.', en: 'Implement a function that can be called only once.' },
        initialCode: 'function once(fn) {\n  // Your code here\n}',
        tests: []
    },
    '413': {
        id: '413',
        title: { ru: 'Pipe', en: 'Pipe' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте функцию pipe (аналог compose, но слева направо).', en: 'Implement a pipe function.' },
        initialCode: 'function pipe(...fns) {\n  // Your code here\n}',
        tests: []
    },
    '414': {
        id: '414',
        title: { ru: 'Zip', en: 'Zip' },
        difficulty: 'medium',
        description: { ru: 'Напишите функцию zip, которая объединяет два массива в один массив пар.', en: 'Implement a zip function.' },
        initialCode: 'function zip(arr1, arr2) {\n  // Your code here\n}',
        tests: [{ input: [[1, 2], ['a', 'b']], expected: [[1, 'a'], [2, 'b']] }]
    },
    '415': {
        id: '415',
        title: { ru: 'Unzip', en: 'Unzip' },
        difficulty: 'medium',
        description: { ru: 'Напишите функцию unzip, обратную zip.', en: 'Implement an unzip function.' },
        initialCode: 'function unzip(pairs) {\n  // Your code here\n}',
        tests: [{ input: [[[1, 'a'], [2, 'b']]], expected: [[1, 2], ['a', 'b']] }]
    },
    '416': {
        id: '416',
        title: { ru: 'Throttle', en: 'Throttle' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте функцию throttle, которая вызывает переданную функцию не чаще одного раза в указанный интервал времени.',
            en: 'Implement a throttle function that calls the passed function at most once per specified time interval.'
        },
        initialCode: 'function throttle(fn, delay) {\n  // Your code here\n}',
        tests: []
    },
    '417': {
        id: '417',
        title: { ru: 'Debounce', en: 'Debounce' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте функцию debounce, которая откладывает вызов функции до тех пор, пока не пройдёт указанное время после последнего вызова.',
            en: 'Implement a debounce function that delays the function call until the specified time has passed since the last call.'
        },
        initialCode: 'function debounce(fn, delay) {\n  // Your code here\n}',
        tests: []
    },
    '418': {
        id: '418',
        title: { ru: 'Negate', en: 'Negate' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию negate, которая принимает функцию-предикат и возвращает её отрицание.',
            en: 'Write a negate function that takes a predicate function and returns its negation.'
        },
        initialCode: 'function negate(fn) {\n  // Your code here\n}',
        tests: [
            { input: [(x) => x > 0, 5], expected: false },
            { input: [(x) => x > 0, -1], expected: true }
        ]
    },
    '419': {
        id: '419',
        title: { ru: 'Identity', en: 'Identity' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию identity, которая возвращает переданный ей аргумент.',
            en: 'Write an identity function that returns the argument passed to it.'
        },
        initialCode: 'function identity(x) {\n  // Your code here\n}',
        tests: [
            { input: [42], expected: 42 },
            { input: ['hello'], expected: 'hello' }
        ]
    },
    '420': {
        id: '420',
        title: { ru: 'Constant', en: 'Constant' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию constant, которая принимает значение и возвращает функцию, которая всегда возвращает это значение.',
            en: 'Write a constant function that takes a value and returns a function that always returns that value.'
        },
        initialCode: 'function constant(val) {\n  // Your code here\n}',
        tests: []
    },
    '421': {
        id: '421',
        title: { ru: 'Tap', en: 'Tap' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте функцию tap, которая принимает значение и функцию, вызывает функцию с этим значением, а затем возвращает значение.',
            en: 'Implement a tap function that takes a value and a function, calls the function with the value, then returns the value.'
        },
        initialCode: 'function tap(val, fn) {\n  // Your code here\n}',
        tests: [
            { input: [5, (x) => x * 2], expected: 5 }
        ]
    },
    '422': {
        id: '422',
        title: { ru: 'Chunk', en: 'Chunk' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию chunk, которая разбивает массив на группы указанного размера.',
            en: 'Write a chunk function that splits an array into groups of the specified size.'
        },
        initialCode: 'function chunk(arr, size) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
            { input: [[1, 2, 3], 1], expected: [[1], [2], [3]] }
        ]
    },
    '423': {
        id: '423',
        title: { ru: 'Flatten Depth', en: 'Flatten Depth' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию flattenDepth, которая разворачивает массив до указанной глубины.',
            en: 'Write a flattenDepth function that flattens an array up to the specified depth.'
        },
        initialCode: 'function flattenDepth(arr, depth) {\n  // Your code here\n}',
        tests: [
            { input: [[1, [2, [3, [4]]]], 2], expected: [1, 2, 3, [4]] },
            { input: [[1, [2, [3]]], 1], expected: [1, 2, [3]] }
        ]
    },
    '424': {
        id: '424',
        title: { ru: 'Difference', en: 'Difference' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите функцию difference, которая возвращает элементы из первого массива, которых нет во втором.',
            en: 'Write a difference function that returns elements from the first array not present in the second.'
        },
        initialCode: 'function difference(arr1, arr2) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2, 3], [2, 3]], expected: [1] },
            { input: [[1, 2], [3, 4]], expected: [1, 2] }
        ]
    },
    '425': {
        id: '425',
        title: { ru: 'Sorted Index', en: 'Sorted Index' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите функцию sortedIndex, которая возвращает индекс, по которому значение должно быть вставлено в отсортированный массив для сохранения порядка.',
            en: 'Write a sortedIndex function that returns the index at which a value should be inserted into a sorted array to maintain order.'
        },
        initialCode: 'function sortedIndex(arr, val) {\n  // Your code here\n}',
        tests: [
            { input: [[10, 20, 30, 40], 25], expected: 2 },
            { input: [[1, 2, 3], 4], expected: 3 }
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
    '510': {
        id: '510',
        title: { ru: 'Класс Прямоугольник', en: 'Rectangle Class' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте класс Rectangle, принимающий ширину и высоту. Добавьте методы getArea (площадь) и getPerimeter (периметр).',
            en: 'Implement a Rectangle class that takes width and height. Add getArea and getPerimeter methods.'
        },
        initialCode: 'class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  getArea() {\n    // Your code here\n  }\n  getPerimeter() {\n    // Your code here\n  }\n}',
        tests: [
            { input: [10, 5], expected: { area: 50, perimeter: 30 }, isClass: true, checkMethods: ['getArea', 'getPerimeter'] }
        ]
    },
    '511': {
        id: '511',
        title: { ru: 'Класс Круг', en: 'Circle Class' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте класс Circle с методом getArea. Площадь круга: π * r² (используйте Math.PI). Округлите результат до 2 знаков.',
            en: 'Implement a Circle class with a getArea method. Area: π * r². Round to 2 decimal places.'
        },
        initialCode: 'class Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  getArea() {\n    // Your code here\n  }\n}',
        tests: [
            { input: [5], expected: 78.54, isClass: true, checkMethod: 'getArea' }
        ]
    },
    '512': {
        id: '512',
        title: { ru: 'Класс Квадрат', en: 'Square Class' },
        difficulty: 'easy',
        description: { ru: 'Создайте класс Square, наследующий от Rectangle. Конструктор должен принимать только сторону side.', en: 'Create a Square class inheriting from Rectangle.' },
        initialCode: 'class Square extends Rectangle {\n  constructor(side) {\n    // Your code here\n  }\n}',
        tests: []
    },
    '513': {
        id: '513',
        title: { ru: 'Геттеры и сеттеры', en: 'Getters and Setters' },
        difficulty: 'medium',
        description: { ru: 'Добавьте в класс Person геттер fullName, который объединяет firstName и lastName.', en: 'Add a fullName getter to the Person class.' },
        initialCode: 'class Person {\n  constructor(first, last) {\n    this.firstName = first;\n    this.lastName = last;\n  }\n  // Add getter here\n}',
        tests: []
    },
    '514': {
        id: '514',
        title: { ru: 'Статический метод', en: 'Static Method' },
        difficulty: 'medium',
        description: { ru: 'Добавьте статический метод isPoint в класс Point, который проверяет, является ли объект экземпляром Point.', en: 'Add a static method isPoint to the Point class.' },
        initialCode: 'class Point {\n  constructor(x, y) { this.x = x; this.y = y; }\n  // Add static method\n}',
        tests: []
    },
    '515': {
        id: '515',
        title: { ru: 'Приватные поля', en: 'Private Fields' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте класс BankAccount с приватным полем #balance и методом getBalance().', en: 'Implement a BankAccount class with a private #balance field.' },
        initialCode: 'class BankAccount {\n  #balance = 0;\n  constructor(initial) { this.#balance = initial; }\n  getBalance() { return this.#balance; }\n}',
        tests: []
    },
    '516': {
        id: '516',
        title: { ru: 'Цепочка вызовов', en: 'Method Chaining' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте класс Calculator, методы которого (add, subtract) позволяют делать цепочку вызовов.', en: 'Implement a Calculator class with method chaining.' },
        initialCode: 'class Calculator {\n  constructor(val = 0) { this.val = val; }\n  add(n) { /* ... */ }\n  subtract(n) { /* ... */ }\n  getResult() { return this.val; }\n}',
        tests: []
    },
    '517': {
        id: '517',
        title: { ru: 'Переопределение метода', en: 'Method Overriding' },
        difficulty: 'medium',
        description: { ru: 'Создайте класс Animal с методом speak() и класс Dog, который переопределяет его, возвращая "Woof".', en: 'Create an Animal class and a Dog class that overrides speak().' },
        initialCode: 'class Animal { speak() { return "Sound"; } }\nclass Dog extends Animal {\n  // Override speak\n}',
        tests: []
    },
    '518': {
        id: '518',
        title: { ru: 'Класс Пользователь', en: 'User Class' },
        difficulty: 'easy',
        description: { ru: 'Создайте класс User с полями name и email. Добавьте метод getInfo().', en: 'Create a User class with name and email.' },
        initialCode: 'class User {\n  // Your code here\n}',
        tests: []
    },
    '519': {
        id: '519',
        title: { ru: 'Счетчик экземпляров', en: 'Instance Counter' },
        difficulty: 'hard',
        description: { ru: 'Используйте статическое свойство, чтобы считать, сколько объектов класса было создано.', en: 'Use a static property to count class instances.' },
        initialCode: 'class Item {\n  static count = 0;\n  constructor() {\n    // Your code here\n  }\n}',
        tests: []
    },
    '520': {
        id: '520',
        title: { ru: 'Валидация в сеттере', en: 'Setter Validation' },
        difficulty: 'medium',
        description: { ru: 'В классе User добавьте сеттер для age, который не позволяет устанавливать отрицательное значение.', en: 'Add a setter for age with validation.' },
        initialCode: 'class User {\n  set age(value) {\n    // Your code here\n  }\n}',
        tests: []
    },
    '521': {
        id: '521',
        title: { ru: 'Класс Точка', en: 'Point Class' },
        difficulty: 'easy',
        description: { ru: 'Реализуйте класс Point(x, y) с методом distanceTo(otherPoint).', en: 'Implement a Point class with distanceTo method.' },
        initialCode: 'class Point {\n  // Your code here\n}',
        tests: []
    },
    '522': {
        id: '522',
        title: { ru: 'Класс Книга', en: 'Book Class' },
        difficulty: 'easy',
        description: {
            ru: 'Создайте класс Book с полями title, author, year. Добавьте метод getInfo(), возвращающий строку "title - author (year)".',
            en: 'Create a Book class with title, author, year fields. Add getInfo() method returning "title - author (year)".'
        },
        initialCode: 'class Book {\n  constructor(title, author, year) {\n    this.title = title;\n    this.author = author;\n    this.year = year;\n  }\n  getInfo() {\n    // Your code here\n  }\n}',
        tests: [
            { input: ['1984', 'George Orwell', 1949], expected: '1984 - George Orwell (1949)', isClass: true, checkMethod: 'getInfo' }
        ]
    },
    '523': {
        id: '523',
        title: { ru: 'Класс Студент', en: 'Student Class' },
        difficulty: 'medium',
        description: {
            ru: 'Создайте класс Student, наследующий от User. Добавьте поле grade и метод getGrade().',
            en: 'Create a Student class inheriting from User. Add a grade field and getGrade() method.'
        },
        initialCode: 'class User {\n  constructor(name) { this.name = name; }\n  getName() { return this.name; }\n}\n\nclass Student extends User {\n  // Your code here\n}',
        tests: []
    },
    '524': {
        id: '524',
        title: { ru: 'Полиморфизм', en: 'Polymorphism' },
        difficulty: 'medium',
        description: {
            ru: 'Создайте классы Shape, Circle и Rectangle. У каждого должен быть метод getArea(). Circle принимает радиус, Rectangle — ширину и высоту.',
            en: 'Create Shape, Circle and Rectangle classes. Each should have getArea(). Circle takes radius, Rectangle takes width and height.'
        },
        initialCode: 'class Shape {\n  getArea() { return 0; }\n}\n\nclass Circle extends Shape {\n  constructor(radius) {\n    super();\n    this.radius = radius;\n  }\n  getArea() {\n    // Your code here\n  }\n}\n\nclass Rectangle extends Shape {\n  constructor(w, h) {\n    super();\n    this.w = w;\n    this.h = h;\n  }\n  getArea() {\n    // Your code here\n  }\n}',
        tests: []
    },
    '525': {
        id: '525',
        title: { ru: 'Класс Банк', en: 'Bank Class' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте класс Bank с методами createAccount(owner, initialBalance), deposit(accountId, amount), withdraw(accountId, amount) и getBalance(accountId).',
            en: 'Implement a Bank class with createAccount, deposit, withdraw, and getBalance methods.'
        },
        initialCode: 'class Bank {\n  constructor() {\n    this.accounts = {};\n    this.nextId = 1;\n  }\n  createAccount(owner, initialBalance) {\n    // Your code here\n  }\n  deposit(accountId, amount) {\n    // Your code here\n  }\n  withdraw(accountId, amount) {\n    // Your code here\n  }\n  getBalance(accountId) {\n    // Your code here\n  }\n}',
        tests: []
    },
    '526': {
        id: '526',
        title: { ru: 'Класс Таймер', en: 'Timer Class' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте класс Timer с методами start(), stop(), reset() и getElapsed(). Используйте Date.now() для отсчёта времени.',
            en: 'Implement a Timer class with start(), stop(), reset() and getElapsed() methods. Use Date.now() for timing.'
        },
        initialCode: 'class Timer {\n  constructor() {\n    this.startTime = null;\n    this.elapsed = 0;\n    this.running = false;\n  }\n  start() {\n    // Your code here\n  }\n  stop() {\n    // Your code here\n  }\n  reset() {\n    // Your code here\n  }\n  getElapsed() {\n    // Your code here\n  }\n}',
        tests: []
    },
    '527': {
        id: '527',
        title: { ru: 'Класс Стек', en: 'Stack Class' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте класс Stack с методами push(item), pop(), peek() и isEmpty().',
            en: 'Implement a Stack class with push, pop, peek and isEmpty methods.'
        },
        initialCode: 'class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(item) {\n    // Your code here\n  }\n  pop() {\n    // Your code here\n  }\n  peek() {\n    // Your code here\n  }\n  isEmpty() {\n    // Your code here\n  }\n}',
        tests: []
    },
    '528': {
        id: '528',
        title: { ru: 'Класс Очередь', en: 'Queue Class' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте класс Queue с методами enqueue(item), dequeue(), front() и isEmpty().',
            en: 'Implement a Queue class with enqueue, dequeue, front and isEmpty methods.'
        },
        initialCode: 'class Queue {\n  constructor() {\n    this.items = [];\n  }\n  enqueue(item) {\n    // Your code here\n  }\n  dequeue() {\n    // Your code here\n  }\n  front() {\n    // Your code here\n  }\n  isEmpty() {\n    // Your code here\n  }\n}',
        tests: []
    },
    '529': {
        id: '529',
        title: { ru: 'Класс Комплексное число', en: 'Complex Number' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте класс ComplexNumber для работы с комплексными числами. Добавьте методы add(other), subtract(other), multiply(other) и toString().',
            en: 'Implement a ComplexNumber class. Add add, subtract, multiply and toString methods.'
        },
        initialCode: 'class ComplexNumber {\n  constructor(real, imag) {\n    this.real = real;\n    this.imag = imag;\n  }\n  add(other) {\n    // Your code here\n  }\n  subtract(other) {\n    // Your code here\n  }\n  multiply(other) {\n    // Your code here\n  }\n  toString() {\n    // Your code here\n  }\n}',
        tests: []
    },
    '530': {
        id: '530',
        title: { ru: 'Класс Синглтон', en: 'Singleton' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте класс Singleton, который гарантирует, что может быть создан только один экземпляр.',
            en: 'Implement a Singleton class that ensures only one instance can be created.'
        },
        initialCode: 'class Singleton {\n  // Your code here\n}',
        tests: []
    },
    '531': {
        id: '531',
        title: { ru: 'Класс Вектор', en: 'Vector Class' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте класс Vector для работы с n-мерными векторами. Добавьте методы add(other), dot(other) и norm().',
            en: 'Implement a Vector class for n-dimensional vectors. Add add, dot and norm methods.'
        },
        initialCode: 'class Vector {\n  constructor(components) {\n    this.components = components;\n  }\n  add(other) {\n    // Your code here\n  }\n  dot(other) {\n    // Your code here\n  }\n  norm() {\n    // Your code here\n  }\n}',
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
    '603': {
        id: '603',
        title: { ru: 'Факториал числа', en: 'Factorial' },
        difficulty: 'easy',
        description: {
            ru: 'Реализуйте функцию вычисления факториала числа n с помощью рекурсии.',
            en: 'Implement a function to calculate the factorial of a number n using recursion.'
        },
        initialCode: 'function factorial(n) {\n  // Your code here\n}',
        tests: [
            { input: [5], expected: 120 },
            { input: [0], expected: 1 }
        ]
    },
    '604': {
        id: '604',
        title: { ru: 'Числа Фибоначчи', en: 'Fibonacci' },
        difficulty: 'medium',
        description: {
            ru: 'Напишите рекурсивную функцию, которая возвращает n-е число Фибоначчи (0, 1, 1, 2, 3, 5, 8, 13...).',
            en: 'Write a recursive function that returns the n-th Fibonacci number.'
        },
        initialCode: 'function fibonacci(n) {\n  // Your code here\n}',
        tests: [
            { input: [7], expected: 13 },
            { input: [10], expected: 55 }
        ]
    },
    '605': {
        id: '605',
        title: { ru: 'Сумма цифр числа', en: 'Sum of Digits' },
        difficulty: 'easy',
        description: {
            ru: 'Вычислите сумму цифр числа n с помощью рекурсии.',
            en: 'Calculate the sum of the digits of a number n using recursion.'
        },
        initialCode: 'function sumDigits(n) {\n  // Your code here\n}',
        tests: [
            { input: [123], expected: 6 },
            { input: [405], expected: 9 }
        ]
    },
    '606': {
        id: '606',
        title: { ru: 'Возведение в степень', en: 'Power' },
        difficulty: 'easy',
        description: { ru: 'Реализуйте рекурсивную функцию pow(base, exp).', en: 'Implement a recursive pow(base, exp) function.' },
        initialCode: 'function pow(base, exp) {\n  // Your code here\n}',
        tests: [{ input: [2, 3], expected: 8 }, { input: [5, 0], expected: 1 }]
    },
    '607': {
        id: '607',
        title: { ru: 'Реверс строки', en: 'Reverse String' },
        difficulty: 'medium',
        description: { ru: 'Разверните строку с помощью рекурсии.', en: 'Reverse a string using recursion.' },
        initialCode: 'function reverse(str) {\n  // Your code here\n}',
        tests: [{ input: ["abc"], expected: "cba" }]
    },
    '608': {
        id: '608',
        title: { ru: 'Длина массива', en: 'Array Length' },
        difficulty: 'easy',
        description: { ru: 'Посчитайте длину массива без использования .length, только рекурсией.', en: 'Calculate array length using recursion only.' },
        initialCode: 'function getLength(arr) {\n  // Your code here\n}',
        tests: [{ input: [[1, 2, 3]], expected: 3 }]
    },
    '609': {
        id: '609',
        title: { ru: 'Проверка палиндрома', en: 'Palindrome Check' },
        difficulty: 'medium',
        description: { ru: 'Рекурсивно проверьте, является ли строка палиндромом.', en: 'Recursively check if a string is a palindrome.' },
        initialCode: 'function isPalindrome(str) {\n  // Your code here\n}',
        tests: [{ input: ["racecar"], expected: true }, { input: ["hello"], expected: false }]
    },
    '610': {
        id: '610',
        title: { ru: 'Плоский массив', en: 'Flatten Array' },
        difficulty: 'hard',
        description: { ru: 'Превратите многомерный массив в одномерный с помощью рекурсии.', en: 'Flatten a nested array using recursion.' },
        initialCode: 'function flatten(arr) {\n  // Your code here\n}',
        tests: [{ input: [[1, [2, [3, 4]], 5]], expected: [1, 2, 3, 4, 5] }]
    },
    '611': {
        id: '611',
        title: { ru: 'Сумма массива', en: 'Sum Array' },
        difficulty: 'easy',
        description: { ru: 'Найдите сумму элементов массива рекурсивно.', en: 'Find the sum of array elements recursively.' },
        initialCode: 'function sum(arr) {\n  // Your code here\n}',
        tests: [{ input: [[1, 2, 3, 4]], expected: 10 }]
    },
    '612': {
        id: '612',
        title: { ru: 'Наибольший общий делитель', en: 'GCD' },
        difficulty: 'medium',
        description: { ru: 'Найдите НОД двух чисел по алгоритму Евклида (рекурсивно).', en: 'Find GCD of two numbers using Euclid\'s algorithm recursively.' },
        initialCode: 'function gcd(a, b) {\n  // Your code here\n}',
        tests: [{ input: [48, 18], expected: 6 }]
    },
    '613': {
        id: '613',
        title: { ru: 'Поиск в объекте', en: 'Object Search' },
        difficulty: 'hard',
        description: { ru: 'Рекурсивно проверьте, содержит ли объект заданное значение.', en: 'Recursively check if an object contains a value.' },
        initialCode: 'function contains(obj, target) {\n  // Your code here\n}',
        tests: [{ input: [{ a: { b: { c: 1 } } }, 1], expected: true }]
    },
    '614': {
        id: '614',
        title: { ru: 'Генерация диапазона', en: 'Range Generation' },
        difficulty: 'medium',
        description: { ru: 'Создайте массив чисел от start до end рекурсивно.', en: 'Create an array of numbers from start to end recursively.' },
        initialCode: 'function range(start, end) {\n  // Your code here\n}',
        tests: [{ input: [1, 5], expected: [1, 2, 3, 4, 5] }]
    },
    '615': {
        id: '615',
        title: { ru: 'Перемножение элементов', en: 'Product of Array' },
        difficulty: 'easy',
        description: { ru: 'Найдите произведение всех чисел в массиве рекурсивно.', en: 'Find the product of all numbers in an array recursively.' },
        initialCode: 'function product(arr) {\n  // Your code here\n}',
        tests: [{ input: [[1, 2, 3, 4]], expected: 24 }]
    },
    '616': {
        id: '616',
        title: { ru: 'Степень двойки', en: 'Power of Two' },
        difficulty: 'easy',
        description: {
            ru: 'Напишите рекурсивную функцию, которая проверяет, является ли число степенью двойки.',
            en: 'Write a recursive function that checks if a number is a power of two.'
        },
        initialCode: 'function isPowerOfTwo(n) {\n  // Your code here\n}',
        tests: [
            { input: [16], expected: true },
            { input: [6], expected: false },
            { input: [1], expected: true }
        ]
    },
    '617': {
        id: '617',
        title: { ru: 'Бинарный поиск', en: 'Binary Search' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте рекурсивный бинарный поиск в отсортированном массиве. Верните индекс элемента или -1, если элемент не найден.',
            en: 'Implement recursive binary search in a sorted array. Return the index or -1 if not found.'
        },
        initialCode: 'function binarySearch(arr, target, left = 0, right = arr.length - 1) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 3, 5, 7, 9], 5], expected: 2 },
            { input: [[1, 3, 5, 7, 9], 2], expected: -1 }
        ]
    },
    '618': {
        id: '618',
        title: { ru: 'Сортировка слиянием', en: 'Merge Sort' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте рекурсивную сортировку слиянием (merge sort).',
            en: 'Implement recursive merge sort.'
        },
        initialCode: 'function mergeSort(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[3, 1, 4, 1, 5, 9]], expected: [1, 1, 3, 4, 5, 9] },
            { input: [[5, 4, 3, 2, 1]], expected: [1, 2, 3, 4, 5] }
        ]
    },
    '619': {
        id: '619',
        title: { ru: 'Обход дерева в глубину', en: 'DFS Tree' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте рекурсивный обход дерева в глубину (pre-order). Верните массив значений узлов.',
            en: 'Implement recursive depth-first tree traversal (pre-order). Return an array of node values.'
        },
        initialCode: 'function dfs(root) {\n  // Your code here\n}',
        tests: [
            { input: [{ value: 1, children: [{ value: 2, children: [] }, { value: 3, children: [] }] }], expected: [1, 2, 3] }
        ]
    },
    '620': {
        id: '620',
        title: { ru: 'Ханойские башни', en: 'Tower of Hanoi' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте рекурсивное решение задачи Ханойские башни. Верните массив строк вида "from->to".',
            en: 'Implement recursive Tower of Hanoi solution. Return an array of "from->to" strings.'
        },
        initialCode: 'function towerOfHanoi(n, from = "A", to = "C", aux = "B") {\n  // Your code here\n}',
        tests: [
            { input: [1], expected: ['A->C'] },
            { input: [2], expected: ['A->B', 'A->C', 'B->C'] }
        ]
    },
    '621': {
        id: '621',
        title: { ru: 'Количество путей', en: 'Count Paths' },
        difficulty: 'hard',
        description: {
            ru: 'Подсчитайте количество способов добраться из верхнего левого угла сетки m×n в правый нижний, двигаясь только вправо или вниз.',
            en: 'Count the number of ways to reach the bottom-right corner of an m×n grid moving only right or down.'
        },
        initialCode: 'function countPaths(m, n) {\n  // Your code here\n}',
        tests: [
            { input: [2, 3], expected: 3 },
            { input: [3, 3], expected: 6 }
        ]
    },
    '622': {
        id: '622',
        title: { ru: 'Подмножества', en: 'Subsets' },
        difficulty: 'hard',
        description: {
            ru: 'Напишите рекурсивную функцию, которая возвращает все возможные подмножества массива.',
            en: 'Write a recursive function that returns all possible subsets of an array.'
        },
        initialCode: 'function subsets(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2]], expected: [[], [1], [2], [1, 2]] }
        ]
    },
    '623': {
        id: '623',
        title: { ru: 'Перестановки', en: 'Permutations' },
        difficulty: 'hard',
        description: {
            ru: 'Напишите рекурсивную функцию, которая возвращает все перестановки элементов массива.',
            en: 'Write a recursive function that returns all permutations of array elements.'
        },
        initialCode: 'function permutations(arr) {\n  // Your code here\n}',
        tests: [
            { input: [[1, 2]], expected: [[1, 2], [2, 1]] }
        ]
    },
    '624': {
        id: '624',
        title: { ru: 'Скобочные последовательности', en: 'Generate Parentheses' },
        difficulty: 'hard',
        description: {
            ru: 'Напишите рекурсивную функцию, которая генерирует все правильные скобочные последовательности из n пар скобок.',
            en: 'Write a recursive function that generates all valid parentheses combinations for n pairs.'
        },
        initialCode: 'function generateParenthesis(n) {\n  // Your code here\n}',
        tests: [
            { input: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] }
        ]
    },
    '625': {
        id: '625',
        title: { ru: 'Числа Каталана', en: 'Catalan Numbers' },
        difficulty: 'hard',
        description: {
            ru: 'Напишите рекурсивную функцию для вычисления n-го числа Каталана.',
            en: 'Write a recursive function to calculate the n-th Catalan number.'
        },
        initialCode: 'function catalan(n) {\n  // Your code here\n}',
        tests: [
            { input: [0], expected: 1 },
            { input: [3], expected: 5 },
            { input: [5], expected: 42 }
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
    },
    '711': {
        id: '711',
        title: { ru: 'Промис с тайм-аутом', en: 'Promise Timeout' },
        difficulty: 'hard',
        description: {
            ru: 'Напишите функцию, которая принимает промис и время в мс. Если промис не выполнится за это время, он должен отклониться с ошибкой "Timeout".',
            en: 'Write a function that takes a promise and a timeout in ms. If the promise doesn\'t resolve within this time, it should reject with "Timeout".'
        },
        initialCode: 'function timeoutPromise(promise, ms) {\n  // Your code here\n}',
        tests: []
    },
    '712': {
        id: '712',
        title: { ru: 'Асинхронная очередь', en: 'Async Queue' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте функцию, которая принимает массив функций, возвращающих промисы, и выполняет их строго последовательно.',
            en: 'Implement a function that takes an array of functions returning promises and executes them strictly sequentially.'
        },
        initialCode: 'async function sequence(tasks) {\n  // Your code here\n}',
        tests: []
    },
    '713': {
        id: '713',
        title: { ru: 'Асинхронный фильтр', en: 'Async Filter' },
        difficulty: 'hard',
        description: { ru: 'Реализуйте функцию asyncFilter, которая принимает массив и асинхронный предикат.', en: 'Implement an asyncFilter function.' },
        initialCode: 'async function asyncFilter(arr, predicate) {\n  // Your code here\n}',
        tests: []
    },
    '714': {
        id: '714',
        title: { ru: 'Асинхронный мап', en: 'Async Map' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте асинхронную версию Array.map.', en: 'Implement an async version of Array.map.' },
        initialCode: 'async function asyncMap(arr, fn) {\n  // Your code here\n}',
        tests: []
    },
    '715': {
        id: '715',
        title: { ru: 'Повтор запроса', en: 'Retry Promise' },
        difficulty: 'hard',
        description: { ru: 'Напишите функцию retry(fn, retries), которая пытается выполнить асинхронную функцию n раз перед ошибкой.', en: 'Write a retry(fn, retries) function.' },
        initialCode: 'async function retry(fn, retries) {\n  // Your code here\n}',
        tests: []
    },
    '716': {
        id: '716',
        title: { ru: 'Параллельное выполнение', en: 'Parallel Execution' },
        difficulty: 'medium',
        description: { ru: 'Напишите функцию, которая принимает массив промисов и возвращает их результаты (аналог Promise.all).', en: 'Implement a Promise.all-like function.' },
        initialCode: 'async function all(promises) {\n  // Your code here\n}',
        tests: []
    },
    '717': {
        id: '717',
        title: { ru: 'Промисификация', en: 'Promisify' },
        difficulty: 'medium',
        description: { ru: 'Превратите функцию с колбэком (node-style: err, data) в функцию, возвращающую промис.', en: 'Convert a callback-style function to a promise-returning one.' },
        initialCode: 'function promisify(fn) {\n  // Your code here\n}',
        tests: []
    },
    '718': {
        id: '718',
        title: { ru: 'Асинхронный редьюс', en: 'Async Reduce' },
        difficulty: 'hard',
        description: { ru: 'Реализуйте асинхронную версию Array.reduce.', en: 'Implement an async version of Array.reduce.' },
        initialCode: 'async function asyncReduce(arr, fn, initial) {\n  // Your code here\n}',
        tests: []
    },
    '719': {
        id: '719',
        title: { ru: 'Гонка промисов', en: 'Promise Race' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте аналог Promise.race.', en: 'Implement a Promise.race-like function.' },
        initialCode: 'function race(promises) {\n  // Your code here\n}',
        tests: []
    },
    '720': {
        id: '720',
        title: { ru: 'Задержка результата', en: 'Delay Result' },
        difficulty: 'easy',
        description: { ru: 'Напишите функцию, которая возвращает значение через указанное время.', en: 'Return a value after a specified delay.' },
        initialCode: 'async function delayValue(val, ms) {\n  // Your code here\n}',
        tests: []
    },
    '721': {
        id: '721',
        title: { ru: 'Асинхронный поиск', en: 'Async Find' },
        difficulty: 'medium',
        description: { ru: 'Реализуйте асинхронный поиск элемента в массиве.', en: 'Implement an async version of Array.find.' },
        initialCode: 'async function asyncFind(arr, predicate) {\n  // Your code here\n}',
        tests: []
    },
    '722': {
        id: '722',
        title: { ru: 'Асинхронный Any', en: 'Promise Any' },
        difficulty: 'hard',
        description: { ru: 'Реализуйте аналог Promise.any.', en: 'Implement a Promise.any-like function.' },
        initialCode: 'function any(promises) {\n  // Your code here\n}',
        tests: []
    },
    '723': {
        id: '723',
        title: { ru: 'Асинхронный each', en: 'Async Each' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте функцию asyncEach, которая принимает массив и асинхронную функцию, и применяет её к каждому элементу последовательно.',
            en: 'Implement asyncEach that takes an array and an async function, applying it to each element sequentially.'
        },
        initialCode: 'async function asyncEach(arr, fn) {\n  // Your code here\n}',
        tests: []
    },
    '724': {
        id: '724',
        title: { ru: 'Асинхронный some', en: 'Async Some' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте асинхронную версию Array.some.',
            en: 'Implement an async version of Array.some.'
        },
        initialCode: 'async function asyncSome(arr, predicate) {\n  // Your code here\n}',
        tests: []
    },
    '725': {
        id: '725',
        title: { ru: 'Асинхронный every', en: 'Async Every' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте асинхронную версию Array.every.',
            en: 'Implement an async version of Array.every.'
        },
        initialCode: 'async function asyncEvery(arr, predicate) {\n  // Your code here\n}',
        tests: []
    },
    '726': {
        id: '726',
        title: { ru: 'Лимитированный параллелизм', en: 'Limited Parallelism' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте функцию, которая выполняет массив асинхронных функций с ограничением на количество одновременно выполняемых (не более limit).',
            en: 'Implement a function that runs an array of async functions with a concurrency limit.'
        },
        initialCode: 'async function parallelLimit(tasks, limit) {\n  // Your code here\n}',
        tests: []
    },
    '727': {
        id: '727',
        title: { ru: 'Асинхронный waterfall', en: 'Async Waterfall' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте функцию waterfall, которая передаёт результат каждой асинхронной функции в следующую.',
            en: 'Implement a waterfall function that passes each async function result to the next.'
        },
        initialCode: 'async function waterfall(fns) {\n  // Your code here\n}',
        tests: []
    },
    '728': {
        id: '728',
        title: { ru: 'Промис с отменой', en: 'Cancellable Promise' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте функцию, которая возвращает промис с методом cancel() для отмены выполнения.',
            en: 'Implement a function that returns a promise with a cancel() method.'
        },
        initialCode: 'function cancellablePromise(executor) {\n  // Your code here\n}',
        tests: []
    },
    '729': {
        id: '729',
        title: { ru: 'Асинхронный flatMap', en: 'Async FlatMap' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте асинхронную версию flatMap.',
            en: 'Implement an async version of flatMap.'
        },
        initialCode: 'async function asyncFlatMap(arr, fn) {\n  // Your code here\n}',
        tests: []
    },
    '730': {
        id: '730',
        title: { ru: 'Таймер с уведомлением', en: 'Timer with Notification' },
        difficulty: 'medium',
        description: {
            ru: 'Реализуйте функцию timer(seconds, callback), которая вызывает callback каждую секунду с оставшимся временем, а по завершению возвращает промис.',
            en: 'Implement a timer function that calls a callback every second with remaining time and returns a promise on completion.'
        },
        initialCode: 'function timer(seconds, callback) {\n  // Your code here\n}',
        tests: []
    },
    '731': {
        id: '731',
        title: { ru: 'Асинхронный мемоизатор', en: 'Async Memoize' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте функцию asyncMemoize, которая кеширует результаты асинхронных вызовов.',
            en: 'Implement asyncMemoize that caches results of async function calls.'
        },
        initialCode: 'function asyncMemoize(fn) {\n  // Your code here\n}',
        tests: []
    },
    '732': {
        id: '732',
        title: { ru: 'Асинхронный пул', en: 'Async Pool' },
        difficulty: 'hard',
        description: {
            ru: 'Реализуйте класс AsyncPool с методами add(task) и waitAll(). Пул должен выполнять не более limit задач одновременно.',
            en: 'Implement an AsyncPool class with add(task) and waitAll() methods. The pool should run at most limit tasks concurrently.'
        },
        initialCode: 'class AsyncPool {\n  constructor(limit) {\n    this.limit = limit;\n    this.running = 0;\n    this.queue = [];\n    this.promises = [];\n  }\n  add(task) {\n    // Your code here\n  }\n  waitAll() {\n    // Your code here\n  }\n}',
        tests: []
    }
};

const TOPICS = [
    {
        id: 'logic',
        title: { ru: 'Условия и циклы', en: 'Conditions and Loops' },
        taskIds: ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125']
    },
    {
        id: 'arrays',
        title: { ru: 'Массивы и строки', en: 'Arrays and Strings' },
        taskIds: ['201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '215', '223', '224', '225', '226', '227', '228', '229', '230', '231', '232', '233']
    },
    {
        id: 'objects',
        title: { ru: 'Объекты и сортировки', en: 'Objects and Sorting' },
        taskIds: ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '322', '323', '324', '325', '326']
    },
    {
        id: 'fp',
        title: { ru: 'Функциональное программирование', en: 'Functional Programming' },
        taskIds: ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418', '419', '420', '421', '422', '423', '424', '425']
    },
    {
        id: 'oop',
        title: { ru: 'ООП: this, классы, прототипы', en: 'OOP: this, classes, prototypes' },
        taskIds: ['501', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531']
    },
    {
        id: 'recursion',
        title: { ru: 'Рекурсия', en: 'Recursion' },
        taskIds: ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618', '619', '620', '621', '622', '623', '624', '625']
    },
    {
        id: 'async',
        title: { ru: 'Асинхронность', en: 'Asynchrony' },
        taskIds: ['701', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '728', '729', '730', '731', '732']
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
