//intersect
//union 
//add
//delete
//hasGet

const a_set = new Set()
a_set.add(1)
a_set.add(2)
a_set.add(7)
a_set.add(8)
a_set.add(9)
a_set.add(0)
a_set.add(10)
a_set.add(11)
a_set.add(12)
a_set.add(13)
a_set.add(14)
a_set.add(15)
const b_set = new Set()
b_set.add(1)
b_set.add(2)
b_set.add(3)
b_set.add(4)
b_set.add(5)
b_set.add(6)
b_set.add(7)
b_set.add(8)
b_set.add(9)


//intersect
const intersect = new Set();
for(let i of b_set){
    if(a_set.has(i)){
        intersect.add(i)
    }
}
console.log("intersecting : ",intersect)
console.log(a_set)
console.log(b_set)

//union
const union = new Set(a_set);
// union = a_set
for(let i of b_set){
    union.add(i)
}
console.log("union of a and b : ",union)

// try to convert into object
let a_obj = {}
for(let i of a_set){
    a_obj[i] = i
}
console.log(a_obj)

// {1,2,4,5,6} --> set
// { a:1,b:2,c:4} --> obj