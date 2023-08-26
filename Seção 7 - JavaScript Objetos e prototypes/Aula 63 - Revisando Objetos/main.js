// Valores Literais (todos eles têm construtores)
// Strings => '' "" `` // Arrays => [] // Number => 1234 // Objeto => {}

// Um objeto é formado por um par chave e valor
const pessoa = {
    // corpo do objeto
    nome: 'Matheus',
    // chave: 'Valor'
    sobrenome: 'Ferreira',
}

// Acessos
// console.log(pessoa.nome);
// console.log(pessoa['nome']);


// Construtores
// Array => new Array(); // Objeto => new Object();

const pessoa1 = new Object();

pessoa1.nome = 'Matheus';
pessoa1.sobrenome = 'Ferreira';
pessoa1.idade = 22;

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// Apagar chaves
delete pessoa1.sobrenome;

// Objetos podem conter métodos

pessoa1.falarNome = function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
}

// pessoa1.falarNome();

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//     console.log(chave);
// }

// Factory functions / Constructor functions / Classes

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Matheus', 'Ferreira', 22)
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    Object.freeze(this);
}

const p2 = new Pessoa('Matheus', 'Ferreira', 22);