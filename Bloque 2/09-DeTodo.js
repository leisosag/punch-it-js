const base = parseInt(prompt("Ingresa un número"));
let sumaTotal = 0;
let suma = "";

for (let i = 1; i <= 10; i++) {
  let producto = base * i;
  sumaTotal += producto;

  document.write(`${base} * ${i} = ${producto} <br>`);

  i < 10 ? (suma += `${producto} + `) : (suma += `${producto}`);
}

document.write(`<br> ${suma} = ${sumaTotal}`);
