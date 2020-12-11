console.log("hej")
let slumptal = Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal)
console.log(`Coin flip ${coinflip}`)
if (coinflip < 1){
    console.log("Tails")
} else {

    console.log("Head")
}


let totalt = []
for(let j = 0; j<100; j++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    if(dice === 6) {
        totalt.push(6)
    }
    console.log(dice)
    if(j+1 === 100) {
        console.log(totalt.length)
    }
}
