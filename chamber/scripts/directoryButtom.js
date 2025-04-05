const menuButton = document.querySelector('.toggle-view');
const membersContainer = document.querySelector('.members-container');

menuButton.addEventListener('click', () => {

    membersContainer.classList.toggle('card');
    membersContainer.classList.toggle('list');

    if (menuButton.textContent == "≣ List view") {
        menuButton.textContent = "𓃑 Grid view";
    }
    else {
        menuButton.textContent = "≣ List view";
    }
});