import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";

import { ButtonSignIn, ButtonMenu } from "./components/Button/ButtonTitle";

function App() {
  // 2. Создаем состояние для текста кнопки меню.
  // По умолчанию значение равно "="
  const [menuText, setMenuText] = useState("=");

  // Функция, которая сработает при клике
  const handleClick = () => {
    // Переключаем текст: если сейчас "=", ставим "+", иначе возвращаем "="
    setMenuText((prevText) => (prevText === "=" ? "x" : "="));
    // alert("Кнопка нажата!");
  };

  return (
    <div>
      <div className="divTitle">
        <ButtonSignIn text="Sign In" title="Авторизация"></ButtonSignIn>
      </div>
      <div className="divMenu">
        <ButtonMenu
          text={menuText}
          title="Меню"
          onClick={handleClick}
        ></ButtonMenu>
      </div>
    </div>
  );
}

export default App;
