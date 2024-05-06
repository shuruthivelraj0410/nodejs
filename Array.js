const a_Array = [1,2,3,4,5,6,7];

a_Array.push('a')
a_Array.push({a:"a",b:"b"})

// iteration 
// for loop (let i =0;i<n;i++) 
// for of loop --> map,sets,json 
// forEach() --> map, sets, json 

a_Array.forEach((value)=>{
console.log(value)
})

for (let i of a_Array){
    console.log("******************",i)
}
// splice --> mutated
console.log(a_Array.splice(3,1))
console.log(a_Array)

//slice --> non mutated
a_Array.pop()
a_Array.pop()
console.log(a_Array) 
console.log("****************************",a_Array.slice(3,-3)) //  
console.log(a_Array)

// [1,2,3,4] 3,-1

//split --> non mutated
 const str = "i love programming";

console.log(str.split(''))

//Object.keys(), Object.values()
 const a = {
    b:"12345",
    c:"asdfghjk",
    d:"efgbn"
 }

 console.log(Object.keys(a))
 console.log(Object.values(a))
