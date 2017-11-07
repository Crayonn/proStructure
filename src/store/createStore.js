import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

//调试方法
//1.安装react-native-debugger  (brew update && brew cask install react-native-debugger)
//2.打开react-native-debugger (open "rndebugger://set-debugger-loc?host=localhost&port=8081") -> redux-devtools
//3.打开react-devtools (command+D--> click Tooggle Inspector) -> 就可以在 react-native-debugger上调试react-native

export default function customCreateStore(rootReducer, rootSaga, rootInitialState = {}) {
  const sagaMiddleware = createSagaMiddleware(rootSaga)
    , middlewares = [sagaMiddleware];

  const composedEhancers = [applyMiddleware(...middlewares)];
  if (__DEV__) {
    composedEhancers.push(window.devToolsExtension ? window.devToolsExtension() : (f) => f);
  }
  const rootEnhancer = compose(...composedEhancers);

  const store = createStore(rootReducer, rootInitialState, rootEnhancer);

  const io = {
    getState: store.getState,
    dispatch: store.dispatch,
    subscribe: store.subscribe,
  };

  const sagaManager = sagaMiddleware.run(rootSaga, io);

  return { store, sagaManager, sagaMiddleware, io };
}
