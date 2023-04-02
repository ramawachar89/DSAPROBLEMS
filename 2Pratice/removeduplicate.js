//remove duplicate

var removeDuplicates = function(nums) {
    let count =1;

    for(let i = 0 ; i<nums.length-1 ; i++){
        if(nums[i]!=nums[i+1]){
            nums[count]= nums[i+1]
            console.log(nums[count])
            count++
        }
    }
    nums.length=count   // array after removing duplicates
    return nums
    // return count :-length of array after removing duplicates
    };
   console.log( removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,11,45]))
///second method
   let freq={}
   let ans=[]
   function dup(arr){
    for(let i=0;i<arr.length;i++){
      freq[arr[i]]=(freq[arr[i]]||0)+1
    }
      for(let pair in freq){
        if(freq[pair]==1){
           ans.push(pair)
        }else if(freq[pair]>1){
            ans.push(pair)
        }
      }
      return ans
   }
   console.log(dup([0,0,1,1,1,2,2,3,3,4,4,11,45]))