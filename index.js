/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let parseTime = time.split(":");
  let timeInput = parseInt(parseTime[0]);

  if (timeInput < 12) {
     return "Good Morning";
  }
  else if (timeInput >= 17) {
    return "Good Evening";
  }
  else if (timeInput >= 12 && timeInput < 17) {
    return "Good Afternoon";
  }
}

function displayMessage(timeString) {
  document.getElementById("greeting").innerText = timeString;
}