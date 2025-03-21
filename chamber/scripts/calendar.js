let currentDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("days-container");
    daysContainer.innerHTML = "";

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    monthYear.textContent = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(currentDate);

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= lastDate; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;

        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add("today");
        }
        daysContainer.appendChild(dayDiv);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();