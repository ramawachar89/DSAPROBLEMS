let fre1={}
let fre2={}

function same(arr1,arr2){
    for(let val of arr1){
        if(fre1[val]){
            fre1[val]++
          }else{
          fre1[val]=1
          }
        // fre1[val]=(fre1[val] ||0)+1
    }
    for(let val of arr2){
        if(fre2[val]){
            fre2[val]++
            }else{
                fre2[val]=1
         }
        // fre2[val]=(fre2[val] || 0)+1
    }
   for(let key in fre1){
    if(!(key**2 in fre2)){
        return false;
    }
    if(fre2[key**2]!==fre1[key]){
        return false;
    }
   }
  return true
}
console.log(same([1,2,3],[1,4,9]))