/* Não podemos criar constante com palavras reservadas
Constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com um número
Não podem contem espaços ou traços
Utilizamos camelCase
As constantes são case-sensitive
Não podemos modificar o valor de uma constante
NÃO UTILIZA VAR, UTILIZE CONST. */

const nome = 'João';

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
let resultadoDuplicado = resultado * 3;
resultadoDuplicado = resultadoDuplicado + 9;

console.log(resultadoDuplicado);

console.log(typeof(primeiroNumero));