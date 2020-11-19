suma = () => {
  let total = 0;

  for (let i = 0; i < 5; i++) {
    const n = parseInt(prompt("Ingresa un numero"));
    total += n;
  }

  return total;
};

document.write(`La suma es: ${suma()}`);
