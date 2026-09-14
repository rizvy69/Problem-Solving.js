// problem -3 factorical of a Number 


//without function
// let number = 5;
 
// let result = 1;

// for(let i = 1; i <= number; i++){
//     console.log("i:", i)
//     result = result * i;
// }

// console.log("result is:", result)

// with function 


function getFactorAll(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
    console.log("i:", i)
    result = result * i;
}
  return result;
}

console.log(getFactorAll(5))