let array=[1,1,1,,8,1,1,2]
let freq={}
function uniqueValue(arr){
 for(let i=0;i<arr.length;i++){
  freq[arr[i]]=(freq[arr[i]]||0)+1
 }
 let ans=[]
 for(let pair in freq){
  if(freq[pair]==1){
    ans.push(pair)
  }else if(freq[pair]>1){
   ans.push(pair)
  }
 }
 return ans
}
console.log(uniqueValue(array))