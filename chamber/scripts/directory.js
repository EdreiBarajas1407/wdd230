const url = './data/members.json';

async function generateDirectoryCards() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al cargar el archivo JSON');

        const data = await response.json();
        console.log(data);
        displayCards(data.companies);
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}

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
generateDirectoryCards();