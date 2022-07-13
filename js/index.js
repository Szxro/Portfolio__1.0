//Hamburger Menu
const $hamburger = document.querySelector(".hamburger");
const $nav = document.querySelector(".nav");

$hamburger.addEventListener("click", () => {
  $hamburger.classList.toggle("is-active");
  $hamburger.classList.toggle("fixed");
  $nav.classList.toggle("is-active");
});

document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    $hamburger.classList.remove("fixed");
    $hamburger.classList.remove("is-active");
    $nav.classList.remove("is-active");
  })
);

//Textarea Resize

const $textarea = document.querySelector("textarea");

$textarea.addEventListener("keyup", (e) => {
  $textarea.style.height = "auto";
  let taHeight = e.target.scrollHeight;
  $textarea.style.height = `${taHeight}px`;
});
