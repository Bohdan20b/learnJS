const employeeSalaries = {
    employeeRank1:1500,
    employeeRank2:2500,
    employeeRank3:3500,
    employeeRank4:4500
}
let total = 0;
for (let value in employeeSalaries) {
  total += employeeSalaries[value];
}
console.log(total)