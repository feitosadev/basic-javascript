const escola = [{
    nome: 'Turma J01',
    alunos: [{
        nome: 'José',
        nota: 9.77
    },{
        nome: 'Cavalcanti',
        nota: 8.77    
    }]
},{
    nome:'Turma J02',
    alunos: [{
        nome: 'Cavalcanti',
        nota: 7.77
    },{
        nome: 'Feitosa',
        nota: 6.77
    }]
}]

const getNotaAluno = aluno => aluno.nota;
const getNotaTurma = turma => turma.alunos.map(getNotaAluno);

const notas1 = escola.map(getNotaTurma);

console.log(notas1);

console.log([].concat([ 9.77, 8.77 ], [ 7.77, 6.77 ]));

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma);
console.log(notas2);