const data = new Date();

const diaSemana = data.getDay();
let diaSemanaTexto;

console.log(diaSemana);

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;

    default:
        diaSemanaTexto = 'Sábado';
        break;
}

console.log(diaSemanaTexto)