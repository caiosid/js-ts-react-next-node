//const obj = document.getElementsByName('cadastro')
//const form = document.forms;
//console.log(form)

//console.log(document.cadastro)
//console.log(document.cadastro.sexo)
//document.cadastro.nome.value =  "caio";
//document.cadastro.sexo.value = "masculino";

function salvar() {
  /*document.cadastro.nome.value = "Caio";
  document.cadastro.email.value = "c@mail.com";
  document.cadastro.sexo.value = "Masculino";
  let nome = document.cadastro.nome.value
  let email = document.cadastro.email.value
  let sexo = document.cadastro.sexo.value
  console.log(nome,email,sexo)*/
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const sexo = document.getElementById("sexo");
  console.log(nome.value);
  console.log(email.value);
  console.log(sexo.value);
}
