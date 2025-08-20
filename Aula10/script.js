// Função para alterar o texto
//Primeiro usar a palavra 'function' e depois o nome dela.
function mudarTexto() {
    document.getElementById("texto1").textContent = "O texto mudou🎊"

}


function mudarCor() {
    document.getElementById("texto2").style.color = "red"
    document.getElementById("texto2").textContent = "O texto ficou vermelho"

}


function escoder() {
    document.getElementById("texto3").style.display = "none"
}

function mostrar() {
    document.getElementById("texto3").style.display = "block"
}


let contador = 0

function aumentarValor() {
    contador = contador + 1
    document.getElementById("texto4").textContent = contador

}


function subtrair() {
    if (contador == 0) {
        document.getElementById("texto4").textContent = 0

    } else {
        contador = contador - 1
        document.getElementById("texto4").textContent = contador
    }
}

function zerar() {
    contador = 0
    document.getElementById("texto4").textContent = contador
    
}


// //chamando a função
// mudarTexto()




