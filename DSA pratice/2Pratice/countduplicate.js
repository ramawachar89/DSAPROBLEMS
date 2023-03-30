
let array=[23,3,2,23,1,1]

let freq= new Map()

function dup(arr){
   
    for(let i=0;i<arr.length;i++){
    //  freq[arr[i]]=(freq[arr[i]] || 0)+1
    freq[arr[i]]=(freq[arr[i]]||0)+1
    }
    console.log(freq)
    var res=[]
    for(let pair in freq){
       if(freq[pair]>1){
       res.push(pair)
       }
    }
  return res
 
}
console.log(dup(array))