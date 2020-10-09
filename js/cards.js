var cards = document.querySelectorAll ('.card');
const body = document.getElementsByTagName("body");
const contenedor = document.getElementById("contenedor");
function natureFighter(nature){
   switch (nature){
      case "Humano":
      return "img/ico-type/naturaleza_humano.svg";
      break;
      case "Animal":
         return "img/ico-type/naturaleza_animal.svg";
      case "Objeto":
         return "img/ico-type/naturaleza_objeto.svg"
      default:
         return "no hay nada aquí"
   }
}
function natureDescription(nature){
   switch(nature){
      case "Humano":
         return "Humano/a"
      case "Animal":
         return "Animal"
      case "Objeto":
         return "Objeto, Robot, Etc."
   }
}
function powerFighter(power){
   switch(power){
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
         return "no hay nada aquí"
   }
}
function powerDescription(power){
   switch(power){
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
function strengthFighter(strength){
   switch(strength){
      case "Menos fuerte que un hombre adulto":
         return "img/ico-strenght/menos_fuerte_hombre_adulto.svg";
      case "Más fuerte que un hombre adulto":
         return "img/ico-strenght/mas_fuerte_hombre_adulto.svg";
      case "Menos fuerte que un dinosaurio":
         return "img/ico-strenght/menos_fuerte_dinosaurio.svg";
      case "Más fuerte que un dinosaurio":
         return "img/ico-strenght/mas_fuerte_dinosaurio.svg"
      case "No puede destruir una montaña":
         return "img/ico-strenght/menos_fuerte_montaña.svg";
      case "Puede destruir una montaña":
         return "img/ico-strenght/mas_fuerte_montaña.svg";
      default:
         return "aquí no hay nada"
   }
}



var fighters = JSON.parse(localStorage.getItem('fighters'));
function agregar(){
fighters.map((item, i) => {
   console.log("pasa")
   contenedor.innerHTML += `<div class="card col-sm-6 col-md-4 col-lg-3"> 
   <img src="${item.origin}" class="personaje" alt="">
   <p class="nombrePersonaje">${item.name}</p>
   <div class="lineadecod">
   <img src="${natureFighter(item.nature)}" alt="" class="iconos" data-toggle="tooltip" data-placement="top"
   title="${natureDescription(item.nature)}" alt="">
   <img src="${powerFighter(item.power)}" alt="" class="iconos" data-toggle="tooltip" data-placement="top"
   title="${powerDescription(item.power)}" alt="">
 <img src="${strengthFighter(item.strenght)}" data-toggle="tooltip" data-placement="top"
   title="${item.strenght}" alt="" class="iconos"></div>
<div class="donde ">${item.image}</div>
</div>
   `
})
}

   
cards.forEach((link, index) =>{
   
   link.style.animation = `entrada 0.5s ease ${index / 7 + 0.5}s`;
   
   console.log(link, index);});
   
   
   
   agregar();