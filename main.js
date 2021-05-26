// Nav animation:

const nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 30) {
//     nav.classList.add("nav-animate");
//   } else {
//     nav.classList.remove("nav-animate");
//   }
// });

// Read more button

const readMoreBtn = document.querySelector("#read-more");

const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", () => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Lire Plus") {
    readMoreBtn.innerText = "Lire Moin";
  } else {
    readMoreBtn.innerText = "Lire Plus";
  }
});

// Nav bar button

let menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// fixing the paragraph display on mobile phone :

const mediaQuery = window.matchMedia("(max-width: 768px)");
const p = document.querySelector("#p");

if (mediaQuery.matches) {
  p.style.width = `${screen.width - 30}px`;
}
