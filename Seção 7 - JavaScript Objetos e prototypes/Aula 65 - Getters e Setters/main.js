// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.nome = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        configurable: false, // Reconfigurável ou Deletável
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Tipo inválido!');
            }
            
            estoque = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 12;
console.log(p1.estoque);