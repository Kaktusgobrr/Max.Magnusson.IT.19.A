let textArea = document.querySelector("#textArea")
let knapp = document.querySelector("#palindromBtn")
let p_diplaywords = document.querySelector("#displaywords")
 
knapp.addEventListener("click", countWords);

function countWords(){

  if (palindrom(textArea.value)){
    p_diplaywords.innerHTML = "Palindrom går brrrrrrrrrrr"
  } else {

    p_diplaywords.innerHTML = "Palindrom går inte brrrrrrrrrrrrr"
  }

}


function palindrom(str){
    let reversed = str.split("").reverse().join("")
    console.log(reversed)
    if (reversed === str) 
      return true;

    return false;
}