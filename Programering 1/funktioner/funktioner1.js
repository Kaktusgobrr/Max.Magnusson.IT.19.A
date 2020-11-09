let namn = "Max";

function sayHello() {
  let ålder = 16;
  console.log(`Hej ${namn}, du är ${ålder} år gammal`);
}

sayHello();
sayHello();

console.log(`2+5=${addera(2, 5)}`);

function addera(tal1, tal2) {
  let summa = tal1 + tal2;
  return summa;
}

console.log(`9-15=${subtrahera(9, 15)}`);

function subtrahera(tal1, tal2) {
  let differans = tal1 - tal2;
  return differans;
}

console.log(`8*8=${multiplicera(8, 8)}`);

function multiplicera(tal1, tal2) {
  let summa = tal1 * tal2;
  return summa;
}

console.log(`30/0=${dividera(30, 0)}`);

function dividera(tal7, tal8) {
  let kvot = tal7 / tal8;
  if (tal8 == 0) {
    return "Error 404";
  }

  return kvot;
}
