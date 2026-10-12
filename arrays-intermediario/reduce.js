// Array: Reduce
const numeros = [2, 3, 5];

const funcao = function (acumulador, atual, i) {
  console.log("i" + i);
  console.log("ac:" + acumulador);
  console.log("a: " + atual);
  console.log("------");
};

const resultado = numeros.reduce(funcao);
