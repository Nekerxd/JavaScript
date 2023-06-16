// let a = 'A';
// let c = 'B';
// let b = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];


//... rest ou spread operator (depende do contexto)
const [um, dois, , , cinco, ...resto] = numeros;

console.log(um, dois, cinco);

const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [, [, , seis]] = arrays;

console.log(seis);