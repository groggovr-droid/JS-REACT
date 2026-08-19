const fragment = document.createDocumentFragment();
// const root = document.getElementById("root");

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
    newElement.className = options.className; // Присваиваем ID элементу
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

//функция по добавлению блока todo
const addTodo = () => {
  //создаём div Todo
  const divTodo = createElement("div", {
    className: "todo",
    textContent: "",
  });

  //создаём btn done
  const btnDone = createElement("button", {
    className: "button-action_done",
    // className: "button-action",
    textContent: "✓",
    id: "btn-done",
  });
  divTodo.append(btnDone);

  //создаём input todoText
  const inputTodoText = createElement("input", {
    className: "input-text",
    type: "text",
    value: input.value,
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
    value: new Date().toLocaleDateString(),
    readonly: true,
  });
  divAction.append(inputDate);

  document.querySelector("#root").append(divTodo);
};

//добавление карточки
//находим кнопку Add
const buttonAdd = document.querySelector("#button-add");

//навешиваем событие
buttonAdd.addEventListener("click", addTodo);

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
  //проверяем что кликнули по крестику
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
});

//вешаем событие для зачеркивания текста
containerDone.addEventListener("click", (e) => {
  //проверяем что кликнули по крестику
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
  parentCard.classList.toggle("input.done");
});
