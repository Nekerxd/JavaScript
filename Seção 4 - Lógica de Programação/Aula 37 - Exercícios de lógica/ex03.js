// Escreva uma função que recebe um número e retorne o seguinte:
// Numero é divisível por 3 = Fizz
// Numero é divisível por 5 = Buzz
// Numero é divisível por 3 e 5 = FizzBuzz
// Numero NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

const fizzBuzz = (num) => {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
    if (num % 3 === 0) return "Fizz"
    if (num % 5 === 0) return "Buzz"
    return num
}

console.log('abc', fizzBuzz('abc'));

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}