import { createReducer } from 'reduxsauce';
import { Types, NameSpace } from './actions';

const initialState = {
  name: 'name',
  password: 'password',
};

const reducer = createReducer(
  initialState,
  {
    [Types.VALUE_CHANGED](state, { key, value }) {
      return { ...state, [key]: value };
    }
  }
);

export default { [NameSpace]: reducer };
