window.onload = function() {
    var elementosARemover = document.getElementsByClassName("elemento-a-remover");
    for (var i = 0; i < elementosARemover.length; i++) {
        if (window.innerWidth <= 992) { 
            elementosARemover[i].parentNode.removeChild(elementosARemover[i]);
        }
    }
};