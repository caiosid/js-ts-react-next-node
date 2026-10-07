// Notação de constructor (objeto em branco)
const resort = new Object();
resort.quartos = 20;
resort.ocupados = 10;
resort.piscinas = 8;
resort.verificarDisponibilidade = function () {
  let resultado = this.quartos - this.ocupados;
  return `Disponíveis: ${resultado}`;
}