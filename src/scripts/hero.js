const heroesAttributes = [
  {
    class: "knight",
    attAttribute: "strenght",
    defAttribute: "vigor",
  },
  {
    class: "archer",
    attAttribute: "dexterity",
    defAttribute: "agility",
  },
  {
    class: "mage",
    attAttribute: "intellect",
    defAttribute: "spirit",
  },
];

const hero = {
  changeHeroAvatar(heroClass) {
    if (heroClass) {
      document.querySelector(
        "#heroAvatar"
      ).src = `./assets/images/${heroClass}-avatar.jpg`;
    }
  },

  changeHeroAttributes(heroClass) {
    heroesAttributes.forEach((hero) => {
      if (hero.class === heroClass) {
        document.querySelector("#att-attribute").innerHTML = hero.attAttribute;
        document.querySelector("#def-attribute").innerHTML = hero.defAttribute;

        //add & sub buttons attributes
        document.querySelectorAll('[data-status="attack"').forEach((button) => {
          button.dataset.attribute = hero.attAttribute;
        });

        document
          .querySelectorAll('[data-status="defense"')
          .forEach((button) => {
            button.dataset.attribute = hero.defAttribute;
          });
      }
    });
  },

  changeHeroAttribute(element) {
    // recuperar a quantidade de pontos para ser distribuida
    // pegar o element passado
    // ver qual o atributo (ataque ou defesa)
    // ver qual a funcionalidade (adicionar ou dimuir)
    // **nao permitir atributo menor que 1
    console.log(element);
  },
};

export default hero;
