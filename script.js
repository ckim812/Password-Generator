// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // variable passwordText will store the randomized password
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();

  function generatePassword() {
    var generatedRandomPassword = [];

    // determine password length
    var pwLength = window.prompt("# of values");
    while (pwLength < 8 || pwLength > 128) {
      window.alert("password length must be between 8-128 characters");
      pwLength = window.prompt("# of values");
    }

    // determine if lowercase characters should be used in the password
    var lc = window.prompt("lowercase?");
    while (lc !== "y" && lc !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var lc = window.prompt("lowercase?");
    }

    // determine if uppercase characters should be used in the password
    var uc = window.prompt("uppercase?");
    while (uc !== "y" && uc !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var uc = window.prompt("uppercase?");
    }

    // determine if numeric characters should be used in the password
    var num = window.prompt("numbers?");
    while (num !== "y" && num !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var num = window.prompt("numbers?");
    }

    // determine if special characters should be used in the password
    var sc = window.prompt("special?");
    while (sc !== "y" && sc !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var sc = window.prompt("special?");
    }

    // define each type of characters
    var lcChar = "abcdefghijklmnopqrstuvwxyz";
    var ucChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChar = "0123456789";
    var spChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    var characters;

    // check which characters to use; add chosen characters to character string to use for the random generated password
    if (lc === "y") {
      characters += lcChar;
    } else {
    }
    if (uc === "y") {
      characters += ucChar;
    } else {
    }
    if (num === "y") {
      characters += numChar;
    } else {
    }
    if (sc === "y") {
      characters += spChar;
    } else {
    }

    // console log out characters and character length to help debug
    console.log(characters);
    console.log(characters.length);

    // for loop to generate a random password using chosen characters
    for (var i = 0; i < pwLength; i++) {
      generatedRandomPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    // return generated random password to use for passwordText variable
    return generatedRandomPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
