// let arr=[1,2,3,4,1,2,3,4,5,]
// let frequencycounter={}

// for(let val of arr){
//    if(frequencycounter[val]){
//     frequencycounter[val]++
//    }else{
//     frequencycounter[val]=1
//    }
//    console.log(frequencycounter)
// }

function same(arr,arr2){
 for (let i=0;i<arr.length;i++){
  if(arr.includes(Math.sqrt(arr2[i]))){
    return true
  }
 }
 return false;
}
console.log(same([4,2,3],[16,4,3]))