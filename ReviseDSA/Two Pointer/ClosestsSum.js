let array=[10,22,28,29,30,40]

function closetss_sum(arr){
    let x=54
let i=0;
let j=arr.length-1;
var a,b;
let diff=Number.MAX_VALUE
    while(i<j){
    let pair_sum=arr[i]+arr[j]
    let currentDiff=Math.abs(x,pair_sum)
    if(currentDiff<diff){
        diff=currentDiff
        a=arr[i]
        b=arr[j]
    }
     if(arr[i]+arr[j]>x){
        j--
     }else if(arr[i]+arr[j]<x){
        i++
     }
    
    }
    return [a,b]  
}
console.log(closetss_sum(array))