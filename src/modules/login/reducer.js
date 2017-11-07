import { createReducer } from 'reduxsauce';
import { Types, NameSpace } from './actions';

const initialState = {
  name: 'name',
  password: 'password',
};

const reducer = createReducer(
  initialState,
  {

  }
);

export default { [NameSpace]: reducer };
