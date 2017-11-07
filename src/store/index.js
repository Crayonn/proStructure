import customCreateStore from './createStore';
import sagas from './sagas';
import getReducer from './reducer';

export default function configStore(navReducer) {

  return customCreateStore(getReducer(navReducer), sagas);
}