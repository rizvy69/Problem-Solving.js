//Problem - 8: Count words to in a Sentence 



// let arr = ["code" , "bangladesh", "dhaka"];
// console.log(arr.length);

// let str = "Programming Hero code";
// let strSpiltArr = str.split(" ");
// console.log(strSpiltArr.length);


//with function 

function wordCount(str){
let strSpiltArr = str.split(" ");
  return strSpiltArr.length;
}

console.log(wordCount("Hello Bangladesh"))
console.log(wordCount("Hello I Love Bangladesh"))