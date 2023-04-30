
let array=[2,3,44,6,77,5]
function swap(arr){
 let i=0;
 let j=arr.length-1;
 while(i<j){
 arr[i]=arr[i]+arr[j]
 arr[j]=arr[i]-arr[j]
 arr[i]=arr[i]-arr[j]
 i++;
 j--
}
let a=arr[0]
let b=arr[1]
while(i<j){
    arr[a]=arr[a]+arr[b]
    arr[j]=arr[a]-arr[b]
    arr[i]=arr[a]-arr[b]
    i++;
    j--
}
return arr
}
console.log(swap(array))
// let maxFreq=0
// let num=0;
// let array=[1,2,5,64,3,5,2,5,5,5,5,5,1,1,6,7]
// let freq={}
// function ss(arr){
//  for(let i=0;i<arr.length;i++){
//     freq[arr[i]]=(freq[arr[i]] || 0)+1
    
//  }
//  for(let pair in freq){
//     if(freq[pair]>maxFreq){
//       maxFreq=freq[pair]
//       num=pair
//     }
//  }
//  return num
// }
// console.log(ss(array))
// let maxnum=0
// let res=0
// let array=[33,4,5,6,7]
// let i=0;
// let j=arr.length-1;
// function max(arr){
//  while(i<j){
//     if(arr[i]+arr[j]>maxnum){
        
//     }
//  }
// }
// console.log(max(array))
