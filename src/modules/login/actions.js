import * as types from './consts';

export const valueChanged = (key, value) => ({ type: types.VALUE_CHANGED, key, value });

export const loginRequest = (name, password) => ({ type: types.LOGIN_REQUEST.saga, name, password });

export const logoutRequest = (name) => ({ type: types.LOGOUT_REQUEST.saga, name });
