import jwt from 'jsonwebtoken';
const secret = "123455"
const data = {
    a:"abcd",
    b:"cdef"
}
// https://jwt.io/
// create a jwt --> sign()
const token = jwt.sign(data,secret)
console.log(token)

//decode -->verify()
const res = jwt.verify(token,secret)
console.log(res)

