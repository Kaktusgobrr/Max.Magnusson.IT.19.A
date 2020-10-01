console.log("hej detta är if_sats lektion 2");

let age = prompt("Systemet har en 20 årsgräns, hur gammal är du?");

if (age >= 20) {
  console.log("köp vafan du vill");
} else {
  console.log("*polisen rings*");
}

let age2 = prompt(
  "Hemköp har en ålder årsgräns på 15 för att köpa energi dricka, hur gammal är du?"
);

if (age >= 15) {
  console.log("töm ditt konto på energi dricka");
} else {
  console.log("du får tyvärr inte köpa denna noccon");
}

let age3 = prompt("Detta spel har en 7 årsgräns, hur gammal är ditt barn?");

if (age >= 7) {
  console.log("ha det så kul med ditt nya spel!");
} else {
  console.log("ditt barn är tyvärr för ung för detta spel");
}

let tal = prompt("Hur mycket pengar om månaden lägger du på spårvagns biljetter");

if (tal <= 775) {
  console.log("att köpa enkel biljetter är billigare än ett månadskort");
} else if (tal >= 775) {
  console.log("Köp ett månadskort på 775 kronor för det blir billigare för dig");
}
