// ---------------- Fatos Aleatórios ----------------
const fatos = [
  "Nosso açúcar orgânico é 100% natural, sem aditivos químicos.",
  "O etanol da cana emite até 90% menos CO₂ do que a gasolina.",
  "O bagaço da cana gera energia suficiente para abastecer cidades inteiras.",
  "A cana é cultivada no Brasil há mais de 500 anos.",
  "Tudo na cana é aproveitado: açúcar, bagaço, melaço e biofertilizantes."
];

const btnFato = document.getElementById("btnFato");
const campoFato = document.getElementById("fact");

// ---------------- Mostrar fato aleatório + emojis ----------------
btnFato.addEventListener("click", () => {
  // Mostra fato
  const fato = fatos[Math.floor(Math.random() * fatos.length)];
  campoFato.style.opacity = 0;
  setTimeout(() => {
    campoFato.textContent = fato;
    campoFato.style.opacity = 1;
  }, 200);

  // ---------------- Emojis aparecem só ao clicar ----------------
  criarEmojis();
});

const emojis = ["🍬","🌿","🍃","🍭"];
const emojiContainer = document.querySelector(".emoji-container");

function criarEmojis() {
  for (let i = 0; i < 15; i++) {
    const span = document.createElement("span");
    span.className = "emoji";
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    span.style.left = Math.random() * 100 + "vw";
    span.style.setProperty("--x", (Math.random() * 50 - 25) + "px");
    span.style.animationDuration = 8 + Math.random() * 7 + "s";
    span.style.animationDelay = "0s";

    emojiContainer.appendChild(span);

    // Remove emoji após animação para não poluir
    setTimeout(() => {
      span.remove();
    }, (parseFloat(span.style.animationDuration)*1000));
  }
}
