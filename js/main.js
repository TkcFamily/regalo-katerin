import { textoColorines } from "./textoColorines.js";
const titulazo = document.querySelector('#titulazo');
const continuar = document.querySelector('#continuarrr');
const regalito = document.querySelector('#regalito');
const FIN = document.querySelector('#FIN');
const jetaDeRenjun = document.querySelector('[alt="cara de Renjun"]');
let contadorKawaii = 0;
let contadorTroleo = 0;

const textosDelTitulazo = [
  'ola ke ase?',
  'soy yo 😏',
  'RENJUN el papi UwU',
  'un amigo tuyo todo mongolico me contó que hoy cumples años 😁',
  'asi que vine PERSONALMENTE uwu',
  'a traerte un regalo 😊',
  'quieres verlo? dale al boton uwuwuwuwuwu',
  'ALAVERGA SE MOVIÓ',
  'intenta darle otra vez a ver 🤔',
  '......',
  'JAKJAKJA ctm esteban se pasa',
  'intentalo una última vez xd',
  '...............',
  'desapareció...',
  'sumadre katerin ya no te puedo dar el regalo 😥',
  'pero trankis, igual te quiero mucho, feliz cumpleaños 🥰',
  ' y Esteban también te quiere mucho 😉 xD!!'
];

const coordenadasCreizis = [
  {x: -30, y: 0},
  {x: -30, y: 30},
];

const imagenesDelRenjun = [
  'renjun-ola.jpeg',
  'renjun-vato.jfif',
  'renjun-papi.jpeg',
  'renjun-like.jpg',
  'renjun-gorra.jpg',
  'renjun-like.jpg',
  'renjun-alien.jpg',
  'renjun-sorprendio.jpg',
  'renjun-pensando.jpg',
  'renjun-bebe.jfif',
  'renjun-risa.jpg',
  'renjun-like.jpg',
  'renjun-carnet.jpg',
  'renjun-carnet.jpg',
  'renjun-sad.png',
  'renjun-vato.jfif',
  'renjun-final.jpg',
];

function troleo({x, y}) {
  regalito.style.transform = `translate(${x}rem, ${y}rem)`;
}

function avanzar() {
  console.log(contadorKawaii);
  titulazo.innerHTML = textoColorines(textosDelTitulazo[contadorKawaii]);
  jetaDeRenjun.src = `./assets/${imagenesDelRenjun[contadorKawaii]}`;
  contadorKawaii++;
  if(contadorKawaii === 7) {
    continuar.style.display = 'none';
    regalito.style.display = 'block';
  }

  if(contadorKawaii === 8) {
    setTimeout(() => avanzar(), 3000)
  }
  
  if(contadorKawaii === 10) {
    setTimeout(() => avanzar(), 2500);
    setTimeout(() => avanzar(), 5000);
  }

  if(contadorKawaii === 13) {
    setTimeout(() => avanzar(), 2500);
    setTimeout(() => avanzar(), 5000);
  }

  if(contadorKawaii === 15) {
    continuar.style.display = 'inline';
    continuar.innerText = 'NOOOOOO';
  }
  
  if(contadorKawaii === 16) {
    continuar.innerText = 'YO TAMBIEN RENJUN';
  }

  if(contadorKawaii === 17) {
    continuar.style.display = 'none';
    FIN.style.display = 'block';
  }
}

function lestgo() {
  avanzar();
  continuar.addEventListener('click', () => avanzar());
  regalito.addEventListener('mouseover', () => {
    if(contadorTroleo < 2) {
      troleo(coordenadasCreizis[contadorTroleo]);
    }
    if(contadorTroleo === 2) {
      regalito.style.display = 'none';
    }
    contadorTroleo++;
    avanzar();
  });
}

lestgo();


