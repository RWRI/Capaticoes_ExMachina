// Questão 1
// Crie uma função que retorne até o n número da sequência de Fibonacci.

function fibonacci(n){
    let  r = "1";
    if(n >= 2)
        r += " - 1";
    let f1 = 1, f2 = 2;
    for(let i = 2; i < n;i++){
        r += " - "+f2;
        let aux = f1;
        f1 = f2;
        f2 = f2 + aux;
    }
    return r;
}

console.log(fibonacci(10));