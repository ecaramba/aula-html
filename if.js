// Idade
// Pedir a idade na pessoa e informar se:
// 0-12 - Criança
// 13-18 - adolecente
// 19-60 - Adulto
// > 60 - Idoso

// 250
var idade = prompt("Digite sua idade");

// || -> OU
// && -> E

if (idade > 100 || idade < 0)
{
    console.log("idade invalida");

} else if(idade < 12)
{
    console.log("Criança");
} else if (idade < 18)
{
    console.log("Adolescente");
} else if (idade < 60)
{
    console.log("Adulto");
} else 
{
    console.log("Idoso");
}

