const fragment = document.createDocumentFragment();
// const root = document.getElementById("root");

//функция по созданию элемента HTML
const createElement = (tag, options = {}) => {
  const newElement = document.createElement(tag);

  //присваиваем value
  if (options.textContent) {
    newElement.textContent = options.textContent;
  }

  //тип элемента
  if (options.type) {
    newElement.type = options.type;
  }

  //класс элемента
  if (options.className) {
    newElement.className = options.className; // Присваиваем класс элементу
  }

  //класс элемента
  if (options.isChecked) {
    newElement.classList.add("todo-done");
  }

  // ID элемента
  if (options.id) {
    newElement.id = options.id;
  }

  // placeholder элемента
  if (options.placeholder) {
    newElement.placeholder = options.placeholder;
  }

  // value элемента
  if (options.value) {
    newElement.value = options.value;
  }

  // value элемента
  if (options.readonly) {
    newElement.readOnly = true;
  }

  return newElement;
};

//создаём главную панель
const controlPanel = createElement("div", {
  className: "control-panel",
});

//создаём btn DeleteAll
const btnDelAll = createElement("button", {
  className: "button",
  id: "button-delAll",
  textContent: "DeleteALL",
  // container: document.querySelector("#root"),
});
controlPanel.append(btnDelAll);

//создаём input todo
const input = createElement("input", {
  className: "input-todo",
  placeholder: "Enter todo...",
  type: "text",
});
controlPanel.append(input);

//создаём btn Add
const btnAdd = createElement("button", {
  className: "button",
  id: "button-add",
  textContent: "Add",
});
controlPanel.append(btnAdd);

fragment.append(controlPanel);

document.querySelector("#root").append(fragment);

//ключ для localStorage
const todosStorageKey = "todos";

//массив todos при загрузке страницы
let todos = getDate();

//функция для полученния данных из localSrorage
function getDate() {
  const todosFromStorage = localStorage.getItem(todosStorageKey);

  if (!todosFromStorage) {
    return [];
  }

  try {
    return JSON.parse(todosFromStorage);
  } catch (error) {
    console.log("Parsing error:", error);
    return [];
  }
}

//удаление всех карточек
//находим кнопку DeleteAll
const buttonDeleteAll = document.querySelector("#button-delAll");

//функция по удалению всех карточек
const fDeleteAll = () => {
  const divTodoForDel = document.querySelectorAll(".todo");

  divTodoForDel.forEach((todo) => {
    todo.remove();
  });
};

//навешиваем событие удаления всех карточек
buttonDeleteAll.addEventListener("click", fDeleteAll);
// buttonDeleteAll.addEventListener("click", fDeleteAll);

//удаление текущей карточки
//находим кнопку 'X'
const buttonDel = document.querySelector(".button-action_close");
//определяем на кого делегировать поиск
const container = document.querySelector("#root");
container.addEventListener("click", (e) => {
  //ищем кнопку
  const buttonClose = e.target.closest(".button-action_close");
  //не нашли кнопку - выходим
  if (!buttonClose) {
    return;
  }

  //находим ближайшего родителя
  const parent = buttonClose.closest(".todo");
  //не нашли родителя - выходим
  if (!parent) {
    return;
  }

  //удаляем найденного родителя
  parent.remove();
});

//смена статуса карточки
//находим кнопку '✓'
const buttonDone = document.querySelector(".button-action_done");

//определяем на кого делегировать поиск
const containerDone = document.querySelector("#root");

//вешаем событие для изменения цвета
containerDone.addEventListener("click", (e) => {
  //проверяем что кликнули по галочке
  const buttonDone = e.target.closest(".button-action_done");
  //не нашли кнопку - выходим
  if (!buttonDone) {
    return;
  }

  //находим ближайшего родителя
  const parentCard = buttonDone.closest(".todo");
  //не нашли родителя - выходим
  if (!parentCard) {
    return;
  }

  //меняем статус найденного родителя
  parentCard.classList.toggle("todo-done");
  changeTodosState(parentCard);
});

function changeTodosState(parentCard) {
  const todosLSArray = getDate();
  const res = todosLSArray.find((cookie) => {
    return String(cookie.id) === String(parentCard.id);
  });

  if (res) {
    res.isChecked = !res.isChecked;
    return localStorage.setItem(todosStorageKey, JSON.stringify(todosLSArray));
  } else {
    console.log("Запись с таким ID не найдена");
  }
}

//рендерим блоки по данным из Local Storage
renderTodos(todos);

//render todos
function renderTodos(todos) {
  fDeleteAll();

  todos.forEach((todo) => {
    createTodo(todo);
  });
}

function setDate(todo) {
  let todos = getDate();

  //добавляем todo в массив todos
  todos.push(todo);

  localStorage.setItem(todosStorageKey, JSON.stringify(todos));
}

//функция по добавлению блока todo
function createTodo(todo) {
  //создаём div Todo
  const divTodo = createElement("div", {
    className: "todo",
    textContent: "",
    id: todo.id,
    isChecked: todo.isChecked,
  });

  //создаём btn done
  const btnDone = createElement("button", {
    className: "button-action_done",
    textContent: "✓",
    id: "btn-done",
  });
  divTodo.append(btnDone);

  //создаём input todoText
  const inputTodoText = createElement("input", {
    className: "input-text",
    type: "text",
    value: todo.text,
    readonly: true,
  });
  divTodo.append(inputTodoText);

  //создаём div Action
  const divAction = createElement("div", {
    className: "todo-action",
    textContent: "",
  });
  divTodo.append(divAction);

  //создаём btn close
  const btnClose = createElement("button", {
    className: "button-action_close",
    textContent: "X",
    id: "btn-close",
  });
  divAction.append(btnClose);

  //создаём input Date
  const inputDate = createElement("input", {
    className: "input-date",
    type: "text",
    value: todo.date,
    readonly: true,
  });
  divAction.append(inputDate);

  document.querySelector("#root").append(divTodo);
}

//добавление карточки
//находим кнопку Add
const buttonAdd = document.querySelector("#button-add");

//навешиваем событие для создания карточки
// buttonAdd.addEventListener("click", createTodo);
buttonAdd.addEventListener("click", () => {
  //задаём параметры для создания todo
  const todo = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    text: input.value,
    isChecked: false,
  };

  //сохраняем todo в LocalStorage
  setDate(todo);

  createTodo(todo);
});
