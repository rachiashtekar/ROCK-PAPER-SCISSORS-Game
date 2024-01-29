let showbutton = document.querySelector(".Rulesbutton");
let rule = document.querySelector(".gamesrules");
let btn = document.querySelector(".close");
let nextbutton = document.querySelector("#nextbtn");
let twobutton = document.querySelector(".two-buttons");

let isRuleBoxOpen = true;

// Event listener for the close button
btn.addEventListener("click", () => {
  rule.style.display = "none";
  isRuleBoxOpen = false;
});

// Event listener for the show rules button
showbutton.addEventListener("click", () => {
  rule.style.display = "block";
  isRuleBoxOpen = true;
});
// ----------------------------------------------------------------------
// // script.js

document.addEventListener("DOMContentLoaded", function () {
  // Get necessary elements from the DOM
  const userChoices = document.querySelectorAll(".gamesection [data-value]");
  const playAgainBtn = document.getElementById("play-again");
  const scoreElement1 = document.querySelector(".score1");
  const scoreElement2 = document.querySelector(".score2");

  let userScore = localStorage.getItem("userscore") || 0;
  let computerScore = localStorage.getItem("computerscore") || 0;
  scoreElement1.innerHTML = userScore;
  scoreElement2.innerHTML = computerScore;

  // Event listeners for user choices
  userChoices.forEach((choice) => {
    choice.addEventListener("click", function () {
      const userChoice = this.getAttribute("data-value");
      const computerChoice = getComputerChoice();
      const result = determineWinner(userChoice, computerChoice);

      displayResult(userChoice, computerChoice, result);
      updateScores(result);
    });
  });

  // Event listener for play again button
  playAgainBtn.addEventListener("click", function () {
    resetGame();
  });

  // Function to get the computer's choice
  function getComputerChoice() {
    const choices = ["fist", "scissor", "hand"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  // Function to determine the winner
  function determineWinner(user, computer) {
    if (user === computer) {
      return "draw";
    } else if (
      (user === "fist" && computer === "scissor") ||
      (user === "scissor" && computer === "hand") ||
      (user === "hand" && computer === "fist")
    ) {
      return "win";
    } else {
      return "lose";
    }
  }

  let circle1 = document.querySelector(".circle-1");
  let circle2 = document.querySelector(".circle-2");
  let circle3 = document.querySelector(".circle-3");

  let circle4 = document.querySelector(".circle-4");
  let circle5 = document.querySelector(".circle-5");
  let circle6 = document.querySelector(".circle-6");

  // Function to display the result on the page
  function displayResult(user, computer, result) {
    const userDisplay = document.querySelector(
      ".resultsection .user #fist img"
    );
    const computerDisplay = document.querySelector(
      ".resultsection .computer #hand img"
    );

    userDisplay.src = `${user}.png`;
    computerDisplay.src = `${computer}.png`;

    const winnerDisplay = document.querySelector("#you-win");
    const againstPCDisplay = document.querySelector("#against-pc");

    if (result === "win") {
      winnerDisplay.textContent = "YOU WIN";
      againstPCDisplay.textContent = "AGAINST PC";
      circle1.style.animation = "animate 2s infinite linear";
      circle2.style.animation = "animate 2s infinite linear";
      circle3.style.animation = "animate 2s infinite linear";
      nextbutton.style.display = "flex";
      twobutton.style.marginTop = "15%";
    } else if (result === "lose") {
      winnerDisplay.textContent = "YOU LOSE";
      againstPCDisplay.textContent = "AGAINST PC";
      circle4.style.animation = "animate 2s infinite linear";
      circle5.style.animation = "animate 2s infinite linear";
      circle6.style.animation = "animate 2s infinite linear";
      twobutton.style.marginTop = "15%";
    } else {
      winnerDisplay.textContent = "TIE UP";
      againstPCDisplay.textContent = "";
      twobutton.style.marginTop = "15%";
    }

    // Show the result section
    document.querySelector(".gamesection").style.display = "none";
    document.querySelector(".resultsection").style.display = "flex";
  }

  // Function to update scores and display them
  function updateScores(result) {
    if (result === "win") {
      localStorage.setItem("userscore", parseInt(++userScore));
    } else if (result === "lose") {
      localStorage.setItem("computerscore", parseInt(++computerScore));
    }

    scoreElement1.textContent = userScore;
    scoreElement2.textContent = computerScore;
  }

  // Function to reset the game
  function resetGame() {
    // Hide the result section and show the game section
    document.querySelector(".gamesection").style.display = "flex";
    document.querySelector(".resultsection").style.display = "none";

    // Reset scores
    circle1.style.animation = "";
    circle2.style.animation = "";
    circle3.style.animation = "";
    circle4.style.animation = "";
    circle5.style.animation = "";
    circle6.style.animation = "";
    nextbutton.style.display = "none";
    twobutton.style.marginTop = "25%";
  }
});
