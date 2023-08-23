const produtos = [
    {nome: 'Notebook', preco: 3999.99, fragil: true},
    {nome: 'IPhone', preco: 4999.99, fragil: true},
    {nome: 'Copo de vidro', preco: 15.99, fragil: true},
    {nome: 'Copo de plástico', preco: 6.99, fragil: false}
]

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(function(p){
    return p.preco > 3000
}))

console.log(produtos.filter(caro).filter(fragil));