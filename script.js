const teamMembers = [
  {
    name: "Wooden Airplane",
    description: "Soar through imaginative skies with this classic wooden airplane.",
    imgSrc: "planestorefront.png" // Add appropriate image path
  },
  {
    name: "Wooden Car",
    description: "Race through playtime with this classic wooden toy car.",
    imgSrc: "carstorefront.png" // Add appropriate image path
  },
  {
    name: "Wooden Boat",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "boatstorefront.png" // Add appropriate image path
  },
  {
    name: "Wooden Boat",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "LittleBirdToyCoSitePhotos/boat1.jpg" // Add appropriate image path
  },
  {
    name: "Wooden Boat",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "LittleBirdToyCoSitePhotos/boat1.jpg" // Add appropriate image path
  },
  {
    name: "Wooden Boat",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "LittleBirdToyCoSitePhotos/boat2.jpg" // Add appropriate image path
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
  document.getElementById("img1").style.backgroundImage = `url(${products[selected].side1})`;
  document.getElementById("img2").style.backgroundImage = `url(${products[selected].side2})`;
  document.getElementById("img3").style.backgroundImage = `url(${products[selected].side3})`;
  document.getElementById("mainimg").src = products[selected].display;
  document.getElementById("age").textContent = products[selected].age;

  
};





