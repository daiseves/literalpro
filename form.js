function validate() {
 if( document.form.name.value == "" ) {
  alert( "Nombre inválido." );
  document.form.name.focus() ;
  return false;
         }
 if( document.form.email.value == "" ) {
  alert( "Em.ail inválido" );
  document.form.email.focus() ;
  return false;
  
 var email = $("#email").val();
 if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
  alert( "Email inválido" );
  return false;
 }
 if( document.form.message.value ==== "" ) {
  alert( "Por favor, ingrese un mensaje" );
  return false;
         }
 return( true );
      }
