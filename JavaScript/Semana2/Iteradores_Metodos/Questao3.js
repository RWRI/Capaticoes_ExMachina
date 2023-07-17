// Questão 3
// Crie um objeto pessoa com as propriedades nome, idade e hobbies (um array com três hobbies). 
//Use o método forEach para imprimir cada hobby da pessoa no console.

let pessoa = {
    nome: "Fulano",
    idade: 22,
    hobbies: ["ler", "assistir séries", "cozinhar"],
}

pessoa.hobbies.forEach(hobby => console.log(hobby));