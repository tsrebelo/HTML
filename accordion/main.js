$(document).ready(function(){
    //gravar seletores em variaveis
    var question = $("dl");
    var title = $("dt");
    var description = $("dd");

    //esconder respostas
    description.hide();
    question.on("click", function(){
        var thisQuestion = $(this);
        //abrir pergunta selecionada
        if(thisQuestion.is(".open")){ //se já estiver aberta faz:
            thisQuestion.removeClass("open").find("dd").slideUp();
        } else{
            thisQuestion.addClass("open").find("dd").slideDown(function(){
                if(thisQuestion.siblings(".open")){
                    thisQuestion.siblings(".open").removeClass("open");
                }
            });
        }
        //fechar outras perguntas abertas
        if(thisQuestion.siblings().is(".open")){
            thisQuestion.siblings(".open").find("dd").slideUp(function(){
                thisQuestion.closest(".open").removeClass("open");
            });
        }
    });
});