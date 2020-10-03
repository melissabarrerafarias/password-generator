// Assignment code here
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var specialChar = "!!!!$$$$######%%****^^^";
function generatePassword() {

  // length
  var length = window.prompt("Enter the number of characters you want for your new password! It must be between 8 - 128.");
  if (length < 8 || length > 128) {
    window.alert("Amount not acceptable. Please try again, between 8 and 128!");
    return generatePassword();
  }
  var characters = "";
  // lowercase
  var lowercase = window.confirm("Do you want lowercases in your password?");
  if (lowercase) {
    characters = characters + lowercaseChar;
  }
  console.log(lowercase);

  // uppercase
  var uppercase = window.confirm("Do you want uppercases in your password?");
  if (uppercase) {
characters = characters + uppercaseChar;
  }
  console.log(uppercase);

  // numbers
  var numbers = window.confirm("Do you want numbers in your password?");
  if (numbers) {
    characters = characters + numberChar;
  }
  console.log(numbers);

  // special characters
  var special = window.confirm("Do you want special characters in your password?");
  if (special) {
    characters = characters + specialChar;
  }
  console.log(special);
  console.log(characters);
  var password = "";
  for (var i = 0; i < length; i++) {
    console.log(length);
    var randomNumber = (Math.floor(Math.random() * characters.length));
    password = password + characters[randomNumber];
  }
  console.log(password);
  return password;
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