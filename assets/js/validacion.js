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
nom.addEventListener("blur", validarNombre);
mail.addEventListener("blur", validarMail);
ciud.addEventListener("blur", validadCiudad);



function validarphone(){
  if(!expRegTelf.test(phone.value) ){
    phone.nextElementSibling.classList.add("x-icon");
  } else{
    phone.nextElementSibling.classList.remove("x-icon");
  }
}

function validarNombre(){
  if(!expRegName.test(nom.value) ){
    nom.nextElementSibling.classList.add("x-icon");
  } else{
    nom.nextElementSibling.classList.remove("x-icon");
  }
}
function validarMail(){
  if (!expRegEmail.test(mail.value) ) {
    mail.nextElementSibling.classList.add("x-icon");
  } else{
    mail.nextElementSibling.classList.remove("x-icon");
  }
}

function validadCiudad(){
  if (!expRegName.test(ciud.value) ) {
    ciud.nextElementSibling.classList.add("x-icon");
  } else{
    ciud.nextElementSibling.classList.remove("x-icon");
  }
}
