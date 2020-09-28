let user = document.getElementById('login-username');
let password = document.getElementById('login-password');

user.addEventListener('blur', validateUser);
password.addEventListener('blur', validatePassword);

// VALIDACION GENERAL
window.admin = function (event) {
    event.preventDefault();
    if (validateUser() && validatePassword()) {
        validateAdmin(event);
    }
}

// Validación del campo usuario
function validateUser() {
    let expression = /[a-z]/;

    if (user.value != "" && isNaN(user.value) && expression.test(user.value)) {
        user.className = "form-control is-valid";
        return true;
    } else {
        user.className = "form-control is-invalid";
        return false;
    }
}

// Validación del campo contraseña
function validatePassword() {
    const passLength = 8;

    if (password.value.length >= passLength) {
        password.className = "form-control is-valid";
        return true;
    } else {
        password.className = "form-control is-invalid";
        return false;
    }
}

// Validar admin y redirigir a admin.html
function validateAdmin(event) {
    event.preventDefault();
    let userAdmin = "admin-kombat";
    let passAdmin = "rolling2020";

    if (user.value == userAdmin && password.value == passAdmin) {
        window.location.replace("./admin.html");
    } else {
        user.className = "form-control";
        password.className = "form-control";
        Swal.fire({
            icon: 'error',
            title: 'Tus datos son incorrectos.',
            text: 'Por favor, procure escribir los datos requeridos de manera correcta.'
        });
    };
}
