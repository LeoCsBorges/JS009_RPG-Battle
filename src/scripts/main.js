import hero from "./hero.js";

//form submit
document.querySelector("#heroCreation").addEventListener("submit", (event) => {
  event.preventDefault();
});

//hero creation
document.querySelector("#heroClass").addEventListener("change", (event) => {
  hero.changeHeroAvatar(event.target.value);
  hero.changeHeroAttributes(event.target.value);
});

document.querySelectorAll(".att-button").forEach((attButton) => {
  attButton.addEventListener("click", (event) => {
    hero.changeHeroAttribute(event.target);
  });
});
