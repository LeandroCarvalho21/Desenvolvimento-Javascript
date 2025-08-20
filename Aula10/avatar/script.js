let cor_rosa = "#f900e8";
let cor_azul = "#0091f9";
let cor_verde = "#4ff900";
let cor_roxo = "#b200f9";
let cor_laranja = "#f95b00";

//trocar fundo do avatr
function rosa() {
    document.getElementById("avatar").style.backgroundColor = cor_rosa
}

function azul() {
    document.getElementById("avatar").style.backgroundColor = cor_azul
}

function verde() {
    document.getElementById("avatar").style.backgroundColor = cor_verde
}

function roxo() {
    document.getElementById("avatar").style.backgroundColor = cor_roxo
}

function laranja() {
    document.getElementById("avatar").style.backgroundColor = cor_laranja
}

//trocar avatar
function feliz() {
    document.getElementById("avatar").textContent = "😀"
}

function triste() {
    document.getElementById("avatar").textContent = "☹️"
}

function bravo() {
    document.getElementById("avatar").textContent = "😡"
}

function surpreso() {
    document.getElementById("avatar").textContent = "😯"
}

function apaixonado() {
    document.getElementById("avatar").textContent = "🥰"
}

//mudar o nome do usuário e bio 
function nome() {
    document.getElementById("nome_usuario").textContent = prompt("Digite seu Nome:", "")
}

function bio() {
    document.getElementById("descricao").textContent = prompt("Digite uma descrição", "")
}
function online() {
    document.getElementById("status").textContent = "Status: Online"
}

function oculpado() {
    document.getElementById("status").textContent = "Status: Oculpado"
}

function ausente() {
    document.getElementById("status").textContent = "Status: Ausente"
}

//função para esconder o perfil
function ocultar() {
    document.getElementById("avatar").style.display = "none"
}

function visivel() {
    document.getElementById("avatar").style.display = "flex"

}