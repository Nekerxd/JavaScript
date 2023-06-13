function main() {

    const form = document.querySelector('#form');
        
    form.addEventListener('submit', calculaIMC);

    function calculaIMC(e) {
        e.preventDefault();
        
        const peso = form.querySelector('#peso');
        // const peso = e.target.querySelector('#peso')
        const altura = form.querySelector('#altura');
        // const altura = e.target.querySelector('#altura');
        
        const resultadoIMC = (peso.value / (altura.value ** 2));
        
        resultGrau = classificaIMC(resultadoIMC);

        defineMensagem(resultadoIMC, resultGrau);
    };

    function defineMensagem(imcCalculado, nivelCalculado) {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML =  `<h3><b>Seu IMC é ${imcCalculado.toFixed(2)} (${nivelCalculado})</b></h3>`;

        /*  Alternativa de código

            const div = document.createElement('div');
            div.innerHTML = 'Qualquer coisa';
            div.classList.add('resultado');
            resultado.appendChild(div);
        */
    };

    function classificaIMC(imc) {
        
        classific = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];
        
        if (imc < 18.5) return classific[0];
        if (imc < 25) return classific[1];
        if (imc < 30) return classific[2];
        if (imc < 35) return classific[3];
        if (imc < 40) return classific[4];
        if (imc >= 40) return classific[5];
    };
}

main();