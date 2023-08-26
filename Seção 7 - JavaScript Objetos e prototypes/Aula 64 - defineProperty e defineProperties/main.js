function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: true, // Pode ser alterado
        configurable: false, // Reconfigurável ou Deletável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor
            writable: true, // Pode ser alterado
            configurable: true, // Reconfigurável ou Deletável
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor
            writable: true, // Pode ser alterado
            configurable: true, // Reconfigurável ou Deletável
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50;
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}

console.log(p1);