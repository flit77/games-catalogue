// We import Redux and Redux-saga dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reducers';

// The function in charge of creating and returning the store of the app
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  // The store is created with a reducer parameter and the saga middleware
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  // rootSaga starts all the sagas in parallel
  sagaMiddleware.run(rootSaga);

  return store; // Return the state
};
export default configureStore;
