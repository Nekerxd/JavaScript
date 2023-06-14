// Condição ? Valor TRUE : Valor FALSE

const scoreUsuario = 999;

// if (scoreUsuario >= 1000) {
    //     console.log('Usuário VIP');
    // } else {
//     console.log('Usuário normal');
// }

const nivelUsuario = scoreUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrão = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrão);
