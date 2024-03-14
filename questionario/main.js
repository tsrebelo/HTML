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
            var thisV = $(this);
            var quest = thisV[0]["name"];
            var answers = thisV[0]["id"];
            console.log(name +" - "+ id);
            //validar se as respostas correspondem a matrix
            if(matrix[quest] == answers){
                console.log("CORRETO");
            } else {
                console.log("ERRADO");
            }
        });
    });
});     