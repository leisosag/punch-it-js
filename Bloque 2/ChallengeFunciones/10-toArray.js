const string = "hola";

separarLetras = (string) => {
  const letras = [];

  for (let i = 0; i < string.length; i++) {
    letras.push(string[i]);
  }

  return letras;
};

const dividirPalabra = separarLetras(string);

document.write(`<br> ${dividirPalabra}`);
