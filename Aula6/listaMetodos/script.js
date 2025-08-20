// // array de frutas
// let frutas = ["Maçã", "Laranja", "Uva", "Morango", "Laranja"];

// // variavel para receber a posição do elemento Uva que esta dentro do array.
// // se a escrita estiver errada vai retorna no console -1 "exemplo uva , Uva resultado -1. 
// let posicao = frutas.indexOf("Uva")
// console.log("A uva esta na posição", posicao)

// //caso elementos iguais ele retorna a primeria ocorrência, usar indexOF 
// let posicaoLaranja = frutas.indexOf("Laranja")
// console.log("A laranja esta na posição", posicaoLaranja)

// // retorna a ultima ocorrência, usar lastIndexOF
// let ultimaPosicaoLaranja = frutas.lastIndexOf("Laranja")
// console.log("A laranja esta na posição", ultimaPosicaoLaranja)


// //-----------------------------------------------------------
// // array com os ingredientes para um bolo
// let ingredientes = ["farinha", "ovos", "açúcar", "leite"]

// //usamos o método includes para verificar se possui chocolate no array ingredientes.
// console.log("Tem chocolate?", ingredientes.includes("chocolate"))

// // estrututa condicional para verificar se possui leite no array ingredientes
// if(ingredientes.includes("leite")){

//     console.log("✅Tem leite na receita!") 
// }

// else{
//     console.log("❌Não tem leite na receita!")
// }
// //-----------------------------------------------------------

//1 Você esta criando um sistema de aluguel de filmes
/*O seu sistema deve perguntar ao usuario qual o filme ele gostaria de alugar, Caso 
encontrar retorna que o filme esta disponivel e retorna qual a posiçao dele no "estoque"
caso não encontrar informa que o filme não esta disponivel.*/


// // array com nomes dos filmes 
// let filmes = ["Matrix", "Vingadores", "Titanic", "A origem", "Cidade de Deus"]

// //variavel nomeFilme para receber o filme que o usuario deseja. 
// let nomeFilme = prompt("Digite o nome do filme:")

// //estrutura condicional para verificar se possui o filme que o usuario digito.
// if (filmes.includes(nomeFilme)) {
//     let posicaoFilme = filmes.indexOf(nomeFilme)
//     console.log("Filme esta disponivel na posição " + posicaoFilme)
//     alert("✅ O Filme " + nomeFilme + " esta disponivel na posição " + posicaoFilme)
// }
// else {
//     console.log("Filme não esta disponivel")
//     alert("❌ O Filme " + nomeFilme + " não esta disponivel ")
// }


let pessoas = []


pessoas.push("Julia")
pessoas.push("Ana")
pessoas.push("Kaio", "Luiz", "Marcos", "Gabriel")
pessoas.sort() // ordena em ordem alfabetica 

console.log("Depois", pessoas)


//2.1 Exiba no console quantos livros tem 

//2.2 Exiba todos os  livros em ordem alfabetica 