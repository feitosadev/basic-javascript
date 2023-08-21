for(let i = 0;i < 10;i++){
    console.log(i);
}

//console.log(i);


const functions = [];

for(let j =0;j < 10;j++){
    functions.push(function(){
        console.log(j)
    })
}

functions[3]();
functions[7]();
