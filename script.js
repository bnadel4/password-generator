// Assignment Code
var length;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function passwordCriteria () {
length = prompt('Choose a password length.');
console.log('length', length);

if (length >= 8  && length <= 128) {
  alert('nice')
} 
else {
  alert('Please enter a number between 8 and 128.')
  passwordCriteria();
}
}
passwordCriteria();
// write out prompts for the 4 case pref on last one if all no restart 
var lowercase = prompt('Should it include lowercase letters?');
console.log('lowercase', lowercase);

var uppercase = prompt('Should it include uppercase letters?');
console.log('uppercase', uppercase);

var numbers = prompt('Should it include numbers?');
console.log('numbers', numbers);

var specialCharacters = prompt('Should it include special characters?');
console.log('specialCharacters', specialCharacters);

//random string function

function generatePassword () {
   var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   return result;
}
 