/*function texto() {
    var elementos=document.getElementsByClassName ("imgtamaño")
    for (var a=0; a<elementos.length; a++){
        elementos [a] .onmouseover= detalle;
    }
}

function detalle (){

    alert("Hola");
    
}

window.onload=texto;*/

const nombre= document.getElementById ("nombre");
const apellido= document.getElementById ("apellido");
const email= document.getElementById ("email");
const numero= document.getElementById ("numero");
const mensaje= "Debe de llenar todos los campos";
var form1 = document.getElementById ("formulario");

function validar(){
    console.log (nombre.value) ;
    console.log (!!apellido.value) ;
    console.log(nombre.value == "" && apellido.value == "")
    
    if (nombre.value == "" || apellido.value == ""  || email.value == "" || numero.value == "") {
        alert (mensaje); 

                
    } 
     
    /*
    else if (apellido.value == "" ) {
        alert (mensaje); 
                
    }   
    else if (email.value == "" ) {
        alert (mensaje); 
                
    } 
    else if (numero.value == "" ) {
        alert (mensaje); 
                
    }                         
}*/
}
form1.onsubmit = function (e){
    e.preventDefault();
    validar();    
}
var ruta= document.getElementsByClassName ("figurerazones");
console.log(ruta)
console.log("Este es ruta inciio")


for (var i=0; i<ruta.length; i++){
    console.log(i)
    console.log("esta es la iteracion")

    console.log(ruta[i])
    console.log("Esta es ruta iterada")
  ruta[i].onclick=max;
}
function max(e){
console.log(e)

    alert ("Hola");
}








    

