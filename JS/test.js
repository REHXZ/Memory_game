const supabaseclient = supabase.createClient(
	"https://izuagmzuscxemmhlirlk.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dWFnbXp1c2N4ZW1taGxpcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDQ2NjcsImV4cCI6MjAxMjQ4MDY2N30.596CiB1jVlRRLQlu0IvViUpoy26Bli_IhW_3lcd2-1U"
);

async function getalluser() {
	let { data: user, error } = await supabaseclient
	.from('user')
	.select('admin_no, password') // Select only the admin_no and password columns
  
	// Filter by admin_no
	.eq('admin_no', '2348935') // Replace 'your_admin_no_value_here' with the admin_no you want to filter
  
	// Execute the query
	.single(); // Use .single() to retrieve a single record that matches the filter
  
  // Check for errors
  if (error) {
	console.error('Error:', error);
  } else {
	if (user) {
	  console.log('Password:', user.password);
	} else {
	  console.log('No user found with the specified admin_no.');
	}
  }
}

getalluser();


// log_in_btn.addEventListener("click", async function(){
//     let { data: user, error } = await supabaseclient
// 	.from('user')
// 	.select('admin_no, password') // Select only the admin_no and password columns
  
// 	// Filter by admin_no
// 	.eq('admin_no', '2348935') // Replace 'your_admin_no_value_here' with the admin_no you want to filter
  
// 	// Execute the query
// 	.single(); // Use .single() to retrieve a single record that matches the filter
  
//   // Check for errors
//   if (error) {
// 	console.error('Error:', error);
//   } else {
// 	if (user) {
// 	  console.log(user.password)
// 	} else {
// 	  console.log('No user found with the specified admin_no.');
// 	}
//   }
// })