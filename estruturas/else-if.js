// Estrutura de controle: else if

if (1 > 2) {
  console.log("teste");
} else if (2 > 3) {
  console.log("teste 2");
} else if (5 > 1) {
  console.log("agora sim");
}

const userName = "Barbosa";
const userAge = 31;

if (userName === "José") {
  console.log("Bem vindo José!");
} else if (userName === "Barbosa" && userAge === 31) {
  console.log("Bem vindo Barbosa!");
} else {
  console.log("Nenhuma condição aceita!");
}
