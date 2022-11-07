let name = document.getElementById("name");
let gmail = document.getElementById("email");
let password = document.getElementById("password");
let formulario = document.getElementById("formulario");
let codigo = document.getElementById("code");
formulario.addEventListener("submit", logIn);
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
async function logIn(e) {
  e.preventDefault();
  codigo.value = Math.ceil(Math.random() * 9999);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  e.preventDefault();
  if (name.value != "" && gmail.value != "" && password.value != "") {
    if (usuarios.some((user) => user.nombre === name.value)) {
      Swal.fire(
        "Oooops",
        "El nombre de usuario ya esta en uso, ponte uno mas cool",
        "error",
        "Ok"
      );
      return;
    } else {
      logIn.enviando = true;
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
      logIn.enviando = false;
      const { value: password } = await Swal.fire({
        title: "Verificando tu mail",
        input: "number",
        inputLabel:
          "hemos enviado un código a tu dirección de email, cópialo y pégalo aquí",
        inputPlaceholder: "Código",
        inputAttributes: {
          maxlength: 10,
        },
      });

      if (password === codigo.value) {
        location.href = "home.html";
        localStorage.setItem("nombre", name.value);
        localStorage.setItem("gmail", gmail.value);
        localStorage.setItem("contraseña", password.value);
      } else {
        Swal.fire(
          "Oooops",
          "Este no es el codigo, vuelve a dar click a enviar y verifica tu mail otra vez",
          "error",
          "Ok"
        );
      }
    }

    const nuevoUsuario = {
      nombre: name.value,
      mail: gmail.value,
      pass: password.value,
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    Swal.fire(
      "Oooops",
      "Parece que se te ha escapado llenar un campo, todos son obligatorios",
      "info",
      "Ok"
    );
  }
}
