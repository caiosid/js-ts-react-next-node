// Array map
const carrosEsportivosJaponeses = [
  "Nissan Skyline GT-R",
  "Toyota Supra (A80)",
  "Mazda RX-7",
  "Mitsubishi Lancer Evolution",
  "Honda NSX",
  "Mitsubishi Eclipse GST/GSX",
];

let funcao = function (item, indice, arr) {
  return { nome: item };
};

const novoArray = carrosEsportivosJaponeses.map(funcao);
console.log(novoArray);

//  1 dolar = 3 reais
const produtoDolar = [
  { produtos: "Notebook", preco: 1200, moeda: "$" },
  { produtos: "Celular", preco: 800, moeda: "$" },
];

const novo = produtoDolar.map((item) => {
  let preco = item.preco * 3;
  return { produtos: "Notebook", preco: preco, moeda: "$" };
});

console.log(novo);
