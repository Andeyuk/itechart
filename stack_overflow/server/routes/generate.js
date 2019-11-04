const express = require('express');
const router = express.Router();

const Question = require('../db/models/question');
const Answer = require('../db/models/answer');



router.get('/', async (req, res) => {
    try {
        const questionArr = Array(60).fill(0).map((el, ind)=>{
            return {
                header: `lorem${ind + 1}`,
                content: `lorem${ind + 1} Content`,
                userId: 1,
                id: ind+ 1
            }
        })
    
        const answerArr = Array(5).fill(0).map((el,i)=>{
            return {
                questionId: i+1,
                content: `Lorem${i}`,
                userId: 1,
            }
        })
    
        const replyArr = Array(5).fill(0).map((el,i)=>{
            return {
                questionId: 1,
                parentId: i + 1,
                content: `Lorem${i}`,
                userId: 1,
            }
        })

        const questins = await Question.bulkCreate(questionArr)

        const answers = await Answer.bulkCreate(answerArr)

        const replies = await Answer.bulkCreate(replyArr)
        res.send('OK')

    } catch (error){
        res.status(error.status || 500).send(error);
    }
});



module.exports = router;