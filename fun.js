// E -> P -> S

function soma(n1, n2)
{
    var total = parseInt(n1) + parseInt(n2);
    return total;
}


function clique()
{
    var num1 = prompt("Digite o num 1");
    var num2 = prompt("Digite o num 2");

    var resultado = soma(num1, num2);

    console.log(resultado);
}

function somar()
{
    var input1 = document.getElementById("num1");
    console.log(input1.value);

    var resultado = document.getElementById("resultado");
    
    

}