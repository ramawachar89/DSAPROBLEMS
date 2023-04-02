//Write a program for Reverse a string
// function reverse(arr){
    
//  if(arr.length<=1)return arr
// return  reverse(arr.slice(1)) + arr[0]

// }                                         
// console.log(reverse("Ramhiiii"))

//write a program for flatten array
// function flateen(arr){
//     let flatarr=[];
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])==false) flatarr.push(arr[i])
//     else flatarr=flatarr.concat(flateen(arr[i]))
//   }
//   return flatarr
// }
// console.log(flateen(["a",["n",[1,[2,0,["K"]],3],"e","r",[2,3],4]]))

//write a program to number

// function flateen(arr){
//     let flatarr=[];
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])==false) flatarr.push(arr[i])
//     else flatarr=flatarr.concat(flateen(arr[i]))
//   }
//   return flatarr
// }
// console.log(flateen([1,2,3,4,[345,55,"k","kk"]["l",3,4]]))

//write a program for palindrome
// function palin(str){
//     if(str.length<=1) return true
//     return (str[0]==str.slice(-1) && palin(str.slice(1,-1)))
// }
// console.log(palin("madooam"))

function flat(arr){
    let flatten=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])==false) flatten.push(arr[i])
        else flatten=flatten.concat(flat(arr[i]))
    }
    return flatten
}
console.log(flat([1,3,4,["kksks",["kdldl"],[1,3,4]]]))

function palin(str){
    if(str.length<1)return true;
    return str[0]==str.slice(-1) && palin(str.slice(1,-1))
}
console.log(palin("madam"))

function fac(n){
    if(n==0)return 1;
    return n*(fac(n-1))
}
console.log(fac(3))
// function pow(a,d){
//     if(a==0)return 1
//     return a*pow(d-1)
// }
// console.log(pow(3))

function prod(arr,i){
    if(i==arr.length) return 1
    return arr[i]*prod(arr,i+1)

}
console.log(prod([2,3,4,5],2))
function sum(n){
    if(n<=0) return 1
        return n*sum(n-1)
    
}
console.log(sum(3))  //1,2,3

function power(a,b){
    if(b==0) return 1
    return a*power(a,b-1)
}
console.log(power(3,2))
function sumdig(n){
    if(n==0)return 0
    return n%10+sumdig(Math.floor(n/10))
}
console.log(sumdig(123))