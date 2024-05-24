let selected;

function switchOne() {
  document.getElementById("mainimg").src = products[selected].side1;
}

function switchTwo() {
  document.getElementById("mainimg").src = products[selected].side2;
}

function switchThree() {
  document.getElementById("mainimg").src = products[selected].side3;
}

let itemSold = document.getElementById("product-option");

itemSold.onchange = function () {
  selected = this.value; 

  document.getElementById("ttl").textContent = products[selected].title;
  document.getElementById("dcs").textContent = products[selected].description;
  document.getElementById("img1").style.backgroundImage = `url(${products[selected].side1})`;
  document.getElementById("img2").style.backgroundImage = `url(${products[selected].side2})`;
  document.getElementById("img3").style.backgroundImage = `url(${products[selected].side3})`;
  document.getElementById("mainimg").src = products[selected].display;
  document.getElementById("buy").textContent = products[selected].buy;
};

const teamMembers = [
  {
    name: "Wooden Airplane",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member, index) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "divcardborders", "p-3", "m-0");

    card.innerHTML = `
      <div class="card divcardborders p-3 cardsizing">
      </div>
        `;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
