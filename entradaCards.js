var cards = document.querySelectorAll ('.card');
const body = document.getElementsByTagName("body");
const contenedor = document.getElementById("contenedor");

cards.forEach((link, index) =>{
   
   link.style.animation = `entrada 0.5s ease ${index / 7 + 0.5}s`;
   
   console.log(link, index);});


   
   