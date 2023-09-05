// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = (n) => {
    return () => n++;
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());