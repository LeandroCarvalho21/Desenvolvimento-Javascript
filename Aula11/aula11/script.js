

function exemploCreateElement() {
    // Passo 1: criar um elemento
    let novoParagrafo = document.createElement("p")

    novoParagrafo.textContent = "Novo parágrafo criado com javascript"

    //Passo 2: Pegar o elemento onde vai ser inserido o elemento criado
    let area1 = document.getElementById("area1")

    //Passo 3: Adicionar na pagina
    area1.appendChild(novoParagrafo)
}



function criarTitulo(){
    let novoTitulo = document.createElement("h1")

    novoTitulo.textContent = "Novo Titulo"

    let titulo = document.getElementById("area1")

    titulo.appendChild(novoTitulo)
}