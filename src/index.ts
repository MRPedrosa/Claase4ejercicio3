rotulo1.innerHTML = "Introduce el numero:";
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
let numeroIngresado: number = (dato1.value);

if (numeroIngresado == 0){
  console.log("el numero es 0")
} else if (numeroIngresado%2 == 0){
  console.log ("el numero es par")
} else if (numeroIngresado %2 !=0){
  console.log ("el numero es impar")
}
