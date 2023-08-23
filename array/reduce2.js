const alunos = [
    {nome: "José", nota: 9.77, bolsista: true},
    {nome: "Carlos", nota: 8.77, bolsista: true},
    {nome: "Cavalcanti", nota: 6.77, bolsista: false},
    {nome: "Feitosa", nota: 5.77, bolsista: false}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));
 
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));