var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // validação

    var alturaEhValida = validaAltura(altura);
    var pesoEhvalido = validaPeso(peso);

    if (!pesoEhvalido) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        pesoEhvalido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
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
function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}