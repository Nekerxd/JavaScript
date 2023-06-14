// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);


// const data = new Date(2019, 3, 20, 13, 27, 52, 500); // ano, mês, dia, hora, minutos, segundos, milissegundo
// console.log(data.toString());

// const dataString = new Date('2019-05-20 17:53:11');

// console.log('Dia', dataString.getDate());
// console.log('Mês', dataString.getMonth() + 1); // Mês começa do zero
// console.log('Ano', dataString.getFullYear());
// console.log('Hora', dataString.getHours());
// console.log('Min', dataString.getMinutes());
// console.log('Seg', dataString.getSeconds());
// console.log('ms', dataString.getMilliseconds());
// console.log('Dia semana', dataString.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(Date.now());

function formataData(dataFunc) {
    const dia = zeroEsquerda(dataFunc.getDate());
    const mes = zeroEsquerda(dataFunc.getMonth() + 1);
    const ano = zeroEsquerda(dataFunc.getFullYear());
    const hora = zeroEsquerda(dataFunc.getHours());
    const min = zeroEsquerda(dataFunc.getMinutes());
    const seg = zeroEsquerda(dataFunc.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

const dataFunc = new Date();
const dataBrasil = formataData(dataFunc);
console.log(dataBrasil);