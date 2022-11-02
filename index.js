const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordButton = document.getElementById("password-btn")
let passDisplay1 = document.getElementById("password1")
let passDisplay2 = document.getElementById("password2")

passwordButton.addEventListener("click", function() {
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < 15; i++) {
    let index1 = Math.floor(Math.random()*91)
    let index2 = Math.floor(Math.random()*91)
    password1 += characters[index1]
    password2 += characters[index2]
}

passDisplay1.textContent = password1
passDisplay2.textContent= password2

})