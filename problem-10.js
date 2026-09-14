// Problem -10: find the smallest Number in  an Array 

function SmallestNumberFromArray (arr){
    let Smallest = arr[0];
for(let i = 1; i < arr.length; i++){
    let currentElement = arr[i];
    if( currentElement < Smallest){
        Smallest = currentElement;
    }
    // console.log("Current Element:", currentElement)
}
return Smallest;
}


console.log(SmallestNumberFromArray([250,20,5,6,560,7500]))