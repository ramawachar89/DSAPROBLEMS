

function rev(str){
    if(str.length<=1)return str
    return rev(str.slice(1))+str[0]
}
console.log(rev("bhavesh"))

//flatten array
function flatten(arr){
    for(let i=0;i<arr.length;i++){
        let flatarray=[]
        if(Array.isArray(arr[i])==false)flatarray.push(arr[i])
        else
        flatarray=flatarray.concat(flatten(arr[i]))
    }
    return  flatarray
}
console.log(flatten([1,2[3],"kklk"]))

