function valida(){
  var usuario = document.getElementById('usuario');
  var password = document.getElementById('password');

  if(usuario.value == password.value){
    window.alert("Login exitoso!");
  }
}
