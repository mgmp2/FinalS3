var phone = document.getElementById("telf");
var nom = document.getElementById("nombre");
var mail = document.getElementById("email");
var ciudad = document.getElementById("ciudad");
var formMostrar = document.getElementById("box-input");
var mostrarX = document.getElementsByClassName("js-icon");


var expRegName = /^([A-Z]{1}([a-z]{1,})+[\s]*)+$/;
var expRegTelf = /[0-9]{1,}/;
var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
phone.addEventListener("click", function(){
  formMostrar.classList.remove("hidden-input");
});


if(!expRegName.test(nom.value)){
      alert("Escribir correctamente \nCampo nombre");
      // nom.focus();
      // cont++;
    }
    else if(!expRegName.test(cuidad.value)){
  alert("Escribir correctamente \nCampo apellido");
  // ap.focus();
  // cont++;
}
