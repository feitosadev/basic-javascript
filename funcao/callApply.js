const { get } = require("lodash");

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Celular',
    preco: 3999.99,
    desc: 0.15,
    getPreco
}

global.preco = 200;
global.desc = 0.15

console.log(getPreco());
console.log(produto.getPreco());


const carro = {preco: 39999.99, desc: 0.12};
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.15, '$'))
console.log(getPreco.apply(carro, [0.15, '$']))