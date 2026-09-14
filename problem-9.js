//Problem-9 : find the largest Number in an Array 



let arr = [500, 120, 20, 5010, 1220]
// let largest = arr[0];

// for(let i = 1; i < arr.length; i++){
//     let currentElement = arr[i];
//     if( currentElement > largest){
//         largest = currentElement;
//     }
//     console.log("Current Element:", currentElement)
// }

// console.log(largest)


//with function 

function largestNumberFromArray (arr){
    let largest = arr[0];
for(let i = 1; i < arr.length; i++){
    let currentElement = arr[i];
    if( currentElement > largest){
        largest = currentElement;
    }
    // console.log("Current Element:", currentElement)
}
return largest;
}


console.log(largestNumberFromArray([250,20,5,6,560,7500]))