function memoize(fn) {
  const cache = {};
  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) {
      console.log("Retornando do cache");
      return cache[chave];
    }
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

const quadrado = memoize(x => x * x);

console.log(quadrado(5)); 
console.log(quadrado(5)); 
