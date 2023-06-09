function saudacao(nome) {
    return `Olá ${nome}!`;
}

const variavel = saudacao('Matheus');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(4, 5));

// Função anônima

const raiz = function (n) {return n ** 0.5};

console.log(raiz(9))
console.log(raiz(49))

// Arrow function

const quadrado = (n) => n ** 2;

console.log(quadrado(6))
console.log(quadrado(8))