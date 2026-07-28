//task 1
console.log(`   TASK 1.`);

function getSum(amount) {
  let sum = 0;

  for (let i = 0; i <= amount; i++) {
    sum = sum + i;
  }

  console.log(`Сумма ${amount} чисел равна ${sum}`);
}

getSum(100);

//task 2
console.log(`   TASK 2.`);

function calcOverprice(creditSum) {
  const year = 5;
  const month = year * 12;
  const monthPayOD = Math.round((creditSum / month) * 1000) / 1000;
  let creditSumRest = creditSum;
  //   console.log(`Ежемесячный платёж по основному долгу: ${monthPayOD}`);
  let monthPercSum = 0;

  for (let i = 1; i <= 60; i++) {
    currMonthPerc =
      Math.round(((((creditSumRest * 17) / 100) * 30) / 360) * 100) / 100;
    // console.log(`Уплаченные проценты (в месяце): ${i}, ${currMonthPerc}`);
    // monthPercSum = monthPercSum + currMonthPerc;
    monthPercSum = Math.round((monthPercSum + currMonthPerc) * 100) / 100;
    // console.log(`Уплаченные проценты (всего): ${i}, ${monthPercSum}`);

    creditSumRest = Math.round((creditSumRest - monthPayOD) * 1000) / 1000;
    // console.log(`Остаток основного долга: ${i}, ${creditSumRest}`);
  }

  console.log(`Итоговый размер переплаты: ${monthPercSum}`);
}

calcOverprice(10000);

//task 3
console.log(`   TASK 3.`);

function trimString(userText, begin, end) {
  console.log(`Строка: ${userText}`);

  let inputCorrect;
  inputCorrect = userText !== "" && begin >= 0 && end >= 0 && end >= begin;

  let newUserText = "";
  for (let i = begin; i <= end; i++) {
    newUserText = newUserText + userText[i];
  }

  console.log(`Новая строка: ${newUserText}`);
}

trimString("Доброе утро!", 5, 9);

//task 4
console.log(`   TASK 4.`);

function getSumNumbers(userNumber) {
  console.log(`Строка пользователя: ${userNumber}`);

  let sum = 0;

  if (Number.isNaN(+userNumber)) {
    console.log(`Введено не число`);

    return;
  } else {
    let strUserNumber = String(userNumber);
    console.log(`Длина числа ${strUserNumber.length}`);

    for (let i = 0; i < strUserNumber.length; i++) {
      if (!Number.isNaN(+strUserNumber[i])) {
        sum = sum + Number(strUserNumber[i]);
      }
    }
    console.log(`Сумма цифр числа равна ${sum}`);
  }
}

getSumNumbers(-202.1);

//task 5
console.log(`   TASK 5.`);

function getSumBetween(number1, number2) {
  console.log(`Числа пользователя: ${number1}, ${number2}`);
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    console.log(`Введено не целое число!`);
    return;
  }

  let minNumber;
  let maxNumber;

  if (number1 < number2) {
    minNumber = number1;
    maxNumber = number2;
  } else {
    minNumber = number2;
    maxNumber = number1;
  }

  let sum = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    sum = sum + i;
  }
  console.log(`Сумма чисел между ${minNumber} и ${maxNumber} равна ${sum}`);
}

getSumBetween(100, 100);

//task 6
console.log(`   TASK 6.`);

function fooBoo(userFlag, foo, boo) {
  if (typeof userFlag === "boolean" && userFlag) {
    foo();
  } else if (typeof userFlag === "boolean" && !userFlag) {
    boo();
  }
}

function foo() {
  console.log(`Имя функции - ${foo.name}`);
}

function boo() {
  console.log(`Имя функции - ${boo.name}`);
}

// fooBoo(true, foo, boo);
fooBoo(false, foo, boo);

//task 1+
console.log(`   TASK 1+.`);

function createTriangle(a, b, c) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    console.log(`Введено не целое число!`);
    return;
  } else if (a <= 0 || b <= 0 || c <= 0) {
    console.log(`Стороны треугольника должны быть больше нуля!`);
    return;
  } else {
    if (a + b > c && b + c > a && c + a > b) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}

createTriangle(3, 4, 5);

//task 2+
//перемножить размер плитки и отнять 1 - это минимальное количество надломов
console.log(`   TASK 2+.`);
let brokeCount = 0;

function brokeChocolate(n, m) {
  if (!Number.isInteger(n) || !Number.isInteger(m)) {
    console.log(`Введено не целое число!`);
    return;
  } else if (n < 0 || m < 0) {
    console.log(`Числа не могут быть отрицательными!`);
    return;
  } else if (n === 0 || m === 0) {
    console.log(`Потребуется ${brokeCount} надломов`);
  } else {
    brokeCount = n * m - 1;
    console.log(`Потребуется ${brokeCount} надломов`);
  }
}

brokeChocolate(7, 4);

//task 3+
console.log(`   TASK 3+.`);
