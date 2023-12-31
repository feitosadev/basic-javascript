Array.prototype.map2 = function(callback){
    const newArray = [];
    for(let i =0; i < this.length;i++){
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.99}',
    '{"nome": "Caderno", "preco": 11.99}',
    '{"nome": "Lapis", "preco": 2.99}',
    '{"nome": "Caneta", "preco": 4.99}'
]

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);
