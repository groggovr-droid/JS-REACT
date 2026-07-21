//task 1
let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;

console.log(`Task 1 result. ${sum}`);

//task 2
const secInMin = 60;
const minInHour = 60;
const hourInDay = 24;
const daysInYear = 365;

const dateBirth = new Date("1990-08-01");
const dateNow = new Date();
const myAgeInSeconds = (dateNow - dateBirth) / 1000;
// const myAgeInYears = (dateNow - dateBirth) / (1000 * 60 * 60 * 24 * 365);

// console.log(`Task 2 result: ${dateBirth}`);
// console.log(`Task 2 result: ${dateNow}`);
console.log(`Task 2 result. Мой возраст - ${myAgeInSeconds} секунд`);

//task 3
let count = 42;
let userName = "42";

const typeCount = typeof String(count);
const typeUserName = typeof Number(userName);
// const typeCount = typeof count.toString();
// const typeCount = typeof "" + count;
// const typeUserName = typeof +userName;

console.log(
  `Task 3 result. ${typeCount}: ${count}, ${typeUserName}: ${userName}`,
);

//task 4
let a = 1;
let b = 2;
let c = "белых медведей";
let d = "" + a + b + " " + c;

console.log(`Task 4 result. ${d}`);

//task 5
const word1 = "доступ";
const word2 = "морпех";
const word3 = "наледь";
const word4 = "попрек";
const word5 = "рубило";

const lengthWords = (word1 + word2 + word3 + word4 + word5).length;

console.log(`Task 5 result. ${lengthWords} символов`);

//task 6
const myName = "Andrew";
const myAge = 35;
const myGenderIsMale = true;

const typeMyName = typeof myName;
const typeMyAge = typeof myAge;
const typeMyGenderIsMale = typeof myGenderIsMale;

console.log(`Task 6.1 result. Variable: 'myName' have type: ${typeMyName}`);
console.log(`Task 6.2 result. Variable: 'myAge' have type: ${typeMyAge}`);
console.log(
  `Task 6.3 result. Variable: 'myGenderIsMale' have type: ${typeMyGenderIsMale}`,
);

//task 7
const yourName = prompt("Как тебя зовут?");
const yourAge = prompt("Сколько тебе лет?");

console.log(`Task 7 result. Имя: ${yourName}, возраст: ${yourAge}`);

//task 1+
let four = 4;
let three = 3;

[four, three] = [three, four];

console.log(`Task 1+ result. four: ${four}, three: ${three}`);

//task 2+
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(`Task 2+ result. Secret word is '${cipher}'`);
