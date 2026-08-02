//task 1
console.log(`   TASK 1.`);

const worker = {
  post: "Manager",
  name: "Ivan",
};

console.log(worker);

delete worker.post;
delete worker.name;

console.log(worker);

//task 2
console.log(`   TASK 2.`);

const designer = {
  name: "Ivan",
  age: 25,
};

if ("age" in designer) {
  console.log(`true`);
}

//task 3
console.log(`   TASK 3.`);

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

let allKeys = "";
let allValues = "";

for (let key in student) {
  if (allKeys === "") {
    allKeys = allKeys + key;
  } else {
    allKeys = allKeys + ", " + key;
  }

  if (allValues === "") {
    allValues = allValues + student[key];
  } else {
    allValues = allValues + ", " + student[key];
  }
}

console.log(`Ключи объекта: ${allKeys}, значения ключей: ${allValues}`);

//task 4
console.log(`   TASK 4.`);

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(
  `${colors["ru pum pu ru rum"].red}, ${colors["ru pum pu ru rum"].blue}`,
);

//task 5
console.log(`   TASK 5.`);

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 199,
};

let workerCount = 0;
let totalSalary = 0;
let averageSalary = 0;

for (let key in salaries) {
  workerCount++;
  totalSalary = totalSalary + salaries[key];
}

if (workerCount != 0) {
  averageSalary = totalSalary / workerCount;
} else {
  console.log(`Количество работников равно ${workerCount}`);
}

console.log(`Количество работников: ${workerCount}`);
console.log(`Общая зарплата: ${totalSalary}`);
console.log(`Средняя зарплата: ${averageSalary}`);

//task 6
console.log(`   TASK 6.`);

const userLogin = prompt("Введите login");
const userPassword = prompt("Введите password");

function checkPassword(login, password) {
  const info = {
    login: "",
    password: "",
  };

  if (!userLogin || !userPassword) {
    alert("Логин и пароль не могут быть пустыми!");
    console.log(`Логин и пароль не могут быть пустыми!`);
    return;
  }

  info.login = userLogin;
  info.password = userPassword;

  console.log(info);

  const checkLogin = prompt("Введите login для проверки");
  const checkPassword = prompt("Введите password для проверки");

  if (!checkLogin || !checkPassword) {
    alert("Логин и пароль не могут быть пустыми!");
    console.log(`Логин и пароль не могут быть пустыми!`);
    return;
  }

  if (checkLogin === info.login && checkPassword === info.password) {
    console.log(`Добро пожаловать!`);
  } else {
    alert("Неверно введён логин или пароль!");
    console.log(`Неверно введён логин или пароль!`);
  }
}

checkPassword(userLogin, userPassword);

//task 1+
console.log(`   TASK 1+.`);

// function getScoreWord(totalScoreText) {
//   const words = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];

//   // Получаем цифры счёта напрямую из строки "2:5"
//   const team1 = words[totalScoreText[0]] || totalScoreText[0];
//   const team2 = words[totalScoreText[2]] || totalScoreText[2];

//   console.log(`Итоговый счёт матча - ${team1}:${team2}`);
// }

// getScoreWord("2:5");

function getScore(totalScoreText) {
  const totalScore = {
    team1: totalScoreText[0],
    team2: totalScoreText[2],
  };

  for (let key in totalScore) {
    totalScore[key] = convertScore(totalScore[key]);
  }

  console.log(`Итоговый счёт матча - ${totalScore.team1}:${totalScore.team2}`);
}

function convertScore(teamScore) {
  switch (teamScore) {
    case "0":
      return "ноль";

    case "1":
      return "один";

    case "2":
      return "два";

    case "3":
      return "три";

    case "4":
      return "четыре";

    case "5":
      return "пять";

    case "6":
      return "шесть";

    case "7":
      return "семь";

    case "8":
      return "восемь";

    case "9":
      return "девять";

    default:
      return teamScore;
  }
}

getScore("3:7");

//task 2+
console.log(`   TASK 2+.`);

let student1 = {
  name: "Polina",
  age: 27,
};
let student2 = {
  name: "Polina",
  age: 27,
};

function checkObjects(student1, student2) {
  let flag1 = false;
  let flag2 = false;

  for (let key in student1) {
    if (student1[key] === student2[key]) {
      flag1 = true;
    } else {
      flag1 = false;
      console.log(`Объекты отличаются!`);
      return;
    }
  }

  for (let key in student2) {
    if (student2[key] === student1[key]) {
      flag2 = true;
    } else {
      flag2 = false;
      console.log(`Объекты отличаются!`);
      return;
    }
  }

  console.log(`Объекты равны!`);
}

checkObjects(student1, student2);

//task 3+
console.log(`   TASK 3+.`);

const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
  bird: {
    name: "вавава",
    age: 2,
  },
};

if ("bird" in animals) {
  console.log(`Имя птицы - ${animals.bird.name}`);
} else {
  console.log(`В объекте нет птицы!`);
}
