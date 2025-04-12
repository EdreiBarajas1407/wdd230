const forecastContainer = document.querySelector("#daily-forecast");

const key = "2e0b12bcc0b73eae96db582989e62798";
const lat = "19.35";
const lon = "-99.16";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=22&units=metric&appid=${key}`;
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data.list);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

function displayResults(forecastList) {
    const dailyTemps = {};

    forecastList.forEach((entry) => {
        const date = new Date(entry.dt_txt);
        const dayKey = date.toISOString().split("T")[0];

        if (!dailyTemps[dayKey]) {
            dailyTemps[dayKey] = [];
        }

        dailyTemps[dayKey].push(entry.main.temp);
    });

    const days = Object.keys(dailyTemps).slice(0, 3);
    forecastContainer.innerHTML = "";

    days.forEach((dayKey) => {
        const temps = dailyTemps[dayKey];
        const minTemp = Math.min(...temps).toFixed(1);
        const maxTemp = Math.max(...temps).toFixed(1);

        const dayContainer = document.createElement("div");
        dayContainer.classList.add("forecast-day");

        const date = new Date(dayKey);
        const formattedDate = date.toLocaleDateString("default", {
            weekday: "short",
            month: "short",
            day: "numeric"
        });

        dayContainer.innerHTML = `
        <p><strong>${formattedDate}</strong></p>
        <p>Min: ${minTemp}°C</p>
        <p>Max: ${maxTemp}°C</p>
      `;

        forecastContainer.appendChild(dayContainer);
    });
}

apiFetch();
