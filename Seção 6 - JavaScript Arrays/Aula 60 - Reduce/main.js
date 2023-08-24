// Reduce é mais utilizado para reduzir uma lista a um único elemento
// É possível utiliza-lo como um Filter ou Map, mas não é recomendado

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Recebe um acumulador, valor, indice, array e um valor inicial para o acumulador (opcional, caso não definido será o primeiro elemento)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);

const numerosDobrados = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(numerosDobrados);




// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Maria', idade: 47 },
    { nome: 'Ana', idade: 19 },
    { nome: 'Rosana', idade: 55 },
    { nome: 'Wallace', idade: 32 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Matheus', idade: 22 },
];

// O acumulador será o primeiro elemento e o valor o segundo
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);