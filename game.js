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

// Setting

var settingButton = document.getElementById("setting");
var settingInteractable = document.getElementById("setting-interactable");
var closeSetting = document.getElementById("setting-close");

settingButton.onclick = function() {
    settingInteractable.style.display = "block";
}

closeSetting.onclick = function() {
    settingInteractable.style.display = "none";
}

// Game size

var gameCanvas = document.getElementById("gameCanvas");
var imageSize = document.getElementById("image");
var dialogueSize = document.getElementById("text");
var dialogueBoxSize = document.getElementById("dialogue-box");
var foursize = document.getElementById("foursize");
var ninesize = document.getElementById("ninesize");

foursize.onclick = function() {
    gameCanvas.style.width = "400px";
    gameCanvas.style.height = "400px";
    imageSize.style.width = "300px";
    imageSize.style.height = "200px";
    dialogueSize.style.width = "300px";
    dialogueSize.style.height = "200px";
    dialogueBoxSize.style.width = "300px";
    dialogueBoxSize.style.height = "100px";
}

ninesize.onclick = function() {
    gameCanvas.style.width = "900px";
    gameCanvas.style.height = "900px";
    imageSize.style.width = "800px";
    imageSize.style.height = "450px";
    dialogueSize.style.width = "800px";
    dialogueSize.style.height = "450px";
    dialogueBoxSize.style.width = "800px";
    dialogueBoxSize.style.height = "225px";
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
        updateScene();
        typeText(dialogue, dialoguePartText[storyProgress][currentDialogue], 10, () => {
            storySoFar.innerHTML += "<br/><br/>" + dialoguePartText[storyProgress][currentDialogue];
            currentDialogue += 1;
            isTyping = false; // Reset flag when finished
        });
    } else {
        storyProgress += 1;
        currentDialogue = 0;
        if (dialoguePartText[storyProgress]) {
            updateScene();
            typeText(dialogue, dialoguePartText[storyProgress][currentDialogue], 10, () => {
                storySoFar.innerHTML += "<br/><br/>" + dialoguePartText[storyProgress][currentDialogue];
                currentDialogue += 1;
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
    thePicture.style.backgroundImage = `url(${dialoguePartPicture[storyPart][imageName]})`;
  } else {
    console.log("Scene not found");
  }
}

function updateScene() {
    if (storyProgress === 0 && currentDialogue === 1) {
        changePicture(0, 1); // Manually set the image for the second dialogue
    }
    else if (storyProgress === 0 && currentDialogue === 3) {
        changePicture(0, 0); // Manually set the image for the third dialogue
    }
    else if (storyProgress === 1 && currentDialogue === 0) {
        changePicture(1, 2);
    }
}