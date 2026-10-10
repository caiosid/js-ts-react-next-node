// Array: Filter

/*
 * filter serve para criar um novo array contendo apenas os elementos do array original que passam em um teste (condição) específico.
 */

/*
const usuarios = [
  { nome: "Vitor", idade: 36 },
  { nome: "Ana", idade: 16 },
  { nome: "Maria", idade: 40 },
];

const funcao = function (item, i, arr) {
  return item.idade >= this.filtro;
};

const filtro = {
  filtro: 18,
};

const usuariosMaiorIdade = usuarios.filter(funcao, filtro);
console.log(usuariosMaiorIdade);
*/

const carros = [
  { nome: "Gol", marca: "volkswagem" },
  { nome: "ix35", marca: "hyundai" },
  { nome: "santa fé", marca: "hyundai" },
  { nome: "polo", marca: "volkswagem" },
];

const carrosFiltrados = carros.filter((carro) => carro.marca === "hyundai");

console.log(carrosFiltrados);
