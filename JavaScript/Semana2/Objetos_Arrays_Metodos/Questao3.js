// Questão 3
// Crie um objeto Date com a data atual. Imprima no console o mês e o ano.

let hoje = new Date();

meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto", "Setembro","Outubro","Novembro","Dezembro"];

console.log("Hoje eh um dia de "+meses[hoje.getMonth()]+" de "+hoje.getFullYear());