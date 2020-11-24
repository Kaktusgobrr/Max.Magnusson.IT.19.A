let palindromBtn = document.querySelector("#palindromBtn")

palindromBtn.addEventListener("click", palindrom)

function wordcounter(){
    let textarea = document.querySelector("#textArea")
    console.log("Kör funktionen palindrom")
    let text = textarea.value
    console.log(text)
    let palindrom = text.split(" ").join("")
    console.log(palindrom)
    p_displaywords.innerHTML = palindrom
}
