function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aplicaDesconto = function(descontoPorcentagem) {
    this.preco = this.preco * ((100 - descontoPorcentagem) / 100);
}

Produto.prototype.aplicaAumento = function(aumentoPorcentagem) {
    this.preco = this.preco * ((100 + aumentoPorcentagem) / 100);
}

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aplicaDesconto(50);

console.dir(p1);
console.dir(p2);

// Cria e define o prototype
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 153
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.aplicaAumento(100);
console.log(p3);