// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  let passwordlenght = "Pls Enter Desired Password Lenght Between Numbers 10 to 64"
  let desiredpasswordlenght = 0
  let chosenarray = [];
  
  
  
                     alert("Welcome You Are About To Generate A Random Password")
   
  passwordlenght =   prompt("Pls Enter Desired Password Lenght Between Numbers 10 to 64");
                        desiredpasswordlenght = Number(passwordlenght)
               
  if             (desiredpasswordlenght >= 10 && desiredpasswordlenght <= 64 ){
                console.log("Password Lenght",desiredpasswordlenght)   
  }
  else {
    alert("You Have Entered An Invalid Password Lenght Pls Start Over Again" )
    location.reload();
      }
  let specialCharacterschoice = confirm("Would You Like Your Password to Include specialCharacter");
                        console.log("Special Character", specialCharacterschoice)
  
  let lowerCasechoice =         confirm("Would You Like Your Password to Include lowerCase");
                        console.log("lower Case",lowerCasechoice);
        
  let upperCasechoice =         confirm("Would You Like Your Password to Include upperCase");
                        console.log("Upper Case",upperCasechoice);
  
  let numberChoice =            confirm("Would You Like Your Password to Include Numbers");
                        console.log("Number",numberChoice);
  
  if (specialCharacterschoice === false && lowerCasechoice === false && upperCasechoice === false && numberChoice === false){
    alert("You Must Choose Aleast One Character", "Lets Do This Again Rrefrsh Page")
  };  

  // // Function to prompt user for password options              
// function getPasswordOptions() {  
//  }      






// Function for getting a random element from an array
function getRandom(arr) {
    let allArrays = []; //included allArrays locally (instead of globally) so we don't have to reload the page to generate another password
    i = 0; i < 1; {
  //randomizes arrays
                       specialCharacters.sort(() => Math.random() - 0.5);
                       randomNumbers = numericCharacters.sort(() => Math.random() - 0.5);
                       lowerCasedCharacters.sort(() => Math.random() - 0.5);
                       upperCasedCharacters.sort(() => Math.random() - 0.5);
  
  // checking user's input if true will utilise the above math.random arrays + brings all arrays together in one array if true
  if (lowerCasechoice === true) {
    allArrays = allArrays.concat(lowerCasedCharacters);
  }
  
  if (upperCasechoice === true) {
    allArrays = allArrays.concat(upperCasedCharacters);
  }
  
  if (numberChoice === true) {
    allArrays = allArrays.concat(randomNumbers);
  }
  
  if (specialCharacterschoice === true) {
    allArrays = allArrays.concat(specialCharacters);
  }
  
  // randomizes the array
      randomArray = allArrays.sort(() => Math.random() - 0.5);
  
  //sets array length based on passwordLength input
  
      randomPassword = randomArray.slice(0,desiredpasswordlenght) 
  
  i++
    }
    return randomPassword
  
  }

  // Function to generate password with user input
function generatePassword() {
    let finalPassword = getRandom();
    finalPassword = finalPassword.join("")
    return finalPassword
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);