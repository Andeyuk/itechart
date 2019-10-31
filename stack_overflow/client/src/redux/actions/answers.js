import voteActionsGenerator from '../generators/actions/vote';
import loadActionsGenerator from '../generators/actions/load';
import answerTypes from '../constants/answers';

const VoteActions = voteActionsGenerator('answers');
const LoadActions = loadActionsGenerator('answers');


const setAnswers = (answers) => {
    return{
        type: answerTypes.SET_ANSWERS,
        payload: answers
    }
}


export default  {
    setAnswers,
    ...VoteActions,
    ...LoadActions,
}


