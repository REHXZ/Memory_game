const supabaseclient = supabase.createClient(
	"https://izuagmzuscxemmhlirlk.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dWFnbXp1c2N4ZW1taGxpcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDQ2NjcsImV4cCI6MjAxMjQ4MDY2N30.596CiB1jVlRRLQlu0IvViUpoy26Bli_IhW_3lcd2-1U"
);

var id = ''

const af = document.getElementById("admin_no"); //Admin nummber of user
const av2_field = document.getElementById("Password-field");// Password entered

const log_in_btn = document.getElementById("log-in-btn");
const index_sign_up_btn = document.getElementById("sign-up-btn");

const alert = document.getElementById("alert-message");

index_sign_up_btn.addEventListener("click", function() {
  window.location.href = "signup.html";
});

log_in_btn.addEventListener("click", async function(){
    const av = af.value.trim();
    const av2 = av2_field.value.trim();
    console.log(av,av2)
    if (av.length == 7 && !isNaN(av)){
        let { data: user, error } = await supabaseclient
        .from('user')
        .select('admin_no, password')
        // Filter by admin_no
        .eq('admin_no', av)
        // Execute the query
        .single(); // Use .single() to retrieve a single record that matches the filter
      // Check for errors
        console.log(user.password)
      if (av2 !== user.password) {
        var pass = `Incorrect Password or ${av} Admin number`
        console.log('Error:', error ,`\n Or ${pass}`);
        alert.textContent = pass;
      } else {
        id = av
        console.log(id)
        window.location.href = 'Main.html'
    }
  }
  else{
    alert.textContent = "Incorrect Admin number";
    id = ''
  }
})

// export var id;