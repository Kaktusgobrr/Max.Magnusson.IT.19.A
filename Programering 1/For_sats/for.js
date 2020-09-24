let p_talserie1 = document.querySelector("#talserie1");
let p_talserie2 = document.querySelector("#talserie2");
let p_summa = document.querySelector("#summa");
let summa = 0;

for (let i = 1; i <= 10; i++) {
  p_talserie1.innerHTML += `${i} `;
}

for (let J = 10; J > 0; J--) {
  p_talserie2.innerHTML += `${J} `;
}

for (let i = 0; i <= 10; i++) {
  summa += i;
}
p_summa.innerHTML += `1 + 2 + 3 +...+ 9 + 10`;
console.log(summa);

for (let i = 0; i < 100; i++) {
  console.log(`${i} i will write all over the wall`);
}
