let saved_username = "Saurabh";
let saved_password = "Unicorn";

let username = "Saurabh";
let password = "Unicurn";

if (username == saved_username) {
  if (password == saved_password) {
    console.log("Login Successful");
  }
  else {
    console.log("Password incorrect - You cannot login");
  }
}
else {
  console.log("username incorrect - You cannot login");
}