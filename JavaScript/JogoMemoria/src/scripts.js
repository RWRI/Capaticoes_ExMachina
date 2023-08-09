const cards = document.querySelectorAll(".memory-card");

const virar = function () {
    const front = this.querySelector(".front-face");
    const back = this.querySelector(".back-face");
    if (front.style.display === "flex") {        
        front.style.display = "none";
        back.style.display = "flex";
    }
    else {
        front.style.display = "flex";
        back.style.display = "none";
    }
}

cards.forEach(e => e.addEventListener('click', virar));