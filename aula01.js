//soma dos números 1 até n
// function soma(n){
//     if(n === 1){
//         return 1
//     } else {
//         return n + soma(n-1)
//     }
// }
// console.log(soma(10))

// //Fibonacci recursivo
// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(6)); // Saída: 8


// let categorias = [
//     {
//         id: 1,
//         nome: "Eletrônicos",
//         filhos: [
//             {id: 2, nome: "Celulares", filhos: []},
//             {id: 3, nome: "Computadores", filhos: [
//               {id: 4, nome: "Tablets", filhos: []}
//             ]},
//         ]
//     },
//     {
//         id: 5, 
//         nome: "Louças",
//         filhos: []
//     }
// ]

// function listarCategorias(categorias) {
//     categorias.forEach(categoria => {
//         console.log(categoria.nome);
//         if (categoria.filhos.length > 0) {
//             listarCategorias(categoria.filhos);
//         }
//     });
// }

// listarCategorias(categorias);




// let idade = prompt("Digite sua idade:")

// if(idade >= 18){
//     console.log("Você é maior de idade")
// }else{
//     console.log("Você é menor de idade")
// }

// Peça um número de 1 a 7 (representando dias da semana).

// Mostre no console o nome do dia correspondente:

// 1 = Domingo

// 2 = Segunda

// 3 = Terça

// 4 = Quarta

// 5 = Quinta

// 6 = Sexta

// 7 = Sábado

// Se o número não estiver entre 1 e 7, mostre "Dia inválido".

// Dica: Use switch para resolver.

// let dia = Number(prompt("Digite um número de 1 a 7:"));

// switch (dia) {
//     case 1:
//         console.log('Domingo');
//         break;
//     case 2:
//         console.log('Segunda-feira');
//         break;
//     case 3:
//         console.log('Terça-feira');
//         break;
//     case 4:
//         console.log('Quarta-feira');
//         break;
//     case 5:
//         console.log('Quinta-feira');
//         break;
//     case 6:
//         console.log('Sexta-feira');
//         break;
//     case 7:
//         console.log('Sábado');
//         break;
//     default:
//         console.log('Dia inválido');
// }


// Crie um programa que conte de 1 até 10 e exiba cada número no console. Use o laço for.

// for (let i = 10; i >= 1; i--) {
//     console.log("Contagem: " + i);
// }

//  Crie um programa que peça ao usuário um número e exiba a contagem de 0 até esse número no console, usando while.


// let numero = Number(prompt("Digite um número:"));
// let i = 0;

// while (i <= numero) {
//     console.log("Contagem: " + i);
//     i++;
// }

// Crie um programa que peça um número e exiba a contagem de 0 até esse número usando do...while.

// let i = 0
// do{
// console.log("Contagem: " + i)
// i++
// }while(i <= 10)

//  Crie um array com 5 nomes de pessoas.
// let nomes = ["Victor", "Gabriela", "Bento", "Ingrid", "Jonathan"]

// console.log(nomes[0])
// console.log(nomes[1])
// console.log(nomes[2])
// console.log(nomes[3])
// console.log(nomes[4])
// console.log(nomes.length)

// for(let i = 0; i < nomes.length; i++){
//     console.log(nomes)
// }

// for (let nome of nomes) {
//     console.log(nome);
// }

// Crie um array com 5 números. Some todos os números e exiba o resultado no console.
// let valor = [1, 2, 6, 10, 100]
// let soma = 0

// for (let i = 0; i < valor.length; i++){
//     soma += valor[i]
// }
// console.log("A soma dos valores é: ", soma)

// Crie um array com quantos números quiser. O programa deve:
// 🔸 Somar todos os números.
// 🔸 Calcular a média dos números.
// 🔸 Exibir no console:
// A soma total.
// A média dos números.

// let numero = [50, 2, 3, 120, 1]
// let soma = 0 


// for (let i = 0; i < numero.length; i++) {
//     soma += numero[i]
// }
// let media = soma / numero.length

// console.log("A soma dos números é:", soma)
// console.log("A média dos números é:", media)


//1º Desafio: ➝ Encontrar o maior e o menor valor do array

let numeros = [50, 150, 0.5, 4567, 600, 265]

let maior = numeros[0]
let menor = numeros[0]

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i]
    }
    if (numeros[i] < menor){
        menor = numeros[i]
    }
}
console.log(`O maior é ${maior} e o menor é ${menor}`)

//2º Desafio: ➝ Receber números do usuário, calcular soma, média, maior e menor
let quantidade = Number(prompt("Quantos números você quer digitar?"));
let numeros = [];

for (let i = 0; i < quantidade; i++) {
    let valor = Number(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(valor);
}

// Inicializa variáveis
let soma = 0;
let maior = numeros[0];
let menor = numeros[0];

// Processa os números
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];

    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

let media = soma / numeros.length;

// Exibe os resultados
console.log("Números digitados:", numeros);
console.log("A soma dos números é:", soma);
console.log("A média dos números é:", media);
console.log("O maior número é:", maior);
console.log("O menor número é:", menor);
