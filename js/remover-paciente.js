var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classLista.add("fadeOut");

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 700);
})
