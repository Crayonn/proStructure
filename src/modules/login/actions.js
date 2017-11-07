import { createActions } from 'reduxsauce';

const NameSpace = 'login';

const { Types, Creators } = createActions({

  valueChanged: ['key', 'value'],

}, { prefix: `${NameSpace}/` });

export default Creators;

export {
  Types,
  NameSpace
};