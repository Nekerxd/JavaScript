// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return () => "Hello World";
};

const f = createHelloWorld();
console.log(f()); // "Hello World"
