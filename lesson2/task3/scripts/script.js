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
        console.log("invalid input");
    }
}
console.log(equation(10,7,"/"))
