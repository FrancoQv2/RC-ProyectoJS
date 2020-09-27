let personajes = JSON.parse(localStorage.getItem('personajes')) || [];

class Personaje {
    constructor(nombre, linkImagen,poder, fuerza, origen) {
        this.nombre = nombre;
        this.linkImagen = linkImagen;
        this.poder = poder;
        this.fuerza = fuerza;
        this.origen = origen;
    }
}
let nombre = document.getElementById('nombre');
let linkImagen = document.getElementById('linkImagen');
let poder = document.getElementById('poder');
let fuerza = document.getElementById('fuerza');
let origen = document.getElementById('origen');


function handleSubmit(event) {
    event.preventDefault()
    controls()
    if (nombre.value == "" || linkImagen.value == "" || poder.value == "" || fuerza.value == "" || origen.value == "" ) {
        alert("complete los campos")
        return;
    } else {

        let personaje = new Personaje(nombre.value, linkImagen.value, poder.value, fuerza.value, origen.value);
        personajes.push(personaje);
        document.getElementById('nombre').value = "";
        document.getElementById('linkImagen').value = "";
        document.getElementById('poder').value = "";
        document.getElementById('fuerza').value = "";
        document.getElementById('origen').value = "";
        localStorage.setItem('personajes', JSON.stringify(personajes))
        mostrar()
        nombre.classList = "form-control";
        linkImagen.classList = "form-control";
        poder.classList = "form-control";
        fuerza.classList = "form-control";
        origen.classList = "form-control";
    }
}

function controls() {

    if (nombre.value == "") {
        nombre.classList = "form-control is-invalid";
    } else {
        nombre.classList = "form-control is-valid";
    }
    if (linkImagen.value == "") {
        linkImagen.classList = "form-control is-invalid";
    } else {
        linkImagen.classList = "form-control is-valid";
    }
    if (poder.value == "") {
        poder.classList = "form-control is-invalid";
    } else {
       poder.classList = "form-control is-valid";
    }
    if (fuerza.value == "") {
        fuerza.classList = "form-control is-invalid";
    } else {
        fuerza.classList = "form-control is-valid";
    }
    if (origen.value == "") {
        origen.classList = "form-control is-invalid";
    } else {
        origen.classList = "form-control is-valid";
    }
}

function borrar(i) {
    console.log(i)
    let borrado = personajes.filter((item) => {
        return personajes[i] != item
    })
    console.log(borrado);
    localStorage.setItem('personajes', JSON.stringify(borrado))
    console.log(personajes)
    mostrar()
}

function mostrar() {
    personajes = JSON.parse(localStorage.getItem('personajes')) || [];
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = ""

    personajes.map((item, i) => {
        tabla.innerHTML += `<tr>
    <th scope="row">1</th>
    <td>${item.nombre}</td>
    <td>${item.linkImagen}</td>
    <td>${item.poder}</td>
    <td>${item.fuerza}</td>
    <td>${item.origen}</td>
    <td class="btn btn-outline-danger" onclick="borrar(${i})">Borrar</td>
  </tr>`
    })
}



function signOutAdmin(event) {
    event.preventDefault();
    let logedin = sessionStorage.getItem('loged');
    console.log(logedin);
    if (logedin == true) {
        sessionStorage.removeItem(logedin);
        window.location.replace("./index.html");
    }
}