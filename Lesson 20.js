//task 1
// const fruits = ["pear", "peach", "apricot", "lime"];
// fruits[fruits.length] = "kiwi";
// fruits[2] = "apple";

// console.log(fruits);
// console.log(`${fruits}`);
// console.log(`${fruits[1]}, ${fruits[3]}, ${fruits.length}`);

//task 2
// const numbers = [27, -3, 92, 0, -17, -2, 108];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     console.log(`${numbers[i]} больше нуля`);
//   } else if (numbers[i] < 0) {
//     console.log(`${numbers[i]} меньше нуля`);
//   } else {
//     console.log(`${numbers[i]} равно нулю`);
//   }
// }

// for (let number of numbers) {
//   if (number > 0) {
//     console.log(`${number} больше 0`);
//   } else if (number < 0) {
//     console.log(`${number} меньше 0`);
//   } else {
//     console.log(`${number} равно 0`);
//   }
// }

//task 3
// function calcSumArr(elements) {
//   let sumArr = 0;

//   for (let element of elements) {
//     sumArr = sumArr + element;
//   }

//   console.log(`Сумма элементов массива равна ${sumArr}`);
// }

// calcSumArr([2, 5, 1, 3]);

//task 4
// const arr = [1, 2];

// function addLastElement(arr, item) {
//   arr[arr.length] = item;

//   console.log(arr);
// }

// addLastElement(arr, 5);

//task 5
// const users = [
//   { name: "Alex", age: 31 },
//   { name: "Olga", age: 17 },
//   { name: "Carl", age: 15 },
//   { name: "Nancy", age: 28 },
//   { name: "Eric", age: 9 },
// ];

// const userNames = [];
// for (const user of users) {
//   if (user.age < 18) {
//     userNames.push(user.name);
//   }
// }

// console.log(userNames);

//task 6
const stack = ["React", "Vue", "Angular"];
stack.pop();
stack.unshift("Svelte", "Stimulus");
stack.reverse();
stack.push("Solid");
console.log(`${stack.indexOf("Vue")}`);
console.log(`${stack.join("/")}`);
