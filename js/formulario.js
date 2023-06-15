console.log("Cargando JS")


function sendForm(){
    

    var elementos = document.getElementsByClassName("radioCheck");
    var valorSeleccionado = "";
    
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].checked) {
        valorSeleccionado = elementos[i].value;
        break;
      }
    }
   

    let name = document.getElementById('nombreApellido');
    let mail = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('mensaje');
    let radio = valorSeleccionado


    
    name = name.value
    mail = mail.value
    phone = phone.value
    message = message.value
    radioEmail = radio

    if (name === "" || mail === "" || phone === "" || message === "" || radioEmail === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return; 
    }

    console.log("Formulario enviado");

    let information = {
        nombre: name,
        correo: mail,
        telefono: phone,
        mensaje: message,
        tipoContacto: radioEmail 
    }

    console.log(information)

    document.getElementById("formulario").reset();

}

let buttonForm = document.getElementById("enviar");



buttonForm.addEventListener('click', sendForm)
