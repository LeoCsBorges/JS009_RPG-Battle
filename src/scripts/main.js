import hero from "./hero.js";
import ui from "./ui.js";

//form submit || hero creation
document.querySelector("#heroCreation").addEventListener("submit", (event) => {
  event.preventDefault();
  hero.heroCreate();
  ui.renderCards();
});

//UI: hero status
document.querySelector("#heroClass").addEventListener("change", (event) => {
  hero.changeHeroAvatar(event.target.value);
  hero.changeHeroAttributes(event.target.value);
});

document.querySelectorAll(".att-button").forEach((attButton) => {
  attButton.addEventListener("click", (event) => {
    hero.changeHeroAttribute(event.target);
  });
});

//to battle butotn
document.querySelector("#toBattleButton").addEventListener("click", () => {
  ui.battleOutcome();
});
