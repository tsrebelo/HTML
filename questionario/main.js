$(document).ready(function(){
    $("form").on("submit", function(event){
        //prevenir que pagina do action seja carregada
        event.preventDefault();
        //guarda array com respostas selecionadas
        var answers = $("input:checked");
        console.log(answers);
        var matrix = {
            "quest1": "bmw",
            "quest2": "francesinha",
            "quest3": "vav",
            "quest4": "mini",
            "quest5": "agua",
            "quest6": "honda"
        };
        answers.each(function(){
            var thisB = $(this);
            var name = thisB[0]["name"];
            var id = thisV[0]["id"];
            console.log(id);
        });
    });
});     