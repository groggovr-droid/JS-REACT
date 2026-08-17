const fragment = document.createDocumentFragment();

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

  //добавляем к контейнеру
  if (options.container) {
    options.container.append(newElement);
  }

  fragment.append(newElement);
  // fragment.
};

//создаём btn DeleteAll
const btnDelAll = createElement("button", {
  className: "button",
  textContent: "DeleteALL",
  // container: document.querySelector("#root"),
});

//создаём input todo
const input = createElement("input", {
  className: "input",
  textContent: "Enter todo",
  placeholder: "Enter todo...",
  type: "text",
  // container: document.querySelector("#root"),
});

//создаём btn Add
const btnAdd = createElement("button", {
  className: "button",
  textContent: "Add",
  // container: document.querySelector("#root"),
});

//создаём div Todo
const divTodo = createElement("div", {
  className: "",
  id: "todo",
  textContent: "",
  // container: document.querySelector("#root"),
});

//создаём btn done
const btnDone = createElement("button", {
  className: "button",
  textContent: "✓",
  id: "btn-done",
  // container: document.querySelector("#todo"),
});

//создаём input todoText
const inputTodoText = createElement("input", {
  className: "input",
  type: "text",
  // container: document.querySelector("#todo"),
});

//создаём btn close
const btnClose = createElement("button", {
  className: "button",
  textContent: "X",
  id: "btn-close",
  // container: document.querySelector("#todo"),
});

//создаём input Date
const inputDate = createElement("input", {
  className: "input",
  type: "text",
  value: new Date().toLocaleString(),
  // container: document.querySelector("#todo"),
});

console.log(fragment);
document.querySelector("#root").append(fragment);
