//capital first first letter
//problems
function cap(arr){
    let str=arr.split(" ")
    console.log(str)
    if(str.length==0)return []
  
    let res=[]
    
let s=str[0][0].toUpperCase()+str[0].slice(1)
  res.push(s)
  return res.concat(cap(str.slice(1)))
}
// console.log(cap("hardwork beat talent"))

//Reversestring
function reverse(a){
    if(a.length==0)return ""
 return reverse( a.slice(1))+a[0]
}

function rev(b){
  let w=b.split(" ")
  for(let i=0;i<w.length;i++){
     w[i]=reverse(w[i])
  }
  return w
}
console.log(rev("hardwork beat talent"))

//find maximum pair in the array
let array=[2,33,44,552,2,4,55,6]
let max=0;
let smax=0;
for(let i=0;i<array.length;i++){
if(array[i]>max){
    smax=max;
    max=array[i]
}else if(array[i]>smax){
    smax=array[i]
}
}
console.log(max,smax)
//reverse array swap
let arrr=[3,4,5,6,7]
let i=0;
let j=arrr.length-1
function swaparray(str){
    while(i<j){
 str[i]=str[i]+str[j]
 str[j]=str[i]-str[j]
 str[i]=str[i]-str[j]
 i++;
 j--
 
    }
    return str
}
console.log(swaparray(arrr))

function rot(str,i,j){
    while(i<j){
        str[i]=str[i]+str[j]
        str[j]=str[i]-str[j]
        str[i]=str[i]-str[j]
        i++;
        j--;          //6,7,5,4,3
    }
return str
}
let k=1
let answer=rot(arrr,0,k)
answer=rot(arrr,k,arrr.length-1)
console.log(answer)


function rev(str){
    if(str.length==0)return ""
    return rev(str.slice(1))+str[0]
}
function reverse(ar){
   let s=ar.split(" ")
   for(let i=0;i<s.length;i++){
   s[i]=rev(s[i])
  
}
return s.concat(s[i])
}
console.log(reverse("hardwork beat talent"))
