const GALLERY__ELEMENT = document.querySelectorAll(".gallery__element img");
const POPUP = document.querySelector(".popup");
const POPUP__CLOSE = document.querySelector(".popup__close");
const POPUP__IMG = document.querySelector(".popup__img");


GALLERY__ELEMENT.forEach((gallery__element) => {
    gallery__element.addEventListener("click", (e) => {
    POPUP.classList.remove("hidden");
    console.log(e.target);
});
});

POPUP__CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});

