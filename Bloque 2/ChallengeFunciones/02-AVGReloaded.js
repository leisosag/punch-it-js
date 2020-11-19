const calcularProm = (a, b, c) => {
  const total = a + b + c;
  return Math.round(total / 3);
};

document.write(`El promedio es: ${calcularProm(5, 10, 8)}`);
