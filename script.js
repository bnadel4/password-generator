// Variables
var length = '';
var lowercase = '';
var uppercase = '';
var numbers = '';
var specialCharacters = '';
var chars = '';
var generateBtn = document.querySelector("#generate");

// Event listener
generateBtn.addEventListener("click", writePassword);

// Prompts user for password criteria
function writePassword() {

  length = prompt('Choose a password length.');

  if (length >= 8  && length <= 128) {
  } else {
    alert('Please enter a number between 8 and 128.')
    writePassword();
  }

  lowercase = prompt('Should it include lowercase letters?');
  uppercase = prompt('Should it include uppercase letters?');
  numbers = prompt('Should it include numbers?');
  specialCharacters = prompt('Should it include special characters?');
  
  if (lowercase !== 'yes' && uppercase !== 'yes' && numbers !== 'yes' && specialCharacters !== 'yes') {
    alert('Please choose at least one character criteria');
    writePassword();
  }

  buildCharacter();
  revealPassword();
}

// Builds char string
function buildCharacter() {
  if (lowercase === 'yes') {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (uppercase === 'yes') {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (numbers === 'yes') {
    chars += '0123456789';
  }
  if (specialCharacters === 'yes') {
    chars += ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  }
}

// Displays password to the text area element
function revealPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generates the password string based on what the user input
function generatePassword() {
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   chars = '';
   return result;
}