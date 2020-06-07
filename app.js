// jshint esversion:6

function extractGen() {
  return "JavaScript is meant to give life to front end Web Apps";
}

let btn = document.querySelector("button");
let sysPara = document.querySelector(".question");
let res = document.querySelector(".result-container");

let result = 0;
let start = 0;
let end = 0;
console.log(btn);

btn.addEventListener("click", handleClick);

function handleClick() {
  res.innerHTML = "";
  let question = extractGen();
  sysPara.value = question;
  if (btn.innerHTML === "finish") {
    end = Date.now();
    console.log("finish");
    let answer = document.querySelector(".answer");
    console.log(question);
    console.log(answer.value.split(" "));
    queArray = question.split(" ");
    ansArray = answer.value.split(" ");
    for (var i = 0; i < queArray.length; i++) {
      if (queArray[i] === ansArray[i]) {
        result++;
      } else {
        break;
      }
    }
    res.innerHTML =
      "Out of " +
      queArray.length +
      " words, you have got " +
      result +
      " words correct in <br>" +
      getElapsed(start, end) +
      "<br>";
    btn.innerHTML = "start";
    result = 0;
    btn.innerHTML = "start";
    answer.value = "";
    sysPara.value = "";
    start = 0;
    end = 0;
  } else {
    btn.innerHTML = "finish";
    start = Date.now();
  }
}

function getElapsed(start, end) {
  console.log(start, end);
  delta = Math.abs(end - start) / 1000;
  console.log(delta);

  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  console.log("days", days, delta);

  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 86400;
  console.log("hours", hours, delta);

  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  console.log("minutes", minutes, delta);

  var seconds = delta % 60;

  console.log("seconds", Math.floor(seconds));

  let elapsed = "";
  if (days) {
    elapsed += days + " days,";
  }
  if (hours) {
    elapsed += hours + " hours,";
  }
  if (minutes) {
    elapsed += minutes + " minutes,";
  }
  if (seconds) {
    elapsed += Math.floor(seconds) + " seconds";
  }

  return elapsed;
}
