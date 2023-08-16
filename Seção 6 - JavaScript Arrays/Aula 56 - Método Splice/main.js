//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, element1, element2, element3);

// pop
const removidos = nomes.splice(-1, 1);
// shift
nomes.splice(0, 1)
// push
nomes.splice(nomes.length, 0, 'Matheus');
// unshift
nomes.splice(0, 0, 'Luiz');

console.log(nomes, removidos);