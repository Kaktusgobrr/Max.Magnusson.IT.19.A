let vikt = prompt("Ange hur mycket din väska/väskor väger induviellt");

if (vikt <= 8) {
  console.log(" Din väskas vikt är inom vikt gränsen");
} else if (vikt >= 8) {
  console.log("Din väska väger för mycket");
}

let längd = prompt("Ange längden på din väska");

if (längd <= 55) {
  console.log("Väskans längd ligger inom våra dimensioner");
} else if (längd >= 55) {
  console.log("Väskans längd ligger inte inom våra dimensioner");
}

let bredd = prompt("Ange bredden på din väska");

if (bredd <= 40) {
  console.log("väskan ligger inom våra dimensioner");
} else if (bredd >= 40) {
  console.log("väskan ligger inom våra dimensioner");
}

let höjd = prompt("Ange höjden på din väska");

if (höjd <= 23) {
  console.log("Din väskas höjd ligger inom våra dimensioner");
} else if (höjd >= 23) {
  console.log("Din väskas höjd ligger inte inom våra dimensioner");
}
