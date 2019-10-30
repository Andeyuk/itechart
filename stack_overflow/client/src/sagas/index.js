import { select, takeEvery, fork } from 'redux-saga/effects';
import questionSaga from './questions';

function* testPattern(){
    yield takeEvery('*', function* logger(action) {
        if (!action.type.match(/REQUEST/)) return;

        try {
             const asyncAction = yield action.promice()
        } catch(error) {
            console.log(error.response)
        }

        const state = yield select()
    
        console.log('action', action);
        console.log('state after', state);
    })
}

export default function* root(){
    yield fork(testPattern)
    yield fork(questionSaga)
}