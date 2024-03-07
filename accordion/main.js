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
            thisQuestion.find("dd").slideUp(function(){
                thisQuestion.closest("dl").removeClass("open");
            });
        } else{
            thisQuestion.find("dd").slideDown(function(){
                thisQuestion.closest("dl").addClass("open");
            });
        }
        //fechar outras perguntas abertas
        if(thisQuestion.siblings().is(".open")){
            console.log("sim");
            thisQuestion.siblings(".open").find("dd").slideUp(function(){
                thisQuestion.closest(".open").removeClass("open");
            });
        }
    });
});