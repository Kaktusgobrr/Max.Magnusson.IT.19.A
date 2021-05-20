let bamba = document.querySelector("#matsedel")

fetch("JS/matsedel.txt")
  .then(Response => Response.text())
  .then (text =>  {
    text = text.split("\n")
    console.log(text)
    for (let i = 0; i <=4; i++){
      console.log(text[i])
      matsedel.innerHTML += `${text[i]}<br>`
    }
  })