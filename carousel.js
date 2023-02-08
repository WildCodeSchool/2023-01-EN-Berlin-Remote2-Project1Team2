// js for carousel

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");

let index = 0;

const changeImage = () => {
  images.forEach((img) => (img.classList.remove("active")));
  images[index].classList.add("active");
};

const nextImage = () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  changeImage();
};

carousel.addEventListener("load", changeImage());
setInterval(nextImage, 3000);

  // end js for carousel