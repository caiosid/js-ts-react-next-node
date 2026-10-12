// Array Métodos Úteis
const estados = [
  "São Paulo",
  "Ceará",
  "Rio de Janeiro",
  "Bahia",
  "Minas Gerais",
];

// Remove elementos do array
estados.pop()  //remove o último
estados.shift() // remove o primeiro

// Adiciona novo elemento do array
estados.push("teste") // adiciona no final
estados.unshift("João Pessoa") // adiciona no inicio

// Retorna um novo array
//const novo = estados.slice(0,3,"teste1","teste2")

//const novo = estados.slice(2, 5);

// Converter Array em String
const usuarios = ["Jamilton", "Caio", "Lucas","Rafael"]
let texto = usuarios.join()
let arrayTexto = texto.split(",")

console.log(arrayTexto);
