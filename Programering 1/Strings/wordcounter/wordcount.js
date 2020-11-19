let wordcounterBtn = document.querySelector("#wordcounterBtn")

let p_displaywords = document.querySelector("#displaywords")

wordcounterBtn.addEventListener("click", wordcounter)

function wordcounter(){
    let textarea = document.querySelector("#textArea")
    console.log("Kör funktionen countwords")
    let text = textarea.value
    console.log(text)
    let words = text.split(" ").join("")
    console.log(words.length)
    p_displaywords.innerHTML = words.length
}
