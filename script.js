// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword;

  function generatePassword() {
    var pw = [];
    var pwLength = window.prompt("# of values");

    while (pwLength < 8 || pwLength > 128) {
      window.alert("password length must be between 8-128 characters");
      pwLength = window.prompt("# of values");
    }

    var lc = window.prompt("lowercase?");
    while (lc !== "y" && lc !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var lc = window.prompt("lowercase?");
    }

    var uc = window.prompt("uppercase?");
    while (uc !== "y" && uc !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var uc = window.prompt("uppercase?");
    }

    var num = window.prompt("numbers?");
    while (num !== "y" && num !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var num = window.prompt("numbers?");
    }

    var sc = window.prompt("special?");
    while (sc !== "y" && sc !== "n") {
      window.alert("response must be either 'y' or 'n'");
      var sc = window.prompt("special?");
    }

    var lcChar = "abcdefghijklmnopqrstuvwxyz";
    var ucChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChar = "0123456789";
    var spChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    var characters = "";

    if (lc === "y") {
      characters += lcChar;
    }
    if (uc === "y") {
      characters += ucChar;
    }
    if (num === "y") {
      characters += numChar;
    }
    if (sc === "y") {
      characters += spChar;
    }

    var charactersLength = characters.length;

    console.log(characters);
    console.log(charactersLength);

    for (var i = 0; i < pwLength; i++) {
      pw += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    generatePassword = pw;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
