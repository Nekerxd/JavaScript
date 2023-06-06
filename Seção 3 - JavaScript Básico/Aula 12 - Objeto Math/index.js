let num1 = 7.39448
let num2 = Math.floor(num1); // Arredonda para baixo
let num3 = Math.ceil(num1); //  Arredonda para cima
let num4 = Math.round(num1); // Arredonda para o mais próximo
console.log(num2, num3, num4);

console.log(Math.max(1,2,29,7,34,1,-50,9));
console.log(Math.min(1,2,29,7,34,1,-50,9));

const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);

num1 = 9;
console.log(num1 ** (1/2));

console.log(100 / 0); // Infinity é avaliado como True