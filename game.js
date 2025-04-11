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
var dialogueTextSize = document.getElementById("dialogue");
var dialogueBoxSize = document.getElementById("dialogue-box");
var foursize = document.getElementById("foursize");
var ninesize = document.getElementById("ninesize");
var settingOption = document.getElementById("setting-option");
var allChoiceButton = document.querySelectorAll(".choicebutton");
var optionList = document.getElementById("option-list");

foursize.onclick = function() {
    gameCanvas.style.width = "400px";
    gameCanvas.style.height = "400px";
    imageSize.style.width = "300px";
    imageSize.style.height = "200px";
    dialogueSize.style.width = "300px";
    dialogueSize.style.height = "200px";
    dialogueTextSize.style.fontSize = "16px"
    dialogueBoxSize.style.width = "300px";
    dialogueBoxSize.style.height = "100px";
    continueButton.style.width = "46px";
    continueButton.style.height = "23px";
    continueButton.style.fontSize = "14px";
    settingOption.style.width = "300px;"
    settingOption.style.justifyContent = "unset";
    optionList.style.width = "300px";
    allChoiceButton.forEach(btn => {
        btn.style.width = "fit-content";
    });
}

ninesize.onclick = function() {
    gameCanvas.style.width = "900px";
    gameCanvas.style.height = "900px";
    imageSize.style.width = "800px";
    imageSize.style.height = "450px";
    dialogueSize.style.width = "800px";
    dialogueSize.style.height = "450px";
    dialogueTextSize.style.fontSize = "30px";
    dialogueBoxSize.style.width = "800px";
    dialogueBoxSize.style.height = "225px";
    continueButton.style.width = "100px";
    continueButton.style.height = "50px";
    continueButton.style.fontSize = "30px";
    settingOption.style.width = "800px";
    settingOption.style.justifyContent = "center";
    optionList.style.width = "800px";
    allChoiceButton.forEach(btn => {
        btn.style.width = "200px";
    });
}

// Save game

var saveStory = document.getElementById("savebutton");
var loadStory = document.getElementById("loadbutton");

function saveGame() {
    const gameState = {
        storyProgress: storyProgress,
        currentDialogue: currentDialogue - 1,
        oneHealth: healthOne.style.backgroundColor,
        twoHealth: healthTwo.style.backgroundColor,
        threeHealth: healthThree.style.backgroundColor,
        stamina: staminaOne.style.backgroundColor,
        detection: detectionOne.style.backgroundColor,
        history: storySoFar.innerHTML
    };
    localStorage.setItem('gameSave', JSON.stringify(gameState));
}

function loadGame() {
    const savedState = JSON.parse(localStorage.getItem('gameSave'));
    if (savedState) {
        storyProgress = savedState.storyProgress;
        currentDialogue = savedState.currentDialogue;
        healthOne.style.backgroundColor = savedState.oneHealth;
        healthTwo.style.backgroundColor = savedState.twoHealth;
        healthThree.style.backgroundColor = savedState.threeHealth;
        staminaOne.style.backgroundColor = savedState.stamina;
        detectionOne.style.backgroundColor = savedState.detection;
        storySoFar.innerHTML = savedState.history;
        playDialogue(); // Resume the dialogue
    }
    gameTitle.style.display = "none";
    startButton.style.display = "none";
    continueButton.style.display = "block";
}

saveStory.onclick = function() {
    saveGame();
}

loadStory.onclick = function() {
    loadGame();
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
    if (isTyping) return; // Prevent overlapping
    isTyping = true;

    if (currentDialogue < dialoguePartText[storyProgress].length) {
        updateScene();
        // updateSong();
        updateStatus();
        buttonChoice();
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
            // updateSong();
            updateStatus();
            buttonChoice();
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
  }
  else {
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

// Song

function changeSong(chooseSong) {
    let theSong = document.getElementById("song");
    if (gameSong[chooseSong]) {
        theSong.src = `url(${gameSong[chooseSong]})`;
        // theSong.play();
    }
    else {
        console.log("Song not found");
    }
}

/* function updateSong() {
    if (storyProgress === 0 && currentDialogue === 1) {
        changeSong(0);
    }
} */

// Button Choice

var choiceOne = document.getElementById("choiceone");
var choiceTwo = document.getElementById("choicetwo");
var choiceThree = document.getElementById("choicethree");

function buttonChoice() {
    if (storyProgress === 0 && currentDialogue === 25) {
        continueButton.style.display = "none";
        choiceOne.style.display = "block";
        choiceTwo.style.display = "block";
        choiceOne.innerHTML = PartTwoBranchOne[0];
        choiceTwo.innerHTML = PartTwoBranchOne[1];
        choiceOne.onclick = function() {
            
        }
    }
    else {
        choiceOne.style.display = "none";
        choiceTwo.style.display = "none";
        choiceThree.style.display = "none";
        continueButton.style.display = "block";
    }
}

// Status

// Health

let healthOne = document.getElementById("healthbarone");
let healthTwo = document.getElementById("healthbartwo");
let healthThree = document.getElementById("healthbarthree");

function healthRemainNone() {
    healthOne.style.backgroundColor = "gray";
    healthTwo.style.backgroundColor = "gray";
    healthThree.style.backgroundColor = "gray";
}

function healthRemainOne() {
    healthOne.style.backgroundColor = "red";
    healthTwo.style.backgroundColor = "gray";
    healthThree.style.backgroundColor = "gray";
}

function healthRemainTwo() {
    healthOne.style.backgroundColor = "red";
    healthTwo.style.backgroundColor = "red";
    healthThree.style.backgroundColor = "gray";
}

function healthRemainThree() {
    healthOne.style.backgroundColor = "red";
    healthTwo.style.backgroundColor = "red";
    healthThree.style.backgroundColor = "red";
}

// Stamina

let staminaOne = document.getElementById("staminabarone");
let staminaTwo = document.getElementById("staminabartwo");
let staminaThree = document.getElementById("staminabarthree");

function staminaRemainNone() {
    staminaOne.style.backgroundColor = "gray";
    staminaTwo.style.backgroundColor = "gray";
    staminaThree.style.backgroundColor = "gray";
}

function staminaRemainOne() {
    staminaOne.style.backgroundColor = "yellow";
    staminaTwo.style.backgroundColor = "gray";
    staminaThree.style.backgroundColor = "gray";
}

function staminaRemainTwo() {
    staminaOne.style.backgroundColor = "yellow";
    staminaTwo.style.backgroundColor = "yellow";
    staminaThree.style.backgroundColor = "gray";
}

function staminaRemainThree() {
    healthOne.style.backgroundColor = "yellow";
    healthTwo.style.backgroundColor = "yellow";
    healthThree.style.backgroundColor = "yellow";
}

// Detection

let detectionOne = document.getElementById("detectionbarone");
let detectionTwo = document.getElementById("detectionbartwo");
let detectionThree = document.getElementById("detectionbarthree");

function detectionRemainNone() {
    detectionOne.style.backgroundColor = "gray";
    detectionTwo.style.backgroundColor = "gray";
    detectionThree.style.backgroundColor = "gray";
}

function detectionRemainOne() {
    detectionOne.style.backgroundColor = "blue";
    detectionTwo.style.backgroundColor = "gray";
    detectionThree.style.backgroundColor = "gray";
}

function detectionRemainTwo() {
    detectionOne.style.backgroundColor = "blue";
    detectionTwo.style.backgroundColor = "blue";
    detectionThree.style.backgroundColor = "gray";
}

function detectionRemainThree() {
    detectionOne.style.backgroundColor = "blue";
    detectionTwo.style.backgroundColor = "blue";
    detectionThree.style.backgroundColor = "blue";
}

function updateStatus() {
    if (storyProgress === 0 && currentDialogue === 2) {
        healthRemainThree();
    }
}