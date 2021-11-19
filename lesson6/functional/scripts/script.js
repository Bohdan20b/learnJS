function Robot(){
    this.work =function(){
        console.log("I'm robot - i'm just working")
    }
}
function CoffeeRobot(){
    Robot.call(this);  
}
function RobotDancer(){
    Robot.call(this);  
}
function RobotCooker(){
    Robot.call(this);  
}
var robot1 = new Robot();
var coffeeRobot1 = new CoffeeRobot();
var robotDancer1 = new RobotDancer();
var robotCooker1 = new RobotCooker();
robot1.work();
coffeeRobot1.work();
robotDancer1.work();
robotCooker1.work();

