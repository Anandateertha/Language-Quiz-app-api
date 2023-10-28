const express=require("express")
const router = express.Router();
const prismaClient=require('../db')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

//ROUTE1: Get all the questions

router.get('/fetchallquestions', fetchuser, async (req, res) => {

    try {
        const products = await prismaClient.questions.findMany()
        res.json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }

})

//ROUTE2: Add a question

router.post('/addquestion', fetchuser, [
    body('question', 'Enter a Valid Question').isLength({ min: 3 }),
    body('option1', 'Enter a Valid Option').isLength({ min: 3 }),
    body('option2', 'Enter a Valid Option').isLength({ min: 3 }),
    body('option3', 'Enter a Valid Option').isLength({ min: 3 }),
    body('option4', 'Enter a Valid Option').isLength({ min: 3 }),
    body('answer', 'Enter a Valid Answer').isLength({ min: 3 })
], async (req, res) => {

    try {
        const { question, option1, option2, option3,option4,answer } = req.body
        const errors = validationResult(req)
        let success=false
        if (!errors.isEmpty()) {
            return res.status(400).json({ success,errors: errors.array() })
        }

        const product = await prismaClient.questions.create({
            data:{
                question,
                option1,
                option2,
                option3,
                option4,
                answer
            }
        })

        success=true

        res.json({success,product})
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }

})

module.exports = router