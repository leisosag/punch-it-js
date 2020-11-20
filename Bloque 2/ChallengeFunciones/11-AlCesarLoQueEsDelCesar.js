const msj = "abcdefghijklmnopqrstuvwxyz";

const cifrar = (msj, despl = 3) => {
  const msjArr = msj.toUpperCase().split("");
  const cifradoArr = [];

  for (caract of msjArr) {
    let letra = "";

    if (caract.charCodeAt() < 65 || caract.charCodeAt() > 90) {
      cifradoArr.push(caract);
    } else if (caract.charCodeAt() >= 88) {
      letra = caract.charCodeAt() - (26 - despl);
    } else {
      letra = caract.charCodeAt() + despl;
    }
    cifradoArr.push(String.fromCharCode(letra));
  }

  return (msjCifrado = cifradoArr.join(""));
};

cifrar(msj);
document.write(`Mensaje original: ${msj.toUpperCase()}`);
document.write(`<br> Mensaje cifrado: ${msjCifrado}`);
