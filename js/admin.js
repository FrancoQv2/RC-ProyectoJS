class Fighter {
<<<<<<< HEAD
    constructor(name, origin, nature, power, strenght, image) {
=======
    constructor(id, name, origin, power, strenght, image) {
        this.id = id;
>>>>>>> admin
        this.name = name;
        this.origin = origin;
        this.nature = nature;
        this.power = power;
        this.strenght = strenght;
        this.image = image;
    }
}

<<<<<<< HEAD
let fighters = JSON.parse(localStorage.getItem('fighters')) || [];

=======
let _fighters = JSON.parse(localStorage.getItem('_fighters')) || [];
let id = document.getElementById('id');
>>>>>>> admin
let name = document.getElementById('name');
let origin = document.getElementById('origin');
let nature = document.getElementById('nature')
let power = document.getElementById('power');
let strenght = document.getElementById('strenght');
let image = document.getElementById('image');


function cleanForm() {
<<<<<<< HEAD
    name.value = "";
    origin.value = "";
    nature.value = "";
    power.value = "";
    strenght.value = "";
    image.value = "";

    name.classList = "form-control";
    origin.classList = "form-control";
    nature.classlist = "form-control"
    power.classList = "form-control";
    strenght.classList = "form-control";
    image.classList = "form-control";
=======
    id1.value = "";
    name1.value = "";
    origin1.value = "";
    power1.value = "";
    strenght1.value = "";
    image1.value = "";

    id1.classList = "form-control";
    name1.classList = "form-control";
    origin1.classList = "form-control";
    power1.classList = "form-control";
    strenght1.classList = "form-control";
    image1.classList = "form-control";
>>>>>>> admin
}

function handleSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD
    controls();
    if (name.value == "" || image.value == "" || power.value == "" || strenght.value == "" || origin.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos'
        });
    } else {
        let fighter = new Fighter(name.value, image.value, nature.value, power.value, strenght.value, origin.value);
        fighters.push(fighter);
        localStorage.setItem('fighters', JSON.stringify(fighters));
        cleanForm();
=======

    if (typeof (name1) != "undefined" && name1 !== null) {
        controls1();

        if (name1.value == "" || origin1.value == "" || power1.value == "" || strenght1.value == "" || image1.value == "") {

            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos'
            });
        } else {

            let fighter = new Fighter(id1.value, name1.value, origin1.value, power1.value, strenght1.value, image1.value);
            _fighters.push(fighter);
            localStorage.setItem('_fighters', JSON.stringify(_fighters));
            cleanForm();
            showTable();
        }
    } else if (typeof (name2) != "undefined" && name2 !== null) {
        controls2();
        if (name2.value == "" || origin2.value == "" || power2.value == "" || strenght2.value == "" || image2.value == "") {

            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos2'
            });
        } else {

            _fighters = JSON.parse(localStorage.getItem("_fighters"))
            console.log(_fighters)

            for (i in _fighters)
                if (_fighters[i].id == id2.value) {

                    let fighter = new Fighter(id2.value, name2.value, origin2.value, power2.value, strenght2.value, image2.value);
                    _fighters[i] = fighter;
                    localStorage.setItem('_fighters', JSON.stringify(_fighters));

                    setTimeout(Redirect(), 0);
                    function Redirect() {
                        window.location = "./admin.html";
                    }

                }

        }
>>>>>>> admin
        showTable();
    }
}

function controls1() {
    if (id1.value == "") {
        id1.classList = "form-control is-invalid";
    } else {
        id1.classList = "form-control is-valid";
    }
    if (name1.value == "") {
        name1.classList = "form-control is-invalid";
    } else {
        name1.classList = "form-control is-valid";
    }
<<<<<<< HEAD
    if (origin.value == "") {
        origin.classList = "form-control is-invalid";
    } else {
        origin.classList = "form-control is-valid";
    }
    if (power.value == "" || power.value == "-") {
        power.classList = "form-control is-invalid";
=======
    if (origin1.value == "") {
        origin1.classList = "form-control is-invalid";
>>>>>>> admin
    } else {
        origin1.classList = "form-control is-valid";
    }
    if (power1.value == "" || power1.value == "-") {
        power1.classList = "form-control is-invalid";
    } else {
        power1.classList = "form-control is-valid";
    }
    if (strenght1.value == "" || strenght1.value == "-") {
        strenght1.classList = "form-control is-invalid";
    } else {
        strenght1.classList = "form-control is-valid";
    }
    if (image1.value == "") {
        image1.classList = "form-control is-invalid";
    } else {
        image1.classList = "form-control is-valid";
    }
}

function controls2() {
    if (id2.value == "") {
        id2.classList = "form-control is-invalid";
    } else {
        id2.classList = "form-control is-valid";
    }
    if (name2.value == "") {
        name2.classList = "form-control is-invalid";
    } else {
        name2.classList = "form-control is-valid";
    }
    if (origin2.value == "") {
        origin2.classList = "form-control is-invalid";
    } else {
        origin2.classList = "form-control is-valid";
    }
    if (power2.value == "" || power2.value == "-") {
        power2.classList = "form-control is-invalid";
    } else {
        power2.classList = "form-control is-valid";
    }
    if (strenght2.value == "" || strenght2.value == "-") {
        strenght2.classList = "form-control is-invalid";
    } else {
        strenght2.classList = "form-control is-valid";
    }
    if (image2.value == "") {
        image2.classList = "form-control is-invalid";
    } else {
        image2.classList = "form-control is-valid";
    }
}

function deleteFighter(i) {
<<<<<<< HEAD
    let todelete = fighters.filter((item) => {
        return fighters[i] != item
    })
    localStorage.setItem('fighters', JSON.stringify(todelete));
=======
    console.log(i);
    let todelete = _fighters.filter((item) => {
        return _fighters[i] != item
    })
    localStorage.setItem('_fighters', JSON.stringify(todelete));
    console.log(_fighters);
>>>>>>> admin
    showTable();
}

function updateFighter(i) {

    if (i != null) {

        _fighters = JSON.parse(localStorage.getItem("_fighters"))

        var peleadores = _fighters[i];

        let form = document.getElementById('formFighter');
        form.innerHTML = "";

        form.innerHTML +=
            ` <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="login-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-light text-dark">
            <div class="modal-header">
                <h3 class="modal-title text-center display-4" id="login-modal">Editar Luchador</h3>
            </div>
            <div class="modal-body">
                <form name="formFighter2" id="formFighter2" class="row" onsubmit="handleSubmit(event)">
                   <div class="form-group col-sm-12 col-md-6">
                       <label for="name">Nombre</label>
                         <input type="number" value="${peleadores.id}" placeholder="Ej: Luiggi" class="form-control" id="id2" onchange="controls2()" readonly>
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="name">Nombre</label>
                        <input type="text" placeholder="${peleadores.name}" placeholder="Ej: Luiggi" class="form-control" id="name2" onchange="controls2()">
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="origin">Origen del luchador</label>
                        <input type="text" placeholder="${peleadores.origin}"  class="form-control" id="origin2" onchange="controls2()">
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="power">Poderes</label>
                        <select class="custom-select" id="power2" onchange="controls2()">
                            <option selected>${peleadores.power}</option>
                            <option>Pelea</option>
                            <option>Armas</option>
                            <option>Fuego</option>dir
                            <option>Hielo/Agua</option>
                            <option>Veneno</option>
                            <option>Electricidad</option>
                            <option>Magia</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="strenght">Nivel de rudeza</label>
                        <select class="custom-select" id="strenght2" onchange="controls2()">
                            <option selected>${peleadores.strenght}</option>
                            <option>Menos fuerte que un hombre adulto</option>
                            <option>Más fuerte que un hombre adulto</option>
                            <option>Menos fuerte que un dinosaurio</option>
                            <option>Más fuerte que un dinosaurio</option>
                            <option>No puede destruir una montaña</option>
                            <option>Puede destruir una montaña</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="image">Link Imagen</label>
                        <input placeholder="${peleadores.image}" type="text" class="form-control" id="image2" onchange="controls2()">
                    </div>
                    <button type="submit" class="btn btn-danger w-100 mx-3 mt-2">Modificar personaje</button>
                </form>
            </div>
        </div>
    </div>
</div>`

    }
}

function showTable() {
    _fighters = JSON.parse(localStorage.getItem('_fighters')) || [];
    let table = document.getElementById('table-fighters');
    table.innerHTML = "";

    fighters.map((item, i) => {
        table.innerHTML += `<tr>

    <td>${item.id}</td>
    <td>${item.name}</td>
<<<<<<< HEAD
    <td>${item.image}</td>
    <td>${item.nature}</td>
=======
    <td>${item.origin}</td>
>>>>>>> admin
    <td>${item.power}</td>
    <td>${item.strenght}</td>
    <td>${item.image}</td>
    <td class="btn btn-outline-danger" title="Borrar" onclick="deleteFighter(${i})"><i class="fas fa-trash-alt"></i></td>
    <td class="btn btn-outline-danger" title="Modificar" data-toggle="modal"
    data-target="#login-modal" onclick="updateFighter(${i})"><i class="fa fa-pencil-alt"></i></td>
  </tr>`
    })
}

function signOut(event) {
    event.preventDefault();
    window.location.replace("./index.html");
}
