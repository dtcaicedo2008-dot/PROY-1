// LOGIN

function iniciarSesion(){


let usuario =
document.getElementById("usuario").value;


let password =
document.getElementById("password").value;



// Datos de acceso

if(usuario=="admin" && password=="1234"){


window.location.href="dashboard.html";


}

else{


document.getElementById("error").innerHTML =
"❌ Usuario o contraseña incorrectos";


}


}