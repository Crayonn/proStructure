import { take } from 'redux-saga/effects';

function* watchLogger(getState) {

  while (true) {
    const action = yield take('*');

    console.log('action', action);
    console.log('state after', getState());
  }
}

export default watchLogger;