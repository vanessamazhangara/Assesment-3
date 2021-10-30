const favColorBtn = document.querySelector("#color")
const favPlaceBtn = document.querySelector("#place")
const favRitualBtn = document.querySelector("#ritual")

function myFavColor () {
    alert('Purple!');
}
function myFavPlace () {
    alert('New York!');
}
function myFavRitual () {
    alert('wine and candles!');
}

favColorBtn.addEventListener('click', myFavColor);
favPlaceBtn.addEventListener('click', myFavPlace);
favRitualBtn.addEventListener('click', myFavRitual);