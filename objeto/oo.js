const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 380

const carro = {
    modelo: 'Uno',
    marca: 'Fiat',
    preco: 56000,
    proprietario: {
        nome: 'José',
        idade: 20,
        endereco: {
            logradouro: 'Rua Francisco',
            numero: 27,
            bairro: 'Vila',
            cidade: 'Camaragibe'
        }
    },
    condutores: [{
        nome: 'José',
        idade: 20,
    }, {
        nome: 'Alana',
        idade: 17
    }],
        calcularValorSeguro: function(){
                    
    }
}

carro.proprietario.endereco.numero = 23;
console.log(carro.proprietario.endereco.numero)

carro['proprietario']['endereco']['numero'] = 25;
console.log(carro['proprietario']['endereco']['numero']);

console.log(carro);

delete carro.proprietario.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);
console.log(carro.condutores.length);