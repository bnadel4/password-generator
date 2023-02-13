// Assignment Code
var length = '';
var lowercase = '';
var uppercase = '';
var numbers = '';
var specialCharacters = '';
var chars = '';
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  chooseCriteria();
  buildCharacter();
  revealPassword();
}

function chooseCriteria() {

  length = prompt('Choose a password length.');

  if (length >= 8  && length <= 128) {
  } 
  else {
    alert('Please enter a number between 8 and 128.')
    chooseCriteria();
  }

  lowercase = prompt('Should it include lowercase letters?');
  console.log('lowercase', lowercase);

  uppercase = prompt('Should it include uppercase letters?');
  console.log('uppercase', uppercase);
  
  numbers = prompt('Should it include numbers?');
  console.log('numbers', numbers);
  
  specialCharacters = prompt('Should it include special characters?');
  console.log('specialCharacters', specialCharacters);
  
  if (lowercase !== 'yes' && uppercase !== 'yes' && numbers !== 'yes' && specialCharacters !== 'yes') {
    console.log('User must choose at least one password criteria');
    alert('Please choose at least one character criteria');
    chooseCriteria();
  }
}

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

function revealPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   console.log('chars', chars);
   console.log('result', result);
   chars = '';
   return result;
}