const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 600 }
];

function nomesOrdenados(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}

console.log(nomesOrdenados(produtos)); 
