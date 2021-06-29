const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China' // selecinando pais de uma lista
const mulheres = f => f.genero === 'F' // selecionando genero de uma lista 

// criando funçaõ para receber o menor salario de uma lista 
const menorSalario = (func, funcAtual) => { 
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)


    //filtrando pais / genero / menor salario
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})

// mulher chinesa co menor salario

