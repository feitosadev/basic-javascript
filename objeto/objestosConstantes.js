
const pessoa = { nome: 'José'};
pessoa.nome = 'Alberto';

console.log(pessoa);
console.log(pessoa.nome);

Object.freeze(pessoa);

pessoa.nome = 'João';
pessoa.endereco = 'Rua Outra';
delete pessoa;

console.log(pessoa);

const objetoPessoaConstante = Object.freeze({nome: 'Carlos'})

