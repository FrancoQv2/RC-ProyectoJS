let fighters = JSON.parse(localStorage.getItem("fighters"));
const cardsContainer = document.getElementById("cards-container");

function natureFighter(nature) {
    switch (nature) {
        case "Humano":
            return "img/ico-type/naturaleza_humano.svg";
            break;
        case "Animal":
            return "img/ico-type/naturaleza_animal.svg";
        case "Objeto":
            return "img/ico-type/naturaleza_objeto.svg";
        default:
            return "no hay nada aquí";
    }
}
function natureDescription(nature) {
    switch (nature) {
        case "Humano":
            return "Humano/a";
        case "Animal":
            return "Animal";
        case "Objeto":
            return "Objeto, Robot, Etc.";
    }
}
function powerFighter(power) {
    switch (power) {
        case "Pelea":
            return "img/ico-proficiency/poder_pelea.svg";
        case "Armas":
            return "img/ico-proficiency/poder_armas.svg";
        case "Fuego":
            return "img/ico-proficiency/poder_fuego.svg";
        case "Hielo/Agua":
            return "img/ico-proficiency/poder_agua_hielo.svg";
        case "Veneno":
            return "img/ico-proficiency/poder_veneno.svg";
        case "Electricidad":
            return "img/ico-proficiency/poder_electricidad.svg";
        case "Magia":
            return "img/ico-proficiency/poder_magia.svg";
        case "Otro":
            return "img/ico-proficiency/poder_otro.svg";
        default:
            return "no hay nada aquí";
    }
}
function powerDescription(power) {
    switch (power) {
        case "Pelea":
            return "Su poder se basa en  la pelea";
        case "Armas":
            return "Su poder se basa en las armas";
        case "Fuego":
            return "Su poder se basa en el fuego";
        case "Hielo/Agua":
            return "Su poder se basa en el hielo o el agua";
        case "Veneno":
            return "Su poder se basa en dominar el veneno";
        case "Electricidad":
            return "Su poder se basa en la electricidad";
        case "Magia":
            return "Su poder se basa en la magia";
        case "Otro":
            return "Su poder se basa en fuerzas no convencionales";
        default:
            return "no hay nada aquí";
    }
}
function strengthFighter(strength) {
    switch (strength) {
        case "Menos fuerte que un hombre adulto":
            return "img/ico-strenght/menos_fuerte_hombre_adulto.svg";
        case "Más fuerte que un hombre adulto":
            return "img/ico-strenght/mas_fuerte_hombre_adulto.svg";
        case "Menos fuerte que un dinosaurio":
            return "img/ico-strenght/menos_fuerte_dinosaurio.svg";
        case "Más fuerte que un dinosaurio":
            return "img/ico-strenght/mas_fuerte_dinosaurio.svg";
        case "No puede destruir una montaña":
            return "img/ico-strenght/menos_fuerte_montaña.svg";
        case "Puede destruir una montaña":
            return "img/ico-strenght/mas_fuerte_montaña.svg";
        default:
            return "aquí no hay nada";
    }
}

function loadCards() {
    fighters.map((item, i) => {
        cardsContainer.innerHTML += `
        <div class="col my-4 d-flex justify-content-center">
          <div class="card">
            <img src="${item.origin}" alt="" class="fighter-img">
            <p class="fighter-name">${item.name}</p>
            <div class="lineadecod">
              <img src="${natureFighter(item.nature)}" alt="" class="icons" data-toggle="tooltip"
                data-placement="top" title="${natureDescription(item.nature)}">
              <img src="${powerFighter(item.power)}" alt="" class="icons" data-toggle="tooltip"
                data-placement="top" title="${powerDescription(item.power)}">
              <img src="${strengthFighter(item.strenght)}" class="icons" data-toggle="tooltip"
                data-placement="top" title="${item.strenght}">
            </div>
            <div class="fighter-info">${item.image}</div>
          </div>
        </div>
         `;
    });
}

//Si el local storage está vacío no puede cargar el index
if (localStorage.length > 0) {
    loadCards();
}

//Debo obtener todas las cards después de cargarlas desde el LS
let cardsCollection = document.querySelectorAll ('.card');

function loadCardsAnimation() {
    cardsCollection.forEach((link, index) => {
      link.style.animation = `intro 0.5s ease ${index / 7 + 0.5}s`;
      console.log(link, index);
    });
}

loadCardsAnimation();
