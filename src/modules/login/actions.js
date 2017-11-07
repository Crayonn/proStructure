import { createActions } from 'reduxsauce';

const NameSpace = 'login';

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: ['error'],
  requestWithDefaultValues: { username: 'guest', password: null },
  logout: null,
  custom: (a, b) => ({ type: 'CUSTOM', total: a + b })
}, { prefix: `${NameSpace}/` });

export default Creators;

export {
  Types,
  NameSpace
};