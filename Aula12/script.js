function mostrarNome() {
    //Pegar o input 
    //O value retorna o valor que esta dentro do input
    let nome = document.getElementById("inputNome").value

    //Alterar o valor da div pelo valor do input 
    document.getElementById("resultado1").innerHTML = '<p>Nome:' + nome + '</p>'
}



function mostraIdade() {
    let idade = document.getElementById("inputIdade").value

    if (idade == "") {
        document.getElementById("resultado1").innerHTML = '<p>Por favor informe a idade</p>'
    } else {
        document.getElementById("resultado1").innerHTML = '<p>Idade: ' + idade + '</p>'
    }

}



function MostrarEmail() {
    let email = document.getElementById("inputEmail").value

    if (email == "") {
        document.getElementById("resultado1").innerHTML = '<p>Por favor informe o email</p>'
    } else {
        document.getElementById("resultado1").innerHTML = '<p>Email: ' + email + ' </p>'
    }


}



function MostrarData() {
    let data = document.getElementById("inputData").value

    if (data == "") {
        document.getElementById("resultado1").innerHTML = '<p>Por favor informe a data</p>'
    } else {
        document.getElementById("resultado1").innerHTML = '<p>Data: ' + data + ' </p>'
    }


}


function mostrarCor() {

    let cor = document.getElementById("inputCor").value

    let resultado = document.getElementById("background")

    // resultado.innerHTML = `<p>Cor selecionada: ${cor}</p>`
    // resultado.innerHTML = `<p>Cor selecionada: ${cor}</p>`


    resultado.style.backgroundColor = cor

}


function verificarCheckbox() {
    let checkbox = document.getElementById("inputCheckbox")

    if (checkbox.checked) {

        document.getElementById("resultado1").innerHTML = '<p>Foi aceito os termos</p>'
    } else {

        document.getElementById("resultado1").innerHTML = '<p>Não foi aceito os termos</p>'

    }


}



function pegarGenero() {

    //Retorna uma lista de tags que tem um name gereno 
    let opçoes = document.getElementsByName("genero")

    let selecionado = ""


    for (let i = 0; i < opçoes.length; i++) {

        if (opçoes[i].checked) {

            selecionado = opçoes[i].value
        } else {
            
        }
        // document.getElementById("resultado1").innerHTML =`<p>O genero seleionado${selecionado}</p>`
        document.getElementById("resultado1").innerHTML ='<p>O genero seleionado: '+selecionado+'</p>'
        
        
        console.log(opçoes[i].checked.value)
    }


}

