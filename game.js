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