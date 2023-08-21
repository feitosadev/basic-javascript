const numeros = [1, 2, 3, 4, 5, 6, 7, ,8 ,9, 10];

for(num in numeros){
    if(num == 5){
        break;
    }
    console.log(`${num} = ${numeros[num]}`)
}

console.log('')

for(numx in numeros){
    if(numx == 5){
        continue;
    }
    console.log(`${numx} = ${numeros[numx]}`)
}

externo:
for(z in numeros){
    for(w in numeros){
        if(z == 2 && w == 3) break externo
            console.log(`Par ${z}, ${w}`)
    }
}