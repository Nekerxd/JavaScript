let umaString = "Exemplo de String"

console.log(umaString[4]);
console.log(umaString.charAt(4));
console.log(umaString.indexOf('de'));
console.log(umaString.lastIndexOf('t',15));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace("String", "Texto"));
console.log(umaString.replace(/e/, '#'));
console.log(umaString.replace(/e/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(0,7));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split(' ', 2))
console.log(umaString.toLowerCase)
console.log(umaString.toUpperCase)
