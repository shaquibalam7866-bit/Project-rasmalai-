const startBtn = document.getElementById("startBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    welcomeMessage.style.display = "block";

});
