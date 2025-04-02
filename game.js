import "./text.js";

// Text history
var historyButton = document.getElementById("history");
var readText = document.getElementById("read");
var closeReadText = document.getElementById("read-close");

historyButton.onclick = function() {
    readText.style.display = "block";
}

closeReadText.onclick = function() {
    readText.style.display = "none";
}

// Start
var startButton = document.getElementById("start");
var gameTitle = document.getElementById("title");

startButton.addEventListener("click", transition)

// Remove Start
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    continueButton.style.display = "block";
    gameTitle.style.display = "none";
})

// Transition
function transition() {
    var imageTransition = document.getElementById("image-transition");

    imageTransition.style.opacity = "100%";
}

function transitionNot() {
    var imageTransition = document.getElementById("image-transition");

    imageTransition.style.opacity = "0%";
}

// Text
var dialogue = document.getElementById("dialogue");
var options = document.getElementById("option-list");
var continueButton = document.getElementById("continue");

startButton.addEventListener("click", () => {
    dialogue.innerHTML = partOne[0];
})