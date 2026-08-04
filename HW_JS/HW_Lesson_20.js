//task 1
console.log(`   TASK 1.`);
const colors = ["red", "green", "blue"];

console.log(colors.length);
//task 2
console.log(`   TASK 2.`);
const animals = ["monkey", "dog", "cat"];

console.log(animals);
console.log(animals[animals.length - 1]);
//task 3
//3.1
console.log(`   TASK 3.1`);

const numbers = [5, 43, 63, 23, 90];

numbers.splice(0, numbers.length);
console.log(numbers);

//3.2
console.log(`   TASK 3.2`);

const numbers2 = [5, 43, 63, 23, 90];
const arrLength = numbers2.length;

for (let i = 0; i < arrLength; i++) {
  numbers2.shift();
}

console.log(numbers2);

//task 4
console.log(`   TASK 4.`);

const students = ["Polina", "Dasha", "Masha"];

students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");

console.log(students);
//task 5
console.log(`   TASK 5.1`);

const cats1 = ["Gachito", "Tom", "Batman"];
console.log(cats1);

for (let i = 0; i < cats1.length; i++) {
  console.log(cats1[i]);
}

console.log(`   TASK 5.2`);
const cats2 = ["Gachito2", "Tom2", "Batman2"];
console.log(cats2);

for (const cat of cats2) {
  console.log(cat);
}

//task 6
console.log(`   TASK 6.`);

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

//6.1
const allNumbers1 = evenNumbers.concat(oddNumbers);
console.log(allNumbers1);
console.log(allNumbers1.indexOf(8));

//6.2
const allNumbers2 = oddNumbers.concat(evenNumbers);
console.log(allNumbers2);
console.log(allNumbers2.indexOf(8));

//task 7
console.log(`   TASK 7.`);

const binary = [0, 0, 0, 0];
console.log(binary.join(1));

//task 1+
console.log(`   TASK 1+.`);
let word = "lool";

function polyndrom(word) {
  const wordLen = word.length;
  console.log(`Слово: ${word}`);
  console.log(`Длина слова: ${wordLen} символа(-ов)`);

  const arr = word.split("");
  console.log(`Массив: ${arr}`);
  const arrRev = word.split("").reverse();
  console.log(`Обратный массив: ${arrRev}`);

  for (let i = 0; i < wordLen; i++) {
    if (arr[i] !== arrRev[i]) {
      console.log(`Слово ${word} не является полиндромом`);
      return;
    }
  }
  console.log(`Слово ${word} является полиндромом`);
}

polyndrom(word);

//task 2+
console.log(`   TASK 2+.`);

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

const matrixArr = matrix.join(",").split(",");

console.log(`Массив чисел: ${matrixArr}`);

const arrLen = matrixArr.length;
console.log(`Количество чисел в массиве: ${arrLen}`);
let arrSum = 0;

for (elem of matrixArr) {
  arrSum = arrSum + Number(elem);
}

let arrAverage = arrSum / arrLen;
console.log(`Сумма чисел: ${arrSum}`);
console.log(`Среднее значение: ${arrAverage}`);

//task 3+
console.log(`   TASK 3+.`);

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

const positiveNumber = [];
const negativeNumber = [];

for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] < 0) {
    negativeNumber.push(mixedNumbers[i]);
  } else {
    positiveNumber.push(mixedNumbers[i]);
  }
}

console.log(`Положительные числа: ${positiveNumber}`);
console.log(`Отрицательные числа: ${negativeNumber}`);

//task 4+
console.log(`   TASK 4+.`);
