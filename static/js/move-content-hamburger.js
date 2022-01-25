// ------------------------------------------------------------------
// Move content down when clicking the Bootstrap hamburguer
// button in a fixed navigation menu
// Copied from my own previous PP2_CI_WW Project

let hamburguerButton = document.getElementById("hamburger-button");
hamburguerButton.addEventListener("click", moveContent);
function moveContent () {
    if (document.getElementsByClassName("navbar-toggler")[0].getAttribute("aria-expanded") == "false") {
        let firstElementToMove = document.getElementById('body-main');
        firstElementToMove.style.marginTop = "250px";        
    } else {
        let firstElementToMove = document.getElementById('body-main');
        firstElementToMove.style.marginTop = "0px";
    }
}
// ------------------------------------------------------------------
