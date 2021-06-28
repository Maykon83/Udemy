const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`) // usar sinal de crase
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)