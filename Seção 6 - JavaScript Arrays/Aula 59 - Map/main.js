// Map recebe uma callback function
// Recebe automaticamente o valor do elemento, o índice, valor do array completo
// Altera os valores e um array com a mesma quantidade de elementos
// Retorna o valor alterado


// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(valor => valor*2);

console.log(numerosDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remove apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Ana', idade: 19 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 47 },
    { nome: 'Rosana', idade: 55 },
    { nome: 'Wallace', idade: 32 },
    { nome: 'Matheus', idade: 22 },
];

// Para não alterar o array original, devo criar outro objeto

const nomes = pessoas.map(objeto => objeto.nome);
console.log(nomes);

const idades = pessoas.map(objeto => ({ idade: objeto.idade}));
console.log(idades);

const idPessoas = pessoas.map((objeto, indice) => {
    const newObj = { ...objeto };
    newObj.id = indice;
    return newObj;
});

console.log(idPessoas);

console.log(pessoas);