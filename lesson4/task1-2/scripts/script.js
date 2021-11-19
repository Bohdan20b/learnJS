var numbers = ["10","-5","2","1","13","-6","-3","12","4","-1"
,"9","-8","15","-19","7","-4","12","-2","16","11"]
function sortNumber(a,b){
    return a-b;
}
console.log(numbers.sort(sortNumber))
console.log(numbers.reverse())

console.log(numbers.filter(function(x) {
    return x > -1
 }))
 console.log(numbers.filter(function(x) {
    return x < 0
 }))