var s1="darshan";
var s2="aman";

function swap(s1,s2){
  let a1=s1.split("") .join(' ') 
  console.log(a1)
  s1=s1+s2;
  s2=s1-s2;
  s1=s1-s2;
console.log(s1,s2)
}
swap(s1,s2)
