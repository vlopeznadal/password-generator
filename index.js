import { characters } from '/data.js'

let passwordButton = document.getElementById("password-btn")

passwordButton.addEventListener("click", function() {
    generatePasswords()
})

function generatePasswords() {
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < 15; i++) {
    let index1 = Math.floor(Math.random()*91)
    let index2 = Math.floor(Math.random()*91)
    password1 += characters[index1]
    password2 += characters[index2]
    }

    displayPasswords(password1,password2)
}

function displayPasswords(password1, password2) {
    let passDisplay1 = document.getElementById("password1")
    let passDisplay2 = document.getElementById("password2")

    passDisplay1.textContent = password1
    passDisplay2.textContent= password2
}