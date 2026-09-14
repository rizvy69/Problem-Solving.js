//problem 5 : Reverse a String 


let str = "programming";

// console.log(str[5])
// console.log("string length:", str[str.length -1])


// let reverseWord = "";

// for(i = str.length -1 ; i >= 0; i--){
//     let letter = str[i]
//     console.log("i ->", i, letter)
//     reverseWord += letter;
// }

// console.log("Here is Reverse>:", reverseWord)

function reverseWord(word){
    let reverseWord ="";
    for(i = str.length -1 ; i >= 0; i--){
    let letter = str[i]
    console.log("i ->", i, letter)
    reverseWord += letter;
}
   return reverseWord;
}


let word = reverseWord("Programming")
console.log("Here is the Answer:", word)