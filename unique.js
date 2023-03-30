let arr= [1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6,6,6, 7, 7]
function aa(array){
for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            array[i] = array[j]
            console.log(array[i])
            i++

        } else if (array[i] == array[j]) {
            
           
            j++

        }
    }
    
    return array
}
}
console.log(aa(arr))

// let arr = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6,6,6, 7, 7]
// function unique(array){
// for(let i=0;i<array.length;i++){
//     for(j=1;j<array.length;j++){
//         if (array[i] !== array[j]) {
//                         array[i] = array[j]
//                         console.log(array[i])
//                         j++
            
//                     } else if (array[i] == array[j]) {
                        
                       
//                         i++
            
//                     }else{}
//                 }
//             }
//         }
// console.log(unique(arr))

// function palin(str){
//  let i=0;
//  let j=str.length-1  //
//  while(i<j){
//     if(str[i]!=str[j])
//      return false
//       i++;
//       j--
//       console.log(str[i],str[j])
//     }
//  return true;
// }
// console.log(palin("bcab"))
