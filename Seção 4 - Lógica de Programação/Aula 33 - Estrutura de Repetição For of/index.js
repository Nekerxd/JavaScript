
const nome = 'Matheus';

// For clássico - geralmente com iteráveis (Array ou Strings)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// For in - Retorna o índice ou chave (String, Array ou Objetos)
for (let i in nome) {
    console.log(nome[i]);
}


// For of - Retorna o valor em si (Iteráveis, Strings, ou Array)
for (let valor of nome) {
    console.log(valor);
}
