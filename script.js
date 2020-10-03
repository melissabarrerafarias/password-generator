// Assignment code here

function generatePassword() {
  var length = window.prompt("Enter the number of characters you want for your new password! It must be between 8 - 128.");
  if (length <8 || length >128) {
    window.alert("Amount not acceptable. Please try again, between 8 and 128!");
    return generatePassword();
  } 
  var lowercase = window.confirm("Do you want lowercases in your password?");
  console.log(lowercase);
  var uppercase = window.confirm("Do you want uppercases in your password?");
  console.log(uppercase);
  var numbers = window.confirm("Do you want numbers in your password?");
  console.log(numbers);
  var special = window.confirm("Do you want special characters in your password?");
  console.log(special);

if (numbers = true) {
  var numbers = Math.floor(Math.random() * 10) - 1; 
}else {
  var numbers = null
}
}

  



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