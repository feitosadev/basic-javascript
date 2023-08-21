console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('José', 'Carlos', 'Cavalcanti', 'Feitosa', 'Junior');
console.log(aprovados)

aprovador = ['José', 'Carlos', 'Cavalcanti', 'Feitosa', 'Junior'];
console.log(aprovados);

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);
console.log(aprovados[4]);
console.log(aprovados[5]);//fora do escopo do array

//substitui nas respectivas posições, caso tenha algum valor.
aprovados[3] = 'Alana';
aprovados[1] = 'Aline';

console.log(aprovados);

//push adiciona no final do array.
aprovados.push('Kerolyn')
console.log(aprovados);

aprovados[8] = 'Sales';
console.log(aprovados);

console.log(aprovados[7] === undefined);

aprovados.sort();
console.log(aprovados);

delete aprovados[1];

//remove e/ou adiciona elementos
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2');
console.log(aprovados);

const arrayTeste = ['a', 'b', 'c', 'd'];
arrayTeste.splice(1, 0, 'e', 'f');
console.log(arrayTeste);