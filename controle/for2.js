const notas = [4.6, 9.3, 8.4, 6.9]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'José',
    idade: 20,
    peso: 62
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}