const cards = document.querySelectorAll(".memory-card");
let parEscolhido = [null, null];

const desvirar = function(){
    parEscolhido.forEach( card => {
        const front = card.querySelector(".front-face");
        const back = card.querySelector(".back-face");
        front.style.display = "none";
        back.style.display = "flex";
    });
    parEscolhido = [null, null];
}

function checkPar(){
    const card1 = parEscolhido[0].querySelector(".front-face").alt;
    const card2 = parEscolhido[1].querySelector(".front-face").alt;
    if(card1 === card2){
        parEscolhido = [null, null];
    }else{
        setTimeout(desvirar,2000);
    }
}

const virar = function () {
    if(parEscolhido[1]) return;
    const front = this.querySelector(".front-face");
    const back = this.querySelector(".back-face");
    if (back.style.display === "" || back.style.display === "flex") { 
        front.style.display = "flex";
        back.style.display = "none";

        if(!parEscolhido[0]){
            parEscolhido[0] = this;
        }else if(!parEscolhido[1]){
            parEscolhido[1] = this;
            checkPar();
        }
    }
}

cards.forEach(e => e.addEventListener('click', virar));