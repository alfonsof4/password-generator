// Assignment code here
// variables
var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
// variable values
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordLength;
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// in this application you use popup boxes, if statements and a for loop
// var value = 30;
//for (var i = 0; i < value; i++) {
// 
//    anything inside these curly braces happenes every time this loops
//}

function writePassword() {
  passwordLength = parseInt(prompt("How many characters would you like your password? Between 8-128"));
  if (!passwordLength) {
    alert("please pick a number");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Choose a number between 8-128"));
  
  } else {
    confirmCharacter = confirm("Will password contain special characters?");
    confirmNumber = confirm("Will password contain numbers?");
    confirmUppercase = confirm("Will password contain uppercase letters?");
    confirmLowercase = confirm("Will password contain lowercase letters?");
  };
  // click cancel 4 times 
  if(!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("Please select from following options");
  
  }
  // click ok 4 times
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = characters.concat(number, uppercase, lowercase);
  }
  // click ok 3 times
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = characters.concat(number, lowercase);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = characters.concat(number, uppercase);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = characters.concat(lowercase, uppercase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lowercase, uppercase);
  }
// click ok 2 times
  else if (confirmCharacter && confirmNumber) {
    choices = characters.concat(number);
  }
  else if (confirmCharacter && confirmLowercase) {
    choices = characters.concat(lowercase);
  }
  else if (confirmCharacter && confirmUppercase) {
    choices = characters.concat(uppercase);
  }
  else if (confirmUppercase && confirmNumber) {
    choices = uppercase.concat(numer);
  }
  else if (confirmUppercase && confirmLowercase) {
    choices = uppercase.concat(lowercase);
  }
  else if (confirmNumber && confirmLowercase) {
    choices = number.concat(lowercase);
  }
  // click ok 1 time
  else if (confirmCharacter) {
    choices = characters;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = lowercase; 
  }
  else if (confirmUppercase) {
    choices = uppercase;
  }
  let passwordStack = [];
  // random variable selector
  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    console.log(pickChoices)

    passwordStack.push(pickChoices);
  }

  var password = passwordStack.join("");
  console.log(password)
  UserInput(password);
  return password;
}

  function UserInput(password) {
  document.getElementById("password").textContent = password;
}

