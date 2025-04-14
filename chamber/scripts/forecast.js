console.log("Script cargado ✅");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente cargado ✅");

    const forecastContainer = document.querySelector("#daily-forecast");

    if (!forecastContainer) {
        console.warn("⚠️ Contenedor #daily-forecast no se encontró.");
        return;
    }

    const apiKey = "2e0b12bcc0b73eae96db582989e62798";
    const lat = "19.35";
    const lon = "-99.16";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log("Datos recibidos:", data);
                displayForecast(data.list);
            } else {
                throw new Error(`Error en la respuesta: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }

    function displayForecast(weatherList) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const nextThreeDays = [tomorrow];

        for (let i = 1; i < 3; i++) {
            const nextDay = new Date(tomorrow);
            nextDay.setDate(tomorrow.getDate() + i);
            nextThreeDays.push(nextDay);
        }

        const dailyTemps = {};
        weatherList.forEach((entry) => {
            const date = new Date(entry.dt_txt);
            const dayKey = date.toISOString().split("T")[0];

            if (nextThreeDays.some(d => d.toISOString().split("T")[0] === dayKey)) {
                if (!dailyTemps[dayKey]) {
                    dailyTemps[dayKey] = [];
                }
                dailyTemps[dayKey].push(entry.main.temp);
            }
        });

        for (const day in dailyTemps) {
            const temps = dailyTemps[day];
            const minTemp = Math.min(...temps);
            const maxTemp = Math.max(...temps);

            const dayContainer = document.createElement("div");
            dayContainer.style.border = "1px solid #ccc";
            dayContainer.style.padding = "10px";
            dayContainer.style.margin = "10px";
            dayContainer.style.borderRadius = "10px";
            dayContainer.style.backgroundColor = "#f9f9f9";

            const dateObj = new Date(day);
            const dateString = dateObj.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric"
            });

            const dateEl = document.createElement("p");
            dateEl.textContent = dateString;
            dateEl.style.fontWeight = "bold";

            const minEl = document.createElement("p");
            minEl.textContent = `Min: ${minTemp.toFixed(1)}°F`;

            const maxEl = document.createElement("p");
            maxEl.textContent = `Max: ${maxTemp.toFixed(1)}°F`;

            dayContainer.appendChild(dateEl);
            dayContainer.appendChild(minEl);
            dayContainer.appendChild(maxEl);

            forecastContainer.appendChild(dayContainer);
        }
    }

    apiFetch();
});
