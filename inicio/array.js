const valores = [9.3, 4.7, 3.8, 7.7, 'José']

console.log(valores[2], valores[4])

console.log(valores.length)

delete valores[1];

valores.push({id: 3}, true, 6, 'Carlos');
console.log('Impressão pós push ' + valores)

//retira o último valor do array
console.log(valores.pop());

console.log(valores.push());

console.log(typeof valores);

