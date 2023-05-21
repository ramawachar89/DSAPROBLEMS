 let a=4;
 let b=0;
function divide(a,b){
    if(b===0){
      throw Error("kkkkkk")
    }
    return a/b
  }
  try{
   let dd=divide(2,0)
   console.log(dd)
  }catch(e){
    (e.message)
  }