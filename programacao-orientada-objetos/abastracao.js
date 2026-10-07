class ContaBancaria {
  #saldo;
  constructor(saldo) {
    this.#saldo = saldo;
  }

  sacar(valor) {
    if (this.#temSaldoSuficiente(valor)) {
      this.#saldo -= valor;
      return `Saque de R$ ${valor} realizado.`;
    } else {
      return "Saldo insuficiente";
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }

  #temSaldoSuficiente(valor) {
    return valor <= this.#saldo;
  }
}

/*
const conta = new ContaBancaria(500);
console.log(conta.sacar(200));
 */
