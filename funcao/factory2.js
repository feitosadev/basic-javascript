function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
const produto = criarProduto('Notebook', 3999.99)
console.log(produto);