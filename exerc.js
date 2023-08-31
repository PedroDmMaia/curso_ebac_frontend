const alunos = [
    { nome: '', nota: '' },
    { nome: '', nota: '' }
];

const alunosComNota = alunos.map(Aluno => {
    nomeAluno = prompt('digite o nome do aluno');
    notaAluno = prompt(`qual a nota do(a) ${nomeAluno}`);

    return {
        nome: nomeAluno,
        nota: notaAluno
    }
}).filter(Aluno => {
    if (Aluno.nota >= 6) {
        return Aluno;
    }
});

console.log(alunosComNota)