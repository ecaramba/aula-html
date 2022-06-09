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
        resultado.innerHTML = resultado.innerHTML + "<br>" + texto.value;
        
        atual = atual + 1;
    } 
}