let name = document.getElementById("name");
let number = document.getElementById("telNumber");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", logIn);
function logIn(e) {
  e.preventDefault();
  if (
    name.value != "" &&
    number.value != "" &&
    gmail.value != "" &&
    password.value != ""
  ) {
    if (
      localStorage.getItem("nombre") == "" &&
      localStorage.getItem("telefono") == "" &&
      localStorage.getItem("gmail") == "" &&
      localStorage.getItem("contraseña") == ""
    ) {
      location.href = "index.html";
      localStorage.setItem("nombre", name.value);
      localStorage.setItem("telefono", number.value);
      localStorage.setItem("gmail", gmail.value);
      localStorage.setItem("contraseña", password.value);
    } else {
      if (
        name.value === localStorage.getItem("nombre") &&
        number.value === localStorage.getItem("telefono") &&
        gmail.value === localStorage.getItem("gmail") &&
        password.value === localStorage.getItem("contraseña")
      ) {
        location.href = "index.html";
      } else {
        let alert = (document.getElementById("alert2").style.visibility =
          "visible");
      }
    }
  } else {
    let alert = (document.getElementById("alert").style.visibility = "visible");
  }
}
