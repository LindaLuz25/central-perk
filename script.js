function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.innerText = "❄️";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove;
  }, 5000);
}

setInterval(createHeart, 300);




const audioElement = document.getElementById("audio1");
const btnAudioControl = document.getElementById("btnAudioControl");


btnAudioControl.addEventListener("click", () => {
  if (audioElement.muted) {
    audioElement.muted = false;
    btnAudioControl.innerText = "🔊"; 
    audioElement.play();
    audioElement.volume = 0.5; 
  } else {
    audioElement.muted = true;
    btnAudioControl.innerText = "🔇"; 
  }
});



/*MENUUUU */
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');


hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show'); 
});