//-----------------------------------------------------------------------
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]// array com números 

console.log(numeros)// exibe no console os números 

/*
essa parte do código exibe no console os números que estão detro do araay numeros. 
mas pode ocorrer de ter um array com milhares de números e não é viavel fazer dessa forma 
assim a melhro forma é usar um laço de repetição for.
 
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
 */

// for para fazer um laço de repetição para exibir os numeros do array numeros 
for (let i = 0; i < 10; i++) {
    console.log(numeros[i])
}
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
let notas = [8.5, 8, 5.5, 7, 9, 10, 8, 2] // array com as notas do aluno 

let soma = 0 //Variavel com valor 0


for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}

//aqui estamos dividindo a soma das notas pela quantidade de notas na lsta 
//usamos a propriedade lebgth para retorna o tamanho da lista "a quantidade de notas armazenada na variavel "
let media = soma / notas.length

console.log("Soma do aluno é ", soma)// exibe a soma das notas 
console.log("Média do aluno: ", media)// exibe a média 
//-----------------------------------------------------------------------

//usamos o for para fazer a contagem até o 20 e estamos incrementado +1
for (let i = 0; i <= 20; i++) {
    console.log(i);

}

//------------------------------------------------------------------
//usamos o for para fazer a contagem até o 200 e estamos incrementado +5
for (let i = 0; i <= 200; i = i + 5) {
    console.log(i);

}
//------------------------------------------------------------------


//------------------------------------------------------------------
//usamos o for para fazer a tabuada do 2 
for (let i = 1; i <= 10; i++) {
    console.log(2 + " x " + i + " = " + i * 2);

}
//------------------------------------------------------------------

//------------------------------------------------------------------
//Usuário digita o número da tabuada e o código faz a soma e exibe no console//
console.log("-----------------------------")

let numero1 = prompt("Digite um número para exibir a tabuada");
for (let i = 1; i <= 10; i++) {
    console.log(numero1 + " x " + i + " = " + numero1 * i);

}
//------------------------------------------------------------------

//------------------------------------------------------------------

console.log("-----------------------------")

//Conta a quantidade de vezes que repeti um nome//
let animaisParaAdocao = ["gato", "cachorro", "papagaio", "cachorro", "leão", "peixe", "cachorro"];
let contador = 0;

/*Laço de repetição para contar a quantidade de cachorros 
usamos o if para estabelecer uma condição, só vai somar quando o elemento atribuido na variavel 
animaisParaAdocao seja igual a cachorro */
for (let i = 0; i < animaisParaAdocao.length; i++) {
    if (animaisParaAdocao[i] == "cachorro") {
        contador = contador + 1
    }
}
//exibe no console a quantidade de cachorros no array
console.log("No petshop tem ", contador, "🐶cachorrinhos");

//------------------------------------------------------------------

/*2. Você foi resposavel por criar um software que analiza a idade dos clientes
para entrar no cinema, no final do dia o seu programa deve exibir 
a quantidade de menores de idade que passaram na fila */

let idade = [15, 27, 18, 13, 23, 19, 12, 16];// array com a idade dos cliente 
let menores = 0; //variavel para contagem de menores 

/*laço de repetição com uma condição para contar 
a quantidade de menores que foram ao cinema  */
for (let i = 0; i <= idade.length; i++) {
    if (idade[i] < 18) {
        menores++
    }
}

//exibe no conosle a quantidade de menores que foram ao cinema 
console.log("Menores que foram ao cinema:", menores);

//------------------------------------------------------------------


/*3. Conrolador de despesas

- Se o valor menor que 100 é uma despesa pequena
- Se o valor entre 100 e 500 é uma despesa média
- Se o valor maior que 500 é uma despesa grande

*/

let despesas = [45, 100, 233, 95, 300, 200, 220, 999];
let pequena = 0
let media1 = 0
let grande = 0

for (let i = 0; i < despesas.length; i++) {
    if (despesas[i] < 100) {
        pequena++
    }

    else if (despesas[i] >= 100 && despesas[i] <= 500) {
        media1++
    }

    else {
        grande++
    }
}

console.log("Despesas pequenas:", pequena);
console.log("Despesas médias:", media1);
console.log("Despesas grandes:", grande);