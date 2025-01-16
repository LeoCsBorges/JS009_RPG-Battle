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
};

export default hero;
