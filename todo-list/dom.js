//добавление HTML-элементов
//функция по созданию элемента HTML
// export const createElement = (tag, options = {}) => {
//   const newElement = document.createElement(tag);

//   //присваиваем value
//   if (options.textContent) {
//     newElement.textContent = options.textContent;
//   }

//   //тип элемента
//   if (options.type) {
//     newElement.type = options.type;
//   }

//   //класс элемента
//   if (options.className) {
//     newElement.className = options.className; // Присваиваем класс элементу
//   }

//   //класс элемента
//   if (options.isChecked) {
//     newElement.classList.add("todo-done");
//   }

//   // ID элемента
//   if (options.id) {
//     newElement.id = options.id;
//   }

//   // placeholder элемента
//   if (options.placeholder) {
//     newElement.placeholder = options.placeholder;
//   }

//   // value элемента
//   if (options.value) {
//     newElement.value = options.value;
//   }

//   // редактируемость элемента
//   if (options.readonly) {
//     newElement.readOnly = true;
//   }

//   return newElement;
// };

// export const createElement = (tag, options = {}) => {
export const createElement = (tag, { isChecked, readonly, ...rest } = {}) => {
  const newElement = document.createElement(tag);

  // Автоматически копируем textContent, type, className, id, placeholder, value
  Object.assign(newElement, rest);

  //класс элемента
  if (isChecked) {
    newElement.classList.add("todo-done");
  }

  // редактируемость элемента
  if (readonly) {
    newElement.readOnly = true;
  }

  return newElement;
};

//функция по добавлению блока todo
export function createTodo(todo) {
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

//функция по удалению всех карточек
export const fDeleteAll = () => {
  const divTodoForDel = document.querySelectorAll(".todo");

  divTodoForDel.forEach((todo) => {
    todo.remove();
  });
};

//функция по отрисовке страницы по данным из LocalStorage
export function renderTodos(todos) {
  fDeleteAll();

  todos.forEach((todo) => {
    createTodo(todo);
  });
}
