let name = "Max"
//bröh monento
let age = 16

console.log(`Hej ${name} du är ${age} år gammal`)

if (age >=18){
    conslose.log("du är vuxen")
} else {
     }     console.log("sluta va så jävla snygg")

if (age >=18){
} else {
} console.log("Linus är jätte fin")
let text= document. querySelector("#text")
text.innerText = `${name} är ${age} år gammal`

let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`

let button = document.querySelector("#knapp")

button.addEventListener("click", math)

function math(event) {
    
    console.log("math-funktionen körs")

    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)

    add.innerHTML = `${num1}+${num2}=${num1+num2}`
    sub.innerHTML = `${num1}-${num2}=${num1+num2}`
    mult.innerHTML = `${num1}*${num2}=${num1+num2}`
    div.innerHTML = `${num1}/${num2}=${num1+num2}`
    

}