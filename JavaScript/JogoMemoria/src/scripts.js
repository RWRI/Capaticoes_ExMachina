const cards = document.querySelectorAll(".memory-card");
let parEscolhido = [null, null];
let ordem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const desvirar = function () {
    parEscolhido.forEach(card => {
        const front = card.querySelector(".front-face");
        const back = card.querySelector(".back-face");
        front.style.display = "none";
        back.style.display = "flex";
    });
    parEscolhido = [null, null];
}

function checkPar() {
    const card1 = parEscolhido[0].querySelector(".front-face").alt;
    const card2 = parEscolhido[1].querySelector(".front-face").alt;
    if (card1 === card2) {
        parEscolhido = [null, null];
    } else {
        setTimeout(desvirar, 2000);
    }
}

const virar = function () {
    if (parEscolhido[1]) return;
    const front = this.querySelector(".front-face");
    const back = this.querySelector(".back-face");
    if (back.style.display === "" || back.style.display === "flex") {
        front.style.display = "flex";
        back.style.display = "none";

        if (!parEscolhido[0]) {
            parEscolhido[0] = this;
        } else if (!parEscolhido[1]) {
            parEscolhido[1] = this;
            checkPar();
        }
    }
}

cards.forEach(e => e.addEventListener('click', virar));

const shuffleCards = function () {
    for (let i = ordem.length - 1; i > 0; i--) { //algoritmo de Fisher-Yates
        const j = Math.floor(Math.random() * (i + 1));
        [ordem[i], ordem[j]] = [ordem[j], ordem[i]];
    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.order = ordem[i];
    }
};


const jogar = function(){
    const jogo = document.querySelector(".memory-game");
    jogo.style.display = "flex";
    const inicio = document.querySelector(".inicio");
    inicio.style.display = "none";
    shuffleCards();
}

const botao = document.getElementById("botao");
botao.addEventListener("click",jogar);
