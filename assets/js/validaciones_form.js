function validarCorreoElectronico(correo) {
    var expresionCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresionCorreo.test(correo);
}

function validarNombreApellido(nombre) {
    var expresionNombreApellido = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    return expresionNombreApellido.test(nombre);
}

function validarTelefono(telefono) {
    var expresionTelefono = /^\d+$/;
    return expresionTelefono.test(telefono);
}

function validarCiudad(ciudad) {
    var expresionCiudad = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
    return expresionCiudad.test(ciudad);
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var ciudad = document.getElementById("ciudad").value;
    var telefono = document.getElementById("telefono").value;

    if (!validarNombreApellido(nombre)) {
        alert("El campo Nombre y Apellido es inválido.");
        return false;
    }

    if (!validarCorreoElectronico(email)) {
        alert("El campo Correo Electrónico es inválido.");
        return false;
    }

    if (!validarCiudad(ciudad)) {
        alert("El campo Ciudad es inválido.");
        return false;
    }

    if (!validarTelefono(telefono)) {
        alert("El campo Teléfono es inválido.");
        return false;
    }


    return true; // Si todas las validaciones pasan, se envia el formulario.
}