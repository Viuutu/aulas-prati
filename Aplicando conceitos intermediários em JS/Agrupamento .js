const vendas = [
  { cliente: "Victor", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Victor", total: 150 }
];

function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

console.log(agruparPorCliente(vendas));

