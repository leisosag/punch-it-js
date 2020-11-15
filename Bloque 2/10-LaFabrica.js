let contadorMin = 0;
let contadorMax = 0;
let contadorTotal = 0;

for (let i = 0; i < 5; i++) {
  const sueldo = parseInt(prompt("Ingrese un sueldo"));

  if (sueldo > 100 && sueldo < 300) {
    contadorMin++;
  }
  if (sueldo > 301) {
    contadorMax++;
  }

  contadorTotal += sueldo;
}

document.write(
  `${contadorMin} empleados ganan entre $100 y $300 <br> ${contadorMax} empleados ganan más de $300`
);
document.write(`<br> Se gasta en sueldos: $${contadorTotal}`);
