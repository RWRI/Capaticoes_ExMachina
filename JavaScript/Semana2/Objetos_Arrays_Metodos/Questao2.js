// Questão 2
// Crie um objeto pessoa com as propriedades nome, idade e hobbies (um array com três hobbies). 
//Delete a propriedade hobbies do objeto pessoa. Imprima o objeto no console.

let pessoa = {
    nome: "Fulano",
    idade: 22,
    hobbies: ["ler", "assistir séries", "cozinhar"],
}

delete pessoa.hobbies;

console.log(pessoa);