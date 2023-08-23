const filhas = ["Ana", "Maria"];
const filhos = ["Ano", "Mario"];
const total = filhas.concat(filhos);

console.log(total);

const todosMaisUm = filhas.concat(filhos, "José");

console.log(todosMaisUm);

//os arrays origiansi não são mexidos, é criado um novo array
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));

console.log([].concat([1, 2], [3, 4], 5, filhos, [[6, 7]], filhas, todosMaisUm));