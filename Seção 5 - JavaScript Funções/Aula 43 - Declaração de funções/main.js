// Declaração de função (Function hoisting)

falaOi();
function falaOi() {
    console.log('Oi');
};

// First-class objects (Objetos de primeira classe) tratados como um dado
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
// souUmDado();

function executaFuncao(funcao) {
    console.log('Função sendo executada:');
    funcao();
};

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando');
    }
};

obj.falar();