const toggleBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".navbar nav");

toggleBtn.addEventListener("click", () => nav.classList.toggle("active"));

/* work section */
const gridImages = document.querySelectorAll(".grid > img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxText = document.querySelector("#lightbox p");

gridImages.forEach((img) => {
  img.addEventListener("click", () => {
    // To open lightbox and its content
    lightbox.classList.add("active");
    // set the image clicked as the image of the lightbox and the lightbox text to the data-tech attribute of the image clicked
    lightboxImg.src = img.src;
    lightboxText.innerText = img.dataset.tech;
  });
});

// To close lightbox
lightbox.addEventListener("click", (e) => {
  // if the clicked element is not the dark overlay don't close it
  if (e.target !== e.currentTarget) return;
  // if it was the overlay it will close it
  lightbox.classList.remove("active");
});
