let alumnos = [];
let notas = [];
let alumnosMayor = [];
let alumnosMenor = [];
let alumno = "";
let nota = 0;
let cantA = 0;
let cantP = 0;
let cantD = 0;
let aprobados = 0;
let desaprobados = 0;
let cant = 0;
let par = 0;
let impar = 0;

do {
  alumno = prompt("Ingresa el nombre de un alumno");
  alumnos.push(alumno);

  if (alumno != "") {
    nota = parseInt(prompt("Ingresa su nota"));
    notas.push(nota);
    nota % 2 === 0 ? par++ : impar++;

    if (nota >= 8) {
      cantP++;
      aprobados += nota;
      alumnosMayor.push(alumno);
    } else if (nota >= 6) {
      cantA++;
      aprobados += nota;
    } else {
      desaprobados += nota;
      cantD++;
      alumnosMenor.push(alumno);
    }
  }
} while (alumno != "");

const alumnosFiltro = alumnos.filter((e) => e != "");

const alfabetico = (arr) => {
  return arr.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  });
};

const promA = Math.round(aprobados / (cantP + cantA));
const promD = Math.round(desaprobados / cantD);

document.write(`Cantidad de alumnos cargados: ${alumnosFiltro.length} <br>`);
document.write(`Cantidad de alumnos aprobados: ${cantA} <br>`);
document.write(`Cantidad de alumnos promocionados: ${cantP} <br>`);
document.write(`Alumnos con mayor nota: ${alumnosMayor} <br>`);
document.write(`Alumnos con menor nota: ${alumnosMenor} <br>`);
document.write(`Media de aprobados: ${promA} <br>`);
document.write(`Media de desaprobados: ${promD} <br>`);
document.write(`Alumnos: ${alfabetico(alumnosFiltro)} <br>`);
document.write(`Cantidad de notas pares: ${par} <br>`);
document.write(`Cantidad de notas impares: ${impar} <br>`);
