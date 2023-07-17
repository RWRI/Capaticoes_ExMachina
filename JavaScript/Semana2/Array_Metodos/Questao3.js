// Questão 3
// Crie um array com os números de 1 a 10. Use o método filter para 
//criar um novo array apenas com os números pares do array original. Imprima o novo array no console.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = array.filter(elem => elem % 2 == 0);

console.log("pares: [" + pares + "]");