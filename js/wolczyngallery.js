const GALLERY__ELEMENT = document.querySelectorAll(".gallery__element img");
const POPUP = document.querySelector(".popup");
const POPUP__CLOSE = document.querySelector(".popup__close");
const POPUP__IMG = document.querySelector(".popup__img");
const ARROW__LEFT  = document.querySelector(".popup__arrow--left");
const ARROW__RIGHT = document.querySelector(".popup__arrow--right");


GALLERY__ELEMENT.forEach((gallery__element, index) => {
    gallery__element.addEventListener("click", (e) => {
    POPUP.classList.remove("hidden");
    POPUP__IMG.src = e.target.src;
    currentImgIndex = index
});
});

POPUP__CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});

ARROW__RIGHT.addEventListener("click", () => {
    if (currentImgIndex === GALLERY__ELEMENT.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUP__IMG.src = GALLERY__ELEMENT[currentImgIndex].src;
});


ARROW__LEFT.addEventListener("click", () => {
    if (currentImgIndex === 0) {
        currentImgIndex = GALLERY__ELEMENT.length - 1;
    } else {
        currentImgIndex--;
    }
    POPUP__IMG.src = GALLERY__ELEMENT[currentImgIndex].src;
})