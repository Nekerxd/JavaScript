// Funções definidas com a palavra function possuem uma variável especial que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e) {
    let total = 0;
    
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c, d, e);
}

funcao(3, 7, 9, 3);

function funcaoSoma(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcaoSoma(2, undefined, 20);


function funcaoDesestrut({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcaoDesestrut({nome: 'Matheus', sobrenome: 'Ferreira', idade: 23});

function conta(operador, acumulador, ...numeros) {
    for( let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(operador, acumulador, numeros);
}

conta('+', 0, [20, 30, 40, 50]);