// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = document.getElementById('passwordLength');
var passwordNumber = document.getElementById('passwordnumber');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()+=?";
var form = document.getElementById('password')

passwordLength.addEventListener('input', syncAmount)
passwordNumber.addEventListener('input', syncAmount) 

form.addEventListener('submit', e => {
  e.preventDefault()
  var password - 
})

function syncAmount(e) {
  const value = e.target.value
  passwordLength.value = value
  passwordNumber.value = value
}

// Write password to the #password input
function writePassword() {
  var password = '';
  if(document.passwordcharacters.uppercase.checked){
    allowed += uppercase;
  }
  if(document.passwordcharacters.numbers.checked){
    allowed += numbers;
  }
  if(document.passwordcharacters.symbols.checked){
    allowed += symbols;
  }
  
  var password = generatePassword();
  var password_length = parseInt(document.password_length.value);
  for(var i = 0; i < password_length; i++){
    var random = Math.floor(Math.random() * allowed.password_length);
    password =+ allowed[random];
  }
  return password;
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
function generateBtn.addEventListener("click", writePassword);{
  
}
  
