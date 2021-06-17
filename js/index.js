var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-pso");
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
}

if (altura <= 0 || altura > 3) {
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhvalido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

