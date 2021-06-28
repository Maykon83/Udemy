console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia') // adicionar itens ao array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

console.log(aprovados)
aprovados.sort() // colocar em ordem alfabética
console.log(aprovados)

delete aprovados[1] // deletar item do array

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = [ 'Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // exclui e inclui itens do array a partir do indice
                       // (1, 1) exclui o indice 1                     
console.log(aprovados)
aprovados.splice(1,1,'elemento1','elemento2') // (1, 1, 'elemento1', 'elemento2) inclui elementos nos indices excluídos
console.log(aprovados)