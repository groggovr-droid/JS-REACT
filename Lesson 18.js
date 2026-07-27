// function sayHello() {
//   const userName = prompt("Введите своё имя");
//   console.log(sayHello);
//   console.log(`Hello, ${userName}!`);
// }

// sayHello();

// function sumLocal() {
//   const x = 5;
//   const y = 10;
//   const z = 15;
//   const sum = x + y + z;
//   console.log(`Сумма локальных переменных: ${sum}`);
// }

// sumLocal();

// const x = 2;
// const y = 3;
// const z = 7;

// function sumGlobal() {
//   const sum = x + y + z;
//   console.log(`Сумма глобальных переменных: ${sum}`);
// }

// sumGlobal();

// function sumArg(x, y, z) {
//   const sum = x + y + z;
//   console.log(`Сумма переменных из аргументов: ${sum}`);
// }

// sumArg(4, 1, 2);

// function sumReturn(x, y, z) {
//   return x + y + z;
// }

// sumReturn(4, 1, 5);

// function isEven() {
//   const num = prompt("Введите число");

//   const res = +num;

//   if (Number.isNaN(res)) {
//     alert("Введено не число");
//     console.log(`Введено не число`);
//   } else if (res % 2 === 0) {
//     console.log(`True`);
//   } else {
//     console.log(`False`);
//   }
// }

// isEven();

// function isEven2() {
//   const num = prompt("Введите число");

//   const res = +num;

//   if (Number.isNaN(res)) {
//     alert("Введено не число");
//     console.log(`Введено не число`);
//   }
//   console.log(res % 2 === 0);
//   return res % 2 === 0;
// }

// isEven2();

// function countStrLength(string1) {
//   //   const str = prompt("Введите строку");
//   console.log(`Строка ${string1} состоит из ${string1.length} символов`);
// }

// countStrLength("asd wdaw er");

// const countStrLengthExp = function (string2) {
//   //   const str = prompt("Введите строку");
//   console.log(`Строка ${string2} состоит из ${string2.length} символов`);
// };

// countStrLengthExp("2131 df 1");

// function pow(number, n) {
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res = res * number;
//   }
//   console.log(res);
// }

// pow(2, 5);

// function pow2(number, n) {
//   let res = number;
//   //   console.log(number);
//   if (n === 0) {
//     res = 1;
//     console.log(res);
//     return;
//   }
//   for (let i = 1; i <= n; i++) {
//     if (i === 1) {
//       res = res;
//     } else {
//       res = res * number;
//     }
//     // console.log(number);
//   }
//   console.log(res);
// }

// pow2(2, 0);

function deleteSpaces(strValue) {
  console.log(`Old string is: ${strValue}`);
  let strValueNew = "";
  for (let i = 0; i < strValue.length; i++) {
    if (strValue[i] === " ") {
      strValueNew = strValueNew + "";
    } else {
      strValueNew = strValueNew + strValue[i];
    }
  }
  console.log(`New string is: ${strValueNew}`);
}

deleteSpaces(" dw wdad   awd   wadadwada");
