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

startButton.addEventListener("click", async function () {
    await transition()
    await wait(1000);
    transitionNot();
})

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

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

startButton.addEventListener("click", async function () {
    await wait(1000);
    typeText(dialogue, dialoguePartText[0][0], 10, () => {
        storySoFar.innerHTML = dialoguePartText[0][0];
    });
});


// Continue

continueButton.addEventListener("click", playDialogue)

// Progression

function playDialogue() {
    if (isTyping) return; // Prevent overlapping calls
    isTyping = true;

    if (currentDialogue < dialoguePartText[storyProgress].length) {
        typeText(dialogue, dialoguePartText[storyProgress][currentDialogue], 10, () => {
            storySoFar.innerHTML += "<br/><br/>" + dialoguePartText[storyProgress][currentDialogue];
            currentDialogue += 1;
            isTyping = false; // Reset flag when finished
        });
    } else {
        storyProgress += 1;
        currentDialogue = 0;
        if (dialoguePartText[storyProgress]) {
            typeText(dialogue, dialoguePartText[storyProgress][currentDialogue], 10, () => {
                storySoFar.innerHTML += "<br/><br/>" + dialoguePartText[storyProgress][currentDialogue];
                currentDialogue += 1;
                updateScene();
                isTyping = false; // Reset flag when finished
            });
        }
    }
}

// Typing animation

function typeText(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = ""; // Clear previous text
    let typingInterval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(typingInterval); // Stop typing
            if (callback) callback(); // Execute the callback
        }
    }, speed);
}

let isTyping = false;

// Picture

function changePicture(storyPart, imageName) {
  let thePicture = document.getElementById("image");
  if (dialoguePartPicture[storyPart][imageName]) {
    thePicture.src = dialoguePartPicture[storyPart][imageName];
  } else {
    console.log("Scene not found");
  }
}

function updateScene() {
    if (dialoguePartText[1][1]) {
        changePicture(0, 1)
    }
}