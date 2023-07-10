// Questão 3
// Imagine que você é bixo e seu veterano pediu para que você cozinhar uma lazanha. Para
// te auxiliar no processo, você decide criar um programa no javascript. Dessa forma, você
// deve implementar essas seguintes funçôes:
// Uma função tempoDePreparação que recebe o numero de camadas da lazanha e retorna quanto
// tempo ela deve ficar no forno. (A cada camada é adicionado 10 minutos na preparação)
// Outra chamada preparar, que recebe como parametro o tempo que ele deveria ficar no forno
// e quanto tempo ela está no forno.
// Ela deve retornar o tempo restante se o tempo atual for menor que o desejado, um
// aviso "vai tomar pinga bixo" se o tempo atual for maior que o desejado e um aviso
// "está pronto" se o atual for igual ao desejado.

const tempoDePreparacao = (camadas) => { return camadas*10; }

function preparar(tempoTotal, tempoGasto){
    if(tempoGasto < tempoTotal){
        return tempoTotal-tempoGasto;
    }
    else if(tempoTotal < tempoGasto){
        return "vai tomar pinga bixo";
    }
    else{
        return "está pronto";
    }
}

console.log(preparar(tempoDePreparacao(2),10));
console.log(preparar(tempoDePreparacao(2),20));
console.log(preparar(tempoDePreparacao(1),30));