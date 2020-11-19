const calcularMayor = (a, b, c) => {
  a > b ? (mayor = a) : (mayor = b);
  return mayor > c ? mayor : (mayor = c);
};

document.write(`El número mayor es: ${calcularMayor(15, 8, 10)}`);
