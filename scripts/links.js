const baseURL = "https://EdreiBarajas1407.github.io/wdd230/";
const linksURL = "https://EdreiBarajas1407.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.weeks);

};

function displayLinks(weeks) {
    const listContainer = document.getElementById("list-container");

    weeks.forEach(week => {
        const li = document.createElement("li");
        li.textContent = `${week.week}: `;

        listContainer.appendChild(li);

        week.links.forEach(link => {
            const linkElement = document.createElement("a");
            linkElement.setAttribute("href", link.url);
            linkElement.setAttribute("target", "_blank");
            linkElement.textContent = link.title;

            li.appendChild(linkElement)

        })
    });

}