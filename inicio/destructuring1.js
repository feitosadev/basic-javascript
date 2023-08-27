const pessoa = {
    nome: 'José',
    idade: 20,
    endereco:{
        logradouro: 'Rua Francisco',
        numero: 1
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n ,i);

console.log(pessoa);