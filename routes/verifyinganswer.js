const express=require("express")
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const prismaClient=require('../db')

//ROUTE1: Verify the answer
router.get('/verifytheanswer/:id',fetchuser,[
    body('answer',"Enter valid answer").isLength({min:3})
],async(req,res)=>{
    try {
        const errors = validationResult(req)
        let success=false
        if (!errors.isEmpty()) {
            return res.status(400).json({ success,errors: errors.array() })
        }
        const question=await prismaClient.questions.findUnique({
            where:{
                id:req.params.id
            }
        })

        if (!question) {
            res.json({success,message:"Please enter valid question Id"})
        }

        const correctAnswer=question.answer
        if (correctAnswer!==req.body.answer) {
            res.json({success,message:"Wrong Answeer"})
        }

        res.json({success:true,message:"Right Answer"})

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})

module.exports=router