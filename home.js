let saludo = document.getElementById("hello");
let nombre = localStorage.getItem("nombre");
let formulario = document.getElementById("formulario");
let transacciones = localStorage.setItem("transacciones", []);
let numero = document.getElementById("numero");
let precio = document.getElementById("precio");
let metodo = document.getElementById("method");
let mensaje = document.getElementById("message");
function cortar() {
  let nombresincortar = nombre;
  let nombrecortado = nombresincortar.split(" ");
  let primernombre = nombrecortado[0];
  hello.innerText = "Hola " + primernombre;
}
cortar();
formulario.addEventListener("submit", transf);
class Trans {
  constructor(numero, cantidad, metodo, mensaje) {
    this.telefono = numero;
    this.cantidad = cantidad;
    this.forma = metodo;
    this.mensa = mensaje;
  }
}
function transf(e) {
  e.preventDefault();
}
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Bienvenido " + nombre,
  showConfirmButton: false,
  timer: 1500,
});
