const baseURL = "https://EdreiBarajas1407.github.io/wdd230/";
const url = './data/members.json';

function displayCards(directoryMembers) {
    const cardsContainer = document.querySelector('.members-container');

    directoryMembers.forEach(member => {
        const li = document.createElement('li');
        li.innerHTML = `
        <img src="${member.img}" alt="Image of ${member.name} business" loading="lazy"/>
        <h3>${member.name}</h3>
        <div class="directory-card-text">
          <p>Address: ${member.address}</p>
          <p>Phone: ${member.phoneNumber}</p>
          <a href="${member.webUrl}" target="_blank">${member.webUrl}</a>
        </div>
        `;

        cardsContainer.appendChild(li);
    });
}