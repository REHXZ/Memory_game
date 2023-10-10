const buttonElement = document.getElementById("Next");
const MemoryPallairs = ["","Gantry","Servicee Staff","Top-up Counter","ATM","Seven-Eleven","Each a Cup","Fuji zerox?","Orange Juice","Link Bridge","Security Office / Gantry"];

var DigitsHolder = new Array();

var i = 0;
buttonElement.addEventListener("click", function() {
  i++;
  console.log(i,DigitsHolder);
  AppendInput(generateRandom4DigitNumber())
  AppendPillairs(MemoryPallairs[i])
});


function generateRandom4DigitNumber() {
  // Generate a random number between 0 and 9999
  var randomNumber = Math.floor(Math.random() * 10000);

  // Convert the number to a string and pad with leading zeros if needed
  var random4DigitNumber = randomNumber.toString().padStart(4, '0');

  DigitsHolder.push(random4DigitNumber);

  return random4DigitNumber;
}


function AppendInput(inputvalue) {
  Digit.innerHTML = ""
  Digit.innerHTML += `<p>${inputvalue}</p>`
}

function AppendPillairs(inputvalue) {
  pallairs.innerHTML = ""
  pallairs.innerHTML += `<p>${inputvalue}</p>`
}