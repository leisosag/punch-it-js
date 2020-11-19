const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum.";

filtrar = (texto) => {
  let blanco = 0;

  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case " ":
        blanco++;
    }
  }

  return blanco;
};

const espaciosBlancos = filtrar(texto);

document.write(texto);
document.write(`<br> El texto tiene ${espaciosBlancos} espacios en blanco`);
