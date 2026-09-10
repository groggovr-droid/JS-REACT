let elem = document.getElementById("timer");

let btnStart = document.getElementById("start");
let btnPause = document.getElementById("pause");

let counter = 0;
let isStarted;
let intervalID;

btnStart.addEventListener("click", () => {
  if (!isStarted) {
    isStarted = true;
    intervalID = setInterval(() => {
      counter = counter + 1;
      elem.textContent = counter + " sec";
    }, 1000);
  }
});

btnPause.addEventListener("click", () => {
  clearInterval(intervalID);
  isStarted = false;
});
