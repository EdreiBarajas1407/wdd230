document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString();
    document.getElementById('last-modified').textContent = formattedDate;
});