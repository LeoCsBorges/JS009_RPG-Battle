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
const heroes = [];

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
    const pointsRemainingElement = document.querySelector(".build-points");
    let pointsRemaining = Number(pointsRemainingElement.innerHTML);
    const attributeStatusElement = document.querySelector(
      `#${element.dataset.status}-status`
    );
    const attributeStatus = Number(attributeStatusElement.innerHTML);

    //attribute 1
    if (
      (attributeStatus === 1 && element.dataset.role === "sub") ||
      (pointsRemaining === 0 && element.dataset.role === "add")
    ) {
      return;
    }

    //adding status
    if (element.dataset.role === "add") {
      attributeStatusElement.innerHTML = attributeStatus + 1;
      pointsRemaining -= 1;
      pointsRemainingElement.innerHTML = pointsRemaining;

      //subtracting status
    } else {
      attributeStatusElement.innerHTML = attributeStatus - 1;
      pointsRemaining += 1;
      pointsRemainingElement.innerHTML = pointsRemaining;
    }
  },

  heroCreate() {
    const heroName = document.querySelector("#heroName").value;
    const heroClass = document.querySelector("#heroClass").value;
    const attPoints = Number(
      document.querySelector("#attack-status").innerHTML
    );
    const defPoints = Number(
      document.querySelector("#defense-status").innerHTML
    );

    //two heroes maximium
    if (heroes.length > 2) {
      console.log("2 heroes");
      return;
    }

    let myHero;
    if (heroClass === "knight") {
      myHero = new Knight(heroName, "strengh", "vigor", attPoints, defPoints);
    }
    if (heroClass === "archer") {
      myHero = new Archer(
        heroName,
        "dexterity",
        "agility",
        attPoints,
        defPoints
      );
    }
    if (heroClass === "mage") {
      myHero = new Mage(heroName, "intellect", "spirit", attPoints, defPoints);
    }

    heroes.push(myHero);
  },

  heroesBattle() {
    if (heroes.length < 2) {
      return `Error: two heroes are needed to battle`;
    }
    return [...heroes];
  },

  getHeroes() {
    return [...heroes];
  },
};

class Hero {
  constructor(name, heroClass, attAttribute, defAttribute) {
    this.name = name;
    this.class = heroClass;
    this.attAttribute = attAttribute;
    this.defAttribute = defAttribute;
  }

  showInfo() {
    return `name: ${this.name}, hero class: ${this.class}`;
  }
}

class Knight extends Hero {
  constructor(name, attAttribute, defAttribute, attPoints, defPoints) {
    super(name, "knight", attAttribute, defAttribute);
    this.attack = attPoints;
    this.defense = defPoints;
    this.color = "darkred";
  }
}

class Archer extends Hero {
  constructor(name, attAttribute, defAttribute, attPoints, defPoints) {
    super(name, "archer", attAttribute, defAttribute);
    this.attack = attPoints;
    this.defense = defPoints;
    this.color = "darkgreen";
  }
}

class Mage extends Hero {
  constructor(name, attAttribute, defAttribute, attPoints, defPoints) {
    super(name, "mage", attAttribute, defAttribute);
    this.attack = attPoints;
    this.defense = defPoints;
    this.color = "darkblue";
  }
}

export default hero;
