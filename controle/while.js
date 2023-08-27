function getInteiroALeatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroALeatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`)
}

