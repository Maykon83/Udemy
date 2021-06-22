"use strict";

function Pessoa(nome) {
  this.nome = nome;

  this.falar = function () {
    console.log("Meu nome \xE9 ".concat(this.nome));
  };
}

var p1 = new Pessoa('João');
p1.falar();