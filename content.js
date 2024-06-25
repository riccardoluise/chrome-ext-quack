// Creazione dell'elemento audio
const quackSound = new Audio(chrome.runtime.getURL('quack.mp3'));

// Funzione per riprodurre il suono
function playQuack() {
  quackSound.currentTime = 0; // Riavvolge l'audio all'inizio
  quackSound.play();
}

// Aggiunta del listener per l'evento keydown
document.addEventListener('keydown', playQuack);