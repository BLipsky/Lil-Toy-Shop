const teamMembers = [
  {
    name: "Wooden Airplane",
    description:
      "Soar through imaginative skies with this classic wooden airplane.",
    imgSrc: "LittleBirdToyCoSitePhotos/NEWplane.png", // Add appropriate image path
  },
  {
    name: "Wooden Car",
    description: "Race through playtime with this classic wooden toy car.",
    imgSrc: "LittleBirdToyCoSitePhotos/NEWcar.png", // Add appropriate image path
  },
  {
    name: "Wooden Boat",
    description:
      "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "LittleBirdToyCoSitePhotos/NEWboat.png", // Add appropriate image path
  },
  {
    name: "Wooden Train",
    description:
      "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "/LittleBirdToyCoSitePhotos/boatstorefront.png", // Add appropriate image path
  },
  {
    name: "Wooden Blocks",
    description:
      "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "/LittleBirdToyCoSitePhotos/boatstorefront.png", // Add appropriate image path
  },
  {
    name: "Wooden Bars",
    description:
      "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "/LittleBirdToyCoSitePhotos/boatstorefront.png", // Add appropriate image path
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member, index) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4"); // Added 'mb-4' for margin bottom

    card.innerHTML = `
      <div class="card p-3 cardsizing">
        <img src="${member.imgSrc}" class="card-img-top" alt="${member.name}">
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.description}</p>
        </div>
      </div>
    `;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards;

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
  document.getElementById(
    "img1"
  ).style.backgroundImage = `url(${products[selected].side1})`;
  document.getElementById(
    "img2"
  ).style.backgroundImage = `url(${products[selected].side2})`;
  document.getElementById(
    "img3"
  ).style.backgroundImage = `url(${products[selected].side3})`;
  document.getElementById("mainimg").src = products[selected].display;
  document.getElementById("age").textContent = products[selected].age;
};

let quotesArray = [
  "Little Bird Toy Shop is by far the most significant Toy Producer of the decade. — New York Times",
  "These days playing at your desk is not just acceptable, it’s encouraged. — The Atlantic",
  "Little Bird Toy Shop has changed the way people think about sleep, on a grand scale. — Washington Post",
  "Happiness increased 200% since Little Bird Toy Shop began promoting siestas. — National Science Review",
  "Little Bird Toy Shop has ushered in a new era of sleep. — USA Today",
  "Not surprisingly, more siestas means more productivity. — Wall Street Journal",
  "Little Bird Toy Shop is doing the hard work of helping people get the rest they need. — U.S. News",
];

let randomNumber = Math.floor(Math.random() * quotesArray.length);

document.getElementById("press-quote").textContent =
  quotesArray[randomNumber].split("—")[0] +
  "  —" +
  quotesArray[randomNumber].split("—")[1];
