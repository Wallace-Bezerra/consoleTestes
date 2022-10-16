
const inputText = document.querySelector(".texto");

inputText.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    mostrarNome(inputText.value);
  }
})


function mostrarNome(name) {
  console.log(`Nome: ${name}`);
}

(1 > 0) ? console.log("true") : console.log("falso"); // ternario

function verificarMes(mes) {
  // if (mes === 1) {
  //   console.log("Janeiro");
  // }
  // else if (mes === 2) {
  //   console.log("Fevereiro");
  // } else if (mes === 3) {
  //   console.log("Março");
  // } else if (mes === 4) {
  //   console.log("Abril");
  // } else if (mes === 5) {
  //   console.log("Maio");
  // } else if (mes === 6) {
  //   console.log("Junho");
  // } else if (mes === 7) {
  //   console.log("Julho");
  // } else if (mes === 8) {
  //   console.log("Agosto");
  // } else if (mes === 9) {
  //   console.log("Setembro");
  // } else if (mes === 10) {
  //   console.log("Outubro");
  // } else if (mes === 11) {
  //   console.log("Novembro");
  // } else if (mes === 12) {
  //   console.log("Dezembro");
  // }
  // else {
  //   console.log("Mês não existe!")
  // }

  switch (mes) {
    case 1: console.log("Janeiro");
      break;
    case 2: console.log("Fevereiro");
      break;

    default: console.log("não existe")
      break;
  }
}

verificarMes(1);