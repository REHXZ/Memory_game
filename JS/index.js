const supabaseclient = supabase.createClient(
	"https://izuagmzuscxemmhlirlk.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dWFnbXp1c2N4ZW1taGxpcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDQ2NjcsImV4cCI6MjAxMjQ4MDY2N30.596CiB1jVlRRLQlu0IvViUpoy26Bli_IhW_3lcd2-1U"
);

async function getalluser() {
	let { data, error } = await supabaseclient
		.from("user")
		.select("admin_no,password");
	console.log(data);
}

const admin_field = document.getElementById("admin_no");
const ps_field = document.getElementById("Password-field");

const log_in_btn = document.getElementById("log-in-btn");
const index_sign_up_btn = document.getElementById("sign-up-btn");

const alert = document.getElementById("alert-message");

log_in_btn.addEventListener("click", function() {
  const admin_value = admin_field.value.trim();
  const ps_field = ps_field.value.trim();
  if(admin_value == undefined || admin_value == null || admin_value == "" || admin_value.length != 7) {
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

getalluser();