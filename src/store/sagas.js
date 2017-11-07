import { all, fork } from 'redux-saga/effects';
import watchLogger from './middlewares/logger';

export default function* rootSaga({ getState, dispatch, subscribe }) {

  yield all([
    fork(watchLogger, getState)
  ]);
}

