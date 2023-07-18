// Questão 1
// Crie um objeto pessoa com as propriedades nome, idade e hobbies (um array com três hobbies). 
//Adicione uma nova propriedade email ao objeto pessoa. Imprima o objeto no console.

let pessoa = {
    nome: "Fulano",
    idade: 22,
    hobbies: ["ler", "assistir séries", "cozinhar"],
}

pessoa.email = "teste@email.com.br";

console.log(pessoa);