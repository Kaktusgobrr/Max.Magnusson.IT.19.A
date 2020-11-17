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

let mening ="Jag läser It-programmet på NTI Kronhus i Göteborg"
function räkna_ord(ord){

    let res = ord.split(" ");
    let n = res.length;
    return n
}
console.log (räkna_ord(mening))
