const cards = document.querySelectorAll(".memory-card");

const virar = function () {
    const front = this.querySelector(".front-face");
    if (front.style.display === "") {
        front.style.display = "flex";
        const back = this.querySelector(".back-face");
        back.style.display = "none";
    }
    else {
        const front = this.querySelector(".front-face");
        front.style.display = "none";
        const back = this.querySelector(".back-face");
        back.style.display = "flex";
    }
}

cards.forEach(e => e.addEventListener('click', virar));