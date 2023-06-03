function counterNum(arr,arr2){
   if(arr.length!==arr2.length){
    return false
   } 
   let num={}
   let num2={}
   for(let key of arr ){
     num[key]=(num[key]||0)+1
     console.log(num)
   }//
}
console.log(counterNum([2,1,3,4],[2,3,5,6]))
