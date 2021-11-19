function Robot(){
    
}
Robot.prototype.work =function(){
    console.log("I'm robot - i'm just working")
}
function CoffeeRobot(){
}
function RobotDancer(){
}
function RobotCooker(){
}
CoffeeRobot.prototype = Object.create(Robot.prototype);
RobotDancer.prototype = Object.create(Robot.prototype);
RobotCooker.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.work = function(){
    console.log("Im CoffeRobot, i'm making coffee")
}
RobotDancer.prototype.work = function(){
    console.log("Im RobotDancer, i'm just dancing")
}
RobotCooker.prototype.work = function(){
    console.log("Im RobotCooker, i'm just cooking")
}
let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();
robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

