// const color = document.getElementById("colorfondo");

// color.addEventListener("change", () => {
//   switch (color.value) {
//     case "rojo":
//       document.body.style.backgroundColor = "red";
//       break;
//     case "azul":
//       document.body.style.backgroundColor = "blue";
//       break;
//     case "verde":
//       document.body.style.backgroundColor = "green";
//       break;
//     default:
//       document.body.style.backgroundColor = "white";
//   }
// });

// ///////////////////////////////////////////////////////////////

// const paso = document.getElementById("peligro");
// const accion = document.getElementById("accion");

// paso.addEventListener("change", () => {
//   switch (paso.value) {
//     case "verde":
//       accion.textContent = "Adelante";
//       accion.style.color = "green";
//       break;
//     case "amarillo":
//       accion.textContent = "CUIDAOOO!";
//       accion.style.color = "darkgoldenrod";
//       break;
//     case "rojo":
//       accion.textContent = "PARA LOCO!!";
//       accion.style.color = "red";
//       break;
//     default:
//       accion.textContent = "";
//   }
// });

///////////////////////////////////////////////////////////////

const dia = document.getElementById("dias");
const diaresultado = document.getElementById("dia_result");
const comprobardia = document.getElementById("comprobar_dia");

comprobardia.addEventListener("click", () => {
  switch (dia.value) {
    case "1":
      diaresultado.textContent = "Lunes";
      break;
    case "2":
      diaresultado.textContent = "Martes";
      break;
    case "3":
      diaresultado.textContent = "Miércoles";
      break;
    case "4":
      diaresultado.textContent = "Jueves";
      break;
    case "5":
      diaresultado.textContent = "Viernes";
      break;
    case "6":
      diaresultado.textContent = "Sábado";
      break;
    case "7":
      diaresultado.textContent = "Domingo";
      break;
    default:
      diaresultado.textContent = "Solo hay 7 dias espabilao";
  }
});

//////////////////////////////////////////////////////////////

const fruta = document.getElementById("inputfruta");
const botonfruta = document.getElementById("comprobar_fruta");
const resultadfruta = document.getElementById("fruta_result");

botonfruta.addEventListener("click", () => {
  switch (fruta.value) {
    case "manzana":
    case "pera":
      resultadfruta.textContent = "Fruta de arbol";
      break;
    case "fresa":
    case "arandano":
      resultadfruta.textContent = "Bayas";
      break;
    default:
      resultadfruta.textContent = "ONVNI";
  }
});

//////////////////////////////////////////////////////////////

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const gradiente = document.getElementById("gradiente");

color1.addEventListener("change", () => {
  switch (color1.value) {
    case "red":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
    case "yellow":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
    case "black":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
  }
});

color2.addEventListener("change", () => {
  switch (color2.value) {
    case "blue":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
    case "pink":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
    case "brown":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
  }
});

color3.addEventListener("change", () => {
  switch (color3.value) {
    case "green":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
    case "purple":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
    case "orange":
      gradiente.style.background = `linear-gradient(360deg, ${color1.value}, ${color2.value}, ${color3.value}) no-repeat fixed`;
      break;
  }
});

//////////////////////////////////////////////////////////////

const planes = document.getElementById("planes");
const planresult = document.getElementById("plan_result");

planes.addEventListener("change", () => {
  switch (planes.value) {
    case "netflix":
      planresult.style.backgroundImage =
        "url('https://cinemafaith.com/wp-content/uploads/2016/03/netflix-2-final-2-1050x438.jpg')";
      break;
    case "beber":
      planresult.style.backgroundImage =
        "url('https://media.tenor.com/kx7rBXETdAYAAAAM/steve-harvey-drunk.gif')";
      break;
    case "videojuegos":
      planresult.style.backgroundImage =
        "url(https://i.ytimg.com/vi/NpdlIwhoDCU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPiPFCWzfzb3-eQqQb_tZlDbPTzw)";
      break;
    case "futbol":
      planresult.style.backgroundImage =
        "url(https://pbs.twimg.com/media/EuQmL2kXcAIWWGL.jpg)";
      break;
    default:
      planresult.style.backgroundImage = "none";
  }
});

//////////////////////////////////////////////////////////////

const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const operador = document.getElementById("operacion");
const botoncalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado_operacion");

botoncalcular.addEventListener("click", () => {
  const num1 = parseFloat(numero1.value);
  const num2 = parseFloat(numero2.value);
  switch (operador.value) {
    case "suma":
      resultado.textContent = `Resultado: ${num1 + num2}`;
      break;
    case "resta":
      resultado.textContent = `Resultado: ${num1 - num2}`;
      break;
    case "multiplicacion":
      resultado.textContent = `Resultado: ${num1 * num2}`;
      break;
    case "division":
      if (num2 !== 0) {
        resultado.textContent = `Resultado: ${num1 / num2}`;
      } else {
        resultado.textContent = "Error: División por cero";
      }
      break;
    default:
      resultado.textContent = "Operación no válida";
  }
});

/////////////////////////////////////////////////////////////

const nota = document.getElementById("nota");
const nota_result = document.getElementById("nota_result");

nota.addEventListener("change", () => {
  const valorNota = parseFloat(nota.value);
  switch (true) {
    case valorNota >= 0 && valorNota < 5:
      nota_result.textContent = "Insuficiente";
      break;
    case valorNota >= 5 && valorNota < 7:
      nota_result.textContent = "Suficiente";
      break;
    case valorNota >= 7 && valorNota < 9:
      nota_result.textContent = "Bien";
      break;
    case valorNota >= 9 && valorNota <= 10:
      nota_result.textContent = "Sobresaliente";
      break;
    default:
      nota_result.textContent = "Nota no válida";
  }
});
