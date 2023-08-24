// Filter o array sem altera-lo

// Retorne os números maiores que 10
//               0   1  2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Recebe automaticamente o valor do elemento, o índice, valor do array completo
function callbackFilter(valor, indice) {
    console.log(valor, indice);
    return (valor > 10);
}

// Filter recebe uma callback function
// Sempre retorna um array com a mesma quantidade de elementos ou menos
// Deve retornar true ou false para definir se o número será filtrado
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termine com a letra A

const pessoas = [
    { nome: 'Ana', idade: 19 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 47 },
    { nome: 'Rosana', idade: 55 },
    { nome: 'Wallace', idade: 32 },
    { nome: 'Matheus', idade: 22 },
];

const pessoasComNomeGrande = pessoas.filter(objeto => objeto.nome.length > 4);
console.log(pessoasComNomeGrande);

const pessoas50Anos = pessoas.filter(objeto => objeto.idade > 50);
console.log(pessoas50Anos);

const pessoasFinalA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'));
console.log(pessoasFinalA);