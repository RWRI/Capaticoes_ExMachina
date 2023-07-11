// Questão 2
// Faça uma função que demonstre o perímetro e a área de um quadrado, de um triângulo retângulo e 
// de uma circunferência de acordo com a escolha do usuário.

function quadrado(lado){
    console.log("\nQuadrado:");
    console.log("Area:"+(lado*lado));
    console.log("Perimetro:"+(4*lado))
}

function triangulo(lado1, lado2, lado3){
    console.log("\nTriângulo:");
    s = (lado1+lado2+lado3)/2;
    console.log("Area:"+(Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3))));
    console.log("Perimetro:"+(s*2));
}

function circunferencia(raio){
    console.log("\nCircunferência:");
    console.log("Area:"+(Math.PI*raio*raio));
    console.log("Perimetro:"+(2*Math.PI*raio))
}

const formaGeometrica = (escolha) => {
    switch(escolha){
        case 1: quadrado(2); break;
        case 2: triangulo(3,4,5); break;
        case 3: circunferencia(6); break;
        default: quadrado(1); break;
    }
}

formaGeometrica(1);
formaGeometrica(3);
formaGeometrica(2);
formaGeometrica(99);