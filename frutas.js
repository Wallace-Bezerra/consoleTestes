const frutas = [
  { nome: "maça", cor: "vermelha" },
  { nome: "morango", cor: "vermelha" },
  { nome: "abacaxi", cor: "amarelo" },
  { nome: "limao", cor: "verde" },
]

const vermelhas = [];
frutas.forEach((item) => {

  if (item.cor == "vermelha") {
    vermelhas.push(item);
  }
  return vermelhas;
})

console.log(vermelhas);

// console.log(frutas[0].nome);