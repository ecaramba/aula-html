// jquery

$(document).ready(
    function(){
        
        $("#btn").click(function(){
            
            var cor = $("#cores").val();

            $('.teste').css('color', cor);

        }); // #btn.click

        // evento -> handler -> callback
        $("h1, .teste").click(function(){
            
            // this -> aquele que disparou o evento
            $(this).slideUp();
        });

    } // function
);