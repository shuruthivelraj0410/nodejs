import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser())
const data ={
    a:"abcd",
    b:"cdef"
}
app.get('/setsession',(req,res)=>{
   res.cookie('sessionData',data,{
    httpOnly :false,
   })
   res.json({
    message:"cookie set"
   })
})
app.get('/getCookie',(req,res)=>{
    console.log(req.cookies)
    res.json(req.cookies)
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})

//jwt --> json web token 
// method i  jwt --> sign , verify 