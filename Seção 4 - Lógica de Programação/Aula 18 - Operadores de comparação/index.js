/*
    Operadores de comparação
    >   maior que
    >=  maior que ou igual a
    <   menor que
    <=  menor que ou igual a
    ==  igualdade (valor) (Não recomendado)
    === igualdade estrita (valor e tipo)
    !=  diferente (valor) (Não recomendado)
    !== diferente estrito (valor e tipo)
*/

console.log(10 > 5);    // True
console.log(10 >= 10);  // True
console.log(10 < 11);   // True
console.log(10 <= 8);   // False

let num1 = 10;    
let num2 = '10';

console.log(num1 == num2);  // True
console.log(num1 === num2); // False
console.log(num1 != num2);  // False
console.log(num1 !== num2); // True