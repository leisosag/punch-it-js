const texto = "hola mundo";

capitalize = (texto) => {
  const palabras = texto.split(" ");
  const capitalized = [];

  palabras.forEach((palabra) => {
    return capitalized.push(palabra.charAt(0).toUpperCase() + palabra.slice(1));
  });

  return capitalized;
};

const convertirPalabra = capitalize(texto);

document.write(texto);
document.write(`<br> ${convertirPalabra.join(" ")}`);
