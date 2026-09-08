// function calcSum(a, b) {
//   for (let index = 0; index < 5_000_000_000; index++) {
//     //вычисления
//   }

//   return a + b;
// }

// console.log('начало');

// const res = calcSum(1, 3);
// console.log(res);

// console.log('конец');

function blockMainThread(ms) {
  const startTime = Date.now();

  while (Date.now() - startTime < ms) {}
}

// console.log('start');

// blockMainThread(3000);

// console.log('end');

//callstack
// function third() {
//   debugger;
//   console.log('третья функция');
// }

// function second() {
//   third();
//   console.log('вторая функция');
// }

// function first() {
//   second();
//   console.log('первая функция');
// }

// first();

// function repeat() {
//   repeat();
// }

// repeat();

// function countDown(number) {
//   if (number === 0) {
//     console.log('done');
//     // debugger;
//     return;
//   }

//   console.log(number);
//   countDown(number - 1);
// }

// countDown(5);

// console.log('start');

// setTimeout(() => {
//   console.log('прошло 2 секунды');
// }, 2000);

// console.log('end');

// Вывести в консоль 3 сообщения, текст произвольный:
// 1. через 2 секунды
// 2. через 3.5 секунды
// 3. через 5.25 секунды
// setTimeout(() => {
//   console.log('прошло 2 секунды');
// }, 2000);

// setTimeout(() => {
//   console.log('прошло 3.5 секунды');
// }, 3500);

// setTimeout(() => {
//   console.log('прошло 5.25 секунд');
// }, 5250);

// const timeoutId = setTimeout(() => {
//   console.log('some msg');
// }, 3000);

// console.log(timeoutId);

// clearTimeout(timeoutId);

// На странице есть скрытый заголовок h2 , требуется показать его
// через 3 секунды после загрузки страницы.
// Добавить кнопку, при клике на которую прерывается показ скрытого
// заголовка, т.е. при клике до появления заголовка, по истечении 3-х
// секунд он не появится.
// const delayedTitle = document.getElementById('delayedTitle');
// const cancelButton = document.getElementById('cancelButton');

// const timeoutId = setTimeout(() => {
//   delayedTitle.classList.remove('hidden');
// }, 3000);

// cancelButton.addEventListener('click', () => {
//   clearTimeout(timeoutId);
// });

// let counter = 0;

// const intervalId = setInterval(() => {
//   counter += 1;

//   console.log(counter);

//   if (counter === 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// blockMainThread(3000);

// function performOperation() {
//   console.log('start');

//   blockMainThread(500);

//   console.log('end block');

//   setTimeout(performOperation, 1000);
// }

// performOperation();
// console.log('before request');

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   });

// console.log('after request');

// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log('3');
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log('4');
//     }, 0);
//   });

// console.log('5');

//1 5 3 2 4

// setTimeout(() => {
//   console.log('A');
// }, 1000);

// setTimeout(() => {
//   console.log('B');
// }, 500);

// for (let index = 0; index < 50000; index++) {
//   console.log(index);
// }

// setTimeout(() => {
//   console.log('C');
// }, 999);

//0 1 2 3 4 B C A

// const time = Date.now();

// setTimeout(() => {
//   console.log(Date.now() - time);
// }, 1000);

// Светофор
// Сверстать 3 круга, которые расположены вертикально. Диаметр —
// 80px.
// Каждый элемент (круг) по умолчанию серого цвета. Может принимать
// один из трех классов, которые меняют цвет круга:
// red
// green
// orange
// Написать логику на js, при которой:
// 1. первый круг принимает класс red и «горит» 6 сек
// 2. далее, с первого снимается класс red , а на второй добавляется
// orange , «горит» 1 сек
// 3. со второго снимается класс orange , а на третий добавляется
// green , горит 8 сек
// 4. с третьего снимаем класс green , а на второй добавляется orange ,
// «горит» 1 сек
// Цикл повторяется

// function startTrafficLight() {
//   console.log('red');

//   setTimeout(() => {
//     console.log('turn off red');
//     console.log('yellow');

//     setTimeout(() => {
//       console.log('turn off yellow');
//       console.log('green');

//       setTimeout(() => {
//         console.log('turn off green');
//         console.log('yellow');

//         setTimeout(() => {
//           console.log('turn off yellow');
//           startTrafficLight();
//         }, 1000);
//       }, 8000);
//     }, 1000);
//   }, 6000);
// }

// startTrafficLight();

function setRed() {
  console.log('turn on Red');

  setTimeout(() => {
    console.log('turn off Red');
    setYellow('green');
  }, 6000);
}

function setYellow(nextlight) {
  console.log('turn on Yellow');

  setTimeout(() => {
    console.log('turn off Yellow');
    nextlight === 'green' ? setGreen() : setRed();
  }, 1000);
}

function setGreen() {
  console.log('turn on Green');

  setTimeout(() => {
    console.log('turn off Green');
    setYellow('red');
  }, 8000);
}

setRed();
