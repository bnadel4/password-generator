// Assignment Code
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
var length = prompt('Choose a password length.');
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