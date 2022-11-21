const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let noNumbersCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let noSymbolsCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let noNumNoSymCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let password1El = document.getElementById("pw1-el");
let password2El = document.getElementById("pw2-el");
let generateButton = document.getElementById("pw-btn-el");
let passwordLength = document.getElementById("pw-length-input");
let noSymbols = document.getElementById("has-symbols");
let noNumbers = document.getElementById("has-numbers");
let passwordCopy1 = document.getElementById("pw-box-1");
let passwordCopy2 = document.getElementById("pw-box-2");
let tooltipText1 = document.getElementById("copy-pw-tooltip-1");
let tooltipText2 = document.getElementById("copy-pw-tooltip-2");

passwordCopy1.addEventListener("click", function () {
    navigator.clipboard.writeText(password1El.textContent);
    tooltipText1.textContent = "Copied!";
})

passwordCopy2.addEventListener("click", function () {
    navigator.clipboard.writeText(password2El.textContent);
    tooltipText2.textContent = "Copied!";
});

generateButton.addEventListener("click", function(){

    password1El.textContent = "";
    password2El.textContent = "";

    if (noNumbers.checked && noSymbols.checked) {
        noNumNoSymPassword();
    }
    else if (noSymbols.checked) {
        noSymbolsPassword();
    }
    else if (noNumbers.checked) {
        noNumbersPassword();
    }
    else {
        normalPassword();
    }
    
});



function noNumbersPassword() {

    for (let i = 0; i < passwordLength.value; i++) {
        password1El.textContent +=
            noNumbersCharacters[
                Math.floor(Math.random() * noNumbersCharacters.length)
            ];
        password2El.textContent +=
            noNumbersCharacters[
                Math.floor(Math.random() * noNumbersCharacters.length)
            ];
    }
}

function noSymbolsPassword() {
    for (let i = 0; i < passwordLength.value; i++) {
        password1El.textContent +=
            noSymbolsCharacters[
                Math.floor(Math.random() * noSymbolsCharacters.length)
            ];
        password2El.textContent +=
            noSymbolsCharacters[
                Math.floor(Math.random() * noSymbolsCharacters.length)
            ];
    }
}

function noNumNoSymPassword() {
    for (let i = 0; i < passwordLength.value; i++) {
        password1El.textContent +=
            noNumNoSymCharacters[
                Math.floor(Math.random() * noNumNoSymCharacters.length)
            ];
        password2El.textContent +=
            noNumNoSymCharacters[
                Math.floor(Math.random() * noNumNoSymCharacters.length)
            ];
    }
}

function normalPassword() {
    for (let i = 0; i < passwordLength.value; i++) {
        
        password1El.textContent +=
            characters[Math.floor(Math.random() * characters.length)];
        password2El.textContent +=
            characters[Math.floor(Math.random() * characters.length)];
    }
}