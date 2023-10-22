// import { id } from './login.js'

// console.log(id)
const Admin_Number = localStorage.getItem("Admin Number");
console.log(Admin_Number)
const buttonElement = document.getElementById("Next");
const MemoryPallairs = ["","Gantry","Service Staff","Top-up Counter","ATM","Seven-Eleven","Each a Cup","Fuji zerox","Orange Juice","Link Bridge","Security Office / Gantry"];
// const end = document.getElementById("end-btn")

// end.addEventListener("click", function (){
//   window.location.href = 'Main.html'
// })
var score = 0;
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

document.getElementById("phoneNum").focus();
var holding_array = [];
var callGridArr = document
  .getElementById("callGrid")
  .querySelectorAll("button");
for (var button of callGridArr) {
  button.addEventListener("click", (e) => {
    var buttonHTML = e.target;
    if (e.target.tagName == "P") {
      buttonHTML = e.target.parentElement;
    } else if (e.target.tagName == "I") {
      return;
    }
    if (buttonHTML.id) {
      return;
    }
    document.getElementById("phoneNum").focus();
    document.getElementById("phoneNum").value += buttonHTML.dataset.value;
    holding_array.push(document.getElementById("phoneNum").value)
    console.log(holding_array)
      if (holding_array.length > 3) {
        if  (holding_array[3] == DigitsHolder[0]){
          console.log("Here")
          document.getElementById("phoneNum").value = "";
          holding_array = [];
          score += 4;
          DigitsHolder.splice(0,1);
          console.log(DigitsHolder,score);
        }
        else if (holding_array[3] != DigitsHolder[0]){
          console.log("NIGG")
        }
      }
  });
}

document.getElementById("backspace").addEventListener("click", () => {
  document.getElementById("phoneNum").focus();
  document.getElementById("phoneNum").value = document
    .getElementById("phoneNum")
    .value.slice(0, -1);
    holding_array.pop()
    console.log(holding_array)
});


