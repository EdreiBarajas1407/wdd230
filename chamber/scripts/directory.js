const baseURL = "https://EdreiBarajas1407.github.io/wdd230/";
const linksURL = "https://EdreiBarajas1407.github.io/wdd230/chamber/data/members.json";

async function generateDirectoryCards() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error('Unable to load the file');

        const data = await response.json();
        console.log(data);
        displayCards(data.members);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function displayCards(directoryMembers) {
    const cardsContainer = document.querySelector('.members-container');
    cardsContainer.innerHTML = "";

    directoryMembers.forEach(member => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${member.img}" alt="Image of ${member.name} business" loading="lazy"/>
            <h3>${member.name}</h3>
            <div class="directory-card-text">
                <p>${member.address}</p>
                <p>${member.phoneNumber}</p>
                <a href="${member.webUrl}" target="_blank">${member.webUrl}</a>
                <p>Membership: ${member.membership}</p>
            </div>
        `;
        cardsContainer.appendChild(li);
    });
}

generateDirectoryCards();