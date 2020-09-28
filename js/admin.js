let fighters = JSON.parse(localStorage.getItem('fighters')) || [];

class Fighter {
    constructor(name, origin, power, strenght, image) {
        this.name = name;
        this.origin = origin;
        this.power = power;
        this.strenght = strenght;
        this.image = image;
    }
}

let name = document.getElementById('name');
let origin = document.getElementById('origin');
let power = document.getElementById('power');
let strenght = document.getElementById('strenght');
let image = document.getElementById('image');


function cleanForm() {
    name.value = "";
    origin.value = "";
    power.value = "";
    strenght.value = "";
    image.value = "";

    name.classList = "form-control";
    origin.classList = "form-control";
    power.classList = "form-control";
    strenght.classList = "form-control";
    image.classList = "form-control";
}


function handleSubmit(event) {
    event.preventDefault();
    controls();
    if (name.value == "" || image.value == "" || power.value == "" || strenght.value == "" || origin.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos'
        });
    } else {
        let fighter = new Fighter(name.value, image.value, power.value, strenght.value, origin.value);
        fighters.push(fighter);
        localStorage.setItem('fighters', JSON.stringify(fighters));
        cleanForm();
        showTable();
    }
}

function controls() {
    if (name.value == "") {
        name.classList = "form-control is-invalid";
    } else {
        name.classList = "form-control is-valid";
    }
    if (image.value == "") {
        image.classList = "form-control is-invalid";
    } else {
        image.classList = "form-control is-valid";
    }
    if (power.value == "" || power.value == "-") {
        power.classList = "form-control is-invalid";
    } else {
       power.classList = "form-control is-valid";
    }
    if (strenght.value == "" || strenght.value == "-") {
        strenght.classList = "form-control is-invalid";
    } else {
        strenght.classList = "form-control is-valid";
    }
    if (origin.value == "") {
        origin.classList = "form-control is-invalid";
    } else {
        origin.classList = "form-control is-valid";
    }
}

function deleteFighter(i) {
    let todelete = fighters.filter((item) => {
        return fighters[i] != item
    })
    localStorage.setItem('fighters', JSON.stringify(todelete));
    showTable();
}

function showTable() {
    fighters = JSON.parse(localStorage.getItem('fighters')) || [];

    let table = document.getElementById('table-fighters');
    table.innerHTML = "";

    fighters.map((item, i) => {
        table.innerHTML += `<tr>
    <th scope="row" class="d-flex align-items-center">${i+1}</th>
    <td>${item.name}</td>
    <td>${item.image}</td>
    <td>${item.power}</td>
    <td>${item.strenght}</td>
    <td>${item.origin}</td>
    <td class="btn btn-outline-danger" title="Borrar" onclick="deleteFighter(${i})"><i class="fas fa-trash-alt"></i></td>
  </tr>`
    })
}