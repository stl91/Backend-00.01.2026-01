  function ejercicio01() {
    const numeroUsuario = parseInt(prompt("Escribe tu numero"), 10);

    if (numeroUsuario > 99 && numeroUsuario < 1000) {
      alert("Si tiene 3 digitos");
    } else {
      alert("NO tiene 3 digitos");
    }
  }

  function ejercicio02(){
    const numero = parseInt (prompt ("Escribe tu numero"), 10);

    if (numero > 0){
        alert("Tu numero no es negativo")
    } else {}
        alert("Tu numero es negativo")

  }

  

function ejercicio03(){
    const numero = parseInt (prompt("Escribe tu numero"), 10);

    if (numero % 10 === 4){
        alert ("Tu numero termina en 4")
    }else {
        alert ("Tu numero no termina en 4")
    }

}

function ejercicio04() {
    const numero01 = parseInt(prompt("Ingresa primero numero"), 10);
    const numero02 = parseInt(prompt("Ingresa segundo numero"), 10);
    const numero03 = parseInt(prompt("Ingresar tercer numero"), 10);

    let mensaje = "";

    if (numero01 <= numero02 && numero01 <= numero03) {
      if (numero02 <= numero03) {
        mensaje = "El orden es " + numero03 + ", " + numero02 + ", " + numero01;
      } else {
        mensaje = "El orden es " + numero02 + ", " + numero03 + ", " + numero01;
      }
    }

    if (numero02 <= numero01 && numero02 <= numero03) {
      if (numero01 <= numero03) {
        mensaje = "El orden es " + numero03 + ", " + numero01 + ", " + numero02;
      } else {
        mensaje = "El orden es " + numero01 + ", " + numero03 + ", " + numero02;
      }
    }

    if (numero03 <= numero01 && numero03 <= numero02) {
      if (numero02 <= numero01) {
        mensaje = "El orden es " + numero01 + ", " + numero02 + ", " + numero03;
      } else {
        mensaje = "El orden es " + numero02 + ", " + numero01 + ", " + numero03;
      }
    }

    document.getElementById("resultado").textContent = mensaje;
  }

















