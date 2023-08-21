//escopo de função, de bloco e global.

var numero = 5;
let numeroFora = 3;
{
    {
        let numero = 7
        console.log(numero);
        console.log(numeroFora);
    }
}

console.log(numero);
