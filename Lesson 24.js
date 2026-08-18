//HTML атрибут
function showAttributeMessage() {
  alert("Clicked Attribute!");
}

//свойство эдемента
const btnProp = document.getElementById("propertyButton");
btnProp.onclick = () => {
  alert("Clicked Property!");
};

//метод addEventListener
const btnListener = document.getElementById("listenerButton");
btnListener.addEventListener(
  "click",
  () => {
    alert("Clicked Listener!");
  },
  {
    once: true,
  },
);

//метод addEventListener (через функцию)
const handler = () => {
  alert("Clicked Listener!");
};

const btnListenerF = document.getElementById("listenerButtonF");
btnListenerF.addEventListener("click", handler, {
  once: true,
});

//удаление события
let counter = 0;

const clickHandler = () => {
  counter = counter + 1;
  console.log(counter);

  if (counter === 5) {
    btnListenerF.removeEventListener("click", clickHandler);
  }
};

btnListenerF.addEventListener("click", clickHandler);

//
