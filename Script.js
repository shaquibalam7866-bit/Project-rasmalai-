const startBtn = document.getElementById("startBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const giftBox = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    welcomeMessage.style.display = "block";

    setTimeout(() => {
        giftBox.style.display = "block";
        giftText.style.display = "block";
    }, 2000);

});

giftBox.addEventListener("click", () => {

    giftBox.innerHTML = "🎉";

    giftText.innerHTML = "<h2>Happy Birthday My Rasmalai ❤️</h2>";

});
