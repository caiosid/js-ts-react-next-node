//const obj = document.getElementById('destaque')
//const obj = document.querySelector('li.primeiro')

function executar() {
  const obj = document.querySelector("li.primeiro");
  obj.innerHTML = "teste";
  obj.classList.add("destaque");
}

//console.log(object.textContent)

// Selecionando múltiplos elementos

//const colecao = document.getElementsByTagName("li");
//const  obj = document.getElementsByClassName('vermelho')
//const obj = document.getElementsByName("nome");

const obj = document.querySelectorAll('li.primeiro')
console.log(obj.item(0).textContent);

/*for (let i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}

const lista = Array.from(colecao);
const funcao = function (item, i) {
  console.log(item);
};

lista.forEach(funcao);
console.log(lista.reduce);*/
