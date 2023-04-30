// let array=[10,22,28,29,30,40]

// function closetss_sum(arr){
//     let x=54
// let i=0;
// let j=arr.length-1;
// var a,b;
// let diff=Number.MAX_VALUE
// while(i<j){
//     let pair_sum=arr[i]+arr[j]
//     let currdiff=Math.abs(pair_sum,x)
//     if(currdiff<diff){
//         diff=currdiff;
//         a=arr[i]
//         b=arr[j]
//     }


//      if(arr[i]+arr[j]>x){
//         j--
//      }else if(arr[i]+arr[j]<x){
//         i++
//      }
    
//     }
//     return [a,b]  
// }
// console.log(closetss_sum(array))

function clo(arr){
    let i=0;
    let j=arr.length-1;
    let x=50
    let a,b;
    let max=Infinity
    while(i<j){
        let pair_sum=arr[i]+arr[j]
        let currentdiff=Math.abs(pair_sum,x)
        if(currentdiff>pair_sum){
         a=arr[i]
         b=arr[j]
        }
        if(arr[i]+arr[j]>x){
            j--
        }else{
            i++
        }
    }
    return a,b
}
console.log(clo(arr))