// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros
    .filter(valor => (valor % 2 === 0)) // [ 50, 80, 2, 8, 22 ] pares
    .map(valor => valor * 2) // [ 100, 160, 4, 16, 44 ] dobro
    .reduce((acumulador, valor) => acumulador + valor); // 324 soma

console.log(numerosPares);