// pega o conteuddo do elemento atraves do ID titulo e salva na varivel titulo 
let titulo = document.getElementById("titulo");

//exibir a variavel no console
console.log(titulo);

//exibir o valor do console no console da variavel titulo
console.log(titulo.textContent);// retorna o texto que esta dentro da minha tag.


// pega o conteudo do elemento atraves do ID descricao e salva na variavel descricao 
let descricao = document.getElementById("descricao");

//exibir o valor do console no console da variavel descricao
console.log(descricao.textContent);// retorna o texto que esta dentro da minha tag.


//alterçao de titulo com javascript
titulo.textContent = "titulo alterado pelo javascript"
descricao.textContent = "Descrição alterada pelo javascript"

//pede para o usuario digitar o titulo e a descrição 
titulo.textContent = (prompt("Digite o titulo"));
descricao.textContent = (prompt("Digite a descrição"));


