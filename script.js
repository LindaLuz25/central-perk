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



/*audio*/ 
const audioElement = document.getElementById("audio1");
const btnAudioControl = document.getElementById("btnAudioControl");

// Agregamos el evento click al botón
btnAudioControl.addEventListener("click", () => {
  if (audioElement.muted) {
    // Si está silenciado, activamos el sonido
    audioElement.muted = false;
    btnAudioControl.innerText = "🔊"; // Cambiamos el ícono
    audioElement.play();
    audioElement.volume = 0.5; // Volumen inicial
  } else {
    // Si no está silenciado, lo silenciamos
    audioElement.muted = true;
    btnAudioControl.innerText = "🔇"; // Cambiamos el ícono
  }
});



/*MENUUUU */
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Evento de clic en el botón hamburguesa
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show'); // Alternar la clase 'show'
});