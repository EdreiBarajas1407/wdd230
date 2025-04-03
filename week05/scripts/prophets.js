const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullNameElement = document.createElement('h2');
        const birthDateElement = document.createElement('p');
        const placeOfBirthElement = document.createElement('p');
        const portrait = document.createElement('img');

        const fullName = `${prophet.name} ${prophet.lastname}`;
        const birthDate = `Date of Birth ${prophet.birthdate}`;
        const placeOfBirth = `Place of Birth ${prophet.birthplace}`;


        fullNameElement.textContent = fullName;
        birthDateElement.textContent = birthDate;
        placeOfBirthElement.textContent = placeOfBirth;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait image of ${fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullNameElement);
        card.appendChild(birthDateElement);
        card.appendChild(placeOfBirthElement);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();