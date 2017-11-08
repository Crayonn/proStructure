import { combineReducers } from 'redux';
import recycleState from 'redux-recycle';
import { reducer as reduxFormReducer } from 'redux-form';

import loginReducer, { nameSapce as login, initialState as loginInitialState } from '../modules/login/reducer';

const resetableloginReducer = recycleState(loginReducer, ['RESET_LOGIN'], (state, action) => {
  //return newState according to state,action,loginInitialState
  return loginInitialState;
});

export default combineReducers({
  form: reduxFormReducer,
  [login]: resetableloginReducer,
});