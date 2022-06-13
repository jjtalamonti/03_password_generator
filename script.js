var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', '?', '+', '=', ':', ';'];
var passwordCombination = [];
var userPassword = "";

var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var symbols;


function generatePassword() {
  passwordLength = prompt("password length must be 8 to 128 characters in length");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password needs to be between 8 and 128 characters");

  } else {
    uppercaseLetters = confirm("Would you like uppercase letters in your password");
    lowercaseLetters = confirm("Would you like lowercase letters in your password");
    numbers = confirm("Would you like numbers in your password");
    symbols = confirm("Would you like symbols in your password");
    console.log(passwordLength);
    console.log(uppercaseLetters);
    console.log(lowercaseLetters);
    console.log(numbers);
    console.log(symbols);
  }

  if ((!uppercaseLetters) && (!lowercaseLetters) && (!numbers) && (!symbols)) {
    alert("please choose at least one character")
    return "";
  }

  var passwordConstruction = [];
  if (symbols) {
    passwordConstruction = passwordConstruction.concat(symbolChar);
  }
  if (uppercaseLetters) {
    passwordConstruction = passwordConstruction.concat(upperChar);
  }
  if (numbers) {
    passwordConstruction = passwordConstruction.concat(numberChar);
  }
  if (lowercaseLetters) {
    passwordConstruction = passwordConstruction.concat(lowerChar);
  }
  console.log(passwordConstruction);
  if (userPassword) {
    userPassword = ""
  }
  for (let i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordConstruction.length);
    userPassword += passwordConstruction[random];
  }
  console.log(userPassword)
  return userPassword;
}




$('#generate').on("click", function () {
  generatePassword();
  $('#password').text(userPassword)

})





