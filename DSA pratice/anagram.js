function isAnagram(str,str1){
let fre={}; 
let fre1={};

for(let i=0;i<str.length;i++){
    fre[str[i]]=(fre[str[i]]||0)+1
     console.log(fre)
}
for(let i=0;i<str1.length;i++){
    fre1[str1[i]]=fre1[str1[i]]||0+1
   
}
for(key in fre){
    
    if(!fre1[key]){
        
        return false
    }
    if(fre1[key]!==fre[key]){
        return false
    }
}
for(key in fre1){
    if(!fre[key]){
        return false
    }
    if(fre[key]!==fre[key]){
        return false
    }
    
}
return true
}
console.log(isAnagram("rampppm","mar"))


// function isAnagram(s1,s2){
//     if(s1.length!== s2.length){
//         return false;
//     }
//     let map = {};
//     for(let i = 0; i < s1.length; i++){
//         if(!map[s1[i]]){
//             map[s1[i]] = 1;
//         }else{
//             map[s1[i]]++;
//         }
//     }
//     for(let i = 0; i < s2.length; i++){
//         if(!map[s2[i]]){
//             return false;
//         }else{
//             map[s2[i]]--;
//         }
//     }
//     return true;
// }
// console.log(isAnagram('cat','act'))

//leetcode solution

// let obj = {};
//   let obj1 = {};
//   for (let i = 0; i < s.length; i++) {
//     obj[s[i]] = (obj[s[i]] || 0) + 1;
//   }
//   for (let i = 0; i < t.length; i++) {
//     obj1[t[i]] = (obj1[t[i]] || 0) + 1;
//   }
//   for (let k of Object.keys(obj)) {
//     if (!obj1[k]) {
//       return false;
//     }
//     if (obj[k] !== obj1[k]) {
//       return false;
//     }
//   }
//   for (let k of Object.keys(obj1)) {
//     if (!obj[k]) {
//       return false;
//     }
//     if (obj[k] !== obj1[k]) {
//       return false;
//     }
//   }
//   return true;