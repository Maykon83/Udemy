// Armazenando uma função em uma variável

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função ARROW em uma variável (=> arrow function)

const soma = (a, b) => {
    return a + b
}

console.log(2,3)

// retorno implicito

const subtracao = (a, b) => a - b 
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('legal')