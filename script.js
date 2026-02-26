const totalImages = 500; 
const images = [];

for (let i = 1; i <= totalImages; i++) {
  images.push(`images/img${i}.jpg`);
}

images.sort(() => 0.5 - Math.random());

const selected = images.slice(0, 9);

const grid = document.getElementById("photoGrid");

selected.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  grid.appendChild(img);
});
