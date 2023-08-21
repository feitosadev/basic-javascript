let arrayMetodos = ['q', 'w', 'e', 'r', 't'];

//remove o último elemento do array
arrayMetodos.pop();
console.log(arrayMetodos);

arrayMetodos.shift();
console.log(arrayMetodos);

arrayMetodos.unshift('p');
console.log(arrayMetodos);

//retorna um novo array apartir do indice indicado e até um antes do número limite indicado
const novoArraymetodos = arrayMetodos.slice(2);
console.log(novoArraymetodos);

const novoArrayMetodos2 = arrayMetodos.slice(1, 4);
console.log(novoArrayMetodos2);