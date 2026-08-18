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

  return newElement;
};

//создаём главную панель
const controlPanel = createElement("div", {
  className: "control-panel",
});

//создаём btn DeleteAll
const btnDelAll = createElement("button", {
  className: "button",
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
  textContent: "Add",
});
controlPanel.append(btnAdd);

fragment.append(controlPanel);

//создаём div Todo
const divTodo = createElement("div", {
  className: "todo",
  textContent: "",
});

//создаём btn done
const btnDone = createElement("button", {
  className: "button-action",
  textContent: "✓",
  id: "btn-done",
});
divTodo.append(btnDone);

//создаём input todoText
const inputTodoText = createElement("input", {
  className: "input-text",
  type: "text",
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
  className: "button-action",
  textContent: "X",
  id: "btn-close",
});
divAction.append(btnClose);

//создаём input Date
const inputDate = createElement("input", {
  className: "input-date",
  type: "text",
  value: new Date().toLocaleDateString(),
});
divAction.append(inputDate);

fragment.append(divTodo);
console.log(fragment);
document.querySelector("#root").append(fragment);

// const todoList = document.getElementById('todoList');
// const todoInput = document.getElementById('todoInput');
// const addBtn = document.getElementById('addBtn');
// const deleteAllBtn = document.getElementById('deleteAllBtn');

// // Функция создания DOM-структуры одной задачи
// function createTodoItem(textValue) {
//   // 1. Главный контейнер карточки
//   const item = document.createElement('div');
//   item.classList.add('todo-item');

//   // 2. Кнопка-галочка
//   const checkBtn = document.createElement('button');
//   checkBtn.classList.add('todo-check-btn');
//   checkBtn.textContent = '✓';

//   // 3. Блок с текстом
//   const textDiv = document.createElement('div');
//   textDiv.classList.add('todo-text');
//   textDiv.textContent = textValue;

//   // 4. Правый контейнер для элементов управления
//   const actionsDiv = document.createElement('div');
//   actionsDiv.classList.add('todo-actions');

//   // 5. Кнопка удаления (крестик)
//   const deleteBtn = document.createElement('button');
//   deleteBtn.classList.add('todo-delete-btn');
//   deleteBtn.textContent = 'X';

//   // 6. Плашка с датой
//   const dateDiv = document.createElement('div');
//   dateDiv.classList.add('todo-date');
//   dateDiv.textContent = 'Date'; // Здесь можно выводить текущую дату, например: new Date().toLocaleDateString()

//   // Собираем правую часть
//   actionsDiv.append(deleteBtn, dateDiv);

//   // Собираем карточку целиком
//   item.append(checkBtn, textDiv, actionsDiv);

//   // Навешиваем событие удаления на крестик
//   deleteBtn.addEventListener('click', () => {
//     item.remove();
//   });

//   return item;
// }

// // Обработчик клика на кнопку "Add"
// addBtn.addEventListener('click', () => {
//   const text = todoInput.value.trim();
//   if (text !== '') {
//     const newTodo = createTodoItem(text);
//     todoList.append(newTodo);
//     todoInput.value = ''; // Очищаем инпут
//   }
// });

// // Удалить всё
// deleteAllBtn.addEventListener('click', () => {
//   todoList.innerHTML = '';
// });
