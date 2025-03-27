const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("values");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}