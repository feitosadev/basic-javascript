function resultadoNotaAluno(media){
    if(media >= 7)
        console.log('Aluno aprovado por média.');
    else if(media < 7 && media > 4)
        console.log('Aluno em recuperação.');
    else
        console.log('Aluno reprovado.');
}

resultadoNotaAluno(3);
// , null, undefined, NaN, '', 0
//-1, 1, ' ', '?', [], [1,2], {}