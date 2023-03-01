function calcularSalario(event) {
  event.preventDefault();
  const salario = parseFloat(document.getElementById("salario").value);
  const $salida = document.getElementById("test");
  const deduccionJubilacion = calculoJubilacion(salario);
  const deduccionObraSocial = calculoDeObraSocial(salario);
  const deduccion19032 = calculo19032(salario);
  const ganancias = calculoGan(salario);
  const nombre = prompt("Ingrese su Nombre: ");
  const apellido = prompt("Ingrese su Apellido: ");
  const otraVariableX = tipoGan(ganancias);
  const alicuota = [
    "Alicuota Ganancias Nula",
    "Alicuota Ganancias Baja",
    "Alicuota Ganancias Media",
    "Alicuota Ganancias Alta",
  ];

  $salida.innerText = "Desglose Sueldo de " + nombre + " " + apellido + "\n";
  $salida.innerText += "Ley 19032 (PAMI) AR$ " + deduccion19032 + "\n";
  $salida.innerText +=
    "Tu aporte de Jubilacion es de AR$ " + deduccionJubilacion + "\n";
  $salida.innerText +=
    "La deduccion por Obra Social es de AR$ " + deduccionObraSocial + "\n";
  $salida.innerText += "Tu tributo de Ganancias es de AR$ " + ganancias + "\n";
  for (var i = 0; i < alicuota.length; i++) {
    if (otraVariableX == alicuota[i]) {
      $salida.innerText += otraVariableX + "\n";
    }
  }
  $salida.innerText +=
    "Tu Sueldo Neto es de AR$ " +
    (salario - deduccionObraSocial - deduccionJubilacion - deduccion19032) +
    "\n";

  return false;
}

function calculoDeObraSocial(salario) {
  return salario * 0.03;
}

function calculoJubilacion(salario) {
  return salario * 0.11;
}

function calculo19032(salario) {
  return salario * 0.03;
}

function calculoGan(salario) {
  if (salario >= 440000 && salario <= 840000) {
    return salario * 0.09;
  }
  if (salario >= 840000 && salario <= 960000) {
    return salario * 0.15;
  }
  if (salario >= 960001) {
    return salario * 0.2;
  } else {
    return 0;
  }
}

function tipoGan(ganancias) {
  if (ganancias >= 10000 && ganancias <= 20000) {
    return "Alicuota Ganancias Baja";
  }
  if (ganancias >= 20001 && ganancias <= 30000) {
    return "Alicuota Ganancias Media";
  }
  if (ganancias >= 30001) {
    return "Alicuota Ganancias Alta";
  } else {
    return "Alicuota Ganancias Nula";
  }
}
