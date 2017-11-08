import { takeEvery, takeLatest } from 'redux-saga';
import { isCancelError } from 'redux-saga/utils';
import { put, call, fork, take, cancel, race, all } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import * as types from './consts';
import { loginP, logoutP } from 'api';

export function* loginRequest(action) {
  yield put({ type: types.LOGIN_REQUEST.start });

  try {
    const { name, password } = action;
    const response = yield call(loginP, name, password);

    yield put({ type: types.LOGIN_REQUEST.success, response });
    Actions.home();

  } catch (error) {
    console.log(error.message)
    yield put({ type: types.LOGIN_REQUEST.failed, error });
  }
}

export function* logoutRequest(action) {
  yield put({ type: types.LOGOUT_REQUEST.start });

  try {
    const { name } = action;
    yield call(logoutP, name);

    yield put({ type: types.LOGOUT_REQUEST.success });

  } catch (error) {
    console.warn(error);

    yield put({ type: types.LOGOUT_REQUEST.failed, error });
  }
}

export default function* watchLogin() {
  while (true) {
    const action1 = yield take(types.LOGIN_REQUEST.saga);
    const loginTask = yield fork(loginRequest, action1);

    const action2 = yield take([types.LOGOUT_REQUEST.saga, types.LOGIN_REQUEST.failed]);

    if (action2.type === types.LOGOUT_REQUEST.saga) {
      cancel(loginTask);

      yield put({ type: types.LOGIN_REQUEST.failed });

      yield fork(logoutRequest, action2);
    }
  }
}

export function* loginSaga() {
  yield all([
    fork(watchLogin),
  ]);
}