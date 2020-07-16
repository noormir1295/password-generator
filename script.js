function randomNumber(limit) {
    var normalRandom = Math.random();
    var randomLimit = normalRandom * limit;
    var randomFloor = Math.floor(randomLimit);
    return randomFloor;
}
//my library
var myLibrary = {
upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "z"],
special: ["!","@","#","$","%","^","&","*","(","_","+"],
numbers: ["1","2","3","4","5","6","7","8","9","0"],
}


//generate password
var generateButton = document.getElementById("generate");
generateButton.onclick = function(){
    var password = document.getElementById("password");
    //users input will be here in order to get their styled password
    var passwordLength = prompt("How many characters will be in your password?");

if(passwordLength >= 8){
    alert("Your password is " + passwordLength +" characters long.");
}
if (passwordLength < 8) {
    alert("You must have at least 8 charcters in your password.");

for(var i = 0; passwordLength < 8; i++){
    passwordLength = prompt("How many characters will be in your password?"); 
    if(passwordLength < 8){
        alert("You must have at least 8 characters in your password.");
        }
    }
}
//asking user what charachters they want
console.log(typeof passwordLength)
var wantUpper = confirm("Do you want to have Uppercase letters?");
var wantLower = confirm ("Do you want to have lowercase letters ");
var wantNumbers = confirm("Do you want numbers?");
var wantChar = confirm("Do you want characters?");

var generatePassword = "";
var userChoice = generatePassword.length
console.log ("Your chosen password is " + userChoice)
var newPassword = passwordLength - userChoice;
console.log(newPassword)
//loop for differnt types of passwords
for(var i=0; i<newPassword;i++) {
    if (wantUpper) {
        generatePassword+= myLibrary.upper[randomNumber(myLibrary.upper.length)];

    }
    if (wantLower) {
        generatePassword+= myLibrary.lower[randomNumber(myLibrary.lower.length)];

    }
}
if (wantNumbers) {
    generatePassword+= myLibrary.numbers[randomNumber(myLibrary.numbers.length)];

}
if (wantChar) {
    generatePassword+= myLibrary.special[randomNumber(myLibrary.special.length)];
    console.log(generatePassword)
}
    password.innerHTML = generatePassword;
}

