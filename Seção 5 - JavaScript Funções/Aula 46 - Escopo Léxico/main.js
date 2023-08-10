// Ela busca dentro da função e caso não encontre ela procura no pai até atingir o escopo global ou encontrar

const nome = 'Matheus';

function falaNome() {
    console.log(nome);
}

falaNome();

// A função reconhece onde foi criada e seus vizinhos
// O contexto léxico não é alterado
function usaFalaNome() {
    const nome = 'João'
    falaNome();
}

usaFalaNome();