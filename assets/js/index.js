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