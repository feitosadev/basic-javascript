function imprimirSoma(a, b){
    console.log(a + b);
}

function imprimirSubtracao(a, b){
    console.log('A subtração dos dois número é ' + (a - b));
}

function somar(a, b){
    return a + b;
}

function somarOutraVez(a, b = 2){
    return a + b;
}

imprimirSoma(5, 7);
imprimirSubtracao(5, 7);

console.log(somar(7, 9));
console.log(somar());

console.log('Função somar outra vez: ' + somarOutraVez(7));
