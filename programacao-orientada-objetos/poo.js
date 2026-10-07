// Paradgima -> exemplo ou padrão a ser seguido, não se trata de uma linguagem de programação

// JavaScript é multi paradigma

// Procedural

/*function verificarDisponibilidade(quartos, ocupados) {
  let resultado = quartos - ocupados;
  console.log(`Disponíveis: ${resultado}`);
}

let quartos = 20;
let ocupados = 5;
*/

// Orientado a objetos
const hotel = {
  quartos: 20,
  ocupados: 10,
  verificarDisponibilidade: function () {
    let resultado = this.quartos - this.ocupados;
    console.log(`Disponíveis: ${resultado}`);
  },
};

//hotel.ocupados = 5
hotel.verificarDisponibilidade();
