import customCreateStore from './createStore';
import sagas from './sagas';
import getReducer from './reducer';

export default function configStore(navReducer) {
  const { store, sagaManager, sagaMiddleware, io } = customCreateStore(getReducer(navReducer), sagas);

  if (__DEV__ && module.hot) {
    module.hot.accept(() => {
      const nextGetReducer = require('./reducer').default
        , nextRootReducer = nextGetReducer(navReducer);
      store.replaceReducer(nextRootReducer);

      const nextRootSaga = require('./sagas').default;
      sagaManager.cancel();
      sagaManager.done.then(() => {

        sagasManager = sagaMiddleware.run(nextRootSaga, io);
      });

    });
  }

  return store;
}

