const admin_field = document.getElementById("admin_no");
const log_in_btn = document.getElementById("log-in-btn");
const index_sign_up_btn = document.getElementById("sign-up-btn");
const alert = document.getElementById("alert-message");

log_in_btn.addEventListener("click", function() {
  const admin_value = admin_field.value.trim();
  if(admin_value == undefined || admin_value == null || admin_value == "" || admin_value != "Nig") {
    alert.textContent = "Incorrect Admin number or Passoword";
    clearinputfield();
  }
  else{
    console.log("Admin Value: " + admin_value);
    window.location.href = "Main.html";
  }
});

index_sign_up_btn.addEventListener("click", function() {
  window.location.href = "signup.html";
});

function clearinputfield(){
  admin_field.value = "";
}