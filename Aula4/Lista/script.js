alert("Funcionou o Javascript");// alerta para exibir no navegador.

//Lista de texto
let listaDeCompras = ["Pão", "Leite", "Açúcar", "Café"];//array da lista de compras. 

//Lista de números
let notas = [8.7, 9.5, 10, 9.1, 6.2]; //array com números inteiros e flutuante.

//----------------------------------------------------
// posição       0         1           2       3        4 
let amigos = ["Marina", "Pedro", "Carlos ", "João", "Renato"]; //array com nome das pessoas.

console.log("Amigos ", amigos);
console.log("Meu melhor amigo é ", amigos[2]);
console.log("Eu gosto muito da ", amigos[0]);
console.log("Faz tempo que não vejo ", amigos[10]);
//----------------------------------------------------

//----------------------------------------------------
// Cidades
let cidades = ["Salesópolis", "Salvador", "Jericoacoara", "Búzios", "Foz do Iguaçu"]; //array das cidades 

//exibir as cidades no console
console.log("Todas as cidades: ", cidades);
console.log("Primeira cidade: ", cidades[0]);
console.log("Ultima cidade: ", cidades[4]);
//----------------------------------------------------

//----------------------------------------------------
//1.1 Crie a seguinte lista
let animais = ["😺", "🐶", "🐀", "", "🐷", "🦊", "🐯"]; // array dos animais 

//exibir os animais no console 
console.log("Animal na posição 6 é o Tigre ", animais[6]);
console.log("Primeiro animal é o Gato ", animais[0]);
console.log("Ultimo animal é o Rato ", animais[2]);
//----------------------------------------------------

//----------------------------------------------------
// Lista de carros 
let carros = ["Civic", "Uno", "Gol", "Corrolla"];
console.log("Antes", carros); // exibi o array de carros 

carros[1] = "HB20" // Troca "Uno" por HB20

console.log("Depois", carros);


//metodo push para adicionar um elemento ao final da lista 
carros.push = ("Celta"); // Adiciona só um 
carros.push = ("Renegade", "Passat"); // Adiciona varios na mesma linha

carros.pop();//metodo pop para remover o ultimo elemento ao final da lista

carros.shift();//metodo shift para remover o primeiro elemento da lista

carros.unshift("Urus", "Mobi")//metodo unshift para adicionar novos elementos no inicio da lista

console.log("Carros depois da atualização", carros); //exibi o resultado depois das atualizações

//---------------------------------------------------


//2 Você foi contratado para criar um algorotimo de playlist personalizado
//para o Spotify, foi gerado a seguinte playlist
let playlist = ["Evidencias", "Funk do pão de queijo", "Oh mãe compra bob goods",
    "Bohemian Rhapsody", "Trem-bala", "Aquarela"]

//Depois de algumas conversas com seu gestor ele percebeu que a 2° e 3° musicas eram sempre 
// "Oh mãe compra bob goods "
// "Funk do pão de queijo "
// e foi solicitado que fosse adicionado uma logica para remover sempre elas da playlist.

console.log("Playlist : ", playlist)


playlist.shift();
playlist.shift();
playlist.shift();

playlist.unshift("Evidencias")//adicionei a musica Evidencias

console.log("Removendo musicas infantil: ", playlist)//exibi a nova playlist


//---------------------------------------------------
// Novamente quando os clientes testaram eles sentiram falta de musicas mais animadas
//com isso o gestor solicitou um ajuste no algoritimo para ele remover
//as duas ultimas musicas da playlisy e colocar a primeira no ultimo lugar 

//removi as 3 ultimas musicas 
playlist.pop(); // removi Aquarela
playlist.pop(); // removi Trem-bala
playlist.pop(); // removi Bohemian Rhapsody

playlist.unshift("Bohemian Rhapsody"); //adicionei a musica Bohemian Rhapsody

console.log("Playlist mais animada: ",playlist) //exibi a nova playlist


//---------------------------------------------------

// uma mudança no algoritmo, adicionar mais 2 musicas eletronicas no começo e 3 musicas de sugeridas 
//foram 

// We love rock 'n' Roll (Rock)
//Iron Man(Rock)
// Sweet Child O'Mine' (Rock)
// I'n Good (Eletronica)
// Summer (Eletronica)


// no final exiba no console como ficou a playlist

playlist.unshift("I'n Good ","Summer") //adicionei 2 musicas eletronicas no inicio.
playlist.push(" We love rock 'n' Roll","Iron Man","Sweet Child O'Mine'")// adicionei 3 musicas de rock no final 


console.log("Playlist com Rock e Eleronica:",playlist)// exibir a playlist no console.





