

function exemploCreateElement() {
    // Passo 1: criar um elemento
    let novoParagrafo = document.createElement("p")

    novoParagrafo.textContent = "Novo parágrafo criado com javascript"

    //Passo 2: Pegar o elemento onde vai ser inserido o elemento criado
    let area1 = document.getElementById("area1")

    //Passo 3: Adicionar na pagina
    area1.appendChild(novoParagrafo)
}



function criarTitulo() {
    let novoTitulo = document.createElement("h1")

    novoTitulo.textContent = "Novo Titulo"

    let titulo = document.getElementById("area1")

    titulo.appendChild(novoTitulo)
}



function addFruta() {

    let novaLi = document.createElement("li")

    novaLi.textContent = prompt("Digite o nome da fruta")

    let fruta = document.getElementById("fruta")

    fruta.appendChild(novaLi)

}

function alteraCorSite() {
    document.getElementById("app").classList.add("fundo-preto")

}


function criarComClasse() {

    let novoElemento = document.createElement("div")

    novoElemento.textContent = " Este elemento tem a classes destaque"

    novoElemento.classList.add("destaque")

    document.getElementById("area3").appendChild(novoElemento)


}


function criarTexto() {

    let novoTexto = document.createElement("p")

    novoTexto.textContent = "Se você não está errando, não está aprendendo. Errar faz parte do processo de crescimento e desenvolvimento como desenvolvedor"

    document.getElementById("area3").appendChild(novoTexto)


}


function criarCard() {
    //cria a div
    let card = document.createElement("div")

    //inseri o HTML completo na div
    card.innerHTML = `
    <h3>Card do usuario </h3>
    <p>Nome: João Silva</p>
    <p>Idade: 25 anos </p>
    <button>Ver perfil </button>
    
    `
    document.getElementById("area4").appendChild(card)
}

function apagarTudo() {
    document.getElementById("area4").innerHTML = ""

}



function removeElemento2(){

//Para remover um elemento com o removeChild

//precisa selecionar o elemento pai 
let divPrincipal = document.getElementById("itensRemover")

//precisa selecionar o elemento filho que sera removido
let elementoRemover = document.getElementById("item1")

divPrincipal.removeChild(elementoRemover)

}


function removeElemento3(){
    let divPrincipal = document.getElementById("itensRemover")

    let elementoRemover = document.getElementById("item2")

    divPrincipal.removeChild(elementoRemover)
}