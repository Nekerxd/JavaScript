// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto) {
            return `${nome} está falando sobre ${assunto}.`;
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Matheus', 'Ferreira', 1.83, 65);
console.log(p1.fala('jogos'));
console.log(p1.imc);
p1.nomeCompleto = 'Matheus Ferreira de Carvalho';
console.log(p1.nome);
console.log(p1.sobrenome);