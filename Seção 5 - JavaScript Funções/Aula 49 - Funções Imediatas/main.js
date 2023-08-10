// IIEF -> Immeadiately Invoked Function Expression

(function(idade, peso, altura) {
    const sobrenome = 'Ferreira';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Matheus'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.8);