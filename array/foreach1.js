const aprovados = ['José', 'Carlos', 'Cavalcanti', 'Feitosa', 'Junior']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome));
console.log();

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);