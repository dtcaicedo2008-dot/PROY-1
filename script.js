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
function actualizarMuneco() {

    const personaje =
        document.getElementById("personaje");

    personaje.classList.remove(
        "error1",
        "error2",
        "error3",
        "error4",
        "error5",
        "error6"
    );

    const errores = 6 - vidas;

    if (errores > 0) {

        personaje.classList.add(
            "error" + errores
        );

    }
}