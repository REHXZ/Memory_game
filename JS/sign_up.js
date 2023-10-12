const sign_up = document.getElementById("sign-up-page-btn");
const sign_up_passwd = document.getElementById("sign-up-passwd");
const sign_up_admin = document.getElementById("sign-up-admin");
const sign_up_name = document.getElementById("sign-up-name");
const alert = document.getElementById("alert-message");


sign_up.addEventListener("click", function() {
  const passwd = sign_up_passwd.value.trim();
  const admin = sign_up_admin.value.trim();
  const name = sign_up_name.value.trim();
  if(passwd == undefined || passwd == null || passwd == "" || admin == undefined || admin == null || admin == "" || name == undefined || name == null || name == "" || admin.length != 7) {
    alert.textContent = "Please fill up all the fields";
  }
  else{
    alert.textContent = "";
    window.location.href = "Main.html"
  }
});