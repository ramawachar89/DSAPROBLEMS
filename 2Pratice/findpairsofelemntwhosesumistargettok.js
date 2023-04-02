
//Find unique pair of elemnt whose sum is equal to k
let array=[3,4,5,67,4]  //3,3,4,5,67
let k=8
let i=0;
let j=array.length-1;

function sum(num){
    let arr=num.sort(function(a,b){return a-b})
 while(i<j){
    if(arr[i]+arr[j]==k){
        return [i ,j]
    }else if(arr[i]+arr[j]>k){
        j--
    }else{
        i++
    }
 }
 
}
console.log(sum(array))

//BY USING MAP
let rray=[7,2,4,6,9,11,34,3,2,1]
function uniquepair(str){
    for(let i=0;i<str.length;i++){
        freq[str[i]]=(freq[str[i]]||0)+1
    }
    for(let pair in freq){
        if(pair-k){

        }
    }
}