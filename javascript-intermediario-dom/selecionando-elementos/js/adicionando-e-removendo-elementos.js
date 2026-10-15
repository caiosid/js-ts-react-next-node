//const obj = document.getElementById('conteudo')
//obj.textContent = "Caio"
//obj.innerHTML = "Barbosa"
//obj.innerHTML = "<p>Caio</p>"
//obj.textContent = "<p>Caio</p>"
//obj.textContent= "<p style='color: blue'>Sid</p>"
//obj.innerHTML="<p style='color: blue'>Sid</p>"

/*const ulFilha = document.createElement("ul");
const liFilha = document.createElement("li");
li.textContent = "li criada";
ulFilha.appendChild(liFilha);
*/
//li.setAttribute('teste','10')
//li.textContent="Fred"

const ul = document.getElementById("itens");
const li = document.createElement("li");
const texto = document.createTextNode("Barbosa");

function adicionar() {
  /*li.appendChild(texto);
  ul.appendChild(li);
  */

  li.appendChild(texto);
  ul.insertBefore(li, ul.childNodes[0]);

  const itemClonar = document.getElementById("item-clonar");
  const item = itemClonar.cloneNode(true);
  ul.appendChild(item);
}

function remover() {
  ul.removeChild(li);
}
