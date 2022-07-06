import { textoColorines } from "./textoColorines.js";
const titulazo = document.querySelector('#titulazo');
const continuar = document.querySelector('#continuarrr');
const regalito = document.querySelector('#regalito');
const jetaDeRenjun = document.querySelector('[alt="cara de Renjun"]');
let contadorKawaii = 5;
let contadorTroleo = 0;

const textosDelTitulazo = [
  'ola ke ase?',
  'soy yo 😏',
  'RENJUN el papi UwU',
  'un amigo tuyo todo mongolo me contó que hoy cumples años 😁',
  'asi que vine PERSONALMENTE uwu',
  'a traerte un regalo 😊',
  'quieres verlo? dale al boton uwuwuwuwuwu',
  'ALAVERGA SE MOVIÓ',
  'intenta darle otra vez a ver 🤔'
];

const coordenadasCreizis = [
  {x: -30, y: 0},
  {x: 5, y: 3},
  {x: -14, y: 15},
  {x: 4, y: 7},
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
];

function troleo({x, y}) {
  regalito.style.transform = `translate(${x}rem, ${y}rem)`;
  contadorTroleo++;
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
}

function lestgo() {
  avanzar();
  continuar.addEventListener('click', () => avanzar());
  regalito.addEventListener('mouseover', () => {
    troleo(coordenadasCreizis[contadorTroleo]);
    avanzar();
  });
}

lestgo();


