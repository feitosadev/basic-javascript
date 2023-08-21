//escopo de função e global

var numero = 4;
console.log('fora = ' + numero);
{
  {
    var numero = 7;
    console.log("dentro = " + numero);
  }
}

console.log('fora = ' + numero);


function imprimir(){
    var numero = 999;
    console.log('Imprimindo dentro da função ' + numero);
}

imprimir();

console.log('Imprindo fora da função ' + numero);