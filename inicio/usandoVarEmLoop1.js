for(var i = 0;i < 10; i++){
    console.log(i)
}

const functions = [];

for(var j =0;j < 10;j++){
    functions.push(function(){
        console.log(j)
    })
}

functions[3]();
functions[7]();