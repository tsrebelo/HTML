$(document).ready(function(){
    //gravar seletores em variaveis
    var question = $("dl");
    var title = $("dt");
    var description = $("dd");

    //esconder resposta
    description.hide();
    question.on("click", function(){
        var thisQuestion = $(this);
        //abrir ou fechar a pergunta seleccionada
        if(thisQuestion.is(".open")) { //se ja estiver aberta:
            thisQuestion.removeClass("open").find("dd").slideUp();
        } else { //caso contrario    (se nao esta aberta):
            thisQuestion.addClass("open").find("dd").slideDown();
        }
        //fechar outras perguntas abertas
        if(thisQuestion.siblings(".open")) {
            thisQuestion.siblings(".open").find("dd").slideUp(function(){
                $(this).closest(".open").removeClass("open");   
             });
        }
    });
});