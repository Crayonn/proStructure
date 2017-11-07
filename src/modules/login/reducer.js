import { createReducer } from 'utils/redux_utils';
import * as types from './consts';

export const initialState = {
  name: '',
  password: '',
  token: '',
  loginPending: false,
  logoutPending: false,
};

export const nameSapce = types.nameSapce;
export default createReducer(
  initialState,
  {
    [types.VALUE_CHANGED](state, { key, value }) {
      return { ...state, [key]: value };
    },

    [types.LOGIN_REQUEST.start](state) {

      return { ...state, loginPending: true };
    },

    [types.LOGIN_REQUEST.success](state, { response: { token } }) {

      return { ...state, token, loginPending: false };
    },

    [types.LOGIN_REQUEST.failed](state) {

      return { ...state, loginPending: false };
    },

    [types.LOGOUT_REQUEST.start](state) {

      return { ...state, logoutPending: true };
    },

    [types.LOGOUT_REQUEST.success](state) {

      return { ...state, token: '', logoutPending: false };
    },

    [types.LOGOUT_REQUEST.failed](state) {

      return { ...state, logoutPending: false };
    },
  }
);



