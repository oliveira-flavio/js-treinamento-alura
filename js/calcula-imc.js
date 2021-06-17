var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // validação

    var alturaEhValida = true;
    var pesoEhvalido = true;

    if (peso <= 0 || peso > 600) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        pesoEhvalido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhvalido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}