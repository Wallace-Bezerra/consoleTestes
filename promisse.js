const promessa = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Primeira");
  }, 3000)
})
const promessa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Segunda")
  }, 1000)
})


const totoal = Promise.race([promessa, promessa2]);
// totoal.then((item) => console.log(item))


// FETCH

const cep = fetch("https://viacep.com.br/ws/04218000/json/");

const result = cep.then(response => response.json()
  .then(cep => console.log(cep)));


