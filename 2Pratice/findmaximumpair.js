


let arr=[3,4,5,88,33,22,34,6]


let max=0;
let smax=0;
let tmax=0
function maxPair(arr){
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        tmax=max
       smax=max;
       max=arr[i]
    }else if(arr[i]>smax){
          tmax=smax
          smax=arr[i]
    }else if(arr[i]>tmax){
        tmax=arr[i]
    }
}
return [max,smax,tmax]
}
console.log(maxPair(arr))