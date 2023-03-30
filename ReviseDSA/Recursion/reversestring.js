//Write a program for Reverse a string
function reverse(arr){
    
 if(arr.length<=1)return arr
return  reverse(arr.slice(1)) + arr[0]

}                                         
console.log(reverse("Ramhiiii"))

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

