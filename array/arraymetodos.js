const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro / remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstapen') // adiciona elementos a lista
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento no inicio da lista
console.log(pilotos)

pilotos.splice(2, 0, 'Botas', 'Massa') // adicionando elementos
console.log(pilotos)

pilotos.splice(3,1) // removendo elemento a partir da indice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // criando novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // não inclui o ultimo indice
console.log(algunsPilotos2)
