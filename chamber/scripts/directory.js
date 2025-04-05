const baseURL = "https://EdreiBarajas1407.github.io/wdd230/";
const url = 'https://EdreiBarajas1407.github.io/wdd230/chamber/data/members.json';

async function generateDirectoryCards() {
    const response = await fetch(directoryURL);
    const data = await response.json();

    console.log(data);
    displayCards(data.members);

};

function displayCards(directoryMembers) {
    const cardsContainer = document.querySelector('.members-container');

    directoryMembers.forEach(member => {
        const li = document.createElement('li');
        li.innerHTML = `
        <img src="${member.img}" alt="Image of ${member.name} business" loading="lazy"/>
        <h3>${member.name}</h3>
        <div class="directory-card-text">
          <p>Address: ${member.address}</p>
          <p>Phone: ${member.phone}</p>
          <a href="${member.website}">${member.website}</a>
        </div>
  
      `;

        cardsContainer.appendChild(li);
    });
}