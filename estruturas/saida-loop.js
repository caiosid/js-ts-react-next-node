// Forçando a saída de um loop
for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 12) {
    console.log("O g é 12!");
    break;
  }
}
