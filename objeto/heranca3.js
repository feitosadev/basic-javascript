const pai = {nome: 'José', corCabelo: 'preto'};
const filha1 = Object.create(pai);
filha1.nome = 'Alana';

console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Kerolyn', writable: false, enumerable: true}
})

console.log(filha2)
console.log(filha2.nome);

filha2.nome = 'Sales';

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

for(let key in filha2){
    console.log(key);
}

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}