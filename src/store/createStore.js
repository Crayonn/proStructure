import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function (reducer, saga, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware(saga)
    , enhancer = compose(applyMiddleware(sagaMiddleware));

  const store = createStore(reducer, initialState, enhancer);

  sagaMiddleware.run(saga);

  return store;
}
