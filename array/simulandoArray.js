const quaseArray = {0: 'José', 1: 'Carlos', 2: 'Cavalcanti'}
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString',{
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['José', 'Carlos', 'Cavalcanti']
console.log(quaseArray.toString(), meuArray);