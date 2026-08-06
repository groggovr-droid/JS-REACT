//task 1
console.log(`   TASK 1.1`);

// const fibonacci = [
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
// ];

// fibonacci.forEach((number) => {
//   console.log(number);
// });

// console.log(`   TASK 1.2`);

// function fibDeclare(number) {
//   console.log(number);
// }

// fibonacci.forEach(fibDeclare);

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

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

// const value = array.reduce(callback(accum, value, index, array), initAccum)
const newFib = fibonacci.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(newFib);

console.log(`   TASK 4.2`);
function getSum(acc, number) {
  return acc + number;
}

const newFibDeclare = fibonacci.reduce(getSum);
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
