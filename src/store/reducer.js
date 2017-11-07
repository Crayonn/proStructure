import { combineReducers } from 'redux';

export default function getReducer(navReducer) {
  return combineReducers({
    nav: navReducer
  });
}