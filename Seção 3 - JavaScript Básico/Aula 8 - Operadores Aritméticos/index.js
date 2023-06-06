/*  Operadores Aritméticos 
    + Adição / Concatenação
    - Subtração
    / Divisão
    * Multiplicação
    ** Potenciação
    % Resto da divisão
*/

let num1 = 5;
let num2 = 10;
let num3 = '15';
console.log(num1 + num2);   // Adição
console.log(num1 + num3);   // Concatenãção
console.log(num2 - num1);   // Subtração
console.log(num2 / num1);   // Divisão
console.log(num2 * num1);   // Multiplicação
console.log(num2 ** num1);  // Potenciação
console.log(num1 % num2);   // Resto da divisão
console.log(num1 + num2 * num3); // Ordem de precedência (), **, *, /, %, +, -

let contador = 1;
console.log(contador++); // Pós incremento
console.log(--contador); // Pré decremento

contador *= 2; // Operadores de atribuição **=, *=, /=, %=, +=, -=
console.log(contador)

// Conversão de números
num3 = parseInt('5')
num3 = parseFloat('5.2')
num3 = Number('5.2')
