import { createReducer } from 'reduxsauce';

export const initialState = { aaa: 1 };


export const handers = {
  ['GOODS_SUCCESS'](state, action) {
    return state;
  },
  ['GOODS_FAILURE'](state, action) {
    return state;
  }
}

export default createReducer(initialState, handers);