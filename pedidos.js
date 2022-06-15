
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

$("#bt-confirmar").click(function(){
    
    var nome = $("#nome-cliente").val();
    var email = $("#email").val();
    var cpf = $("#cpf").val();
    var telefone = $("#telefone").val();

    console.log(nome, email, cpf, telefone);

    $("#nome-cliente, #email, #telefone").removeClass('is-invalid');

    if (nome == "" )
    {
        $("#nome-cliente").addClass('is-invalid');
    }

    if (email == "")
    {
        $("#email").addClass('is-invalid');
    }

    if (telefone == "")
    {
        $("#telefone").addClass('is-invalid');
    }

})

$(document).ready(function(){
    $("#cpf").mask("000.000.000-00");
});

