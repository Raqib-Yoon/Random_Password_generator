// Defining my array

const setUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const setLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const setNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const setSymbols = ["/", ";", "!", "@", ")", "$", "%", "^", "&", "*", "(", "#"]


// selecting all inputs

const upperCase = document.getElementById('upperCase')
const lowerCase = document.getElementById('lowerCase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const btn = document.getElementById('btn')
const show_password = document.getElementById('show_password')
let numberOfLetters = document.getElementById('input');


var password = '';

// generating password

function generate() {

    for (let index = 0; index < numberOfLetters.value; index++) {

        if (upperCase.checked) {
            console.log(password += setUpper[Math.floor(Math.random() * setUpper.length)])
            // console.log('upper');
        }
        if (lowerCase.checked) {
            password += setLower[Math.floor(Math.random() * setLower.length)]
            // console.log('lower');
        }
        if (numbers.checked) {
            password += setNumber[Math.floor(Math.random() * setNumber.length)]
            // console.log('number');
        }
        if (symbols.checked) {
            password += setSymbols[Math.floor(Math.random() * setSymbols.length)]
        }

        if (password.length === numberOfLetters) {
            break;
        }
    }
    password = password.slice(0, numberOfLetters.value)
    show_password.value = password;
}


btn.addEventListener('click', () => {
    if (numberOfLetters.value <= 0) {
        for (var i = 0; i < 2; i++) {
            password += setUpper[Math.floor(Math.random() * setUpper.length)]
            password += setSymbols[Math.floor(Math.random() * setSymbols.length)]
            password += setNumber[Math.floor(Math.random() * setNumber.length)]
            password += setLower[Math.floor(Math.random() * setLower.length)]
            password += setUpper[Math.floor(Math.random() * setUpper.length)]
        }
        show_password.value = password;
        password = ''
    } else {
        generate()
        // console.log(password);
        password = ''
    }
})