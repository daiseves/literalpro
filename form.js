const submit = document.getElementById("submit-button");
submit.addEventListener("click", validate);


function validate() {
    var name = document.form.name.value;
    var email = document.form.email.value;
    var text = document.form.mensaje.value;
 
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regName = /\d+$/g; 
    
    if (name == "" || regName.test(name)) { 
        alert( "Nombre inválido." );
        name.focus() ;
        return false;
         }

    if(email == "" || !regEmail.test(email)) {
        alert( "Email inválido" );
        email.focus() ;
        return false;
    }
    
    if(text === "" ) {
        alert( "Por favor, ingrese un mensaje" );
        return false;
    }
         return( true );
      }
