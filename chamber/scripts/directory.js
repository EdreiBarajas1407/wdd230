const baseURL = "https://EdreiBarajas1407.github.io/wdd230/";
const url = 'https://EdreiBarajas1407.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector("#cards");

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();

    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement('section');
        const nameElement = document.createElement('h2');
        const addressElement = document.createElement('p');
        const phoneElement = document.createElement('p');
        const websiteElement = document.createElement('a');
        const membershipElement = document.createElement('p');
        const logo = document.createElement('img');

        nameElement.textContent = company.name;
        addressElement.textContent = `Address: ${company.address}`;
        phoneElement.textContent = `Phone: ${company.phoneNumber}`;
        websiteElement.href = company.webUrl;
        websiteElement.textContent = "Visit Website";
        websiteElement.target = "_blank";
        membershipElement.textContent = `Membership: ${company.membership}`;

        logo.setAttribute('src', company.img);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '240');

        card.appendChild(nameElement);
        card.appendChild(addressElement);
        card.appendChild(phoneElement);
        card.appendChild(websiteElement);
        card.appendChild(membershipElement);
        card.appendChild(logo);

        cards.appendChild(card);
    });
}

getCompanyData();