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
    let radio = valorSeleccionado
    let numId = document.getElementById('numeroId');
    let phone = document.getElementById('phone');
    let mail = document.getElementById('email');
    let profession = document.getElementById('profession');
    let rol = document.getElementById('rol')    ;

    
    name = name.value
    radioEmail = radio
    numId = numId.value
    phone = phone.value
    mail = mail.value
    profession = profession.value
    rol = rol.value

    if (name === "" || numId ==="" || radioEmail === "" ||  numId === "" || phone === "" || mail === "" || profession === "" || rol === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return; 
    }

    console.log("Formulario enviado");

    let information = {
        nombre: name,
        tipoId: radioEmail,
        numeroId: numId,
        telefono: phone,
        correo: mail,
        profession: profession,
        rol: rol
        
    }

    console.log(information)

    document.getElementById("formulario2").reset();

}

let buttonForm = document.getElementById("enviar");



buttonForm.addEventListener('click', sendForm)
