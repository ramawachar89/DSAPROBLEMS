//splice method
let arr=["apple","banana","mango"]

arr.splice(0,1,[{     //first:starting,sec:delete upto , third:add
    name:"ram",
    age:24,
}])
console.log(arr) //2,78,4,

//slice
//it is return new array just like copy of the array
let nums=[3,4,5,6,7]
const num=nums.slice(0,nums.length-1)
console.log(nums)
console.log(num)
