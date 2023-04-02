//Rotate array by  k number
//step1:first reverse all the array (swap)
//step2:reverse k num element
//step2:reverse remaining element
let array=[2,3,44,6,77,5] //77,5
let k=2;
function swap(arr,i,j){
//  let i=0;
//  let j=arr.length-1;
 while(i<j){
 arr[i]=arr[i]+arr[j]
 arr[j]=arr[i]-arr[j]
 arr[i]=arr[i]-arr[j]
 i++;
j--
}
return arr
}
arrray=swap(array,0,array.length-1)
array=swap(array,0,k-1)
array=swap(array,k,array.length-1)
console.log(array)




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
