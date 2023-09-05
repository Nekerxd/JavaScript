// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop')
// ... (spread)

// Já vimos
// Object.keys (retorna as chaves)
// Object.freeze (cogela o objeto)
// Object.defineProperty (define várias propriedades)
// Object.defineProperties (define uma propriedade)

const produto = { nome: 'Caneca', preco: 1.85 };
const outraCoisa = produto; //valor passado por referência
const outroProduto = { ...produto, material: 'porcelana'}; //espalhando o valor original
produto.nome = 'Xícara'

console.log(produto);
console.log(outraCoisa);
console.log(outroProduto);

// Assign
const copo = Object.assign({}, produto, {material: 'plástico'}) // copiando tudo de produto para o objeto vazio

// Keys
Object.keys(produto) // mostra as chaves do produto

// getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Mostra o property descriptor de uma propriedade de um objeto

