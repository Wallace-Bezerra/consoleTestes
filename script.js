let multa = 0;
let excesso = 0;
function verificaPeso(peso) {
  if (peso > 50) {
    excesso = peso - 50;
    multa = excesso * 4;
    console.log(`João execedeu ${excesso} quilos e irá pagar uma multa de R$ ${multa} reais`);
  }
  else {
    console.log("João não excedeu o peso");
  }
}

verificaPeso(50);


const arrayNumber = [10, 2];
let soma = 0;
for (let i = 0; i < arrayNumber.length; i++) {
  soma += arrayNumber[i]
}
const media = soma / arrayNumber.length;

console.log(media);



const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99];
let obrigatorios = 0;
let facultativos = 0;
let naoEleitor = 0;
lista.forEach((item) => {
  if (item >= 18 && item <= 69) {
    obrigatorios += 1;
  }
  else if ((item >= 16 && item <= 17) || item >= 70) {
    facultativos += 1;
  }
  else {
    naoEleitor += 1;
  }
})

console.log(`Obrigatorios: ${obrigatorios}`);
console.log(`Facultativos: ${facultativos}`);
console.log(`Não eleitores: ${naoEleitor}`);


const diasSemana = {
  0: "Domingo",
  1: "seg unda",
  2: "terça",
  3: "quarta",
  4: "quinta",
  5: "sexta",
  6: "sabado"
}
const DIA = new Date;
const dia = diasSemana[DIA.getDay()];
console.log(dia);