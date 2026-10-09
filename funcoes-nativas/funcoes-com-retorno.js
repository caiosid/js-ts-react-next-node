// Funções com Parâmetros e Retorno
function somar(x, y) {
  x = isNaN(x) ? 0 : x;
  y = isNaN(y) ? 0 : y;
  return x + y;
}

// valor padrão do es2015
function somar2(x = 0, y = 0) {
  x = isNaN(x) ? 0 : x;
  y = isNaN(y) ? 0 : y;
  return x + y;
}

// Parâmetro e retornos opcionais
function calcularSalario(salario, desconto) {
  desconto = isNaN(desconto) ? 0 : desconto;
  return salario - desconto;
}

let resultado = calcularSalario(100);
console.log(resultado);
