// Problem-11: Sum and Average of an Array 

// let arr = [1,2,5,10]
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     sum += arr[i];
// }

// console.log("Total is:", sum);
// let avg = sum / arr.length;
// console.log("Average is:", avg)


//with function 

function createAverage(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
    sum += arr[i];
}
let avg = sum / arr.length;

return avg;
}

console.log(createAverage([2,5,8,12,15]))
console.log(createAverage([15,15]))