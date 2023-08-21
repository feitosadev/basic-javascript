
const obj1 = {}

obj1.nome = 'lápis';
console.log(obj1);
console.log(obj1.nome);

function Obj(nome, preco){
    this.nome = nome,
    this.preco = preco
}

const obj2 = new Obj('Celular', 3999.99);
const obj3 = new Obj('Iphone', 6999.99);

console.log(obj2.nome, obj2.preco);
console.log(obj3.nome, obj3.preco);