let students = [
    {
        "age":15,
        "groupName":"group One"
    },
    {
        "age":18,
        "groupName":"group Two"
    },{
        "age":19,
        "groupName":"group Three"
    },{
        "age":20,
        "groupName":"group One"
    },{
        "age":16,
        "groupName":"group Two"
    },{
        "age":21,
        "groupName":"group Three"
    },{
        "age":25,
        "groupName":"group One"
    },{
        "age":17,
        "groupName":"group Two"
    },{
        "age":22,
        "groupName":"group Three"
    },{
        "age":21,
        "groupName":"group One"
    }
    ]
    // task 3.a
console.log(students)
let groupNames = students.map(a => a.groupName);
console.log(groupNames)
// task 3.b
let ageArr = students.map(a => a.age)
console.log(ageArr)
console.log(
    ageArr.reduce((a, b) => a + b, 0)
  )
//task 3.c

let youngAgeArr = students.map(a => a.age < 18)
console.log(youngAgeArr)

