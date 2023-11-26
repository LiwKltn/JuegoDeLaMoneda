let contadorCara = 0;
let contadorCruz = 0;

function girarMoneda() {
  const coin = document.getElementById('coin');
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
   
    contadorCara++;
    document.getElementById('contadorCara').innerText = `Contador cara: ${contadorCara} veces cara`;
    coin.style.transform = 'rotate(0deg)';
  } else {
    contadorCruz++;
    document.getElementById('contadorCruz').innerText = `Contador cruz: ${contadorCruz} veces cruz`;
    coin.style.transform = 'rotate(180deg)';
  }
}

function reiniciarJuego() {
  contadorCara = 0;
  contadorCruz = 0;
  document.getElementById('contadorCara').innerText = 'Contador cara: 0 veces cara';
  document.getElementById('contadorCruz').innerText = 'Contador cruz: 0 veces cruz';
  document.getElementById('coin').style.transform = 'rotate(0deg)';
}
