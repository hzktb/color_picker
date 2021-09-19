let click = document.querySelector(".click");
let name1 = document.querySelector(".color-name1");
let name2 = document.querySelector(".color-name2");
let body = document.getElementById("body");
let stop = document.querySelector(".stop");
let colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color2 = "#";

click.addEventListener("click", function () {
  changeColor();
  var timer = setInterval(function () {
    changeColor();
    stop.addEventListener("click", function () {
      clearInterval(timer);
    });
  }, 2000);
});

function changeColor() {
  body.style.backgroundImage = `linear-gradient(to right, ${getRandomColor()})`;
}

function getRandomColor() {
  let color1 = "#";
  let color2 = "#";
  for (let i = 0; i < 6; i++) {
    let num1 = Math.floor(Math.random() * colorArray.length);
    let num2 = Math.floor(Math.random() * colorArray.length);
    color1 += colorArray[num1];
    color2 += colorArray[num2];
  }
  console.log(color1, color2);
  name1.innerHTML = color1;
  name1.style.color = color1;
  name2.innerHTML = color2;
  name2.style.color = color2;
  result = `${color1}, ${color2}`;
  return result;
}
