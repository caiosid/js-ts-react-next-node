// Foreach

/*
 * O método forEach é uma estrutura de repetição utilizada para percorrer todos os elementos de uma coleção (como um array ou lista) e executar uma ação para cada um deles. Em tradução direta, seu nome significa "para cada"
 */

const verduras = [
  "Tomate",
  "Cebola",
  "Cenoura",
  "Alface",
  "Batata",
  "Pimentão",
];

for (indice in verduras) {
  console.log(verduras[indice]);
}

const percorrer = function (item, i, arr) {
  console.log(i);
};

verduras.forEach((item) => console.log(item));

Array.prototype.percorrer = function (funcao) {
  for (let i = 0; i < this.length; i++) {
    funcao(this[i], i, this);
  }
};

const funcao = function (item, i, arr) {
  console.log(item);
};

verduras.percorrer();
