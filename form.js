form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  
  function validate() {
    var regEmail=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    let n = document.forms["form"]["nombre"].value;
    if (n == "" || !regName.test(n) ) {
      alert("Ingresa tu nombre completo.");
      return false;
    }

    let e = document.forms["form"]["email"].value;
    if (e == "" || !regEmail.test(e)) {
      alert("Email inválido");
      return false;
    }

    let t = document.forms["form"]["mensaje"].value;
    if (t == "") {
      alert("Por favor, ingrese un mensaje");
      return false;
    }

    alert("¡Gracias por enviar tu mensaje!");


  }
