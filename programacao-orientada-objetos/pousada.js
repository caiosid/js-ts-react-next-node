// Criando classes (mais simples)
class Pousada {
  constructor(quartos, ocupados, piscinas, janelas, arCondinado) {
    this.quartos = quartos;
    this.ocupados = ocupados;
    this.piscinas = piscinas;
    this.janelas = janelas;
    this.arCondicionado = arCondinado;
  }

  verificarDisponibilidade() {
    const resultado = this.quartos - this.ocupados;
    return `Disponível: ${resultado}`;
  }

  verificarArCondicionado() {
    return `Cada quarto possui ${this.arCondicionado} de Ar Condicionado!`;
  }
}

const pousadaRecife = new Pousada();
console.log(pousadaRecife.arCondicionado);
console.log(pousadaRecife.verificarDisponibilidade());
console.log(pousadaRecife.verificarArCondicionado());
