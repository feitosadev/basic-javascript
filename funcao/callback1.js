const fabricantes = ["Mercedez", "Audi", "BMW"]

function imprimirFabricantes(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimirFabricantes);

fabricantes.forEach(function(fabricante){console.log(fabricante)});

fabricantes.forEach(fabricante => console.log(fabricante));