let nombre = localStorage.getItem("nombre");
const formulario = document.getElementById("formulario");
let today = new Date();
let pais = document.getElementById("country");
let numero = document.getElementById("email");
let precio = document.getElementById("precio");
let metodo = document.getElementById("method");
let mensaje = document.getElementById("message");
formulario.addEventListener("submit", transaccion);
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
let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
cortar();
for (const consigne of transacciones) {
  let hprecio = document.getElementById("cantidad");
  hprecio.innerText = "Cantidad: " + consigne.cantidad;
  let hnumero = document.getElementById("telefono");
  hnumero.innerText = "Numero a consignar: " + consigne.telefono;
  let hmetodo = document.getElementById("metodo");
  hmetodo.innerText = "Método: " + consigne.forma;
  let hmensaje = document.getElementById("mensaje");
  hmensaje.innerText = "Mensaje: " + consigne.mencion;
  let fecha = document.getElementById("fecha");
  fecha.innerText = consigne.fecha;
  let transfer = document.getElementById("transfer");
  let section = document.getElementById("section");
  let clone = transfer.cloneNode(true);
  section.appendChild(clone);
}
async function transaccion(ev) {
  ev.preventDefault();
  if (
    numero.value != "" &&
    precio.value != "" &&
    metodo.value != "" &&
    mensaje.value != ""
  ) {
    transaccion.enviando = true;
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
        form.reset();
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {}
    transaccion.enviando = false;

    const nuevaTransacción = {
      fecha: today.toLocaleString(),
      persona: nombre.value,
      telefono: numero.value,
      cantidad: precio.value,
      forma: metodo.value,
      mencion: mensaje.value,
    };
    transacciones.push(nuevaTransacción);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
    let hprecio = document.getElementById("cantidad");
    hprecio.innerText = "Cantidad: " + precio.value;
    let hnumero = document.getElementById("telefono");
    hnumero.innerText = "Numero a consignar: " + numero.value;
    let hmetodo = document.getElementById("metodo");
    hmetodo.innerText = "Método: " + metodo.value;
    let hmensaje = document.getElementById("mensaje");
    hmensaje.innerText = "Mensaje: " + mensaje.value;
    let fecha = document.getElementById("fecha");
    fecha.innerText = today.toLocaleString();
    let transfer = document.getElementById("transfer");
    let clone = transfer.cloneNode(true);
    let section = document.getElementById("section");
    section.appendChild(clone);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Listo tu consigne",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire(
      "Oooops",
      "Parece que se te ha escapado llenar un campo, todos son obligatorios",
      "info",
      "Ok"
    );
  }
}
