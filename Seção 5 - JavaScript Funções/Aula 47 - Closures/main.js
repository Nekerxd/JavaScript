// Closure é a habilidade da função acessar o seu escopo léxico
function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Matheus'); 
const funcao2 = retornaFuncao('João'); 

console.log(funcao(), funcao2());