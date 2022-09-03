/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const arr = s.split("");
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "M") {
            sum = sum + 1000;
        } else if (arr[i] == "D") {
            sum = sum + 500;
        } else if (arr[i] == "C") {
            if(arr[i+1] == "M"){
                sum = sum + 900;
                i += 1;
            }else if (arr[i + 1] == "D"){
                sum = sum + 400;
                i += 1;
            } else {
                sum = sum + 100;
            }
            
        } else if (arr[i] == "L") {
            sum = sum + 50;
        } else if (arr[i] == "X") {
            if(arr[i+1] == "C"){
                sum = sum + 90;
                i += 1;
            } else if(arr[i+1] == "L"){
                sum = sum + 40;
                i += 1;
            } else{
                sum = sum + 10;   
            }
        } else if (arr[i] == "V") {
            sum = sum + 5;
        } else {
            if(arr[i+1] == "X"){
                sum = sum + 9;
                i += 1;
            }else if(arr[i+1] == "V") {
                sum = sum + 4; 
                i += 1;
            }else {
                sum = sum + 1;
            }
        }  
    }
     return sum;
};