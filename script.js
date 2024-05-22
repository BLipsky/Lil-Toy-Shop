function switchOne() {
  document.getElementById("mainimg").src =
    "Little Bird Toy Co Site Photos/block2.jpg";
}
function switchTwo() {
  document.getElementById("mainimg").src =
    "Little Bird Toy Co Site Photos/block1.jpg";
}
function switchThree() {
  document.getElementById("mainimg").src =
    "Little Bird Toy Co Site Photos/block3.jpg";
}

let itemSold = itemSold();

function itemSold() {
  let selected = this.value;

  document.getElementById("ttl").textContent = itemSold[selected].title
    document.getElementById("dcs").textContent = itemSold[selected].description
    document.getElementById("b1").src = itemSold[selected].side1
    document.getElementById("b2").src = itemSold[selected].side2
    document.getElementById("b3").src = itemSold[selected].side3
    document.getElementById("mainimg").src = "Little Bird Toy Co Site Photos/" + selected + ".jpg";
}

const teamMembers = [
    {
      name: "Son Goku",
      age: 43,
      race: "Saiyan",
      strengths: "Strength",
      weaknesses: "Unconditional Mercy",
      skills: ["Kamehameha", "Kaioken", "Martial Arts"],
      transformations: [
        "Super Saiyan",
        "Super Saiyan 2",
        "Super Saiyan 3",
        "Super Saiyan 4",
        "Super Saiyan God",
        "Super Saiyan Blue (SSGSS)",
        "Ultra Instinct",
        "Mastered Ultra Instinct",
      ],
      biography: "The Legendary Saiyan",
      img: [
        "memberimgs/goku/goku.webp",
        "memberimgs/goku/SSJ1goku.webp",
        "memberimgs/goku/SSJ2goku.jpg",
        "memberimgs/goku/SSJ3goku.jpg",
        "memberimgs/goku/SSJ4goku.png",
        "memberimgs/goku/SSGgoku.png",
        "memberimgs/goku/SSGSSgoku.png",
        "memberimgs/goku/UIgoku.png",
        "memberimgs/goku/MUIgoku.png",
      ],
    },
  ];
  
  function generateTeamCards() {
    const teamCardsContainer = document.getElementById("teamCards");
  
    teamMembers.forEach((member, index) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "divcardborders", "p-3", "m-0");
  
      let backgroundColor;
  
      switch (member.race.toLowerCase()) {
        case "saiyan":
          backgroundColor = "yellow";
          break;
        case "namekian":
          backgroundColor = "green";
          break;
        case "android":
          backgroundColor = "blue";
          break;
        case "human":
          backgroundColor = "white";
          break;
        case "half-saiyan":
          backgroundColor = "purple";
          break;
        case "majin":
            backgroundColor = "pink";
            break;
      }
  
      card.style.backgroundColor = backgroundColor;
  
      const powerupId = `powerup-${index}`;
      const imageId = `image-${index}`;
  
      card.innerHTML = `
      <div class="card divcardborders p-3 cardsizing">
      <img src="${member.img[0]}" class="card-img-top imgsizing1" id="${imageId}">
      <div class="card-body">
          <h1 class="card-title">${member.name}</h1>
          <h3 class="card-text" style="overflow-wrap: break-word; max-height: 100px; overflow-y: hidden;">${
            member.biography
          }</h3>
          <ul>
              <li><strong>Race:</strong> ${member.race}</li>
              <li><strong>Age:</strong> ${member.age.toLocaleString()}</li>
              <li><strong>Skills:</strong> ${member.skills.join(", ")}</li>
              <li><strong>Strength:</strong> ${member.strengths}</li>
              <li><strong>Weakness:</strong> ${member.weaknesses}</li>
              <li><strong>Transformations:</strong>
                  <ul>
                      ${member.transformations
                        .map((transformation) => `<li>${transformation}</li>`)
                        .join("")}
                  </ul>
              </li>
          </ul>
          <div class="text-center">
              <button type="button" class="btn btn-primary text-center" id="${powerupId}">Power Up</button>
          </div>
      </div>
  </div>
  
        `;
  
      teamCardsContainer.appendChild(card);
  
      const powerupButton = document.getElementById(powerupId);
      const imageElement = document.getElementById(imageId);
      let currentImageIndex = 0;
  
      powerupButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % member.img.length;
        imageElement.src = member.img[currentImageIndex];
      });
    });
  }
  
  window.onload = generateTeamCards;
  
