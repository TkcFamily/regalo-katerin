import { textoColorines } from "./textoColorines.js";
const titulazo = document.querySelector('#titulazo');
const continuar = document.querySelector('#continuarrr');
const jetaDeRenjun = document.querySelector('[alt="cara de Renjun"]');
let contadorKawaii = 0;

const textosDelTitulazo = [
  'ola ke ase?',
  'soy yo 😏',
  'RENJUN el papi UwU',
  'un amigo tuyo todo mongolo me contó que hoy cumples años 😁',
  'asi que vine PERSONALMENTE uwu',
  'a traerte un regalo 😏😏😏',
  'quieres verlo? dale al boton uwuwuwuwuwu'
];

const imagenesDelRenjun = [
  'renjun-ola.jpeg',
  'renjun-vato.jfif',
  'renjun-chito.jfif',
  'renjun-decepcionado.webp',
]

function avanzar() {
  titulazo.innerHTML = textoColorines(textosDelTitulazo[contadorKawaii]);
  jetaDeRenjun.src = `./assets/${imagenesDelRenjun[contadorKawaii]}`;
  contadorKawaii++;
}

function lestgo() {
  avanzar();
  continuar.addEventListener('click', () => avanzar());
}

lestgo();


