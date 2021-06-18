let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


//uso de ! para booleanos caso de negação
// ! = false
// !! = verdadeiro
isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // espaço vazio
console.log(!![]) // array vazio
console.log(!!{}) // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar....')
console.log(!!('' || null || 0 || ''))

let nome = ''
console.log(nome || 'Desconhecido')