
//Capitalize first letter
// function capitalfirst(arr){
//     if(arr.length==0)return [];
//     let result=[]
//     let s=arr[0][0].toUpperCase() + arr[0].slice(1)
//     result.push(s)
//     return result.concat(capitalfirst(arr.slice(1)))
// }
// console.log(capitalfirst(["abc","jsjsk","kkksksk","ram"]))

// function reverse(str){
//     if(str.length==0)return ""
//   return reverse(str.slice(1))+str[0]
// }
// function rev(arr){
//     let word=arr.split(" ")
//  for(let i=0;i<word.length;i++){
//     word[i]=reverse(word[i])
//  }
//  return word
// }
// console.log(rev('I ma revelc tnegilletni'));

// function capital(arr){
//     if(arr.length==0)return []
//   let res=[]
//    let s=arr[0] [0].toUpperCase()+arr[0].slice(1)
//    res.push(s)
//    return res.concat(capital(arr.slice(1)))
// }
// console.log(capital(["jaka","ooo"]));

function cap(s){
    let ans=[]
   
    console.log(s)
 let res=s[0][0].toUpperCase() + s[0].slice(1)
 ans.push(res)
return ans.concat(cap(s.slice(1)))
}
console.log(cap("rjloi laksl sdfg dfr"))