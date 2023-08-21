// Função em JS é First-Class Object (Citizens)
//Higher Order Function

function fun1(){
    console.log(1 + 1);
}

console.log(fun1())

const fun2 = function(){}

const array = [function (a, b) {return a + b}, fun1, fun2]

console.log(array[0](7, 8));

const obj = {}
obj.falar = function() {return 'E aí!'}

function run(fun){
    fun();
}

run(function(){console.log('Carregando...')});

function somar(a, b){
    return function (c){
        console.log(a + b + c);
    }
}

somar(7, 8)(5);

const chamandoDeOutraForma = somar(9, 5);
chamandoDeOutraForma(7);