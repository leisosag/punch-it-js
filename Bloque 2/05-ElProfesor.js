const nota1 = parseInt(prompt("Ingresa la primera nota"));
const nota2 = parseInt(prompt("Ingresa la segunda nota"));
let notaMax = 0;

const total = nota1 + nota2;
const promedio = total / 2;

nota1 > nota2 ? (notaMax = nota1) : (notaMax = nota2);

console.log(
  `La suma de las notas es ${total}, el promedio es ${promedio} y la nota máxima es ${notaMax}`
);
