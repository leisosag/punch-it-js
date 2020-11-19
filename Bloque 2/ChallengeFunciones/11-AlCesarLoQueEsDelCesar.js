const texto = "ABC";

const convertir = (msj, despl = 3) => {
  const textoArr = msj.split("");
  const descifradoArr = [];

  for (let i = 0; i < textoArr.length; i++) {
    let letra = textoArr[i].charCodeAt() + despl;
    descifradoArr.push(String.fromCharCode(letra));
  }
  return (msjDescifrado = descifradoArr.join(""));
};

convertir(texto);
document.write(`Mensaje original: ${texto}`);
document.write(`<br> Mensaje descifrado: ${msjDescifrado}`);
