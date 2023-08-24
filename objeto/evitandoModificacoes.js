//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Lapis', preco: 2.99, tag: 'Promocao'
})

produto.nome = 'Borracha';
produto.descricao = 'Borracha branca';
delete produto.tag;
console.log(produto);

produto.tag = 'Baixou preco';

console.log(produto);

//Object.seal
const pessoa = {nome: 'José', idade: 42};
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Cavalcanti';
delete pessoa.nome;

console.log(pessoa);

//Object.freeze = selado + valores constantes
