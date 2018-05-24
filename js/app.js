var spans = document.getElementsByTagName("span");
var display = document.getElementById("screen");
var firstNum;
var secondNum;
var operator;
var count = 1;

for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", handleSpanClick);
}

function handleSpanClick(event) {
  event.preventDefault();
  var content = event.target.innerHTML;
  if (event.target.id === "clear") {
    location.reload();
  } else if (event.target.className === "operator") {
    if (count % 2 === 1) {
      firstNum = display.innerHTML;
      count++;
      operator = content;
    } else {
      secondNum = display.innerHTML;
      doMath(firstNum, secondNum, operator);
      display.innerHTML = total;
      firstNum = total;
      count += 2;

      operator = content;
    }
  } else if (event.target.id === "equals") {
    doMath(firstNum, secondNum, operator);
  } else {
    if (count > 1) {
      display.innerHTML = "";
      count = 0;
    }
    display.innerHTML += content;
  }
}

function doMath(firstNum, secondNum, operator) {
  if (!firstNum || !secondNum || !operator) {
    display.innerHTML = "Error";
  } else {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    if (operator == "/" && secondNum === 0) {
      display.innerHTML = "Error";
    } else if (operator === "+") {
      total = display.innerHTML = firstNum + secondNum;
    } else if (operator === "-") {
      total = display.innerHTML = firstNum - secondNum;
    } else if (operator === "*") {
      total = display.innerHTML = firstNum * secondNum;
    } else if (operator === "/") {
      total = display.innerHTML = firstNum / secondNum;
    }
  }
}
