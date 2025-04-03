const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const key = "fb29c431fd773dbb2b992a9ede88900a";
const lat = "49.75";
const lon = "6.64";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data);
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
    const temp = `${weatherEvent.main.temp}°C`;

    currentTemp.textContent = temp;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', `${eventDescription} Icon`);
    captionDesc.textContent = eventDescription;
}

apiFetch();