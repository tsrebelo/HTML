/**
*Código principal de jQuery
*/
/**
 * Para selecionar um elemento em jQuery
 * $(elemento)
 * 
 * Para selecionar um documento todo
 * $(document)
 * 
 * Para selecionar tudo dentro do body
 * $("body")
 * 
 * Para selecionar um id (exemplo id = "main")
 * $("#main")
 * 
 * Para selecionar uma class (exemplo class = "row")
 * $(".row")
 */
$(document).ready(function(){
    console.log("O documento está pronto");

    $("input, textarea").on("focusin focusout", function(event){
        // $(this) refere-se ao elemento selecionado no browser
        $(this).toggleClass("border-form");
        //mostrar detalhes do evento na consola
        console.log(event);
    });    
    
    //quando o formulario for submetido
    $("#loader").hide(); // esconde o "Loading..."
    $("form").on("submit", function(event){
        //log que o evento aconteceu
        console.log("submit");
        //prevenir sçso default = que a pagina seja recarregada
        event.preventDefault();
        //mostrar o "Loading..."
        $("#loader").fadeIn(5000, function(){ //milisegundos do fadeÎn
            console.log("fadeIn completo");
            $(this).find("span").text("Registo evetuado.");
            //funcionamento do botao fechar
            $(this).find('.close').on("click", function(){
                $("#loader").fadeOut(500);
            });
        }); 
    });

});
    