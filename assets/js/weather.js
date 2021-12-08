// Move content down when clicking the Bootstrap hamburguer
// button in a fixed navigation menu
// Copied from my own previous PP2_CI_WW Project
let hamburguerButton = document.getElementsByTagName("button")[0];
hamburguerButton.addEventListener("click", moveContent);
function moveContent () {
    if (document.getElementsByClassName("navbar-toggler")[0].getAttribute("aria-expanded") == "false") {
        let firstElementToMove = document.getElementById('top-container');
        firstElementToMove.style.marginTop = "250px";
    } else {
        let firstElementToMove = document.getElementById('top-container');
        firstElementToMove.style.marginTop = "75px";
    }
}




const API_KEY = "ape"
const API_URL = "api.openweathermap.org"

//const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("log-in-button").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=ape`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }

}



//fetch("https://ci-swapi.herokuapp.com/api/")
//    .then(response => response.text()) // or .json()
//    .then(data => displayData(data))
//    .catch((e) => {
//        console.log("Error: ", e);
//})
//
//function displayData(data) {
//document.getElementById("content").innerText = data;
//}