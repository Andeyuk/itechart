import { select, takeEvery, fork } from 'redux-saga/effects';

function* testPattern(){
    yield takeEvery('*', function* logger(action) {
        if (!action.type.match(/REQUEST/)) return;
        
        const state = yield select()
    
        console.log('action', action);
        console.log('state after', state);
        console.log(action.promice)
    })
}

export default function* root(){
    yield fork(testPattern)
}