function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [["nome", "Victor"], ["idade", 30]];
const objeto = { nome: "Victor", idade: 30 };

console.log(paresParaObjeto(pares));
console.log(objetoParaPares(objeto)); 
