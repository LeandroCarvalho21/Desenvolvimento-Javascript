function para() {
    document.getElementById("vermelho").style.backgroundColor = "red"
  


}

function atencao() {
    document.getElementById("amarelo").style.backgroundColor = "#ffe600"
}

function seguir() {
    document.getElementById("verde").style.backgroundColor = "#00ff00"
}

let para = document.getElementById("para");

para.addEventListener('click', function () {
    document.getElementById("vermelho").style.backgroundColor = "#44434387"
})





//função para para tudo
function desligar() {
    document.getElementById("vermelho").style.backgroundColor = "#44434387"
    document.getElementById("amarelo").style.backgroundColor = "#44434387"
    document.getElementById("verde").style.backgroundColor = "#44434387"
}