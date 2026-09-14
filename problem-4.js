// Problem -4: FizzBuzz (1 to N)
// Loop through numbers from 1 to n. if a number is divisible by 3 , print "Fizz"; if divisible by 5,print "Buzz", if divisible by both, print "FizzBuzz";otherwise ,print the number itself.


// let number = 15;

// for(let i = 1; i <= number; i++){
//     console.log("i<<", i)
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else {
//         console.log("The Number itself" , i)
//     }
// }


//with function 

function FfizzBuzz(number){
    for(let i = 1; i <= number; i++){
    console.log("i<<", i)
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
    else {
        console.log("The Number itself" , i)
    }
}
}


FfizzBuzz(15);