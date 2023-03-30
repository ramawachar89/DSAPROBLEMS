// let d=4;
// function fac(n){
//     if(n==1)return 1
//     return n*fac(n-1)
// }
// // console.log(fac(d))

// function pow(a,b){
//     //base
//     if(b==0)return 1;
//     return a*pow(a,b-1)
// }

// console.log(pow(5,2));
// function aa(arr,i){
//     if(i==arr.length)return 0
//     return arr[i]+aa(arr,i+1)
// }
// console.log(aa([1,2,3,9],0))

// function fun(n){
//     //base
//     if(n==0)return

//     //recursive
  
//     fun(n-1)
//     console.log(n);
// }

// fun(5)
function toi(n,A,C,B){
    //base
    if(n==0)return
    //recursive
    toi(n-1,A,B,C)//n-1 A->B
    console.log(A,"->",C);
    toi(n-1,B,C,A)
}

toi(5,'A','B','C')