$(document).ready(function(){
    //gravar seletores em variaveis
    var question = $("dl");
    var title = $("dt");
    var description = $("dd");

    //esconder respostas
    description.hide();
    question.on("click", function(){
        //abrir pergunta selecionada
        $(this).find("dd").slideDown(function(){
            $(this).closest("dl").addClass("open");
        });
        //fechar outras perguntas abertas
        if($(this).sliblings().is(".open")){
            console.log("sim");
            $(this).sliblings(".open").find("dd").slideUp(function(){
                $(this).closest(".open").removeClass("open");
            });
        };
    });
});