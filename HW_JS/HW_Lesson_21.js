//task 1
console.log(`   TASK 1.1`);

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

fibonacci.forEach((number) => {
  console.log(number);
});

console.log(`   TASK 1.2`);

function fibDeclare(number) {
  console.log(number);
}

fibonacci.forEach(fibDeclare);

//task 2
console.log(`   TASK 2.1`);

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

const newUsers = users.map((user, index) => {
  return `'member ${index + 1}: ${user}' `;
});
console.log(newUsers);

console.log(`   TASK 2.2`);

function formatUsers(user, index) {
  return `'member ${index + 1}: ${user}' `;
}

const newUsersDeclare = users.map(formatUsers);
console.log(newUsersDeclare);

//task 3
console.log(`   TASK 3.1`);

const numbers3 = [7, -4, 32, -90, 54, 32, -21];

const notNegative = numbers3.filter((number) => number >= 0);
console.log(notNegative);

console.log(`   TASK 3.2`);

function findNum(number) {
  return number >= 0;
}

const notNegativeDeclare = numbers3.filter(findNum);
console.log(notNegativeDeclare);

//task 4
console.log(`   TASK 4.1`);

// const fibonacci = [
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
// ];

// const value = array.reduce(callback(accum, value, index, array), initAccum)
const newFib = fibonacci.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(newFib);

console.log(`   TASK 4.2`);
function getSum(acc, number) {
  return acc + number;
}

const newFibDeclare = fibonacci.reduce(getSum, 0);
console.log(newFibDeclare);

//task 5
console.log(`   TASK 5.1`);

const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const value = array.find(callback(value, index, array), this)
const res = numbers5.find((number) => {
  return number % 2 === 0;
});
console.log(res);

console.log(`   TASK 5.2`);
function firstEven(number) {
  return number % 2 === 0;
}

const resDeclare = numbers5.find(firstEven);
console.log(resDeclare);

//task 1+
console.log(`   TASK 1+`);

//task 2+
console.log(`   TASK 2.1+`);

function delVowel(inputString) {
  let resultString = "";
  // const arrVowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  const vowelString = "AEIOUaeiou";

  for (let i = 0; i < inputString.length; i++) {
    if (!vowelString.includes(inputString[i])) {
      resultString = resultString + inputString[i];
    }
  }

  console.log(resultString);
}

delVowel("This website is for losers LOL!");

console.log(`   TASK 2.2+`);

function delVowelArr(inputString) {
  const inputArr = inputString.split("");
  const arrVowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

  // console.log(inputArr);

  const resArr = inputArr.filter((letter) => !arrVowel.includes(letter));

  console.log(resArr.join(""));
}

delVowelArr("This website is for losers LOL!");

//task 3+
console.log(`   TASK 3+`);

//task 4+
console.log(`   TASK 4.1+`);

function highAndLow(strOfNumber) {
  const maxNum = Math.max(...strOfNumber.split(" "));
  const minNum = Math.min(...strOfNumber.split(" "));

  console.log(`${maxNum} ${minNum}`);
}

highAndLow("1 2 3 4 5"); // return '5 1'
highAndLow("1 2 -3 4 5"); // return '5 -3'
highAndLow("1 9 3 4 -5"); // return '9 -5'
highAndLow("1"); // return '1 1'
highAndLow("3 -5"); // return '3 -5'

console.log(`   TASK 4.2+`);

function highAndLowSw(strOfNumber2) {
  const arrNum = strOfNumber2.split(" ").map(Number);
  // console.log(arrNum);
  let maxNum;
  let minNum;

  switch (arrNum.length) {
    case 0:
      console.log(`Строка пуста`);
      break;

    case 1:
      maxNum = arrNum[0];
      minNum = arrNum[0];
      console.log(`${maxNum} ${minNum}`);
      break;

    // case 2:
    default:
      if (arrNum[0] > arrNum[1]) {
        maxNum = arrNum[0];
        minNum = arrNum[1];
      } else {
        maxNum = arrNum[1];
        minNum = arrNum[0];
      }

      for (let i = 2; i < arrNum.length; i++) {
        if (maxNum < arrNum[i]) {
          maxNum = arrNum[i];
        }
        if (minNum > arrNum[i]) {
          minNum = arrNum[i];
        }
      }
      console.log(`${maxNum} ${minNum}`);
  }
}

highAndLowSw("1 2 3 4 5"); // return '5 1'
highAndLowSw("1 2 -3 4 5"); // return '5 -3'
highAndLowSw("1 9 3 4 -5"); // return '9 -5'
highAndLowSw("1"); // return '1 1'
highAndLowSw("3 -5"); // return '3 -5'

//task 5+
console.log(`   TASK 5+`);

function isIsogram(userString) {
  let controlString = "";
  userString = String(userString).toLowerCase();

  for (let i = 0; i < String(userString).length; i++) {
    if (controlString.includes(userString[i])) {
      console.log(`Строка ${userString} не является изограммой!`);
      return;
    } else {
      controlString = controlString + userString[i];
    }
  }
  console.log(`Строка ${userString} является изограммой!`);
}

isIsogram("asdDgEhHH");

//task 6+
console.log(`   TASK 6+`);

function diffSum(inputString) {
  let total1 = "";
  let total2 = "";

  console.log(`inputString: ${inputString}`);

  for (let i = 0; i < inputString.length; i++) {
    // console.log(String(inputString[i]).charCodeAt());
    total1 = total1 + String(inputString[i]).charCodeAt();
  }
  console.log(`total1: ${total1}`);

  total2 = total1.replaceAll(7, 1);
  console.log(`total2: ${total2}`);

  const total1Sum = total1.split("").reduce((acc, number) => {
    return acc + number;
  }, 0);

  const total2Sum = total2.split("").reduce((acc, number) => {
    return acc + number;
  }, 0);

  const diff = total1Sum - total2Sum;

  console.log(`diff: ${diff}`);
}

diffSum("ad5f7");

//task 7+
console.log(`   TASK 7+`);

function duplicate(inputString) {
  let resultString = "";
  let checkString = "";
  inputString = String(inputString).toLowerCase();

  console.log(inputString);

  for (let i = 0; i < inputString.length; i++) {
    checkString = inputString.slice(0, i) + inputString.slice(i + 1);
    if (checkString.includes(inputString[i])) {
      resultString = resultString + ")";
    } else {
      resultString = resultString + "(";
    }
  }

  console.log(resultString);
}

duplicate("Success");
