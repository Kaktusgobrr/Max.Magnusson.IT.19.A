console.log("hej");
let h1_titel = document.querySelector("#titel");
let p_talserie1 = document.querySelector("#talserie1");
let p_talserie2 = document.querySelector("#talserie2");

h1_titel.innerHTML = "while.sats";

let n = 1;

while (n <= 10) {
  p_talserie1.innerHTML += `${n} `;
  n++;
}

let h = 10;

while (h >= -10) {
  p_talserie2.innerHTML += `${h} `;
  h--;
}
