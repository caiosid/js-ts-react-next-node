//  Definindo uma função
function minhaFuncao() {
  console.log("Testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Função em variável ");
};

minhaFuncaoEmVariavel();

function funcaoComParamentro(txt) {
  console.log(`Imprimindo: ${txt}`);
}

funcaoComParamentro("Imprimindo alguma coisa");

funcaoComParamentro("Outra função");
