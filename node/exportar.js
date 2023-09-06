console.log(module.exports === this);

console.log(module.exports === exports);

//a b e c serão visíveis fora do arquivo
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
    nome: 'Testando'
}

console.log(module.exports);

module.exports = {publico: true}
console.log(exports)