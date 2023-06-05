// Mostrar nome, idade, peso, altura e imc

const nome = 'Matheus';
const sobrenome = 'Ferreira';
const idade = 22;
const peso = 64;
const alturaEmM = 1.83;
let indiceMassaCorporal;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento;
let ano = new Date()
anoNascimento = ano.getFullYear() - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg
tem ${alturaEmM}m de altura e seu IMC é de ${indiceMassaCorporal}
${nome} ${sobrenome} nasceu em ${anoNascimento}`);
