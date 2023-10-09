const addButtonEl = document.getElementById("arrow")

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