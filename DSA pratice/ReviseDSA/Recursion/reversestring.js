//Write a program for Reverse a string
// function reverse(arr){
    
//  if(arr.length<=1)return arr
// return  reverse(arr.slice(1)) + arr[0]
// }                                         
// console.log(reverse("ram"))

//write a program for flatten array
// function flateen(arr){
//     let flatarr=[];
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])==false) flatarr.push(arr[i])
//     else flatarr=flatarr.concat(flateen(arr[i]))
//   }
//   return flatarr
// }
// console.log(flateen(["a",["n",[1,[2,0,["K"]],3],"e","r",[2,3],4]]))

//write a program to number

// function flateen(arr){
//     let flatarr=[];
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])==false) flatarr.push(arr[i])
//     else flatarr=flatarr.concat(flateen(arr[i]))
//   }
//   return flatarr
// }
// console.log(flateen([1,2,3,4,[345,55,"k","kk"]["l",3,4]]))

//write a program for palindrome
// function palin(str){
//     if(str.length<=1) return true
//     return (str[0]==str.slice(-1) && palin(str.slice(1,-1)))
// }
// console.log(palin("madooam"))

// function pa(arr){
//   let flatarr=[]
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])==false) flatarr.push(arr[i])
//     else flatarr=flatarr.concat(pa(arr[i]))
//   }
//   return flatarr
// }
// console.log(pa(["a",["n",[1,[2,0,["K"]],3],"e","r",[2,3],4]]))

// function rev(arr){
//     if(arr.length<=1)return arr
//     return (arr.slice(1))+arr[0]
// }
// console.log(rev("kslso"))

// function palin(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         if(arr[i]===arr[j]){
//             i++;
//             j--
//         }else {
//             return false
//         }
//     }
//     return true;
// }
// console.log(palin("madam"))

function dd(arr){
    if(arr.length==0)return []
    let ans=[]
    let s=arr[0][0].toUpperCase()+arr[0].slice(1)
      ans.push(s)
      return s.concat(dd(arr.slice(1)))
}
console.log(dd(["asd","kdl"]))
//flat array
function flatten(arr){
    if(arr.length>=1)return arr
    let flat=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])==false)flat.push(arr[i])
        else flat=flat.concat(flatten(arr[i]))
    }
    return flat
}
console.log(flatten([2,[33,43]]))

