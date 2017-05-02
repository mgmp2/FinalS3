var phone = document.getElementById("telf");
var nom = document.getElementById("nombre");
var mail = document.getElementById("email");
var ciud = document.getElementById("ciudad");
var formMostrar = document.getElementById("box-input");
var mostrarX = document.getElementsByClassName("js-icon");


var expRegName = /^([A-Z]{1}([a-z]{1,})+[\s]*)+$/;
var expRegTelf = /[0-9]{1,}/;
var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
phone.addEventListener("click", function(){
  formMostrar.classList.remove("hidden-input");
});
phone.addEventListener("blur", validarphone);
nom.addEventListener("input", validarNombre);
mail.addEventListener("input", validarMail);
ciud.addEventListener("input", validadCiudad);



function validarphone(){
  if(!expRegTelf.test(phone.value) ){
    phone.classList.add("x-icon");
  } else{
    phone.classList.remove("x-icon");
  }
}

function validarNombre(){
  if(!expRegName.test(nom.value) ){
    nom.classList.add("x-icon");
  } else{
    nom.classList.remove("x-icon");
  }
}
function validarMail(){
  if (!expRegEmail.test(mail.value) ) {
    mail.classList.add("x-icon");
  } else{
    mail.classList.remove("x-icon");
  }
}

function validadCiudad(){
  if (!expRegName.test(ciud.value) ) {
    ciud.classList.add("x-icon");
  } else{
    ciud.classList.remove("x-icon");
  }
}
