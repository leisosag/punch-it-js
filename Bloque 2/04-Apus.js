const producto = prompt("Ingresa el nombre del producto");
const cant = parseInt(prompt(`Ingresa la cantidad de productos que llevas`));
const precio = parseInt(prompt(`Cual es el precio de cada uno?`));

const total = cant * precio;

document.write(
  `Gracias por comprar ${cant} unidades de ${producto}. Total a abonar: $${total}`
);
