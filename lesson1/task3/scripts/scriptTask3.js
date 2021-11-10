let promptText = "Solve the equation 8 * 9 =";
let input = prompt(promptText);
while(input !== "72"){
  input = prompt("Your answer was not correct\n"+promptText);
}