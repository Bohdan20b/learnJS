let n = window.prompt("Enter n: ");
function numberSum(n) {
var total = 0;
for (let i = 1; i <= n; i++){
    total += i;
}
return total;
}
console.log(numberSum(n));