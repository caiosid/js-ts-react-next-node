//  Notação Liberal
const hotel = {
  quartos: 20,
  ocupados: 10,
  piscinas: 2,
  verificarDisponibilidade() {
    let resultado = this.quartos - this.ocupados;
    return `Disponíveis: ${resultado}`;
  },
}