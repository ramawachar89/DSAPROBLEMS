let array=[1,1,1,,8,1,1,2]

function uniqueValue(arr){
  let i=0;
  let j=arr.length-1;
  if(arr[i]!=arr[j]){
    arr[i]+=arr[j]
    j--
  }else{
    i++
  }
  return arr[i]
}
console.log(uniqueValue(array))