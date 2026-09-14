// Problem 2 : sum of a Range of Numbers ( 1 to N)
// 7 = 1 + 2 + 3 + 4 + 5 + 6 + 7


// without function 

// let number = 7;

// let sum = 0;
// for(let i = 0; i <= number; i++ ){
//     sum = sum + i;
//     console.log("i = ", i)
// }
// console.log = ("Sum = ", sum)


//with function 


function sumRenge(number){
    let sum = 0;
    for(let i = 1; i <= number; i++ ){
    sum = sum + i;
    console.log("i = ", i)
}
return sum;
}


console.log(sumRenge(7));
console.log(sumRenge(5));