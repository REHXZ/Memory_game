const supabaseclient = supabase.createClient(
	"https://izuagmzuscxemmhlirlk.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dWFnbXp1c2N4ZW1taGxpcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDQ2NjcsImV4cCI6MjAxMjQ4MDY2N30.596CiB1jVlRRLQlu0IvViUpoy26Bli_IhW_3lcd2-1U"
);

async function getalluser(){
  let { data, error } = await supabaseclient.from("user").select("admin_no,name");
  console.log(data);
}

getalluser();

async function insertuser(){
  let { data, error } = await supabaseclient.from("user").insert([
    {
      admin_no: "123456789",
      name: "<NAME>"
    }
  ]);
  console.log(data);
}