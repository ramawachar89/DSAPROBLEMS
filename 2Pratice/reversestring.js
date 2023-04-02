


function reverse(str){
    if(str.length==0)return ""
    return reverse(str.slice(1))+str[0]
}
function rev(arr){
    let words=arr.split(' ')
    for(let i=0;i<words.length;i++){
    words[i]=reverse(words[i])
    }
    return words.join(' ')
}
console.log(rev("you are so busy"))

