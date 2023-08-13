// Constructor functions retorna objetos
// Função construtora deve ser criada com letra maiúscula

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`Olá ${nome}, eu sou um método.`);
    };
}

const p1 = new Pessoa('Matheus', 'Ferreira');
const p2 = new Pessoa('João', 'Silva');

console.log(p1.nome);
console.log(p2.nome);