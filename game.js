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

startButton.addEventListener("click", transition)

// Remove Start
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
})

// Transition

function transition() {
    var imageTransition = document.getElementById("image-transition");

    imageTransition.style.opacity = "100%";
}