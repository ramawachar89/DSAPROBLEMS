//Max subarray of size K

let array=[2,3,4,5]

function sub_array(arr){
  let current_sum=0;
  let max_sum=0;
  let k=2
  for(let i=0;i<k;i++){
    current_sum=current_sum+arr[i]
  }
  max_sum=current_sum;
//   console.log(max_sum)
  for(let i=k;i<arr.length;i++){
    current_sum=current_sum+arr[i]-arr[i-k]
    // console.log(current_sum)
    max_sum=Math.max(max_sum,current_sum)
  }
  return max_sum
}
console.log(sub_array(array))