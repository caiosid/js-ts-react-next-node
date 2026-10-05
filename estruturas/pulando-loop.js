// Pulando uma execução do loop
for (let s = 0; s < 10; s++) {
  // operador resto = %
  if (s % 2 === 0) {
    console.log("Número par!");
    continue;
  }

  console.log(s);
}
