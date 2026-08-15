// const fragment = document.createDocumentFragment();

const elements = {
  element1: {
    tag: "div",
    name: "",
    id: "root",
    styles: {
      width: "fit-content",
      padding: "10px 20px",
      border: "2px solid black",
      borderRadius: "5px",
      background: "lightgray",
    },
    container: document.querySelector("body"),
  },
  element2: {
    tag: "button",
    name: "DeleteALL",
    id: "",
    styles: {
      border: "2px solid black",
      borderRadius: "5px",
      background: "lightgreen",
    },
    container: document.querySelector("#root"),
  },
  element3: {
    tag: "input",
    name: "Enter todo",
    id: "",
    styles: {
      type: "text",
      margin: "0 10px",
      border: "2px solid black",
      borderRadius: "5px",
    },
    container: document.querySelector("#root"),
  },
  element4: {
    tag: "button",
    name: "Add",
    id: "",
    styles: {
      border: "2px solid black",
      borderRadius: "5px",
      background: "lightgreen",
    },
    container: document.querySelector("#root"),
  },
  element5: {
    tag: "div",
    name: "",
    id: "todo",
    styles: {
      display: "grid",
      gridTemplateColumns: "50px 2fr 50px",
      margin: "10px 0",
      padding: "10px 20px",
      border: "2px solid black",
      borderRadius: "5px",
      background: "lightgray",
    },
    container: document.querySelector("#root"),
  },
  element6: {
    tag: "button",
    name: "✓",
    id: "btn-check",
    styles: {
      border: "2px solid black",
      borderRadius: "5px",
      background: "lightgreen",
    },
    container: document.querySelector("#todo"),
  },
  element7: {
    tag: "input",
    name: "InputTodotext",
    id: "",
    styles: { type: "text", margin: "0 5px", border: "none" },
    container: document.querySelector("#todo"),
  },
  element8: {
    tag: "button",
    name: "X",
    id: "btn-close",
    styles: {
      border: "2px solid black",
      borderRadius: "5px",
      background: "lightgreen",
    },
    container: document.querySelector("#todo"),
  },
  element9: {
    tag: "input",
    name: "Date",
    id: "",
    styles: { type: "text", margin: "0 5px", border: "none" },
    container: document.querySelector("#todo"),
  },
};

for (const key in elements) {
  const item = elements[key];

  // 1. Создаем HTML-элемент по тегу
  const el = document.createElement(item.tag);

  // 2. Устанавливаем id и name, если они заданы
  if (item.id) {
    el.id = item.id;
  }

  if (item.name) {
    if (item.tag === "input") {
      el.placeholder = item.name; // Для input удобнее использовать placeholder
    } else {
      el.textContent = item.name; // Для кнопок и текста
    }
  }

  // 3. Применяем стили и атрибуты из вложенного объекта styles
  for (const styleKey in item.styles) {
    if (styleKey === "type" && item.tag === "input") {
      el.type = item.styles.type; // Особый случай для type у input
    } else {
      el.style[styleKey] = item.styles.styles
        ? item.styles[styleKey]
        : item.styles[styleKey];
    }
  }

  // 4. Добавляем элемент в нужный контейнер
  if (item.container) {
    item.container.appendChild(el);
  }
}
