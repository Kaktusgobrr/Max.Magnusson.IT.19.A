console.log("Strings")



let fornamn = "Max"
let efternamn = "Magnusson"
let namn = fornamn +  " " + efternamn
let adress = "Hemma"
let telefon = "ja"
let ålder = "Ung och Dum"

console.log("Namn: " + namn + "\n" + "Adress: " + adress + "\n" + "Telefon: " + telefon + "\n" + "Ålder: " + ålder)

let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>" + "Telefon: " + telefon + "<br>" + "Ålder: " + ålder

let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]
let bokstav5= alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)

let antal_bokstaver = alfabet.length
console.log(`Antal bokstäver i alfabetet är ${antal_bokstaver}`)

