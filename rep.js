// tarefas repetitivas

function repetir()
{
 
    var texto = document.getElementById("valor");
    var resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // limpa o div
    
    var vezes = 5;
    var atual = 0;

    while (atual < vezes)
    {
        resultado.innerHTML +=  "<br>" + texto.value;
        
        atual++; // incrementa o contador em 1
    } 

    
    for (var contador = 0; contador < vezes; contador++)
    {
        resultado.innerHTML +=  "<br>" + texto.value;
    }
}