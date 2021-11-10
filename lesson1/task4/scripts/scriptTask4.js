let password = window.prompt("Enter your password:");
switch (password) {
  case 'pass123':
    console.log("You have logged in as a user.");
    break;
  case 'admin':
  console.log("You have logged in as a admin");
    break;
  default:
    console.log("Invalid password");
}