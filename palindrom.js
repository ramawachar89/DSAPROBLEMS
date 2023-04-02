let str = "bahpab";

function pallin() {
  // let i = 0,
  //   j = str.length - 1;
  // while (i < j) {
  //   if (str[i] != str[j]) return false;
  //   i++;
  //   j--;
  // }
  // return true;
  let i=0;
  let j=str.length-1;
  while(i<j){
    if(str[i]==str[j]){    //return nichelikhna padega
      i++;
      j--
    }
    else if(str[i]!=str[j]){
    return false
    }
  }
  return true
}
console.log(pallin(str));


