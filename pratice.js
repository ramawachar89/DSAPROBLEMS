let arr=[-25,-3,-78,4,58,-14,6,7]

//kadane algorithum
// let max_sum=-Infinity;
// let sum=0;
let max=0;
let smax=0;

for(let i=0;i<arr.length;i++){
    // sum+=arr[i]
  
    if(arr[i]>max){
        // max_sum=sum
        smax=max
        max=arr[i]
    }
    if(arr[i]>smax){
        smax=arr[i]
    }
    // max_sum=Math.max(max_sum,sum)
  console.log(max+smax)
}








