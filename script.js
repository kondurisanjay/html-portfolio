"use strict";

let score = 20;
let highscore = 0;

// Generating a number between 1 and 20
let answerNumber = Math.trunc(Math.random() * 20) + 1;
console.log(answerNumber);

// Function for printing the message
const displayMessage = function (message) {
  document.querySelector(".guessing").textContent = message;
};

// Creating click function and comparing number with present output
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".numbu").value);
  console.log(guess);

  // If no number entered
  if (!guess) {
    // document.querySelector(".guessing").textContent = "No Number";

    // using dry principle we created a function and calling the same function to avoid writting the same code for multiple times
    // => dry means don't repeat your code for N number of time refactor it;

    displayMessage("No Number");

    // If the answer is correct
  } else if (guess === answerNumber) {
    // console.log("Correct");
    // document.querySelector(".guessing").textContent = "Correct";
    // using dry principle;
    displayMessage("Correct");

    // If the answer is correct, background turns to green
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Assigning score to highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".high-change").textContent = highscore;
    }

    // If the guess is too high
    //After dry priciplr If the guess is too high or low
  } else if (guess !== answerNumber) {
    if (score > 1) {
      //   document.querySelector(".guessing").textContent =
      //     guess > answerNumber ? "TOO high" : "Too low";
      // using dry principle;
      displayMessage(guess > answerNumber ? "TOO high" : "Too low");
      //   console.log("Guess is greater");
      //   displayMessage("Too High!");
      score--;
      document.querySelector(".change").textContent = score;
    } else {
      // If the score is zero, display the answer and a lost message
      displayMessage("You Lost the Game");
      document.querySelector(".mark").textContent = answerNumber;
      document.querySelector(".change").textContent = 0; // Explicitly set score to 0
      document.querySelector("body").style.backgroundColor = "#e74c3c"; // Optionally, change the background color to red
    }

    // If the guess is too low
    //   } else if (guess < answerNumber) {
    //     if (score > 1) {
    //       //   console.log("Guess is low");
    //       displayMessage("Too Low!");
    //       score--;
    //       document.querySelector(".change").textContent = score;
    //     } else {
    //       // If the score is zero, display the answer and a lost message
    //       displayMessage("You Lost the Game");
    //       document.querySelector(".mark").textContent = answerNumber;
    //       document.querySelector(".change").textContent = 0; // Explicitly set score to 0
    //       document.querySelector("body").style.backgroundColor = "#e74c3c"; // Optionally, change the background color to red
    //     }
  }
});

// Play again game start from beginning
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  answerNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(answerNumber);

  displayMessage("Start guessing...");
  document.querySelector(".change").textContent = score;
  document.querySelector(".numbu").value = "";
  document.querySelector(".mark").textContent = "?";
  document.querySelector("body").style.backgroundColor = ""; // Reset the background color
});
