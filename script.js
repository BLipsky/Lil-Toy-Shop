const teamMembers = [
  {
    name: "Wooden Airplane",
    description: "Soar through imaginative skies with this classic wooden airplane.",
    imgSrc: "LittleBirdToyCoSitePhotos/NEWplane.png",
    value: "plane"
  },
  {
    name: "Wooden Car",
    description: "Race through playtime with this classic hand-crafted wooden toy car.",
    imgSrc: "LittleBirdToyCoSitePhotos/NEWcar.png",
    value: "car"
  },
  {
    name: "Wooden Boat",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "LittleBirdToyCoSitePhotos/NEWboat.png",
    value: "boat"
  },
  {
    name: "Wooden Train",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "/LittleBirdToyCoSitePhotos/NEWtrain.png",
    value: "train"
  },
  {
    name: "Wooden Blocks",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "/LittleBirdToyCoSitePhotos/NEWblock.png",
    value: "block"
  },
  {
    name: "Wooden Bars",
    description: "Set sail for bathtub adventures with this adorable wooden boat.",
    imgSrc: "/LittleBirdToyCoSitePhotos/NEWbar.png",
    value: "bar"
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  if (!teamCardsContainer) {
    console.error("Element with ID 'teamCards' not found.");
    return;
  }

  teamMembers.forEach((member, index) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4"); // Added 'mb-4' for margin bottom

    card.innerHTML = `
      <a href="shop.html" class="card-link" data-value="${member.value}">
        <div class="card p-3 cardsizing">
          <img src="${member.imgSrc}" class="card-img-top" alt="${member.name}">
          <div class="card-body">
            <h5 class="card-title fontH">${member.name}</h5>
            <p class="card-text">${member.description}</p>
          </div>
        </div>
      </a>
    `;

    teamCardsContainer.appendChild(card);
  });

  document.querySelectorAll('.card-link').forEach(card => {
    card.addEventListener('click', function(event) {
      localStorage.setItem('selectedToy', this.getAttribute('data-value'));
    });
  });
}

function generateTeamCards2() {
  const teamCardsContainer2 = document.getElementById("teamCards2");

  if (!teamCardsContainer2) {
    console.error("Element with ID 'teamCards2' not found.");
    return;
  }

  const selectedToy = localStorage.getItem('selectedToy');
  const filteredMembers = teamMembers.filter(member => member.value !== selectedToy);

  for (let i = 0; i < 3; i++) {
    const member = filteredMembers[i];

    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
      <a href="shop.html" class="card-link" data-value="${member.value}">
        <div class="card p-3 cardsizing">
          <img src="${member.imgSrc}" class="card-img-top" alt="${member.name}">
          <div class="card-body">
            <h5 class="card-title txt">${member.name}</h5>
          </div>
        </div>
      </a>
    `;

    teamCardsContainer2.appendChild(card);
  }

  document.querySelectorAll('.card-link').forEach(card => {
    card.addEventListener('click', function(event) {
      localStorage.setItem('selectedToy', this.getAttribute('data-value'));
    });
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  generateTeamCards();
  generateTeamCards2();

  const selectedToy = localStorage.getItem('selectedToy');
  if (selectedToy && products[selectedToy]) {
    document.getElementById('ttl').textContent = products[selectedToy].title;
    document.getElementById('dcs').textContent = products[selectedToy].description;
    document.getElementById('mainimg').src = products[selectedToy].display;
    document.getElementById('age').textContent = products[selectedToy].age;
  } else {
    document.getElementById('product-display').innerHTML = '<p>No item selected</p>';
  }
});

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

let quotesArray = [
  "Little Bird Toy Shop is by far the most significant toy producer of the decade. — Anonymous",
  "These days playing at your desk is not just acceptable, it’s encouraged. — Anonymous",
  "Little Bird Toy Shop has changed the way people think about fun, on a grand scale. — Anonymous",
  "Happiness increased 200% since Little Bird Toy Shop began promoting their products. — Anonymous User",
  "Little Bird Toy Shop has ushered in a new era of fun. — Anonymous Customer",
  "Not surprisingly, more fun means more productivity. — Anonymous Person",
  "Little Bird Toy Shop is doing the hard work of helping people get the fun they need. — Anonymous",
];

window.onload = function() {
  let randomNumber = Math.floor(Math.random() * quotesArray.length);
  let selectedQuote = quotesArray[randomNumber].split("—");
  let quoteContent = selectedQuote[0].trim();
  let quoteAuthor = selectedQuote[1].trim();
  
  document.getElementById("press-quote").textContent = quoteContent + " — " + quoteAuthor;
};
// pluh