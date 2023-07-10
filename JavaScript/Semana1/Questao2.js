// Questão 2
// Faça uma função que demonstre o perímetro e a área de um quadrado, de um triângulo retângulo e 
// de uma circunferência de acordo com a escolha do usuário.

function quadrado(lado){
    console.log("\nQuadrado:");
    console.log("Area:"+(lado*lado));
    console.log("Perimetro:"+(4*lado))
}

function triangulo(base, altura){
    console.log("\nTriângulo:");
    console.log("Area:"+(base*altura/2));
    console.log("Perimetro:"+(Math.sqrt(base*base+altura*altura)*2+base));
}

function circunferencia(raio){
    console.log("\nCircunferência:");
    console.log("Area:"+(Math.PI*raio*raio));
    console.log("Perimetro:"+(2*Math.PI*raio))
}

const formaGeometrica = (n) => {
    switch(n){
        case 1: quadrado(2); break;
        case 2: triangulo(2,3); break;
        case 3: circunferencia(4); break;
        default: quadrado(1); break;
    }
}

formaGeometrica(1);
formaGeometrica(3);
formaGeometrica(2);
formaGeometrica(99);