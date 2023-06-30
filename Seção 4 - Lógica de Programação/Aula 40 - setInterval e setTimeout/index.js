function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

function funcaoDoIntervalo() {
    console.log(mostraHora());
}


const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log('Olá Mundo!');
}, 10000);