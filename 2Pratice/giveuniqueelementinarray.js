// give unique element in array and remove duplicate element

let array=[1,1,2,22,3,5,2]
let freq={}
let ans=[]
function removedup(arr){
    for(let i=0;i<arr.length;i++){
        freq[arr[i]]=(freq[arr[i]]||0)+1
    }
    for(pair in freq){
     if(freq[pair]==1){
        ans.push(pair)
     }else if(freq[pair]>1){
        ans.push(pair)
     }
    }
    return ans
}
console.log(removedup(array))

