// String, Number, undefined, null, Boolean
const nome1 = 'Matheus' // String
const nome2 = "João" // String
const nome3 = `Maria` // String

const num1 = 10; // Number
const num2 = 5.67; // Number

let nomeAluno; // undefined -> não aponta para nenhum local na memória
let sobrenomeAluno = null; // Nulo -> não aponta para nenhum local na memória
const aprovado = true; // Boolean -> True ou False (lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno);

// Valores por referência
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);