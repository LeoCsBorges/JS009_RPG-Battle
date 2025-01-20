import hero from "./hero.js";

const ui = {
  renderCards() {
    const heroes = hero.getHeroes();

    const cards = document.querySelectorAll(".card-wrapper");
    let count = 0;

    cards.forEach((card) => {
      card.style.backgroundColor = heroes[count].color;
      card.innerHTML = `
            <div class="text-center text-white">
                <h2
                    class="p-1 bg-white bg-opacity-40 text-sm text-black font-bold tracking-wider capitalize rounded-t-md"
                >
                    ${heroes[count].name}
                </h2>
                <div class="card-hero-img">
                    <img
                    src="assets/images/${heroes[count].class}-card.jpg"
                    alt
                    />
                </div>
                <h3
                    class="p-1 text-white font-semibold uppercase border-2 border-slate-800 rounded mb-2 bg-white bg-opacity-20 shadow-md tracking-widest"
                >
                    ${heroes[count].class}
                </h3>
                <div class="flex justify-between">
                    <div class="w-1/2 border-r border-white border-opacity-20">
                    <h4 class="text-sm mb-2">${heroes[count].attAttribute}</h4>
                    <span class="text-lg font-semibold">${heroes[count].attack}</span>
                    </div>
                    <div class="w-1/2 border-l border-white border-opacity-20">
                    <h4 class="text-sm mb-2">${heroes[count].defAttribute}</h4>
                    <span class="text-lg font-semibold">${heroes[count].defense}</span>
                    </div>
                </div>
            </div>
        `;
      count++;
    });
  },

  battleOutcome() {
    const outcomeElement = document.querySelector("#outcome");

    if (hero.getHeroes().length < 2) {
      outcomeElement.classList.replace("hidden", "flex");
      outcomeElement.innerHTML =
        "Ops... two heroes are needed to begin the battle!";
      return;
    }

    document.querySelector("#outcome").classList.replace("hidden", "flex");
    outcomeElement.innerHTML = `
        <div class="h-5 w-5 border-t-2 border-dotted border-purple-700 animate-spin rounded-full"></div>
        <p>Loading the battle...</p>
    `;
    setTimeout(() => {
      document.querySelector("#outcome").innerHTML =
        "Someone has won the battle!";
    }, 2000);
  },
};

export default ui;
