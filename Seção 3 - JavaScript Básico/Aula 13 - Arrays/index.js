// É possível inserir qualquer tipo de dado, porém não é uma boa prática
const alunos = ['Luiz', 'João', 'Maria'];
// console.log(alunos)
// console.log(alunos[0]);

alunos[0] = 'Matheus';
// Caso não exista, será adicionado ao array
alunos[3] = 'Luiza';
// Inserir ao final
alunos[alunos.length] = 'Fabio'
alunos.push('Luan')
// Inserir ao início
alunos.unshift('Claudia');
console.log(alunos);
// // Remover elementos do fim
// const removidoFim = alunos.pop();
// console.log(removidoFim);
// console.log(alunos);
// // Remover elementos do início
// const removidoInicio = alunos.shift();
// console.log(removidoInicio);
// console.log(alunos)
// // Deletar conteúdo sem alterar índices
// delete alunos[2];
// console.log(alunos);

// Fatiamento de arrays
console.log(alunos.slice(0,-3))
// Arrays são do tipo objeto
console.log(typeof alunos);