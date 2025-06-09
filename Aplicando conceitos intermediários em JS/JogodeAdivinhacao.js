const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function perguntar() {
  rl.question("Adivinhe o número (1 a 100): ", (resposta) => {
    const tentativa = parseInt(resposta);
    tentativas++;

    if (tentativa > numeroSecreto) {
      console.log("Mais baixo!");
      perguntar();
    } else if (tentativa < numeroSecreto) {
      console.log("Mais alto!");
      perguntar();
    } else {
      console.log(`Parabéns! Acertou em ${tentativas} tentativas.`);
      rl.close();
    }
  });
}

perguntar();
