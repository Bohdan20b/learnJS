var styles = ["Jazz", "Blues"]

for (var i = 0; i < styles.length; i++) {
    console.log(styles[i])
}
console.log("===============")
styles.push("Rock-n-Roll")
for (var i = 0; i < styles.length; i++) {
    console.log(styles[i])
}
console.log("===============")
styles.splice(styles.length-2,1,"Classic")
for (var i = 0; i < styles.length; i++) {
    console.log(styles[i])
}
console.log("===============")
console.log(styles.shift())
console.log("===============")
styles.unshift("Rap","Reggae")
for (var i = 0; i < styles.length; i++) {
    console.log(styles[i])
}