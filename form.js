const submit = document.getElementById("submit-button");
submit.addEventListener("click", validate);

function validate() {
 e.preventDefault()
 if(form.name.value == "" ) {
  alert( "Nombre inválido." );
  form.name.focus() ;
  return false;
         }
 if(form.email.value == "" ) {
  alert( "Em.ail inválido" );
  form.email.focus() ;
  return false;
  
 var email = $("#email").val();
 if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
  alert( "Email inválido" );
  return false;
 }
 if(form.message.value ==== "" ) {
  alert( "Por favor, ingrese un mensaje" );
  return false;
         }
 return( true );
      }
