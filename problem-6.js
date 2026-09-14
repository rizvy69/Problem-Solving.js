//Problem -6 : Count Vowels in a String

let str = "Programming Hero";

let vowels = "aeiou";

// console.log(vowels.includes("e"))

let count = 0;
// for(let i = 0; i < str.length ; i++){
//     let letter = str[i];
//     console.log("i , -> letter ->>>" , i , letter)
//     if(vowels.includes(letter)){
//         console.log(("vowel"))
//         count++;
//     }
// }

// console.log(count);

//with function 

function vowelsCheck(str){
for(let i = 0; i < str.length ; i++){
    let letter = str[i];
    console.log("i , -> letter ->>>" , i , letter)
    if(vowels.includes(letter)){
        console.log(("vowel"))
        count++;
    }
}
  return count;
}
let word = vowelsCheck("I love Bangladesh")
console.log("Vowel Ache =>>", word)