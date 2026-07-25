//task 1
console.log(`   TASK 1.`);

const varStr = "true";
const varBool = false;
const varNum = 17;
const varUndef = undefined;
const varNull = null;

console.log(`Type of varStr is: ${typeof varStr}`);
console.log(`Type of varBool is: ${typeof varBool}`);
console.log(`Type of varNum is: ${typeof varNum}`);
console.log(`Type of varUndef is: ${typeof varUndef}`);
console.log(`Type of varNull is: ${typeof varNull}`);

//task 2
console.log(`   TASK 2.`);

let height = 15;
let width = 20;

if (height > width) {
  console.log(`Maximum is height: ${height}`);
} else if (width > height) {
  console.log(`Maximum is width: ${width}`);
} else {
  console.log(`Числа равны`);
}

//task 3
console.log(`   TASK 3.`);

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//task 4
console.log(`   TASK 4.`);

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork;

if (
  key === true &&
  documents === true &&
  pen === true &&
  (apple === true || orange === true)
) {
  shouldGoToWork = true;
} else {
  shouldGoToWork = false;
}

console.log(`shouldGoToWork is ${shouldGoToWork}`);

//task 5
console.log(`   TASK 5.`);

const userNumber = Number(prompt("Введите число"));
console.log(`Введено число ${userNumber}`);

if (userNumber % 3 === 0 && userNumber % 5 === 0) {
  console.log(`FizBuz`);
} else if (userNumber % 3 === 0) {
  console.log(`Buz`);
} else if (userNumber % 5 === 0) {
  console.log(`Fiz`);
} else {
  console.log(`Ошибка`);
}

//task 6
console.log(`   TASK 6.`);

const userAge = prompt("Введите свой возраст");
console.log(`Твой возраст: ${userAge}`);

if (userAge > 18) {
  console.log(`Попей пивка`);
} else if (16 <= userAge && userAge <= 18) {
  console.log(`Можешь выкурить сигаретку, только маме не говори`);
} else {
  console.log(`Пей колу`);
}

//task 7
console.log(`   TASK 7.`);

const direction = prompt("Укажите сторону света");
console.log(`Указано направление: ${direction}`);

switch (direction.toLowerCase()) {
  case "север":
    console.log(`на север пойдешь много денег найдешь`);
    break;

  case "юг":
    console.log(`на юг пойдешь счастье найдешь`);
    break;

  case "запад":
    console.log(`на запад пойдешь верного друга найдешь`);
    break;

  case "восток":
    console.log(`на восток пойдешь разработчиком станешь`);
    break;

  default:
    console.log(`Указано неверное направление, попробуйте ещё раз!`);
}

//task 1+
console.log(`   TASK 1+.`);

const userName = "пОлИнА нАбЕрЕжНаЯ";
let res = "";

for (let i = 0; i < userName.length; i++) {
  if (i === 0 || i === 7) {
    res = res + userName[i].toUpperCase();
  } else {
    res = res + userName[i].toLowerCase();
  }
}

console.log(`Привет, ${res}!`);
alert(`Привет, ${res}!`);

//task 2+
console.log(`   TASK 2+.`);

const userValue = prompt("Введите число");

console.log(`Число пользователя: ${userValue}`);

const resultMinus = prompt("Сколько отнять?");
const resultAdd = prompt("Сколько прибавить?");
const resultMulti = prompt("На сколько умножить?");
const resultDiv = prompt("На сколько разделить?");

let result =
  ((Number(userValue) - Number(resultMinus) + Number(resultAdd)) *
    resultMulti) /
  resultDiv;

console.log(
  `Результат: ((((${userNumber} - ${resultMinus}) + ${resultAdd}) * ${resultMulti}) / ${resultDiv}) = ${result}`,
);
alert(
  `((((${userValue} - ${resultMinus}) + ${resultAdd}) * ${resultMulti}) / ${resultDiv}) = ${result}`,
);

//task 3+
console.log(`   TASK 3+.`);

let stairs = "";

for (let i = 0; i < 6; i++) {
  stairs = stairs + "#";
  console.log(stairs);
}
