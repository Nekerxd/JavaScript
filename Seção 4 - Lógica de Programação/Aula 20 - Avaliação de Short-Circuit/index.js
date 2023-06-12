/*
    Falsy Values
    0
    '', "", `` 
    null / undefined
    NaN
*/

//AND Retorna o primeiro valor false ou o último true
console.log('Matheus' && 0 && 'Maria')

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

//OR  Retorna o primeiro valor true ou o último false
console.log(0 || false || null || `Matheus Ferreira` || true)

const corUsuario = null;
const corPadrao = corUsuario || 'red';

console.log(corPadrao);

// --------------------

const a = 0;
const b = null
const c = 'false'; // String será considerado true
const d = false;
const e = NaN;

console.log(a || b || c || d || e)