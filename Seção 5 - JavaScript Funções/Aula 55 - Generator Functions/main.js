function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1.next());

for (let valor of g1) {
    console.log(valor);
}

// Generator infinito
function* geradora2() {
    let i=0;
    
    while(true) {
        yield i;
        i++;
    }
}

// Delegar tarefas
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let i of  g4) {
    console.log(i);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };
    // Código qualquer...
    yield function() {
        console.log('Vim do y2');
    };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();