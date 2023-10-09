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

function createPassword(){
    let length = lengthBox.value
    console.log(length);    
}
document.querySelector('#generate').addEventListener('click',createPassword)
