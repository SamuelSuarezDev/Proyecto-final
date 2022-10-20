let saludo = document.getElementById("hello");
let nombre = localStorage.getItem("nombre");
const formulario = document.getElementById("formulario");
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
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Bienvenido " + nombre,
    showConfirmButton: false,
    timer: 1500,
  });
}
formulario.addEventListener("submit", enviarFormulario);
cortar();
class Trans {
  constructor(numero, cantidad, metodo, mensaje) {
    this.telefono = numero;
    this.cantidad = cantidad;
    this.forma = metodo;
    this.mensa = mensaje;
  }
}

async function enviarFormulario(ev) {
  // el formulario ya no enviará los datos, lo haremos nosotros mediante AJAX
  ev.preventDefault();
  enviarFormulario.enviando = true;
  var result = document.querySelector(".form-msg");
  var datos = new FormData(formulario);
  datos.append("otro-dato", "valor");
  var init = {
    method: formulario.method,
    body: datos,
  };
  try {
    var response = await fetch(formulario.action, init);
    if (response.ok) {
      var respuesta = await response.json();
      formulario.reset();
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {}
  enviarFormulario.enviando = false;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", enviarFormulario);
});
