// Wait for the page to be loaded
// Credit: Code Institute
$(document).ready(function() {
    $("#instructions-title > div > div > p").append(" - PAGE LOADED");
});


// Underline when selected in header navigation menu
$("#navbarNav > ul > li:nth-child(1) > a").css("text-decoration", "underline");


// Move content down when clicking the Bootstrap hamburguer
// button in a fixed navigation menu
// Copied from my own previous PP2_CI_WW Project
let hamburguerButton = document.getElementsByTagName("button")[0];
hamburguerButton.addEventListener("click", moveContent);
function moveContent () {
    if (document.getElementsByClassName("navbar-toggler")[0].getAttribute("aria-expanded") == "false") {
        let firstElementToMove = document.getElementById('body-content');
        firstElementToMove.style.marginTop = "250px";
    } else {
        let firstElementToMove = document.getElementById('body-content');
        firstElementToMove.style.marginTop = "75px";
    }
}