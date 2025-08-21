
function criarCracha() {
    //div card
    let card = document.createElement("div")

    //atribui uma classe a div card
    card.classList.add("style-card")

    //cria as variaveis 
    let nome = prompt("Digite seu nome")
    while (nome.trim() == "") {
        nome = prompt("Digite seu nome ")

    }

    let cargo = prompt("Digite seu cardo")
    while (cargo.trim() == "") {
        cargo = prompt("Digite seu cardo")

    }

    let urlFoto = prompt("Insira a URL da foto")
    while (urlFoto.trim() == "") {
        urlFoto = prompt("Insira a URL da foto")

    }

    //atribui alguns elementos dentro da div com os dados das variaveis
    card.innerHTML = `
        <img src = "${urlFoto}" alt="Foto do crachá">
        <h1>${nome}</h1>
        <h3>${cargo}</h3>
        <p>TechCorp Empresa LTDA</p>
        `
    document.getElementById("ocultar").style.display = "none"
    document.getElementById("crachas").appendChild(card)

}



function limparTudo() {
    document.getElementById("ocultar").style.display = "block"
    document.getElementById("crachas").innerHTML = ""
}