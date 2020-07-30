const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  nav.style.transitionDuration = "700ms";
});

openButton.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
  nav.style.transitionDuration = "700ms";
}); 