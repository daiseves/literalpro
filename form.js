function validate() {
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    var regName = /\d+$/;

    let n = document.forms["form"]["nombre"].value;
    if (n == "" || regName.test(n) ) {
      alert("Nombre inválido.");
      return false;
    }

    let e = document.forms["form"]["email"].value;
    if (e == "" || regEmail.test(e)) {
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
