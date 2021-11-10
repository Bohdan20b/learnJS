function equation (a,b,c) {

    
        if (c =='*'){
            return a*b;
        }
        else if(c== '/' && b != 0){
            return a/b;
        }
        else if (c == '+'){
            return a+b;
        }
        else if(c =='-'){
            return a-b;
        }
        else{
            console.log("invalid c value");
        }
}
try{
    console.log(equation(10,5,"/"))
}
catch (e) {
    console.log("invalid a or b")
}