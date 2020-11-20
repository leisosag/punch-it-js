const string = "hola";

separarLetras = (string) => {
  const letras = [];

  for (letra of string) {
    letras.push(letra);
  }

  return letras;
};

const dividirPalabra = separarLetras(string);

document.write(`<br> ${dividirPalabra}`);
