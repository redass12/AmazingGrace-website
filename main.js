// Nav animation:

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("nav-animate");
  } else {
    nav.classList.remove("nav-animate");
  }
});
