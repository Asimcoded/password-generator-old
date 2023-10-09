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
    if(lengthBox.value >= 4){
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
        alert('Please check the boxs !')
    }
    else {
        for (let i = 0; i < lengthBox.value; i++) {
            password += allChar[Math.floor(Math.random() * allChar.length)];
        }
        passwordBox.value = password
    }}
    else{
        alert("The minimum range of password is 4 or greater !")
    }
}
function copyPassword(){
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);
    document.execCommand("copy")
    navigator.clipboard.writeText(passwordBox.value);
    document.querySelector('.tooltip').style.display = "block";
    setTimeout(()=>document.querySelector('.tooltip').style.display = "none",2000)
}
createPassword()
document.querySelector('#generate').addEventListener('click', createPassword)
document.querySelector('.password-box button').addEventListener('click',copyPassword)