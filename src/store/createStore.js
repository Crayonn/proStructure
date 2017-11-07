import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function customCreateStore(appReducer, appSaga, appInitialState = {}) {
  const sagaMiddleware = createSagaMiddleware(appSaga)
    , enhancer = compose(applyMiddleware(sagaMiddleware));

  const store = createStore(appReducer, appInitialState, enhancer);

  const io = {
    getState: store.getState,
    dispatch: store.dispatch,
    subscribe: store.subscribe
  };

  sagaMiddleware.run(appSaga, io);

  return store;
}
