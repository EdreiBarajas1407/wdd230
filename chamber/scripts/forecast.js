export function displayForecast() {
    const forecastContainer = document.querySelector("#daily-forecast");

    const key = "2e0b12bcc0b73eae96db582989e62798";
    const lat = "19.35";
    const lon = "-99.16";

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=22&units=metric&appid=${key}`;
    const file = "scripts/weather.json";

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
            console.log(error);
        }
    }

    const displayResults = (weatherEvent) => {
        const dates = [];
        weatherEvent.forEach((lecture) => {
            const day = new Date(lecture.dt_txt).getDate();

            if (!(day in dates)) {
                dates[day] = [];
                dates[day].push(lecture.dt_txt);
            }
            dates[day].push(lecture.main);
        });

        const minMaxTemps = [];
        dates.forEach((date) => {
            const day = new Date(date[0]).toDateString();

            minMaxTemps[day] = {};

            const temps = date.map((day) => day.temp, 10);
            const validTemps = temps.filter((value) => typeof value === "number");
            const minTemp = Math.min(...validTemps);
            const maxTemp = Math.max(...validTemps);

            minMaxTemps[day].date = date[0];
            minMaxTemps[day].min = minTemp;
            minMaxTemps[day].max = maxTemp;
        });

        for (const day in minMaxTemps) {
            const dayContainer = document.createElement("div");

            const dateStringContainer = document.createElement("p");
            const minTempContainer = document.createElement("p");
            const maxTempContainer = document.createElement("p");

            const dateObject = new Date(minMaxTemps[day].date);
            const monthName = dateObject.toLocaleString("default", { month: "short" });
            const dayOfMonth = dateObject.getDate();
            dateStringContainer.textContent = `${monthName} ${dayOfMonth}`;

            minTempContainer.textContent = `Min: ${minMaxTemps[day].min}°C`;
            maxTempContainer.textContent = `Max: ${minMaxTemps[day].max}°C`;

            dayContainer.appendChild(dateStringContainer);
            dayContainer.appendChild(minTempContainer);
            dayContainer.appendChild(maxTempContainer);

            forecastContainer.appendChild(dayContainer);
        }
    };

    apiFetch();
}