const weatherInfo = document.querySelector("#weather-info");
const weatherIcon = document.querySelector("#weather-icon");

const key = "2e0b12bcc0b73eae96db582989e62798";
const lat = "19.35";
const lon = "-99.16";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

const displayResults = (weatherEvent) => {

    const eventDescription = weatherEvent.weather[0].description;
    const iconUrl = `https://openweathermap.org/img/w/${weatherEvent.weather[0].icon}.png`;
    const temp = `${weatherEvent.main.temp}°F`;

    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', `${eventDescription} Icon`);

    weatherInfo.textContent += ` ${temp}  ${eventDescription}`;
}

apiFetch()