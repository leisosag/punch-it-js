const msj = prompt("Ingresa el mensaje a cifrar");

let msjCifrado = "";

cifrar = (msj, despl = 3) => {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const abcArr = abc.split("");

  for (let i = 0; i < msj.length; i++) {
    for (let j = 0; j < abcArr.length; j++) {
      if (msj[i] === abcArr[j]) {
        abcArr[j + despl] === undefined
          ? (msjCifrado += abcArr[j - (abcArr.length - despl)])
          : (msjCifrado += abcArr[j + despl]);
      }
    }
  }
  return msjCifrado;
};

const cifrarUnicode = (msj, despl = 3) => {
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
  return (msjCifradoUni = cifradoArr.join(""));
};

cifrar(msj);
cifrarUnicode(msj);

document.write("Cifrado con for anidados");
document.write(`<br> Mensaje original: ${msj.toUpperCase()}`);
document.write(`<br> Mensaje cifrado: ${msjCifrado.toUpperCase()}`);

document.write(`<br> ----- <br>`);
document.write(`Cifrado con código unicode`);
document.write(`<br> Mensaje original: ${msj.toUpperCase()}`);
document.write(`<br> Mensaje cifrado: ${msjCifradoUni}`);
