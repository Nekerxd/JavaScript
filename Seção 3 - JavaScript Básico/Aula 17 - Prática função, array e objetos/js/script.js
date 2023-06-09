function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
           nome: nome.value,
           sobrenome: sobrenome.value,
           peso: peso.value,
           altura: altura.value
        });

        console.log(pessoas)
    
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    };

    function limparResultados (evento) {
        evento.preventDefault();
        resultado.innerHTML = '<h1>Pessoas Cadastradas</h1>';
    }
    
    form.addEventListener('submit', recebeEventoForm);
    form.addEventListener('reset', limparResultados);

}
meuEscopo();