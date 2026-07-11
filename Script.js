const startBtn = document.getElementById("startBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const giftBox = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");

startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    welcomeMessage.style.display = "block";

    setTimeout(function () {
        giftBox.style.display = "block";
        giftText.style.display = "block";
    }, 2000);
});

giftBox.addEventListener("click", function () {
    giftBox.innerHTML = "🎉";
    giftText.innerHTML = "<h2>Happy Birthday My Rasmalai ❤️</h2>";
});
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
    bgMusic.play();
});
const letter = document.getElementById("letter");

const text = letter.innerHTML;
letter.innerHTML = "";

let i = 0;

function typeLetter() {
  if (i < text.length) {
    letter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeLetter, 30);
  }
}

startBtn.addEventListener("click", () => {
  setTimeout(typeLetter, 1000);
});
@keyframes floatHearts {
  0%{
    transform:translateY(0);
    opacity:1;
  }

  100%{
    transform:translateY(-100vh);
    opacity:0;
  }
}

.hearts span{
  position:fixed;
  bottom:-50px;
  font-size:25px;
  animation:floatHearts 10s linear infinite;
}

.hearts span:nth-child(1){left:10%;}
.hearts span:nth-child(2){left:30%; animation-delay:2s;}
.hearts span:nth-child(3){left:50%; animation-delay:4s;}
.hearts span:nth-child(4){left:70%; animation-delay:6s;}
.hearts span:nth-child(5){left:90%; animation-delay:8s;}
