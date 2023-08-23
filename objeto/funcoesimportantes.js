const pessoa = {
    nome: 'José',
    idade: 42,
    peso: 62
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

console.log('');

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
});

console.log('');

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '04/01/1981'
})

console.log(Object.entries(pessoa));

const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a:4};
const obj = Object.assign(dest, o1, o2);

console.log(obj);