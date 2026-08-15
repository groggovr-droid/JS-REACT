// const fragment = document.createDocumentFragment();

function createElement(tag, text = "", id = "", styles = {}, container = null) {
  const element = document.createElement(tag);

  //присваиваем value
  if (text) {
    element.textContent = text;
  }

  if (id) {
    element.id = id; // Присваиваем ID элементу
  }

  //присваиваем стили
  for (const key in styles) {
    element.style[key] = styles[key];
  }

  //добавляем к контейнеру
  if (container) {
    container.append(element);
  }

  return element;
}

//создаём div root
createElement(
  "div",
  "",
  "root",
  {
    width: "fit-content",
    padding: "10px 20px",
    border: "2px solid black",
    borderRadius: "5px",
    background: "lightgray",
  },
  document.querySelector("body"),
);

//создаём btn DeleteAll
createElement(
  "button",
  "DeleteALL",
  "",
  {
    border: "2px solid black",
    borderRadius: "5px",
    background: "lightgreen",
  },
  document.querySelector("#root"),
);

//создаём input todo
createElement(
  "input",
  "Enter todo",
  "",
  {
    type: "text",
    margin: "0 10px",
    border: "2px solid black",
    borderRadius: "5px",
    // background: "lightgreen",
  },
  document.querySelector("#root"),
);

//создаём btn Add
createElement(
  "button",
  "Add",
  "",
  {
    border: "2px solid black",
    borderRadius: "5px",
    background: "lightgreen",
  },
  document.querySelector("#root"),
);

//создаём div todo
createElement(
  "div",
  "",
  "todo",
  {
    display: "grid",
    gridTemplateColumns: "50px 2fr 50px",
    gridTemplateRows: "auto auto",
    margin: "10px 0",
    padding: "10px 20px",
    border: "2px solid black",
    borderRadius: "5px",
    background: "lightgray",
  },
  document.querySelector("#root"),
);

//создаём btn done
createElement(
  "button",
  "✓",
  "btn-check",
  {
    border: "2px solid black",
    borderRadius: "5px",
    background: "lightgreen",
  },
  document.querySelector("#todo"),
);

//создаём input todoText
createElement(
  "input",
  "InputTodotext",
  "",
  {
    type: "text",
    margin: "0 5px",
    border: "none",
  },
  document.querySelector("#todo"),
);

//создаём div delete
createElement(
  "button",
  "X",
  "btn-close",
  {
    border: "2px solid black",
    borderRadius: "5px",
    background: "lightgreen",
  },
  document.querySelector("#todo"),
);

//создаём input date
createElement(
  "input",
  "Date",
  "",
  {
    type: "text",
    margin: "0 5px",
    border: "none",
  },
  document.querySelector("#todo"),
);
