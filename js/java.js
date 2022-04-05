const video = document.getElementById("video");

document.getElementById("spil").addEventListener("click", function () {
    video.currentTime = 0; // Får video til at starte forfra (0 sekunder)
    video.play();
})

document.getElementById("stop").addEventListener("click", function () {
    video.pause();
})

