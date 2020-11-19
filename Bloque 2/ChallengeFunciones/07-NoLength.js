const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum.";

contar = (texto) => texto.length;

document.write(texto);
document.write(`<br> El texto tiene: ${contar(texto)} caracteres`);
