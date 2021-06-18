console.log(Math.ceil(6.1))

const obj1 = {} // anotação literal
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // criando atributos pela notação THIS.
    this.exec = function(){ // criando funções pela notação THIS.
        console.log('Exec')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()