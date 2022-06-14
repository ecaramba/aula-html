
$("#bt-adicionar").click(function () 
{
    var codigo = $("#codigo").val();
    var nome = $("#nome-produto").val();
    var quant = $("#quantidade").val();

    var item = "<tr>"
        + "<td>"+ codigo +"</td>"
        + "<td>"+ nome +"</td>"
        + "<td>"+ quant +"</td>"
        + "</tr>";

    $("#produtos-cadastrados").append(item);
    $("#bt-cancelar").click();

    // limpar os inputs
    $("#codigo").val("");    


}); // fim do click

