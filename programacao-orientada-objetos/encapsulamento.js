class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) {
      return "Valor inválido.";
    }
    this.#saldo += valor;
    return `Depósito de R$${valor} realizado.`;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      return `Saque de R$${valor} realizado.`;
    }
    return "Saque inválido ou saldo insuficiente.";
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria(500);
conta.depositar(100);
console.log(conta.consultarSaldo()); // 600
//console.log(conta.#saldo);           // ❌ SyntaxError
conta.saldo = -99999;                // cria uma propriedade nova e inofensiva; o #saldo não muda