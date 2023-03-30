function sumadd(str){
    str.sort((a,b)=>a-b)
let left=0;
let right=str.length-1;
while(left<right){
    let sum =str[left]+str[right]
    if(sum===0){
      return [str[left],str[right]]
    }else if(sum>0){
        right --
    }else{
        left++
    }
}
 
}
   console.log(sumadd([-5,-4,7,-3,-2,0,2,66,4,6,8]))