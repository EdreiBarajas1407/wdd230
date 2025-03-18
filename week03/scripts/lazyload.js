const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
const oLastModified = new Date(document.lastModified);
const formattedLastModified = oLastModified.toLocaleString();
document.getElementById("last-modified").innerHTML = formattedLastModified;