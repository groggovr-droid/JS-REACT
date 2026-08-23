//'key=value';

// document.cookie = 'userName={}';

// const userName = 'Иван Сидоров';
// const encodedValue = encodeURIComponent(userName);
// console.log(encodedValue);

// const decodedValue = decodeURIComponent(encodedValue);
// console.log(decodedValue);

// const date = new Date();
// date.setMinutes(date.getMinutes() + 2);
// document.cookie = `token=abc123; expires=${date.toUTCString()}; path=/`;
//path=/ - на какой странице кука доступна
//domain=example.com - на каком домене доступна кука
//max-age=120 - сколько секунд живет кука
//expires=date.toUTSString() - задает дату, когда кука должна быть удалена
//secure - кука передается только по https
//httpOnly - кука недоступна в js

// const getCookie = (name) => {
//   const cookie = document.cookie.split('; ');
//   console.log(cookie);

//   const foundCookie = cookie.find((cookie) => {
//     return cookie.startsWith(`${name}=`);
//   });

//   if (!foundCookie) {
//     return null;
//   }

//   return decodeURIComponent(foundCookie.split('=')[1]);
// };

// console.log(getCookie('token'));

// document.cookie = 'token=; max-age=0';

// Записать в cookie данные под именем token с произвольным
// значением из цифр и латинских букв. Куки должен быть доступен в
// течение 2-х минут по любому пути. В этой задаче необходимо
// использовать Live Server

// document.cookie = 'token=abcd123; max-age=120; path=/';

//===LOCALSTORAGE
// localStorage.setItem('userName', 'Ivan'); //setItem(key, value)
// console.log(localStorage.getItem('userName')); //возвращает значение или null
// localStorage.removeItem('userName');
// localStorage.clear();
// console.log(localStorage.key(0));
// console.log(localStorage.length);

// for (let index = 0; index < localStorage.length; index++) {
//   const elementKey = localStorage.key(index);
//   const value = localStorage.getItem(elementKey);

//   console.log(elementKey, value);
// }

// При первом посещении страницы пользователю показываем окно
// prompt , где просим ввести его имя. Далее сохраняем имя в
// localStorage под ключом userName . При повторном входе или
// перезагрузке страницы вместо prompt показываем сообщение в alert
// «Добро пожаловать, userName», где userName — имя пользователя,
// которое было записано ранее в хранилище. Если пользователь не
// ввел имя или закрыл окно prompt , то показываем его повторно

// const userNameLSKey = 'userName';
// let userName = localStorage.getItem(userNameLSKey);

// if (userName) {
//   alert(`Hello ${userName}`);
// }

// while (!userName) {
//   userName = prompt('print your name');
// }

// localStorage.setItem(userNameLSKey, userName);

//===SESSIONSTORAGE
// sessionStorage.setItem('userName', 'Ivan');

// localStorage.setItem('someObj', {});

// const user = {
//   name: 'Ivan',
//   age: 25,
//   getAge: function () {
//     return this.age;
//   },
// };

// const json = JSON.stringify(user);

// localStorage.setItem('user', json);

// const value = localStorage.getItem('user');

// const userFromJson = JSON.parse(value);

// const users = [{ id: 1, name: 'Ivan' }];
// localStorage.setItem('users', JSON.stringify(users));

// console.log(JSON.parse('hello')); //ошибка

// function getUsersFromStorage() {
//   const usersFromStorage = localStorage.getItem('users');

//   if (!usersFromStorage) {
//     return [];
//   }

//   try {
//     return JSON.parse(usersFromStorage);
//   } catch (error) {
//     console.log('Parsing error:', error);
//     return [];
//   }
// }

// const users = getUsersFromStorage();
// console.log(users);

// Создайте поле textarea , значение которого будет автоматически
// сохраняться при каждом его изменении.
// Когда пользователь закроет страницу и потом откроет её заново он
// должен увидеть последнее введённое значение.
// Подсказка: необходимо слушать событие input .

// const textAreaValueLSKey = 'message';
// const textArea = document.getElementById('message');

// const savedMessage = localStorage.getItem(textAreaValueLSKey);
// if (savedMessage) {
//   textArea.value = savedMessage;
// }

// textArea.addEventListener('input', (event) => {
//   localStorage.setItem(textAreaValueLSKey, event.target.value);
// });

// //=== СОБЫТИЕ STORAGE
// window.addEventListener('storage', (event) => {
//   console.log(event);
// });

// const themeBtn = document.getElementById('theme-btn');
// const savedTheme = localStorage.getItem('theme');

// if (savedTheme === 'dark') {
//   // document.body.classList.add('dark');
// }

// themeBtn.addEventListener('click', () => {
//   const isDark = document.body.classList.toggle('dark');

//   const newTheme = isDark ? 'dark' : 'light';
//   localStorage.setItem('theme', newTheme);
// });

// window.addEventListener('storage', (event) => {
//   console.log(event);
//   if (event.key !== 'theme') {
//     return;
//   }

//   if (event.newValue === 'dark') {
//     document.body.classList.add('dark');
//   } else {
//     document.body.classList.remove('dark');
//   }
// });

// 1. Создать пустой массив users .
// 2. При отправке формы создать объект со свойствами email и
// fullName , для которых берем значения из соответствующих полей
// формы.
// 3. Добавляем объект в массив users .
// 4. Для каждого полученного юзера добавляем в список users
// элемент списка li c контентом, как в коде выше.
// 5. После перезагрузки страницы, ранее добавленные пользователи
// должны сохранятся в списке users .
// 6. *Если открыта другая вкладка с этой страницей, в ней также
// список users должен обновляться. Используем обработку
// события storage .

const usersStorageKey = "users";
const userForm = document.querySelector("form");
const emailInput = document.querySelector("#email");
const fullNameInput = document.querySelector("#fullName");
const usersList = document.querySelector(".users");

let users = getUsersFromStorage();

renderUsers(users);

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const fullName = fullNameInput.value;

  const user = {
    email,
    fullName,
  };

  users.push(user);

  saveUsersToLocalStorage(users);
  renderUsers(users);
});

window.addEventListener("storage", (event) => {
  if (event.key !== usersStorageKey) {
    return;
  }

  renderUsers(JSON.parse(event.newValue));
});

function saveUsersToLocalStorage(users) {
  localStorage.setItem(usersStorageKey, JSON.stringify(users));
}

function getUsersFromStorage() {
  const usersFromStorage = localStorage.getItem(usersStorageKey);

  if (!usersFromStorage) {
    return [];
  }

  try {
    return JSON.parse(usersFromStorage);
  } catch (error) {
    console.log("Parsing error:", error);
    return [];
  }
}

function renderUsers(users) {
  usersList.innerHTML = "";

  const fragment = document.createDocumentFragment();

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Full name: ${user.fullName}, email: ${user.email}`;
    fragment.append(listItem);
  });

  usersList.append(fragment);
}

// console.log(Date.now()); -  id
