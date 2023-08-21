let palavra = 'Cavalcanti';

console.log(palavra.charAt(3));
console.log(palavra.charCodeAt(7));
console.log(palavra.indexOf('a'));

console.log(palavra.substring(4));
console.log(palavra.substring(1, 6));

console.log(palavra.concat('!'));
console.log('José Carlos '.concat(palavra).concat('!'));
console.log('José Carlos ' + palavra + '!');

console.log(palavra.replace('a', 'o'));
console.log(palavra.replace(/\d/, 't'));
console.log(palavra.replace(/\w/, '7'));
console.log(palavra.replace(/\w/g, '7'));

console.log('José, Carlos, Cavalcanti'.split(','));
console.log(palavra.split('l'));
console.log('José, Carlos, Cavalcanti'.split(' '));

console.log('Slice: ' + palavra.slice(2));
console.log('Slice: ' + palavra.slice(3, 5));

const palavra2 = 'José';
const concatenacao = 'Hello, ' + palavra2 + '!';
const template = `Ola, ${palavra2}!`

console.log(concatenacao, template);
console.log(template);

console.log(`1 + 1 = ${1 +1}`)

const up = texto => texto.toUpperCase();

console.log((`Ei... ${up('cuidado')}`))