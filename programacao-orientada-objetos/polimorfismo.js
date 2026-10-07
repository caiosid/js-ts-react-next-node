class Pousada {
  #quartos;
  #ocupados;

  constructor(quartos, ocupados = 0) {
    this.#quartos = quartos;
    this.#ocupados = ocupados;
  }

  verificarDisponibilidade() {
    return this.#quartos - this.#ocupados;
  }

  calcularDiaria() {
    return 150;
  }
}

class PousadaLuxo extends Pousada {
  calcularDiaria() {
    return super.calcularDiaria() * 3; // 450
  }
}

class PousadaEconomica extends Pousada {
  calcularDiaria() {
    return super.calcularDiaria() * 0.6; // 90
  }
}

const hospedagens = [
  new Pousada(20),
  new PousadaLuxo(10),
  new PousadaEconomica(30)
];

for (const h of hospedagens) {
  console.log(`Diária: R$${h.calcularDiaria()}`);
}
// Diária: R$150
// Diária: R$450
// Diária: R$90