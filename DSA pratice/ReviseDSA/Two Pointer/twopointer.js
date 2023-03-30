let array=[13,45,32,43,21]
array.sort()

let i=0;
let j=array.length-1;
let x=77;
let a,b
function twoPointer(arr){
while(i<j){
    if(arr[i]+arr[j]==x){
       return [arr[i],arr[j]]
    }else if(arr[i]+arr[j]<x){
        i++
    }else if(arr[i]+arr[j]>x){
        j--
    }
}
return 0;
}
console.log(twoPointer(array))

//
// let array=[10,22,28,29,30,40]
// let x=52;
// var i=0;
// var j=array.length-1;
// function closests(arr){
  
//    while(i<j){
//     if(arr[i]+arr[j]==x){
//     return 1;
//    }
//    else if(arr[i]+arr[j]<x){
//         i++
//    }else {
//         j--
//    }
   
// }
// return 0;
// }
// console.log(closests(array))