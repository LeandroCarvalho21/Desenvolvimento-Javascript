
//2.1 Exiba no console quantos livros tem 

/*2.2 Exiba todos os livros em ordem alfabetica 
(IMPORTATE: cada livro deve aparecer em uma linha)
(use o for)
*/

/*2.3 O seu sistema deve perguntar ao usuário quais 3 livros ele gostaria de pega 
emprestado e salvar eles em uma lista*/


//Livros
let livros = ["o pequeno principe ",
    "dom casmurro",
    "1984",
    "o hobbit",
    "o alquimista",
    "cem anos de solidão"]

//quantidade de livros
console.log("Quantidade de livros " + livros.length)

// livros em ordem alfabetica

let contagem = 0 //variavel para contagem de livro

let livrosEmpres = [] //array com os livros emprestados

let naoTem = [] // array com os livros que não tem 

for (let i = 0; i < livros.length; i++) {
    contagem++
    livros.sort()
    console.log(contagem + " - " + livros[i])
}

for (let i = 0; i < 3; i++) {
    let l1 = prompt("Digite um livro 1")
    if (livros.includes(l1)) {
        l1.toLowerCase()
        livrosEmpres.push(l1)
    }

    else {
        l1.toLowerCase()
        naoTem.push(l1)
    }

}

console.log("Livros emprestados")
for (let i = 0; i < livrosEmpres.length; i++) {
    console.log("Livro " + livrosEmpres[i])
}

console.log(" Não tem esse livro " + naoTem)