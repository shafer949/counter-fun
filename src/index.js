import "./styles.css";

const increaseButton = document.getElementById("increase");
const counterElement = document.getElementById("counter");
const decreaseButton = document.getElementById("decrease");
let counter = 0;

counterElement.innerHTML = counter;

const updateCount = (e, counterType) => {
  e.stopPropagation();
  counter = Math.max(
    0,
    Math.min(10, counterType === "increase" ? counter + 1 : counter - 1)
  );
  counterElement.innerHTML = counter;
};

increaseButton.onclick = e => {
  updateCount(e, "increase");
};

decreaseButton.onclick = e => {
  updateCount(e, "decrease");
};
