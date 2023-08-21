const carrinho = [
    '{"nome": "Borracha", "preco": 3.99}',
    '{"nome": "Caderno", "preco": 11.99}',
    '{"nome": "Lapis", "preco": 2.99}',
    '{"nome": "Caneta", "preco": 4.99}'
]

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);