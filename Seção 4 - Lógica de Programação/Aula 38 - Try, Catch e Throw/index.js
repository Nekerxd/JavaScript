function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma(5,7));
    console.log(soma(5,'19'));
} catch (err) {
    console.log(err);
}