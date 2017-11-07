import { combineReducers } from 'redux';
import login from '../modules/login/reducer';

export default function getReducer(navReducer) {
  return combineReducers(Object.assign(
    { nav: navReducer },
    login
  ));
};