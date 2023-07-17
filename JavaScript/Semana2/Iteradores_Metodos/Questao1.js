// Questão 1
// Crie um objeto pessoa com as propriedades nome, idade e hobbies (um array com três hobbies). 
//Use o iterador for … in para imprimir cada propriedade do objeto no console.

let pessoa = {
    nome: "Fulano",
    idade: 22,
    hobbies: ["ler", "assistir séries", "cozinhar"],
}

for (key in pessoa) {
    console.log(key + ": " + pessoa[key]);
}