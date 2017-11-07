import { fork, all, } from 'redux-saga/effects';
import loginSaga from '../modules/login/sagas';

export default function* rootSaga({ getState, dispatch, subscribe }) {

  yield all([
    fork(loginSaga)
  ]);
}

