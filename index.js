const express=require("express")
const app=express()
const PORT=5000
app.use(express.json());
var cors = require('cors')
app.use(cors())
require('dotenv').config()

app.get('/',(req,res)=>{
    res.json({message:"Hello"})
})


app.use('/api/auth', require('./routes/auth'))
app.use('/api/questions', require('./routes/questions'))
app.use('/api/verifyinganswer', require('./routes/verifyinganswer'))

app.listen(PORT,()=>{
    console.log("All good! http://localhost:5000")
})