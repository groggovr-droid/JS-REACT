import {
  todosStorageKey,
  getDate,
  setDate,
  changeTodosState,
} from "./LS_functions.js";
import { createElement, createTodo, fDeleteAll, renderTodos } from "./dom.js";

const fragment = document.createDocumentFragment();

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

//массив todos при загрузке страницы
let todos = getDate();

//удаление всех карточек
//находим кнопку DeleteAll
const buttonDeleteAll = document.querySelector("#button-delAll");

//навешиваем событие удаления всех карточек
buttonDeleteAll.addEventListener("click", fDeleteAll);

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

//рендерим блоки по данным из Local Storage
renderTodos(todos);

//добавление карточки
//находим кнопку Add
const buttonAdd = document.querySelector("#button-add");

//навешиваем событие для создания карточки
buttonAdd.addEventListener("click", () => {
  // Проверяем, что поле ввода не пустое
  if (input.value.trim() === "") {
    alert("Введите текст!");
    return;
  }

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
