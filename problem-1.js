// problem -1 check if a number is Even or odd

let number = 90;

// // if(number % 2 === 0){
//     // console.log("Even Number")
// }
// else{
//     // console.log("Odd Number")
// }


function numberVerify(number){
    if(number % 2 === 0){
    return "Even Number"
    }
    else{
    return "Odd Number"
    }
}


console.log(numberVerify(50));
console.log(numberVerify(25));
