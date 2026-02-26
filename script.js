// Función para mezclar el array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Crear lista de imágenes dinámicas
const images = [];

for (let i = 1; i <= 30; i++) {
  images.push(`https://picsum.photos/600?random=${i}`);
}

// Mezclar imágenes
const shuffled = shuffle(images);

// Tomar solo 9
const selected = shuffled.slice(0, 9);

// Buscar el contenedor del grid
const grid = document.getElementById("photo-grid");

// Insertar imágenes en el HTML
selected.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Artwork";
  grid.appendChild(img);
});
