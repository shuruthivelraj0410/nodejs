//callback
// callback drawbacks --> promises 
//tough times promises --> async/await 

//callbacks()
const callback =(b)=>{
console.log(b)
}
const func = (a,callback)=>{
let b = a*a ;
setTimeout(()=>{
    console.log("Execution----------->")
},500)
callback(b)
}
console.log("1111111111111111111111111")
let a = 10;
func(a,callback)

//promises
// resolve , reject 
// resolve --> then()
// reject --> catch()

const func1 = (c)=>{
    return new Promise((resolve,reject)=>{
     if(c==10){
        setTimeout(()=>{
            resolve('correct value is sent')
        },2000)
     }
     else{
        reject('not the same value')
     }
    })
};

// func1(10).then((data)=>{
// console.log("----------------->",data)
// }).catch((e)=>{
// console.log("******************",e)
// })

(async()=>{
    try{
 const res =  await  func1(10)
 console.log(res)
 console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    }catch(e){
        console.log("***************",e)
    }
})()

