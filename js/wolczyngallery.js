const wolczyn__element = document.querySelectorAll("wolczyn__element img");

wolczyn__element.forEach((wolczyn__element) => {
    wolczyn__element.addEventListener("click", () => console.log(wolczyn__element));
});