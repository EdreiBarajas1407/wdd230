export function toggleMenu() {
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("#nav");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        const menuImage = menuButton.textContent;
        if (menuImage == "☰") {
            menuButton.textContent = "✖";
        } else {
            menuButton.textContent = "☰";
        }
    })
};