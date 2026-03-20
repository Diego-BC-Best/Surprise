// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Logro entender", time: 16 },
  { text: "Que yo siempre he sido tuyo, no hay relevos", time: 19 },
  { text: "Debes saber", time: 25 },
  { text: "Que presté mi cuerpo a extrañas, no lo niego", time: 32 },
  { text: "Tal vez, me alimentaba el ego y fue mi error", time: 38 },
  { text: "No sé, en pocas palabras desubicación", time: 46 },
  { text: "Yo soy tuyo y de nadie", time: 53 },
  { text: "A pesar de las noches mil aventuras pude curarte", time: 56 },
  { text: "Yo soy tuyo y de nadie", time: 61 },
  { text: "Me tienes amor, entero, todito, espíritu y carne", time: 63 },
  { text: "Tuyo y de nadie más", time: 68 },
  { text: "Y este salvaje no fue indomable", time: 71 },
  { text: "Tú, yo y nadie más", time: 75 },
  { text: "Y lo debes saber", time: 78 },
  { text: "Logro entender", time: 98 },
  { text: "Que estaba tan desorientado en tantos brazos", time: 102 },
  { text: "Alquilando mi piel", time: 108 },
  { text: "Teniendo la dama perfecta a mi lado", time: 112 },
  { text: "Tal vez me alimentaba el ego y fue mi error", time: 118 },
  { text: "No sé en pocas palabras desubicación", time: 128 },
  { text: "Yo soy tuyo y de nadie", time: 134 },
  { text: "A pesar de las noches mil aventuras pude curarte", time: 136 },
  { text: "Yo soy tuyo y de nadie", time: 139 },
  { text: "Me tienes amor, entero, todito, espíritu y carne", time: 142 },
  { text: "Tuyo y de nadie más", time: 149 },
  { text: "Y este salvaje no fue indomable", time: 151 },
  { text: "Tú, yo y nadie más", time: 156 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);