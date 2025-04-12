const today = new Date().getDay();
if (today >= 1 && today <= 3) {
    document.querySelector('#event-banner').style.display = 'block';
}

document.querySelector('#close-banner').addEventListener('click', () => {
    document.querySelector('#event-banner').style.display = 'none';
});