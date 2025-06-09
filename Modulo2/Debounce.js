function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const dizerOla = debounce(() => console.log("Olá!"), 1000);

dizerOla();
dizerOla();
dizerOla(); 
