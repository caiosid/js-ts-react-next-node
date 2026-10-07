class Pousada {
  #quartos;
  #ocupados;

  constructor(quartos, ocupados = 0) {
    this.#quartos = quartos;
    this.#ocupados = ocupados;
  }

  ocuparQuarto() {
    if (this.#ocupados >= this.#quartos) {
      return "Pousada lotada.";
    }
    this.#ocupados++;
    return "Quarto ocupado com sucesso.";
  }

  verificarDisponibilidade() {
    return this.#quartos - this.#ocupados;
  }
}

class PousadaLuxo extends Pousada {
  constructor(quartos, ocupados, spa) {
    super(quartos, ocupados);
    this.spa = spa;
  }

  reservarSpa() {
    return this.spa ? "Spa reservado!" : "Esta pousada não possui spa.";
  }
}

const luxo = new PousadaLuxo(10, 2, true);
console.log(luxo.verificarDisponibilidade()); // 8 (herdado)
console.log(luxo.reservarSpa());              // "Spa reservado!" (próprio)