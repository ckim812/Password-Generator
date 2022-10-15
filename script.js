// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // variable passwordText will store the randomized password
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();

  function generatePassword() {
    var generatedRandomPassword = "";
    var characters = "";

    // determine password length
    var pwLength = prompt(
      "What would you like your password length to be? (must be between 8-128 characters)"
    );
    if (pwLength < 8 || pwLength > 128) {
      alert("Password length must be between 8-128 characters.");
      return generatePassword();
    }

    // determine if lowercase characters should be used in the password
    var lc = confirm("Would you like to use lowercase characters?");
    if (lc) characters += "abcdefghijklmnopqrstuvwxyz";

    // determine if uppercase characters should be used in the password
    var uc = confirm("Would you like to use uppercase characters?");
    if (uc) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // determine if numeric characters should be used in the password
    var num = confirm("Would you like to use numeric characters?");
    if (num) characters += "0123456789";

    // determine if special characters should be used in the password
    var sp = confirm("Would you like to use special characters?");
    if (sp) characters += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    // console log out characters and character length to help debug
    console.log(characters);
    console.log(characters.length);

    // for loop to generate a random password using chosen characters
    for (var i = 0; i < pwLength; i++)
      generatedRandomPassword +=
        characters[Math.floor(Math.random() * characters.length)];

    // return generated random password to use for passwordText variable
    return generatedRandomPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
