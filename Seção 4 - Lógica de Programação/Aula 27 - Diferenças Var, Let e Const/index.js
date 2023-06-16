const verdadeira = true;

// Let possui escopo de bloco
// Var possui escopo de função

let nome = 'Matheus'; // Criando
var nome2 = 'Matheus'; // Redeclarando

console.log(nome, nome2);
if (verdadeira) {
    let nome = 'João'; // Criando
    var nome2 = 'João'; // Redeclarando
    console.log(nome, nome2);
    
    if (verdadeira){
        let nome = 'Maria'; // Criando
        var nome2 = 'Maria'; // Redeclarando
        console.log(nome, nome2);
    }
}

console.log(nome,nome2)