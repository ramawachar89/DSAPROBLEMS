// let array = [1, 2, 3, 4, 5, 6, 7]
// function sum(arr) {
//     let i = 0;
//     let j = 1;
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<arr.length;j++){
//           current_sum=arr[i]+arr[j]
//           console.log(arr[i],arr[j])
//           if(sum<current_sum){
//             sum=current_sum
//           }
         
//         }
//     }
//     return sum;
// }
// console.log(sum(array))

let array = [1, 2, 3, 4, 5, 6, 7,9]

function sum(arr,num){
  let i=0;                        //
  let current_sum=0;
  for(let i=0;i<arr.length;i++){
     let temp=0;
    for(let j=0;j<num;j++){
        temp+=arr[i+j]
        console.log(arr[i+j])
    }
    if(temp>current_sum){
        current_sum=temp
    }
  }
  return current_sum;
}
console.log(sum(array,3))
