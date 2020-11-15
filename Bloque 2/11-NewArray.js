let array = [];

for (let i = 0; i < 5; i++) {
  const numero = 1 + Math.round(Math.random() * 1000);
  array.push(numero);
}
let suma = array[3] + array[4];

document.write(
  `El vector es: ${array} <br> La suma de ${array[3]} + ${array[4]} es ${suma}`
);
