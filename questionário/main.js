$(document).ready(function(){
    $("form").on("submit", function(event){
        //prevenir que pagina do action seja carregada
        event.preventDefault();
        //guarda array com respostas selecionadas
        var answers = $("input:checked");
        var matrix = {
            "quest1": "bmw",
            "quest2": "francesinha",
            "quest3": "vav",
            "quest4": "mini",
            "quest5": "agua",
            "quest6": "honda"
        };
    });
});