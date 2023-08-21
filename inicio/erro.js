function tratarErroELancar(e){
    //throw new Error('...');
    throw 10;
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!!!')
    } catch (e) {
        tratarErroELancar(e);
    }finally {
        console.log('Acabou.')
    }
    
}

const obj = {nome: "José"}

imprimirNomeGritado(obj);