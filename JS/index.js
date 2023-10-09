import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
  databaseURL: "https://memory-practice-c35eb-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const UsernameinDB = ref(database, 'Username')

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const disciplinesEl = document.getElementById("disciplines")
const alertEl = document.getElementById("alert-message"); // Add this line

addButtonEl.addEventListener("click", function () {
  const inputvalue = inputFieldEl.value.trim();

  // Check if the input is empty or contains non-alphabet characters
  if (/^[A-Za-z]+$/.test(inputvalue)) {
    push(UsernameinDB, inputvalue)
    clearInputFieldEl()
    window.location.href = 'Main.html';
  } else {
    // Display the alert message below the input field
    alertEl.textContent = "Please enter Your First name only.";
    clearInputFieldEl()
  }
})

// function clearList() {
//   disciplinesEl.innerHTML = ""
// }

function clearInputFieldEl() {
  inputFieldEl.value = ""
}

function AppendInput(inputvalue) {
  disciplinesEl.innerHTML += `<p>${inputvalue}</p>`
}


// onValue(UsernameinDB, function(snapshot){
//   let itemsArray = Object.values(snapshot.val())

//   clearList()
//   AppendInput(itemsArray)
//   // for (let i = 0; i < itemsArray.length;i++){
//   //   AppendInput(itemsArray[i])
//   // }
// })

