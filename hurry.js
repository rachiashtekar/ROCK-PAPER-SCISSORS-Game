let showbutton = document.querySelector(".Rulesbutton");
let rule = document.querySelector(".Rules");
let btn = document.querySelector(".close");

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
