// function getDiaSemana(num){
    
//     let diaTexto;

//     switch (num) {
//         case 0:
//             diaTexto = "Domingo";
//             break;
//         case 1:
//             diaTexto = "Segunda-Feira";
//             break;
//         case 2:
//             diaTexto = "Terça-Feira";
//             break;
//         case 3:
//             diaTexto = "Quarta-Feira";
//             break;
//         case 4:
//             diaTexto = "Quinta-Feira";
//             break;
//         case 5:
//             diaTexto = "Sexta-Feira";
//             break;
//         default:
//             diaTexto = "Sábado";
//             break;
//     }
    
//     return diaTexto;
// }

// function getNomeMes(mes){
    
//     let mesTexto;

//     switch (mes) {
//         case 0:
//             mesTexto = "Janeiro";
//             break;
//         case 1:
//             mesTexto = "Fevereiro";
//             break;
//         case 2:
//             mesTexto = "Março";
//             break;
//         case 3:
//             mesTexto = "Abril";
//             break;
//         case 4:
//             mesTexto = "Maio";
//             break;
//         case 5:
//             mesTexto = "Junho";
//             break;
//         case 6:
//             mesTexto = "Julho";
//             break;
//         case 7:
//             mesTexto = "Agosto";
//             break;
//         case 8:
//             mesTexto = "Setembro";
//             break;
//         case 9:
//             mesTexto = "Outubro";
//             break;
//         case 10:
//             mesTexto = "Novembro";
//             break;
//         default:
//             mesTexto = "Dezembro";
//             break;
//     }
    
//     return mesTexto;
// }

// function criaData(dataObjeto) {

//     const diaNum = dataObjeto.getDate();
//     const mes = getNomeMes(dataObjeto.getMonth() + 1);
//     const ano = dataObjeto.getFullYear();
//     const hora = dataObjeto.getHours();
//     const minuto = dataObjeto.getMinutes();
//     const dia = getDiaSemana(dataObjeto.getDay());

//     const horaZero = zeroEsquerda(hora)
//     const minutoZero = zeroEsquerda(minuto)
    
//     return `${dia}, ${diaNum} de ${mes} de ${ano} ${horaZero}:${minutoZero}`
// }

// function zeroEsquerda (num) {
//     return num < 10 ? `0${num}` : num;
// }

// function defineData() {
//     const horario = document.querySelector('#horario');
//     const data = new Date();
    
//     horario.innerHTML = criaData(data);

// }
// ------------------------------------------ Alternativa Nativa ------------------------------------------
function defineData() {
    const horario = document.querySelector("#horario");
    const data = new Date();
    
    const opcoes = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    horario.innerHTML = data.toLocaleString('pt-BR', opcoes);
}

defineData();
