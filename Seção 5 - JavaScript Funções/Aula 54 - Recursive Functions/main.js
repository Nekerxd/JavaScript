function recursividade(max) {
    if (max > 10) return;
    console.log(max);
    max++;
    recursividade(max);
}

recursividade(-10);