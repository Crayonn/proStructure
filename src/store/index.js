import customCreateStore from './createStore';
import rootSaga from './sagas';
import rootReducer from './reducer';

export default function configStore() {
  const { store, sagaManager, sagaMiddleware, io } = customCreateStore(rootReducer, rootSaga);

  if (__DEV__ && module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer').default;
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

