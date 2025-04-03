const baseURL = "https://EdreiBarajas1407.github.io/wdd230/";
const linksURL = "https://EdreiBarajas1407.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("No access to the links:", error);
    }
}

function displayLinks(weeks) {
    const listContainer = document.getElementById('list-container');

    weeks.forEach(week => {
        const li = document.createElement('li');
        li.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', link.url);
            linkElement.setAttribute('target', '_blank');
            linkElement.textContent = link.title;

            li.appendChild(linkElement);

            if (index < week.links.length - 1) {
                li.appendChild(document.createTextNode(" | "));
            }
        });

        listContainer.appendChild(li);
    });
}

getLinks();
