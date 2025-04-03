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
var currentDialogue = 1;
var storyProgress = 0;
var storySoFar = document.getElementById("historical-text");

startButton.addEventListener("click", () => {
    dialogue.innerHTML = dialoguePart[0][0];
    storySoFar.innerHTML = dialoguePart[0][0];
})

// Continue

continueButton.addEventListener("click", playDialogue)

// Progression

function playDialogue() {
    if (currentDialogue < dialoguePart[storyProgress].length) {
        dialogue.innerHTML = dialoguePart[storyProgress][currentDialogue];
        storySoFar.innerHTML += "<br/><br/>" + dialoguePart[storyProgress][currentDialogue];
        currentDialogue += 1;
    } else {
        storyProgress += 1;
        currentDialogue = 0;
        if (dialoguePart[storyProgress]) {
            dialogue.innerHTML = dialoguePart[storyProgress][currentDialogue];
            storySoFar.innerHTML += "<br/><br/>" + dialoguePart[storyProgress][currentDialogue];
            currentDialogue += 1;
        }
    }
}