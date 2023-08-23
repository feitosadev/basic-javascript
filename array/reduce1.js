const alunos = [
    {nome: "José", nota: 9.77, bolsista: true},
    {nome: "Carlos", nota: 8.77, bolsista: true},
    {nome: "Cavalcanti", nota: 6.77, bolsista: false},
    {nome: "Feitosa", nota: 5.77, bolsista: false}
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual;
})

console.log(resultado)

//com valor inicial
const resultado1 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual;
}, 10)