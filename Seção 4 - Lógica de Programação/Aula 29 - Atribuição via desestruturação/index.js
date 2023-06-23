const pessoa = {
    nome: "Matheus",
    sobrenome: "Ferreira",
    idade: 22,
    endereco: {
        rua: 'Rua das Margaridas',
        numero: 254
    }
};

const { nome: teste, sobrenome = '', idade, endereco: {rua, numero} } = pessoa;
console.log(teste, sobrenome, idade, rua, numero)