let nombre = localStorage.getItem("nombre");
let formulario = document.getElementById("formulario");
let today = new Date();
let pais = document.getElementById("country");
let numero = document.getElementById("email");
let precio = document.getElementById("precio");
let mensaje = document.getElementById("message");
formulario.addEventListener("submit", transaccionIn);
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
  let hnumero = document.getElementById("mail");
  hnumero.innerText = "Email: " + consigne.email;
  let hmensaje = document.getElementById("mensaje");
  hmensaje.innerText = "Mensaje: " + consigne.mencion;
  let fecha = document.getElementById("fecha");
  fecha.innerText = consigne.fecha;
  let transfer = document.getElementById("transfer");
  let section = document.getElementById("section");
  let clone = transfer.cloneNode(true);
  section.appendChild(clone);
}
async function transaccionIn(ev) {
  ev.preventDefault();
  if (numero.value != "" && precio.value != "" && mensaje.value != "") {
    transaccionIn.enviando = true;
    let result = document.querySelector(".form-msg");
    let datos = new FormData(formulario);
    let init = {
      method: formulario.method,
      body: datos,
    };
    try {
      let response = await fetch(formulario.action, init);
      if (response.ok) {
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {}
    transaccionIn.enviando = false;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Listo tu consigne",
      showConfirmButton: false,
      timer: 1500,
    });
    const nuevaTransacción = {
      fecha: today.toLocaleString(),
      persona: nombre.value,
      cantidad: precio.value,
      mencion: mensaje.value,
    };
    transacciones.push(nuevaTransacción);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
    let hprecio = document.getElementById("cantidad");
    hprecio.innerText = "Cantidad: " + precio.value;
    let hnumero = document.getElementById("mail");
    hnumero.innerText = "Numero a consignar: " + numero.value;
    let hmensaje = document.getElementById("mensaje");
    hmensaje.innerText = "Mensaje: " + mensaje.value;
    let fecha = document.getElementById("fecha");
    fecha.innerText = today.toLocaleString();
    let transfer = document.getElementById("transfer");
    let clone = transfer.cloneNode(true);
    let section = document.getElementById("section");
    section.appendChild(clone);
  } else {
    Swal.fire(
      "Oooops",
      "Parece que se te ha escapado llenar un campo, todos son obligatorios",
      "info",
      "Ok"
    );
  }
}
