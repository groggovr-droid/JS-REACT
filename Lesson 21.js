//task1
// const rgb = (r = 0, g = 0, b = 0) => `rgb(${r}, ${g}, ${b})`;
// console.log(rgb(1, 3));

//task2
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }
// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   },
// );

//решение
// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };
// ask(
//   "Вы согласны?",
//   () => {
//     alert("Вы согласились.");
//   },
//   () => {
//     alert("Вы отменили выполнение.");
//   },
// );

//task3
// confirmPassword(
//   "1234", // 1 аргумент
//   () => {
//     // 2 аргумент
//     // ...
//   },
//   () => {
//     // 3 аргумент
//     // ...
//   },
// );

// const confirmPassword = (password, runSuccess, runError) => {
//   const userPassword = prompt("Введите пароль");
//   if (password === userPassword) {
//     runSuccess();
//   } else {
//     runError();
//   }
// };

// confirmPassword(
//   "111",
//   () => {
//     alert("Пароль успешно подтверждён");
//   },
//   () => {
//     alert("Пароль не совпадает");
//   },
// );

//task4

const numbers = [32, -7, 74, 0, -46, -2, 101, -13];
//1
// numbers.forEach((number) => {
//   if (number > 0) {
//     console.log(number);
//   }
// });
// const positive = numbers.forEach((number) => {
//   if (number > 0) {
//     console.log(number);
//   }
// });

//2
// const mapRes = numbers.map((number) => Math.abs(number));
// console.log(mapRes);

//3
// const res = numbers.find((number) => number === 0);
// console.log(res);

//4
