let str="udisshaa"

freq={}

for(let i=0;i<str.length;i++){
    freq[str[i]]=(freq[str[i]] || 0) +1
    console.log(freq)
}
 
let x=Object.keys(freq).sort()
console.log(x)


