const nome01 = 'Matheus'
const sobrenome01 = 'Ferreira'
const idade01 = 22;

const nome02 = 'Luiz'
const sobrenome02 = 'Miranda'
const idade02 = 25;

const pessoa01 = {
    nome: 'Matheus',
    sobrenome: 'Ferreira',
    idade: 22,

    seApresente() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos!`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa01.seApresente();
pessoa01.incrementaIdade();
pessoa01.seApresente();

// Factory
function criaPessoa(nome, sobrenome, idade) {
    return {
        // nome: nome,
        nome, 
        // sobrenome: sobrenome,
        sobrenome, 
        // idade: idade
        idade
    };
};

const pessoa1 = criaPessoa('Matheus', 'Ferreira', 22)
const pessoa2 = criaPessoa('Luiz', 'Miranda', 32)

console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)