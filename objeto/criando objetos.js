const obj1 = {}
console.log(obj1);

console.log(typeof Object, typeof new Object);

const obj2 = new Object;
console.log(obj2);

function Produto (nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const produto1 = new Produto('lápis', 3.99, 0.2);
const produto2 = new Produto('caneta', 2.99, 0.15);

console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto());

function criarFuncionario(nome, salarioBase, faltas){
    return {
    nome,
    salarioBase,
    faltas,
    getSalario(){
        return (salarioBase) / 30 * (30 - faltas)
    }
    }
}

const funcionario1 = criarFuncionario('José', 2999.99, 3);
const funcionario2 = criarFuncionario('Pedro', 1999.99, 4);
console.log(funcionario1.getSalario(), funcionario2.getSalario());


const filha  = Object.create(null);
filha.nome = 'Maria';


const fromJSON = JSON.parse('{"info": "Texto JSON..."}')
console.log(fromJSON.info)