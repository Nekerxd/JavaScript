const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function calculaTempo(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        hour12: false
    });
}

let segundos = 0;
let tempo;

function iniciaTempo() {
    tempo = setInterval(function(){
        segundos++;
        relogio.innerHTML = calculaTempo(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function() {
    relogio.classList.remove('pausado');
    clearInterval(tempo);
    iniciaTempo();
});

pausar.addEventListener('click', function() {
    clearInterval(tempo);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(){
    relogio.classList.remove('pausado');
    clearInterval(tempo);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});