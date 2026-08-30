//работа с LocalStorage

//ключ для localStorage
export const todosStorageKey = "todos";

//функция для полученния данных из localSrorage
export function getDate() {
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

//функция для записи данных в LocalStorage
export function setDate(todo) {
  let todos = getDate();

  //добавляем todo в массив todos
  todos.push(todo);

  localStorage.setItem(todosStorageKey, JSON.stringify(todos));
}

//функция по изменению состояния карточки
export function changeTodosState(parentCard) {
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
