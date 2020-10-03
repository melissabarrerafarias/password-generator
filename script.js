// Assignment code here
var lettersLC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersUC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!", "#", "$", "%", "*"];

function generatePassword() {
  var length = window.prompt("Enter the number of characters you want for your new password! It must be between 8 - 128.");
  if (length <8 || length >128) {
    window.alert("Amount not acceptable. Please try again, between 8 and 128!");
    return generatePassword();
  } 
  var lowercase = window.prompt("Do you want lowercases in your password?");
  if (lowercase === "yes" || lowercase === "YES") {
    }
  else {
    lowercase = null;
  }
  console.log(lowercase);

  var uppercase = window.prompt("Do you want uppercases in your password?");
  if (uppercase === "yes" || uppercase === "YES") {

  }
  else {
    uppercase = null;
  }
  console.log(uppercase);

  var numbers = window.prompt("Do you want numbers in your password?");
  if (numbers === "yes" || numbers === "YES") {
    numbers = (Math.floor(Math.random() * 10));
   } 
  else {
    numbers = null;
  }
  console.log(numbers);

  var special = window.prompt("Do you want special characters in your password?");
  if (special === "yes" || special === "YES") {
    
  }
  else {
    special = null;
  }
  console.log(special);

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