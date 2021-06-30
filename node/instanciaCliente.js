const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // função factory
const contadorD = require('./instanciaNova')() // função factory

contadorA.inc()
contadorA.inc() // incrementar
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
