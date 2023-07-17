// Questão 5
// Crie um objeto pessoa com as propriedades nome, idade e hobbies 
// (um array com três hobbies). Imprima no console o nome da pessoa e o segundo hobby.

let pessoa = {
    nome: "Fulano",
    idade: 22,
    hobbies: ["ler", "assistir séries", "cozinhar"],
}

console.log("O segundo hobby do " + pessoa.nome + " é " + pessoa.hobbies[1]);