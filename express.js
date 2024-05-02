import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.json()) // inbuilt middleware
const validation = (req,res,next)=>{ // custom middleware
    if(req.body.n == 10){
        res.a = 10*10;
    }
    next();
}
app.get('/getData',validation,(req,res)=>{
console.log(req)
console.log(req.query.n)
res.json(res.a)
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})