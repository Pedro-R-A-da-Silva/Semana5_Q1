function minhalista(quantidadedeitens) {
  let i = 0;
  let ul = document.querySelector("ul");


  while (i < quantidadedeitens) {
    console.log(`<li>${mensagem}</li>`);
    i++;
    var li = document.createElement('li');
    ul.appendChild(li);
    var texto = document.createTextNode(mensagem);
    li.appendChild(texto)
    console.log(ul);
  }
}

let quantidadedeitens = parseInt(prompt("quantos '<li>' devem ser exibidos?"));
let mensagem = prompt("digite sua mensagem:")

minhalista(quantidadedeitens, mensagem);
