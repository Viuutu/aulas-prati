const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa, tentativas = 0;

while (tentativa !== numeroSecreto) {
  tentativa = parseInt(prompt("Adivinhe o número (1 a 100):"));
  tentativas++;

  if (tentativa > numeroSecreto) {
    console.log("Mais baixo!");
  } else if (tentativa < numeroSecreto) {
    console.log("Mais alto!");
  } else {
    console.log(`Parabéns! Acertou em ${tentativas} tentativas.`);
  }
}
