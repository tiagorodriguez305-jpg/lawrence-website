function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

fetch("https://TU-BUCKET.s3.amazonaws.com/?list-type=2")
  .then(response => response.text())
  .then(str => {

    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "application/xml");

    const keys = Array.from(xml.getElementsByTagName("Key"))
      .map(node => node.textContent)
      .filter(name => name.match(/\.(jpg|jpeg|png|webp)$/i));

    const imageUrls = keys.map(key =>
      `https://TU-BUCKET.s3.amazonaws.com/${key}`
    );

    const shuffled = shuffle(imageUrls);
    const selected = shuffled.slice(0, 9);

    const grid = document.getElementById("photo-grid");

    grid.innerHTML = "";

    selected.forEach(src => {

      const img = document.createElement("img");

      img.src = src;
      img.alt = "Artwork";

      grid.appendChild(img);
    });
  })

  .catch(error => console.error("Error loading images:", error));



/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.addEventListener("click", function(e) {

  if (e.target.tagName === "IMG" && e.target.parentElement.id === "photo-grid") {

    lightbox.style.display = "flex";

    lightboxImg.src = e.target.src;
  }

});

lightbox.addEventListener("click", () => {

  lightbox.style.display = "none";

});
