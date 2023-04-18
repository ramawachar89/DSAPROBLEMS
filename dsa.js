// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4] //
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

function subArray(arr){
    let i=0
    let j=0
    let sum=arr[0];
    if(arr.length==1){
       return arr
    }
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
       j++
        if(sum<0){
         sum=0
    }
        
    }
    console.log(sum/2)
}

subArray([5,4,-1,7,8])