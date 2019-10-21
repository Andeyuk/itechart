const express = require('express');
const router = express.Router();

const Question = require('../db/models/question');
const Answer = require('../db/models/answer');



router.get('/', (req, res) => {
    const questionArr = Array(60).fill(0).map((el, ind)=>{
        return {
            header: `lorem${ind + 1}`,
            content: `lorem${ind + 1} Content`,
        }
    })

    const answerArr = Array(5).fill(0).map((el,i)=>{
        return {
            QuestionId: i+1,
            id: i+1,
            parentId: i-1 > 0 ? i-1 : 1,
            content: `Lorem${i}`,
        }
    })

    const questins = Question 
        .bulkCreate(questionArr)

    const answers = Answer
        .bulkCreate(answerArr)
    

    Promise.all([questins , answers])
        .then(([ questins, answers])=>{
        })
        .then((r)=>res.send('OK'))
        .catch(err=>res.status(err.status || 500).send(err))
});



module.exports = router;