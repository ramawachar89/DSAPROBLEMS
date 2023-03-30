function isanagram(str,str2){
    let freq1={}
    let freq2={}
    
for(let i=0; i<str.length;i++){
    freq1[str[i]]=(freq1[str[i]]||0)+1
}
for(let i=0;i<str2.length;i++){
    freq2[str[i]]=freq2[str[i]]||0+1
}
  
  for(let key in freq1){
  if(!freq2[key]){
    return false;
  }
  if(freq2[key]!==freq1[key]){
    return false
  }
  for(let key in freq2){
    if(!freq1[key]){
        return false
    }
    if(freq1[key]!==freq2[key]){
        return false
    }
  }
  }
return true
}
console.log(isanagram("abcdefgh","abcdefgh"))