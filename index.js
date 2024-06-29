const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];
let currentIndex = 0;

const img = document.querySelector(".img");
const nextButEl = document.querySelector(".next");
const previousButEl = document.querySelector(".previous");
const buttom1ButEl = document.querySelector(".buttom1");
const buttom2ButEl = document.querySelector(".buttom2");
const buttom3ButEl = document.querySelector(".buttom3");

function changeImg() {
  if (currentIndex >= 0 && currentIndex < images.length) {
    img.src = images[currentIndex];
  } else {
    console.log("Index out of bounds");
  }
}

nextButEl.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  changeImg();
});

previousButEl.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeImg();
});

buttom1ButEl.addEventListener("click", () => {
  currentIndex = 0;
  changeImg();
});

buttom2ButEl.addEventListener("click", () => {
  currentIndex = 1;
  changeImg();
});

buttom3ButEl.addEventListener("click", () => {
  currentIndex = 2;
  changeImg();
});

changeImg();
