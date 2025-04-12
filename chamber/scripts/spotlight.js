const spotlightContainer = document.getElementById("spotlights");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error("Error loading member data:", error);
    }
}

function displaySpotlights(members) {
    const qualified = members.filter(member =>
        member.membership === "Gold" || member.membership === "Silver"
    );

    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
      <img src="${member.img}" alt="Logo of ${member.name}" loading="lazy">
      <h4>${member.name}</h4>
      <p>${member.address}</p>
      <p>${member.phoneNumber}</p>
      <a href="${member.webUrl}" target="_blank">Get To Know Us</a>
    `;

        spotlightContainer.appendChild(card);
    });
}

getMembers();