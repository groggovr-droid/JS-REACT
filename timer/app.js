let elem = document.getElementById("timer");

let btnStart = document.getElementById("start");
let btnPause = document.getElementById("pause");

let counter = 0;
let isStarted;
let intervalID;

btnStart.addEventListener("click", () => {
  if (!isStarted) {
    isStarted = 1;
    console.log("timer is started");
    intervalID = setInterval(() => {
      counter = counter + 1;
      elem.textContent = counter + " sec";
      console.log(counter);
    }, 1000);
  }
});

btnPause.addEventListener("click", () => {
  clearInterval(intervalID);
  isStarted = 0;
  console.log("timer is paused");
});
