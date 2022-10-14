let name = document.getElementById("name");
let number = document.getElementById("telNumber");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", logIn);
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
function logIn(e) {
  e.preventDefault();
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  e.preventDefault();
  if (
    name.value != "" &&
    number.value != "" &&
    gmail.value != "" &&
    password.value != ""
  ) {
    if (usuarios.some((user) => user.nombre === name.value)) {
      Swal.fire(
        "Oooops",
        "El nombre de usuario ya esta en uso, ponte uno mas cool",
        "error",
        "Ok"
      );
      return;
    } else {
      location.href = "home.html";
      localStorage.setItem("nombre", name.value);
      localStorage.setItem("telefono", number.value);
      localStorage.setItem("gmail", gmail.value);
      localStorage.setItem("contraseña", password.value);
    }

    const nuevoUsuario = {
      nombre: name.value,
      telefono: number.value,
      mail: gmail.value,
      pass: password.value,
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios)); //guardamos todo el array, no los datos individuales
  } else {
    Swal.fire(
      "Oooops",
      "Parece que se te ha escapado llenar un campo, todos son obligatorios",
      "info",
      "Ok"
    );
  }
}
