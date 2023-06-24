const frutas = ["Pêra", "Uva", "Maçã", "Banana", "Morango", "Maracujá"];

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Ferreira',
    idade: 22
};

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}