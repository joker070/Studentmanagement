
import loginSaga from './loginSaga.js';
import { fork } from 'redux-saga/effects';

function* rootSaga() {
  yield [
    fork(loginSaga)
  ];
}

export default rootSaga;
