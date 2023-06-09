// Primitivos (imutáveis) - string, number, boolean, undefined, null, BigInt, Symbol

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'X';
console.log(a, b);

// Referência (mutável) - array, object, function

let c = [1, 2, 3];
// let d = c;
let d = [...c]; // cria uma cópia de C
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);
console.log(e);

d.pop();
console.log(c, d);
console.log(e);

// O mesmo ocorre para objetos
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Ferreira'
};

// const outraPessoa = pessoa;
const outraPessoa = {...pessoa}; //Cria uma cópia de pessoa

pessoa.nome = 'João';
console.log(outraPessoa);