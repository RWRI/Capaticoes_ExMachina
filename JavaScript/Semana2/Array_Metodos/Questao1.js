// Questão 1
// Crie um array com os números de 1 a 10. Use o método forEach para imprimir 
//cada número do array no console.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(
    (elem, index) => { console.log("array[" + index + "] = " + elem); }
)