const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum.";

filtrar = (texto) => {
  let blanco = 0;

  for (letra of texto) {
    switch (letra) {
      case " ":
        blanco++;
    }
  }

  return blanco;
};

const espaciosBlancos = filtrar(texto);

document.write(texto);
document.write(`<br> El texto tiene ${espaciosBlancos} espacios en blanco`);
