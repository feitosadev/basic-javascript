const notas = [9.8, 7.1, 5.9, 6.7, 7.7, 8.3]

//sem callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1);

//com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

const notasMenorQue7 = nota => nota < 7;
const notasBaixas4 = notas.filter(nota => nota < 7)
console.log(notasBaixas4);