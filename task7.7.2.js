function calculate(a,b,operator){
    switch(operator){
        case "+":{
            return a + b;
            break;
        }
        case "-":{
            return a - b;
            break;
        }
        case "*":{
            return a * b;
            break;
        }
        case "/":{
            return a / b;
            break;
        }
    }
    
}
const result = calculate.apply(null, [9,3,"/"]);
console.log(result);