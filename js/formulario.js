var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;

var enviarDatos=0;


var nombre=document.getElementById("nombre");
var mensajeNombre=document.getElementByClassName("mensajeNombre")[0];
var circleCrossName=document.getElementsByClassName("circleCrossNombre")[0];
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre")[0];

nombre.addEventListener("blur",()=>{
    if(!redexNombre.test(nombre.value)){
        e.preventDefault();
        enviarDatos++;
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("erorr");
        nombre.classList.remove("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    }
    else{
        enviarDatos--;
        mensajeNombre.classList.add("ocultar");
        nombre.classList.add("correcto");
        nombre.classList.remove("error");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
    }
 
});


var celular=document.getElementById("celular");
var mensajeCelular=document.getElementByClassName("mensajeNombre")[0];
var circleCrossCelular=document.getElementsByClassName("circleCrossCelular")[0];
var circleCheckCelular=document.getElementsByClassName("circleCheckCelular")[0];

celular.addEventListener("blur",()=>{
    if(!redexCelular.test(celular.value)){
        enviarDatos++;
        mensajeCelular.classList.remove("ocultar");
        celular.classList.add("erorr");
        celular.classList.remove("correcto");
        circleCrossCelular.classList.remove("ocultar");
        circleCheckCelular.classList.add("ocultar");
    }
    else{
        enviarDatos--;
        console.log("else");
        mensajeCelular.classList.add("ocultar");
        celular.classList.add("correcto");
        celular.classList.remove("error");
        circleCrossCelular.classList.add("ocultar");
        circleCheckCelular.classList.remove("ocultar");

    }
});


var correo=document.getElementById("correo");
var mensajeCorreo=document.getElementByClassName("mensajeCorreo")[0];
var circleCrossCorreo=document.getElementsByClassName("circleCrossCorreo")[0];
var circleCheckCorreo=document.getElementsByClassName("circleCheckCorreo")[0];


correo.addEventListener("blur",()=>{
    if(!redexCorreo.test(correo.value)){
        enviarDatos++;
        mensajeCorreo.classList.remove("ocultar");
        correo.classList.add("erorr");
        correo.classList.remove("correcto");
        circleCrossCorreo.classList.remove("ocultar");
        circleCheckCorreo.classList.add("ocultar");
    }
    else{
        enviarDatos--;
        console.log("else");
        mensajeCorreo.classList.add("ocultar");
        correo.classList.add("correcto");
        correo.classList.remove("error");
        circleCrossCorreo.classList.add("ocultar");
        circleCheckCorreo.classList.remove("ocultar");

    }
});


var formulario=document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    if(!redexNombre.test(nombre.value)){
        e.preventDefault();
        var avanzar=0;
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("erorr");
        nombre.classList.remove("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    }
    else{
        mensajeNombre.classList.add("ocultar");
        nombre.classList.add("correcto");
        nombre.classList.remove("error");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
        avanzar=1;
    }
    if(avanzar==1){
        formulario.submit;
    }
});