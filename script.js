const passwordBox = document.getElementById('password');
const lengthBox = document.getElementById('length');
const upperCaseBox = document.getElementById('uppercase');
const lowerCaseBox = document.getElementById('lowercase');
const numberBox = document.getElementById('number');
const symbolBox = document.getElementById('symbol');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "1234567890";
const symbol = "~!@#$%^&*()_+=-[]{}\|/?><";

function createPassword() {
    // let length = lengthBox.value;
    let password = ""
    let allChar = "";
    if (upperCaseBox.checked) {
        allChar += upperCase;
    }
    if (lowerCaseBox.checked) {
        allChar += lowerCase;
    }
    if (numberBox.checked) {
        allChar += number;
    }
    if (symbolBox.checked) {
        allChar += symbol;
    }

    if (upperCaseBox.checked == false && lowerCaseBox.checked == false && numberBox.checked == false && symbolBox.checked == false) {
        console.log("Nothing is checked");
    }
    // else{
    //     while(lengthBox.value > password.length){
    //     }
    //     // console.log(allChar);
    //     console.log(password);
    //     // console.log(length); 
    // }
    else {
        for (let i = 0; i < lengthBox.value; i++) {
            password += allChar[Math.floor(Math.random() * allChar.length)];
        }
        passwordBox.value = password
    }
}
document.querySelector('#generate').addEventListener('click', createPassword)
