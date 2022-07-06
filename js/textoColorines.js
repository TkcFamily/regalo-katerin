const coloresRandomTexto = [
  'red', 'blue', 'darkred', 'pink', 'darkblue', 'green', 'orange', 'aqua', 'crimson', 'fuchsia', 'darkviolet', 'darkgreen', 'gold', 'indigo', 'magenta', 'olive', 'purple', 'salmon',
];

function textoColorines(texto) {
  const arrayLetras = texto.split(' ');
  const arraySpans = arrayLetras.map(letraToSpanColoreado);
  return arraySpans.join(' ');
}

function letraToSpanColoreado(letra) {
  const indiceRandom = parseInt(Math.random()*18);
  let span = `<span style=\"color: ${coloresRandomTexto[indiceRandom]};\">${letra}</span>`;
  return span;
}

export { textoColorines };