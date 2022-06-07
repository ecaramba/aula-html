// E -> P -> S

// algoritmo

var nome = "Edir"; // string
var idade = 24; // number - integer
var peso = 43.7; // Number - float
var acordado = true; // boolean 

// comentario 
// alert("Olá " + nome + "!");
// > - maior
// < - menor
// == - igual
// >= - maior ou igual
// <= - menor ou igual
// != - diferente

if ( idade > peso)
{
    console.log("verdade");
} else
{
    console.log("falso");
}

// var texto = prompt("digite algo");

// console.log(texto);

// exec 1
// peça 2 numeros e retorne o maior

// var num1 = prompt("Digite o num 1");
// var num2 = prompt("Digite o num 2");

// if (num1 > num2)
// {
//     console.log(num1)
// } else 
// {
//     console.log("O manior numero e: " + num2)
// }

// exec 2
// peça 3 numeros e dizer o maior e tmb o menor
//  num1 = 1 , 4 , 1 , 3
//  num2 = 2 , 3 , 5 , 1
//  num3 = 3 , 1 , 2 , 5

var num1 = prompt("Digite o num 1");
var num2 = prompt("Digite o num 2");
var num3 = prompt("Digite o num 3");

// Maior
if (num1 > num2)
{
    console.log("O numero: " + num1 + " é o maior");
} else 
{
    if (num2 > num3)
    {
        console.log("O numero: " + num2 + " é o maior");
    } else 
    {
        console.log("O numero: " + num3 + " é o maior");
    }
}

// Menor
if (num1 < num2)
{
    if (num1 < num3 )
    {
        console.log("O numero: " + num1 + " é o menor");
    } else 
    {
        console.log("O numero: " + num3 + " é o menor");
    }
    
} else 
{
    console.log("O numero: " + num2 + " é o menor");
}

